javascript:(function () {
    function performClicks() {
        var e = (s) => document.evaluate(s, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        var c = (e) => { if (e) e.click(); };
        c(e("/html/body/div[1]/div[2]/div[1]/div[1]/div/div[2]/div/div/div/div[2]/div[2]/div/div/div[1]/main/form/div/div[2]/button/div"));
        setTimeout(() => {
            c(e("/html/body/div[1]/div[2]/div[1]/div[4]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[3]/label/input"));
            setTimeout(() => {
                c(e("/html/body/div[1]/div[2]/div[1]/div[4]/div[2]/div/div/div[2]/div[2]/button/div"));
                setTimeout(() => {
                    c(e("/html/body/div[2]/div[2]/div[1]/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[1]/main/div[1]/div/div/ol/li/div/div[2]/div/div/div/button[1]/div/div/div"));
                    setTimeout(() => {
                        c(e(" "));
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }
    performClicks();
})();
