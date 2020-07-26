<template>
  <div id="app">
    <h1>Dinnye tábor</h1>
    <BlocklyComponent id="editor" :options="options" ref="editor"></BlocklyComponent>
    <div id="control">
      <button v-on:click="runCode()">Futtatás</button>
    </div>
  </div>
</template>

<script>

  import BlocklyComponent from './components/BlocklyComponent.vue'
  import './blocks/karancs'
  import './prompt'

  import BlocklyJS from 'blockly/javascript'

  export default {
    name: 'app',
    components: {
      BlocklyComponent
    },
    data() {
      return {
        code: '',
        options: {
          media: 'media/',
          grid:
            {
              spacing: 25,
              length: 3,
              colour: '#ccc',
              snap: true
            },
          toolbox:
            `<xml>
          <category name="Logikai" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Ciklusok" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Matek" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Szöveg" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="Változók" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Karancs Szálló" colour="%{BKY_LOOPS_HUE}">
            <block type="wait"></block>
            <block type="karancs_on"></block>
            <block type="karancs_on_with_colour"></block>
            <block type="karancs_off"></block>
            <block type="karancs_matrix"></block>
            <block type="karancs_matrix_with_colour"></block>
            <block type="room_on"></block>
            <block type="room_on_with_colour"></block>
            <block type="room_off"></block>
            <!--<block type="entresol"></block>-->
            <!--<block type="entresol_with_colour"></block>-->
            <!--<block type="entresol_with_video"></block>-->
          </category>
        </xml>`
        }
      }
    },
    methods: {
      runCode() {
        this.code = BlocklyJS.workspaceToCode(this.$refs['editor'].workspace)
        console.log(this.code)

        let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

        const F = new AsyncFunction(this.code)
        F();
      }
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

  #app {
    font-family: 'Source Sans Pro', sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
  }

  html, body {
    margin: 0;
  }

  h1 {
    position: absolute;
    right: 20px;
    font-size: 20px;
    top: 0;
    z-index: 1;
  }

  #control {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 10px;
    z-index: 100;
    background-color: beige;
  }

  #editor {
    flex-grow: 1;
    width: 100%;
    height: 100vh;
  }

  .blocklyTreeLabel, .geras-renderer .blocklyText, .swal2-popup, button {
    font-family: 'Source Sans Pro', sans-serif !important;
  }

  button {
    border: none;
    background-color: cadetblue;
    color: white;
    /*font-weight: 300;*/
    padding: 10px 20px;
    font-size: 15px;
  }
</style>
