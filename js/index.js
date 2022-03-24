(function () {

    DG.then(function () {
        const map = DG.map('map', {
            center: [54.96812, 73.38274],
            zoom: 20
        });

        DG.marker([54.96812, 73.38274]).addTo(map);
    });

})()
