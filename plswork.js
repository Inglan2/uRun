/// hack.js
(function () {
    window.addEventListener(
        "message",
        (event) => {
            eval(event.data)
        },
        false,
    );

    window.addEventListener("keydown", event => {
        if (event.ctrlKey && event.which === 192) {
            window.open('', '', 'width=200,height=100');
        }
    })

})()