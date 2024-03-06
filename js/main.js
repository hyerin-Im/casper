//메인비주얼
(() => {
    const $pagingli = getAll('#mainVisual .paging li');
    const $bannerli = getAll('#mainVisual .visual li');
    const $next = get('#mainVisual .btn-wrap .next');
    const $prev = get('#mainVisual .btn-wrap .prev');
    const $play = get('#mainVisual .auto i:last-child');
    const $stop = get('#mainVisual .auto i:first-child');
    let current = 0,
        old = 0,
        size = 100,
        totalImage = $bannerli.length,
        timer = null,
        interval = 5000;

    $pagingli.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            current = idx;
            banner('next');
        });
    });

    $next.addEventListener('click', (e) => {
        current = current >= totalImage - 1 ? 0 : current + 1;
        banner('next');
    });
    $prev.addEventListener('click', (e) => {
        current = current <= 0 ? totalImage - 1 : current - 1;
        banner('prev');
    });
    function banner(txt) {
        let num = txt === 'next' ? size : -size;
        $bannerli[current].style.transition = '0s';
        $bannerli[current].style.left = `${num}%`;

        setTimeout(() => {
            $bannerli[current].style.transition = '0.4s';
            $bannerli[current].style.zIndex = '10';
            $bannerli[current].style.left = '0px';
            $bannerli[current].classList.add('on');
            $pagingli[current].classList.add('on');
            $bannerli[old].style.zIndex = '1';
            $bannerli[old].style.left = `${num * -1}%`;
            $bannerli[old].classList.remove('on');
            $pagingli[old].classList.remove('on');
            old = current;
        }, 20);
    }
})();

// 슬라이드
(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const leftBtn = document.querySelector('.leftBtn');
        const rightBtn = document.querySelector('.rightBtn');
        const cont1 = document.querySelector('.cont1');

        leftBtn.addEventListener('click', function () {
            const firstItem = cont1.firstElementChild;
            cont1.appendChild(firstItem);
        });

        rightBtn.addEventListener('click', function () {
            const lastItem = cont1.lastElementChild;
            cont1.prepend(lastItem);
        });
    });
})();

// 슬라이드2
(() => {
    document.addEventListener('DOMContentLoaded', (e) => {
        const carousel = document.querySelector('.cont.first1');
        const carItems = carousel.querySelectorAll('.car_item');
        const totalWidth = carItems[0].offsetWidth;
        let currentIndex = 0;

        carousel.style.overflow = 'hidden';

        const slideImages = () => {
            carItems[currentIndex].style.transform = `translateX(${-totalWidth}px)`;
            console.log(carItems[currentIndex]);

            setTimeout(() => {
                carItems[currentIndex].style.transform = `translateX(0)`;
                currentIndex = (currentIndex + 1) % carItems.length;
                carousel.appendChild(carItems[currentIndex]);
            }, 0.1);
        };

        setInterval(slideImages, 3000);
    });
})();

// 팝업
(() => {
    window.onload = () => {
        document.getElementById('myModal').style.display = 'block';
    };
    const images = [
        'url(images/popup0.png)',
        'url(images/popup1.png)',
        'url(images/popup2.png)',
        'url(images/popup3.png)',
    ];
    let currentImageIndex = 0;
    const modalContent = document.getElementById('modalContent');

    const bgImg = () => {
        modalContent.style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
        setTimeout(bgImg, 2000);
    };

    window.onload = () => {
        document.getElementById('myModal').style.display = 'block';
        bgImg();
    };
})();

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let currentIndex = 0;
        const images = ['images/casper.jpg', 'images/casper2.jpg', 'images/casper3.jpg'];
        const textArray = [
            '여유로운 운전을 위한 카파 1.0터보 엔진',
            '어디서나 거침없이 2WD 험로주행모드',
            '안정적인 주행 17인치 전용 휠',
        ];

        const leftButton = document.getElementById('leftButton');
        const rightButton = document.getElementById('rightButton');
        const imageElements = document.querySelectorAll('.part1');
        const textElements = document.querySelectorAll('.pText');

        const updateContent = () => {
            imageElements[0].src = images[currentIndex];
            imageElements[1].src = images[(currentIndex + 1) % images.length];
            imageElements[2].src = images[(currentIndex + 2) % images.length];

            textElements[0].textContent = textArray[currentIndex];
            textElements[1].textContent = textArray[(currentIndex + 1) % textArray.length];
            textElements[2].textContent = textArray[(currentIndex + 2) % textArray.length];
        };

        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateContent();
        });

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateContent();
        });

        updateContent();
    });
})();

// 팝업

window.onload = () => {
    document.getElementById('myModal').style.display = 'block';
};
const images = ['url(images/popup0.png)', 'url(images/popup1.png)', 'url(images/popup2.png)', 'url(images/popup3.png)'];
let currentImageIndex = 0;
const modalContent = document.getElementById('modalContent');

function bgImg() {
    modalContent.style.backgroundImage = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    setTimeout(bgImg, 2000);
}

window.onload = function () {
    document.getElementById('myModal').style.display = 'block';
    bgImg();
};

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = ['images/casper.jpg', 'images/casper2.jpg', 'images/casper3.jpg'];
    const textArray = [
        '여유로운 운전을 위한 카파 1.0터보 엔진',
        '어디서나 거침없이 2WD 험로주행모드',
        '안정적인 주행 17인치 전용 휠',
    ];

    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');
    const imageElements = document.querySelectorAll('.part1');
    const textElements = document.querySelectorAll('.pText');

    function updateContent() {
        imageElements[0].src = images[currentIndex];
        imageElements[1].src = images[(currentIndex + 1) % images.length];
        imageElements[2].src = images[(currentIndex + 2) % images.length];

        textElements[0].textContent = textArray[currentIndex];
        textElements[1].textContent = textArray[(currentIndex + 1) % textArray.length];
        textElements[2].textContent = textArray[(currentIndex + 2) % textArray.length];
    }

    leftButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent();
    });

    rightButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent();
    });

    updateContent();
});

let idx = 0;
const elements = document.querySelectorAll('.first');
elements.forEach((element) => {
    element.style.display = 'none';
});

function showElement() {
    elements.forEach((e) => {
        e.style.display = 'none';
    });
    e[idx].style.display = 'block';
    idx = (idx + 1) % e.length;
}

showElement();

setInterval(showElement, 2000);

// document.addEventListener('DOMContentLoaded', function () {
//   let contents = document.querySelectorAll('.content');
//   contents.forEach(function (content) {
//       content.addEventListener('click', function () {
//           let mainDiv = document.querySelector('.cont');
//           let mainImg = mainDiv.querySelector('img');
//           let clickedDiv = content;
//           let clickedImg = clickedDiv.querySelector('img').src;

//           let mainContent = mainDiv.querySelector('.three');
//           let mainContentHTML = mainContent.innerHTML;
//           let clickedContent = clickedDiv.querySelector('.content_con1');
//           let clickedContentHTML = clickedContent.innerHTML;

//           mainDiv.querySelector('.bgImg').innerHTML = `<img src="${clickedImg}" alt="">`;
//           mainImg.src = clickedDiv.querySelector('img').src;

//           mainContent.innerHTML = clickedContentHTML;
//           clickedContent.innerHTML = mainContentHTML;
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.addEventListener('click', function () {
            var mainDiv = document.querySelector('.cont');
            var mainImg = mainDiv.querySelector('img');
            var clickedDiv = content;
            var clickedImg = clickedDiv.querySelector('img').src;

            var mainContent = mainDiv.querySelector('.three');
            var mainContentHTML = mainContent.innerHTML;
            var clickedContent = clickedDiv.querySelector('.content_con1');
            var clickedContentHTML = clickedContent.innerHTML;

            mainDiv.querySelector('.bgImg').innerHTML = `<img src="${clickedImg}" alt="">`;
            mainImg.src = clickedDiv.querySelector('img').src;

            mainContent.innerHTML = clickedContentHTML;
            clickedContent.innerHTML = mainContentHTML;
        });
    });
});
// 메인 스