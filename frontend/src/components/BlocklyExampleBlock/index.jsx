import React, { useEffect } from 'react';
import Blockly from 'blockly';

import { Container } from './styles';

function BlockExampleBlock() {
  useEffect(() => {
    Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
    });
  }, []);

  return (
    <Container>
      <div id='blocklyDiv' style={{ height: 480, width: 400 }} />
      <xml id='toolbox' style={{ display: 'none' }}>
        <block type='controls_if' />
        <block type='controls_repeat_ext' />
        <block type='logic_compare' />
        <block type='math_number' />
        <block type='math_arithmetic' />
        <block type='text' />
        <block type='text_print' />
      </xml>
    </Container>
  );
}

export default BlockExampleBlock;
