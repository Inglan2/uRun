/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 91) {
        eval(prompt("code to eval:"));
    }
  })