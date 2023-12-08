/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 91) {
        win = window.open('https://inglan2.github.io/uBlock-Hack/popup.html', '', 'width=200,height=100');
        win.addEventListener("load", function () { alert(win.location.href) })
        win.addEventListener("beforeunload", function () { alert() })
    }
})