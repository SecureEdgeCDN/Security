

(function() {
    var threshold = 160;
    setInterval(function() {
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            window.location.reload();
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
 console.log("Clear");
