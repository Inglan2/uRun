window.addEventListener(
    "message",
    (event) => {
        alert()
    },
    false,
);

function openWin() {
    win = window.open('', '', 'width=200,height=100');
    win.document.write(`
        <button onclick="window.opener.postMessage('e')">sus</button>
    `)
}

document.querySelector("body").outerHTML = "<button onclick='openWin()'></button>"