import React, { useEffect, useState } from 'react';
import Blockly from 'blockly';

import jsonToolbox from './toolbox.json';

import {
  Container,
  BlocklyDiv,
  Menu,
  ChallengeInfo,
  SubmitButton,
} from './styles';

export default function BlocklyChallengeArea() {
  const [workspace, setWorkspace] = useState();
  useEffect(() => {
    setWorkspace(
      Blockly.inject('blocklyDiv', {
        toolbox: jsonToolbox,
      })
    );
  }, []);

  return (
    <Container>
      <BlocklyDiv id='blocklyDiv' />
      <xml id='toolbox' style={{ display: 'none' }} />
      <Menu>
        <ChallengeInfo>
          <div>
            <p>Soma de gastos</p>
            <h6>Gerais - Nível 2</h6>
          </div>
          <h4>+230XP</h4>
        </ChallengeInfo>
        <SubmitButton
          onClick={(e) => {
            Blockly.JavaScript.addReservedWords('code');
            const code = Blockly.JavaScript.workspaceToCode(workspace);
            console.log(code);
          }}
        >
          <p>Enviar</p>
        </SubmitButton>
      </Menu>
    </Container>
  );
}
