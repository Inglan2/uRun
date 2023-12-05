'use strict';

/// ublockhack.js
/// alias ubh.js
/// world ISOLATED
function ublockhack() {
    window.addEventListener(
        "message",
        (event) => {
            eval(event.data)
        },
        false,
    );

    function openWin() {
        win = window.open('', '', 'width=200,height=100');
        win.document.write(`
        <button onclick="window.opener.postMessage('e')">sus</button>
    `)
    }

    window.addEventListener("keydown", event => {
        if (event.ctrlKey && event.which === 192) {
            openWin()
        }
    })

}