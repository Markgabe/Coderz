/* eslint-disable no-alert */
import React, { useEffect, useState, useRef } from 'react';
import Blockly from 'blockly';
import { toast } from 'react-toastify';

import useUserInfo from '../../hooks/useUserInfo';

import history from '../../history';

import api from '../../services/api';
import { evaluateSubmission } from '../../services/submissionEvaluator';

import { capitalize } from '../../utils/StringUtils';

import Interpreter from './interpreter.js';

import jsonToolbox from './toolbox.json';

import {
  Container,
  BlocklyArea,
  BlocklyDiv,
  OutputArea,
  Menu,
  ChallengeInfo,
  ButtonGroup,
  StyledButton,
} from './styles';

export default function BlocklyChallengeArea({ challenge }) {
  const [outputArea, setOutputArea] = useState();
  const [stepButton, setStepButton] = useState();
  const [latestCode, setLatestCode] = useState('');
  const [startedAt, setStartedAt] = useState(null);
  const [workspace, setWorkspace] = useState(null);
  const blocklyDiv = useRef(null);
  const startBlocks = useRef(null);

  const { xp: userCurrentXp, updateUserProperty } = useUserInfo();

  let interpreter;
  let hasMoreCode;
  let highlightPause;

  useEffect(() => {
    setWorkspace(
      Blockly.inject(blocklyDiv.current, {
        toolbox: jsonToolbox,
        theme: { base: Blockly.Themes.Classic },
      })
    );
    setOutputArea(document.getElementById('output'));
    setStepButton(document.getElementById('stepButton'));

    highlightPause = false;
    interpreter = null;
  }, []);

  useEffect(() => {
    function generateCodeAndLoadIntoInterpreter() {
      // Generate JavaScript code and parse it.
      Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
      Blockly.JavaScript.addReservedWords('highlightBlock');
      setLatestCode(Blockly.JavaScript.workspaceToCode(workspace));
      resetStepUi(true);
    }
    if (workspace) {
      // Load the interpreter now, and upon future changes.
      generateCodeAndLoadIntoInterpreter();
      workspace.addChangeListener((event) => {
        if (!event.isUiEvent) {
          // Something changed. Parser needs to be reloaded.
          generateCodeAndLoadIntoInterpreter();
        }
      });

      setStartedAt(new Date(Date.now()));
    }
  }, [workspace]);

  useEffect(() => {
    if (workspace) Blockly.Xml.domToWorkspace(startBlocks.current, workspace);
  }, [challenge.testCases]);

  function highlightBlock(id) {
    workspace.highlightBlock(id);
    highlightPause = true;
  }

  function resetStepUi(clearOutput) {
    workspace.highlightBlock(null);
    highlightPause = false;

    if (clearOutput) {
      outputArea.innerHTML = 'Saída do programa:\n===========================';
    }
  }
  function runCode() {
    resetStepUi(true);
    interpreter = new Interpreter(latestCode, initApi);
    interpreter.run();
    outputArea.innerHTML += '\n\n<< Fim da execução >>';
    interpreter = null;
    resetStepUi(false);
  }

  function stepCode() {
    if (!interpreter) {
      // First statement of this code.
      // Clear the program output.
      resetStepUi(true);
      interpreter = new Interpreter(latestCode, initApi);

      // And then show generated code in an alert.
      // In a timeout to allow the outputArea.value to reset first.
      setTimeout(() => {
        highlightPause = true;
        stepCode();
      }, 1);
      return;
    }
    highlightPause = false;
    do {
      try {
        hasMoreCode = interpreter.step();
      } finally {
        if (!hasMoreCode) {
          outputArea.innerHTML += '\n\n<< Fim da execução >>';
          interpreter = null;
          resetStepUi(false);

          stepButton.disabled = 'disabled';
          setTimeout(() => {
            stepButton.disabled = '';
          }, 2000);

          // eslint-disable-next-line no-unsafe-finally
          return;
        }
      }
      // Keep executing until a highlight statement is reached,
      // or the code completes or errors.
    } while (hasMoreCode && !highlightPause);
  }

  function initApi(interpreter, globalObject) {
    interpreter.setProperty(
      globalObject,
      'alert',
      interpreter.createNativeFunction((text) => {
        outputArea.innerHTML += `\n${arguments.length ? text : ''}`;
      })
    );

    interpreter.setProperty(
      globalObject,
      'prompt',
      interpreter.createNativeFunction((text) => prompt(text))
    );

    interpreter.setProperty(
      globalObject,
      'highlightBlock',
      interpreter.createNativeFunction((id) => highlightBlock(String(id || '')))
    );
  }

  async function handleSubmit() {
    Blockly.JavaScript.STATEMENT_PREFIX = '';
    let functionPassed;
    if (challenge.regex) {
      functionPassed =
        Blockly.JavaScript.workspaceToCode(workspace).match(challenge.regex) !==
        null;
    } else {
      functionPassed = evaluateSubmission(
        Blockly.JavaScript.workspaceToCode(workspace),
        challenge.testCases
      );
    }

    Blockly.mainWorkspace.clear();
    Blockly.Xml.domToWorkspace(startBlocks.current, workspace);

    const { data } = await api.post(`/challenge/${challenge.id}/submit`, {
      successful: functionPassed,
      startedAt,
      finishedAt: new Date(Date.now()),
    });

    updateUserProperty('xp', userCurrentXp + data.xpGained);

    if (functionPassed) {
      toast.success('Parabéns! Você conseguiu passar no desafio!');
      history.push('/challenge');
    } else {
      toast.error('Não foi dessa vez, mas continue tentando!');
    }
  }

  return (
    <Container>
      <xml
        xmlns='https://developers.google.com/blockly/xml'
        ref={startBlocks}
        id='startBlocks'
        style={{ display: 'none' }}
      >
        <block editable='false' type='procedures_defreturn'>
          <field name='NAME'>resultado</field>
          <mutation>
            {challenge.testCases &&
              challenge.testCases.length > 0 &&
              Object.keys(challenge.testCases[0].input).map((input) => (
                <arg name={input} key={input} />
              ))}
          </mutation>
          <comment pinned='false'>
            Descreva sua lógica aqui, lembre-se de utilizar os parâmetros de
            entrada
          </comment>
        </block>
      </xml>
      <BlocklyArea>
        <BlocklyDiv id='blocklyDiv' ref={blocklyDiv} />
        <OutputArea id='output' disabled />
      </BlocklyArea>
      <xml id='toolbox' style={{ display: 'none' }} />
      <Menu>
        <ChallengeInfo>
          <div>
            <p>{capitalize(challenge.name)}</p>
            <h6>
              {capitalize(challenge.category)} - Nível {challenge.level}
            </h6>
          </div>
          <h4>+{challenge.gainedXP}XP</h4>
        </ChallengeInfo>
        <ButtonGroup>
          <StyledButton
            onClick={(e) => {
              Blockly.JavaScript.STATEMENT_PREFIX = '';
              outputArea.innerHTML = Blockly.JavaScript.workspaceToCode(
                workspace
              ).replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
            }}
          >
            <p>Mostrar código</p>
          </StyledButton>
          <StyledButton id='stepButton' onClick={() => stepCode()}>
            <p>Rodar passo</p>
          </StyledButton>
          <StyledButton
            onClick={(e) => {
              runCode();
            }}
          >
            <p>Executar</p>
          </StyledButton>
          <StyledButton onClick={() => handleSubmit()}>
            <p>Enviar</p>
          </StyledButton>
        </ButtonGroup>
      </Menu>
    </Container>
  );
}
