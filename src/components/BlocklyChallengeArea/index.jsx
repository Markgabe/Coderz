/* eslint-disable no-alert */
import React, { useEffect, useState, useRef } from 'react';
import Blockly from 'blockly';

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
  StyledButton
} from './styles';

export default function BlocklyChallengeArea() {
  const [outputArea, setOutputArea] = useState();
  const [stepButton, setStepButton] = useState();
  const [latestCode, setLatestCode] = useState('');
  const [workspace, setWorkspace] = useState(null);
  const blocklyDiv = useRef(null);

  let interpreter;
  let hasMoreCode;
  let highlightPause;

  useEffect(() => {
    setWorkspace(Blockly.inject(blocklyDiv.current, { toolbox: jsonToolbox }));
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
    }
  }, [workspace]);

  function highlightBlock(id) {
    workspace.highlightBlock(id);
    highlightPause = true;
  }

  function resetStepUi(clearOutput) {
    workspace.highlightBlock(null);
    highlightPause = false;

    if (clearOutput) {
      outputArea.innerHTML = 'Saída do programa:<br>=================';
    }
  }
  function runCode() {
    resetStepUi(true);
    interpreter = new Interpreter(latestCode, initApi);
    interpreter.run();
    outputArea.innerHTML += '<br><br><< Fim da execução >>';
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
          outputArea.innerHTML += '<br><br><< Fim da execução >>';
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
        outputArea.innerHTML += `<br>${arguments.length ? text : ''}`;
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

  return (
    <Container>
      <BlocklyArea>
        <BlocklyDiv id='blocklyDiv' ref={blocklyDiv} />
        <OutputArea
          id="output"
          readonly
        />
      </BlocklyArea>
      <xml id='toolbox' style={{ display: 'none' }} />
      <Menu>
        <ChallengeInfo>
          <div>
            <p>Soma de gastos</p>
            <h6>Gerais - Nível 2</h6>
          </div>
          <h4>+230XP</h4>
        </ChallengeInfo>
        <ButtonGroup>
          <StyledButton
            id="stepButton"
            onClick={() => stepCode()}
          >
            <p>Rodar passo</p>
          </StyledButton>
          <StyledButton
            onClick={(e) => {
              runCode();
            }}
          >
            <p>Executar</p>
          </StyledButton>
          <StyledButton
            onClick={(e) => {
              outputArea.innerHTML = latestCode;
            }}
          >
            <p>Enviar</p>
          </StyledButton>
        </ButtonGroup>
      </Menu>
    </Container>
  );
}
