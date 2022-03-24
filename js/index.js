(function () {

    document.querySelector('#background').style.height = window.outerWidth + 'px'

    DG.then(function () {
        DG.map('map', {
            center: [54.98, 82.89],
            zoom: 13
        });
    });

})()