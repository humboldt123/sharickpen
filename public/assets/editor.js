/***
 * @name editor
 * @description script for sharickpen editor
 * @author humboldt123
 * @updated 3/30/2021
 */

const editor = ace.edit("editor");
const stdout = ace.edit("stdout");

editor.setOptions({
   showPrintMargin: false,
   theme: "ace/theme/tomorrow_night",
   mode: "ace/mode/javascript",
   fontFamily: "Scientifica",
   fontSize: 18,
   useWorker: false
});

stdout.setOptions({
   showPrintMargin: false,
   readOnly: true,
   showGutter: false,
   fontFamily: "Scientifica",
   fontSize: 18,
   theme: "ace/theme/twilight",
   mode: "ace/mode/text"
});

editor.insert(`// Below is a simple "Hello World" program written in Sharick++\n// Press the green run button to see it come to life\n// Read the docs with the purple button\n\nConsole.WriteLine("Hello, World!");`);
stdout.insert(`Sharickpen [Version 1.0.0]\n(c) 2021 Humboldt123. MIT License`);

/**
 * Runs code in the 'editor' code box and prints the output in the 'stdout' code box
 */
function run() {
    fetch(`./run?code=${btoa(editor.getValue())}`).then(result => result.text()).then(out => stdout.setValue(out));
}