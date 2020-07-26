import * as Blockly from 'blockly/core';

// set light bulb color block

Blockly.Blocks['set_light_bulb_color'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set light bulb color to")
      .appendField(new Blockly.FieldColour("#ff0000"), "colour");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("sets light bulb color");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['set_light_bulb_color'] = function(block) {
  var colour = block.getFieldValue('colour');
  var code = `setLightBulbColour('${colour}');\n`;
  return code;
};


// turn light bulb block

Blockly.Blocks['turn_light_bulb'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turn light bulb")
      .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "state");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("turns on the light bulb");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['turn_light_bulb'] = function(block) {
  var state = block.getFieldValue('state');
  var code = `turnLightBulb('${state}');\n`;
  return code;
};