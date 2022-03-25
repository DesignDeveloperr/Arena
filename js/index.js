(function () {

    DG.then(function () {
        const map = DG.map('map', {
            center: [54.96812, 73.38274],
            zoom: 20
        });

        DG.marker([54.96812, 73.38274]).addTo(map).bindLabel('Мы здесь!', {
            static: true
        });

        const coordinates = [[54.9691, 73.383239], [54.9683, 73.38358], [54.96824, 73.383229]];

        const polyline = DG.polyline(coordinates, {
            color: 'red'
        }).addTo(map);

        map.fitBounds(polyline.getBounds());
    });

    const images = document.querySelectorAll('img')
    for (const img of images) {
        if (img.src.includes('bird.svg')) {
            img.addEventListener('mouseover', (event) => {
                event.target.src = location.href + 'img/colored_bird.svg'
            }, {passive: true})
            img.addEventListener('mouseout', (event) => {
                event.target.src = location.href + 'img/bird.svg'
            }, {passive:true})
        }

        if (img.src.includes('light.svg')) {
            img.addEventListener('mouseover', (event) => {
                event.target.src = location.href + 'img/colored_light.svg'
            }, {passive: true})
            img.addEventListener('mouseout', (event) => {
                event.target.src = location.href + 'img/light.svg'
            }, {passive:true})
        }
    }

})()
