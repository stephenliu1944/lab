System.register([], function(_export, _context) {
    var dependency = 'doDep from dep.js';

    _export('doDep', function() {
        return dependency;
    });

    return {
        execute: function(){}
    }
});