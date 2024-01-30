/// ublockhack.js
(function () {
    document.addEventListener("keydown", function (e) {
      if (e.ctrlKey && "`" === e.key) {
        var t = window.open("", "_blank", "width=300,height=300");
        t.onload = function () {
          var e = t.document.createElement("iframe");
          (e.src = "//inglan2.github.io/uBlock-Hack/popup.html"),
            (e.style.cssText = "width:100%; height:100%; border:none;"),
            t.document.body.appendChild(e),
            t.addEventListener("message", function (e) {
              e.data.toString().startsWith("javascript:") && (location = e.data);
            });
        };
      }
    });
  })();
  
