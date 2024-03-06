// 전체 페이지 공통
const get  = target  => document.querySelector(target);
const getAll  = target  => document.querySelectorAll(target);
const navi = () => {
    let $gnbli = getAll('#header .nav .gnb > li');
    let $header = get('#header');
    console.log( $gnbli)
    $gnbli.forEach( (item, idx )=> {
        item.addEventListener('mouseenter', e => {
            $header.classList.add('on');
        })
    })
    $header.addEventListener('mouseleave', e => {
        $header.classList.remove('on');
    })
}//end nav

/* -------- 약관팝업 -------- */
const popup  = ()  => {
    let $bg = get('.privacy_bg');
    let $popup = get('.privacy_popup');
    let $close = get('.privacy_popup .privacy_close');
    let $btnAll = getAll('.privacy_btn');
    const show = () => {
        $bg.classList.add('on');
        $popup.classList.add('on');
        console.log('hi')
}
    const hide = () => {
        $bg.classList.remove('on');
        $popup.classList.remove('on');
    }
    $btnAll.forEach( item => {
        item.addEventListener('click', show)
    })
    if ($bg) {
        $bg.addEventListener('click', hide);
    }
    
    if ($close) {
        $close.addEventListener('click', hide);
    }
}//end popup


/* -------- 퀵메뉴 -------- */
const quick = () => {
    let $quick = get('#quick');
    let $cbtn = get('#quick .close');
    let $cbtni = get('#quick .close i');
    let isplay = null;

    $cbtn.addEventListener('click', e => {
        isplay = $quick.classList.contains('on'); //클래스 on유무
        console.log(isplay)
        if (isplay) {
            // $quick.classList.remove('on');
            $cbtni.classList.replace('xi-angle-left', 'xi-angle-right');
        } else {
            // $quick.classList.add('on');
            $cbtni.classList.replace('xi-angle-right', 'xi-angle-left');
        }
        $quick.classList.toggle('on');
    })
} //end quick



const comInit = ()  => {
    const loadPage  = (page, tag ) => {
        fetch(page)
        .then(res => {
        return res.text()
        })
        .then(data => {
            get( tag ).innerHTML = data;
            navi();
            // familySite();
            popup();

        });
    }
    loadPage("page/header.html", 'header');
    loadPage("page/footer.html", 'footer');
    // popup();
    quick();
}

;( () => {
    comInit();

})();