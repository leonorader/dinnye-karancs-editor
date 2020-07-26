import * as Blockly from 'blockly/core';

// turn each room off

Blockly.Blocks['karancs_off'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("karancs ki");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("lekapcsolja az összes ablakot");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['karancs_off'] = function(block) {
  return 'setHotelColour(\'#000\');\n';
};

// turn each room on

Blockly.Blocks['karancs_on'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("karancs be");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("bekapcsolja az összes ablakot - fehér");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['karancs_on'] = function(block) {
  return 'setHotelColour(\'#fff\');\n';
};

// set each room to the same colour

Blockly.Blocks['karancs_on_with_colour'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("karancs be színnel")
      .appendField(new Blockly.FieldColour("#ffcc33"), "karancs-colour");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['karancs_on_with_colour'] = function(block) {
  var colour_karancs_colour = block.getFieldValue('karancs-colour');
  return `setHotelColour(\'${colour_karancs_colour}\');\n`;
};

// set rooms on/off with matrix

Blockly.Blocks['karancs_matrix'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("karancs beállít");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-0")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-0-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-0")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-1-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-0")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-2-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-0")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-3-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-0")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-4-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-0")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-5-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-0")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "room-6-7");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['karancs_matrix'] = function(block) {
  let data = [];
  for (let i = 0; i < 7; i++) {
    let floor = [];
    for (let j = 0; j < 8; j++) {
      const room = block.getFieldValue(`room-${i}-${j}`) === 'TRUE' ? '#fff' : '#000';
      floor.push(room);
    }
    data.push(floor);
  }
  return `setHotelMatrix(\'${JSON.stringify(data)}\');\n`;
};

//

Blockly.Blocks['karancs_matrix_with_colour'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("karancs beállít színnel");
    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-0")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-1")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-2")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-3")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-4")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-5")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-6")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-0-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-0")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-1")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-2")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-3")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-4")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-5")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-6")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-1-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-0")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-1")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-2")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-3")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-4")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-5")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-6")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-2-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-0")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-1")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-2")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-3")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-4")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-5")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-6")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-3-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-0")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-1")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-2")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-3")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-4")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-5")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-6")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-4-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-0")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-1")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-2")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-3")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-4")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-5")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-6")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-5-7");
    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-0")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-1")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-2")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-3")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-4")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-5")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-6")
      .appendField(new Blockly.FieldColour("#ffcc66"), "room-6-7");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['karancs_matrix_with_colour'] = function(block) {
  let data = [];
  for (let i = 0; i < 7; i++) {
    let floor = [];
    for (let j = 0; j < 8; j++) {
      const room = block.getFieldValue(`room-${i}-${j}`);
      floor.push(room);
    }
    data.push(floor);
  }
  return `setHotelMatrix(\'${JSON.stringify(data)}\');\n`;
};

// wait

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("karancs várj")
      .appendField(new Blockly.FieldNumber(0, 0, 60000), "duration")
      .appendField("ms-ot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['wait'] = function(block) {
  var number_duration = block.getFieldValue('duration');
  return `wait(\'${number_duration}\');\n`;
};

// room off

Blockly.Blocks['room_off'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("szoba ki");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["1.","6"], ["2.","5"], ["3.","4"], ["4.","3"], ["5.","2"], ["6.","1"], ["7.","0"]]), "floor")
      .appendField("emelet");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["1.","0"], ["2.","1"], ["3.","2"], ["4.","3"], ["5.","4"], ["6.","5"], ["7.","6"], ["8.","7"]]), "room")
      .appendField("szoba");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['room_off'] = function(block) {
  var dropdown_floor = block.getFieldValue('floor');
  var dropdown_room = block.getFieldValue('room');
  return `setRoomColour(${dropdown_floor}, ${dropdown_room}, \'#000\');\n`;
};

// room on

Blockly.Blocks['room_on'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("szoba be");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["1.","6"], ["2.","5"], ["3.","4"], ["4.","3"], ["5.","2"], ["6.","1"], ["7.","0"]]), "floor")
      .appendField("emelet");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["1.","0"], ["2.","1"], ["3.","2"], ["4.","3"], ["5.","4"], ["6.","5"], ["7.","6"], ["8.","7"]]), "room")
      .appendField("szoba");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['room_on'] = function(block) {
  var dropdown_floor = block.getFieldValue('floor');
  var dropdown_room = block.getFieldValue('room');
  return `setRoomColour(${dropdown_floor}, ${dropdown_room}, \'#fff\');\n`;
};

// room on with colour

Blockly.Blocks['room_on_with_colour'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("szoba be színnel")
      .appendField(new Blockly.FieldColour("#ffcc33"), "colour");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["1.","6"], ["2.","5"], ["3.","4"], ["4.","3"], ["5.","2"], ["6.","1"], ["7.","0"]]), "floor")
      .appendField("emelet");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["1.","0"], ["2.","1"], ["3.","2"], ["4.","3"], ["5.","4"], ["6.","5"], ["7.","6"], ["8.","7"]]), "room")
      .appendField("szoba");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['room_on_with_colour'] = function(block) {
  var colour_colour = block.getFieldValue('colour');
  var dropdown_floor = block.getFieldValue('floor');
  var dropdown_room = block.getFieldValue('room');
  return `setRoomColour(${dropdown_floor}, ${dropdown_room}, \'${colour_colour}\');\n`;
};

// entresol
//
// Blockly.Blocks['entresol'] = {
//   init: function() {
//     this.appendDummyInput()
//       .appendField("félemelet beállít");
//     this.appendDummyInput()
//       .setAlign(Blockly.ALIGN_CENTRE)
//       .appendField(new Blockly.FieldCheckbox("TRUE"), "window-1")
//       .appendField(new Blockly.FieldCheckbox("TRUE"), "window-2")
//       .appendField(new Blockly.FieldCheckbox("TRUE"), "window-3")
//       .appendField(new Blockly.FieldCheckbox("TRUE"), "window-4");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(210);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.JavaScript['entresol'] = function(block) {
//   var checkbox_window_1 = block.getFieldValue('window-1') == 'TRUE';
//   var checkbox_window_2 = block.getFieldValue('window-2') == 'TRUE';
//   var checkbox_window_3 = block.getFieldValue('window-3') == 'TRUE';
//   var checkbox_window_4 = block.getFieldValue('window-4') == 'TRUE';
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };
//
// // entresol with colour
//
// Blockly.Blocks['entresol_with_colour'] = {
//   init: function() {
//     this.appendDummyInput()
//       .appendField("félemelet beállít színnel");
//     this.appendDummyInput()
//       .setAlign(Blockly.ALIGN_CENTRE)
//       .appendField(new Blockly.FieldColour("#ffcc66"), "window-1")
//       .appendField(new Blockly.FieldColour("#ffcc66"), "window-2")
//       .appendField(new Blockly.FieldColour("#ffcc66"), "window-3")
//       .appendField(new Blockly.FieldColour("#ffcc66"), "window-4");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(210);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.JavaScript['entresol_with_colour'] = function(block) {
//   var colour_window_1 = block.getFieldValue('window-1');
//   var colour_window_2 = block.getFieldValue('window-2');
//   var colour_window_3 = block.getFieldValue('window-3');
//   var colour_window_4 = block.getFieldValue('window-4');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };
//
// // entresol with video
//
// Blockly.Blocks['entresol_with_video'] = {
//   init: function() {
//     this.appendDummyInput()
//       .appendField("félemelet videó");
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldDropdown([["1.","window-0"], ["2.","window-1"], ["3.","window-3"]]), "window")
//       .appendField("ablak");
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldTextInput("https://www.youtube.com/watch?v=Hx9YMDsp5wI"), "link");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(210);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.JavaScript['entresol_with_video'] = function(block) {
//   var dropdown_window = block.getFieldValue('window');
//   var text_link = block.getFieldValue('link');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };