/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 91) {
        window.open('https://inglan2.github.io/uBlock-Hack/popup.html', '', 'width=200,height=100');
        window.addEventListener(
            "message",
            (event) => {
                eval(event.data)
            },
            false,
        );
        }
  })