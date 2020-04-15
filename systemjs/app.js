System.register(['http://localhost:8080/dep.js'], function(_export, _context) {
    var s;

    _export('doConsole', function() {
        console.log("doConsole from app.js");
    });

    return {
        setters: [function(dep) {
            s = dep.doDep();
        }],
        execute: function() {
            var p = document.createElement('p');
            p.innerHTML = s;
            document.body.appendChild(p);

            _export('doAlert', doAlert);

            function doAlert() {
                alert("doAlert from app.js");
            }
        }
    }
})