(function () {

    const config = {
        images: [
            {
                url: 'img/standart.webp',
                title: 'Основной зал',
                text: 'Включает в себя 50 игровых машин, с актуальными комплектующими и современными девайсами. На этих пк вы можете вместе с друзьями поиграть в самые популярные кооперативные и сетевые игры со всеми удобствами и отличным погружением в игровой процесс.'
            },
            {
                url: 'img/bootcamp.webp',
                title: 'BOOTCAMP',
                text: 'Отдельные залы. Именно сюда ты можешь привести всю свою команду и тренировать скилл с более высоким уровнем погружения и удобной коммуникацией! И ничего не сможет отвлечь вас от игрового процесса! Ведь в каждом этом зале находятся по 5 машин. Они рассчитаны на то, чтобы команда могла полностью сосредоточиться на игре. Незабываемые ощущения и эмоции. Удовольствие от любых игр вам обеспечены!\n' +
                    'Но и не стоит забывать, что в виртуальном мире один в поле тоже воин! Одному тебе ничто не помешает получить эмоции от игр и окунуться в свою атмосферу.'
            },
            {
                url: 'img/premium.webp',
                title: 'ARENA PREMIUM',
                text: 'Максимальное погружение в домашнюю, ламповую атмосферу. Полноценные эмоции от ультра настроек графики при высокой производительности. Все это выбирают настоящие профессионалы киберспортивных дисциплин. Окунись в новую реальность в ARENA PREMIUM. Топовое железо, самые современные девайсы от HyperX, самая уникальная атмосфера в сочетании с высоким комфортом! Чтобы по настоящему проникнуться этой атмосферой необходимо просто попробовать.'
            }
        ]
    }

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

    document.querySelector('#date').innerHTML = document.querySelector('#date').innerHTML.replace('{{date}}', new Date().getFullYear().toString())

    let currentIndex = 0

    const updateImages = currentIndex => {
        document.querySelector('#photo_first').src = config.images[currentIndex].url
        document.querySelector('#photo_second').src = config.images[currentIndex + 1 === config.images.length ? 0 : currentIndex + 1].url
        document.querySelector('#photo_last').src = config.images[currentIndex - 1 < 0 ? config.images.length - 1 : currentIndex - 1].url
        document.querySelector('#photo_first_mobile').src = config.images[currentIndex].url
        document.querySelector('#photo_title').innerHTML = config.images[currentIndex].title
        document.querySelector('#photo_text').innerHTML = config.images[currentIndex].text
    }
    document.querySelector('#photo_second').onclick = () => updateImages(currentIndex = currentIndex === config.images.length - 1 ? 0 : currentIndex + 1)
    document.querySelector('#photo_last').onclick = () => updateImages(currentIndex = currentIndex - 1 < 0 ? config.images.length - 1 : currentIndex - 1)
    document.querySelector('#nextPhoto').onclick = () => updateImages(currentIndex = currentIndex === config.images.length - 1 ? 0 : currentIndex + 1)
    document.querySelector('#prevPhoto').onclick = () => updateImages(currentIndex = currentIndex - 1 < 0 ? config.images.length - 1 : currentIndex - 1)
    updateImages(currentIndex)
})()
