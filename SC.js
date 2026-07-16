(function() {
    var devtools = /./;
    devtools.toString = function() {
        this.opened = true;
    };
    
    setInterval(function() {
        var before = new Date().getTime();
        debugger;
        var after = new Date().getTime();
        if (after - before > 100) {
            document.body.innerHTML = "Access Denied!";
        }
    }, 1000);
})();

(function () {

    document.querySelectorAll('link[rel="stylesheet"]').forEach(e => e.remove());

    document.querySelectorAll("style").forEach(e => e.remove());
    document.querySelectorAll("*").forEach(el => {
        el.removeAttribute("style");
        el.removeAttribute("class");
        el.removeAttribute("id");
    });
    new MutationObserver(mutations => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (
                    node.tagName === "STYLE" ||
                    (node.tagName === "LINK" && node.rel === "stylesheet")
                ) {
                    node.remove();
                }
            });
        });
    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();
 // console.log("Clear");
