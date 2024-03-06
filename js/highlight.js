(() => {
    const con = getAll('.con-box');
    const menuLi = getAll('#menu ul li');
    const vid = get('.highlightVid video');
    const span = get('.highlightVid span');
    const changeButtons = getAll('.changeBtn');
    const buttons = getAll('.tGleBtn');
    const safe = get('.safeVid');
    const svid = get('.safeVid video');
    const sIcon = get('.safeVid span');

    let ty = 950,
        old = 0,
        posY = [];

    // 원페이지_스크롤
    for (let i = 0; i < con.length; i++) {
        posY.push(con[i].offsetTop);
    }
    console.log(posY);

    window.addEventListener('scroll', (e) => {
        let t = window.scrollY;
        // tTop
        for (let i = 0; i < menuLi.length; i++) {
            if (t >= posY[i]) {
                menuLi[old].classList.remove('on');
                menuLi[i].classList.add('on');
                old = i;
            }
        }
    });

    menuLi.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            ty = posY[idx];
            if (idx === 0) {
                ty = 950;
            }
            console.log(ty);

            menuLi.forEach((mItem) => {
                mItem.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            window.scrollTo({ top: ty, behavior: 'smooth' });
        });
    });
    // 스크롤끝

    //슬라이드
    var list = document.querySelector('.slide_wrapper1 .slides .list'),
        slide = document.querySelectorAll('.slide_wrapper1 .slides .list li'),
        currentIdx = 0,
        slideCount = slide.length,
        preveBtn = document.querySelector('.slide_wrapper1 .prev'),
        slideWidth = 400,
        slideMargin = 20,
        nextBtn = document.querySelector('.slide_wrapper1 .next');

    list.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    function moveSlide(num) {
        list.style.left = -num * 420 + 'px';
        currentIdx = num;
    }

    nextBtn.addEventListener('click', function () {
        if (currentIdx < slideCount - 3) {
            moveSlide(currentIdx + 1);
        } else {
            moveSlide(0);
        }
    });

    preveBtn.addEventListener('click', function () {
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        } else {
            moveSlide(slideCount - 3);
        }
    });
    //슬라이드

    // highlightvideo_play
    span.addEventListener('click', (e) => {
        // 버튼 사라짐
        span.classList.add('on');
        // 영상재생
        vid.play();
    });
    //영상 클릭하면 버튼보이고 영상멈충

    vid.addEventListener('click', (e) => {
        span.classList.remove('on');
        vid.pause();
    });

    //colorbtn bgchange

    changeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const color = button.getAttribute('data-color');
            const image = button.getAttribute('data-image');
            const section = button.closest('.con3');
            const textColor = button.getAttribute('data-text-color');

            section.style.backgroundColor = color;
            section.style.backgroundImage = `url(${image})`;

            const textOutsideDiv = section.querySelector('.front');
            textOutsideDiv.style.color = textColor;
        });
    });

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // 이전에 활성화된 버튼에 대한 'active' 클래스를 제거
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            // 현재 클릭한 버튼에 'active' 클래스를 추가
            this.classList.add('active');
        });
    });

    sIcon.addEventListener('click', (e) => {
        sIcon.classList.add('on');
        svid.play();
    });

    svid.addEventListener('click', (e) => {
        sIcon.classList.remove('on');
        svid.pause();
    });
})();
