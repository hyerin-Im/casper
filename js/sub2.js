(() => {
    let arr = [];

    let dt = document.querySelectorAll('dt');
    let dd = document.querySelectorAll('dd');

    window.addEventListener('load', () => {
        dd.forEach((item) => {
            item.style.height = '0px';
        });
    });

    dt.forEach((item, idx) => {
        let h = getComputedStyle(dd[idx]).height;
        arr.push(h);
        console.log(h);
        dd[idx].style.height = '0px';
        dd[0].style.height = arr[0];

        item.addEventListener('click', (e) => {
            if (dd[idx].style.height === '0px') {
                dd.forEach((dditem, index) => {
                    dd[index].style.height = '0px';
                    dt[index].classList.remove('on');
                    dt[index].querySelector('i').classList.remove('xi-angle-up');
                    dt[index].querySelector('i').classList.add('xi-angle-down');
                    dt[index].querySelector('i').style.marginLeft = '210px';
                });
                dt[idx].classList.add('on');
                dt[idx].querySelector('i').classList.remove('xi-angle-down');
                dt[idx].querySelector('i').classList.add('xi-angle-up');
                dt[idx].querySelector('i').style.marginLeft = '210px';
                dd[idx].style.height = arr[idx];
            } else {
                dt[idx].classList.remove('on');
                dt[idx].querySelector('i').classList.remove('xi-angle-up');
                dt[idx].querySelector('i').classList.add('xi-angle-down');
                dt[idx].querySelector('i').style.marginLeft = '210px';
                dd[idx].style.height = '0px';
            }
        });
    });

    // 탭

    document.addEventListener("DOMContentLoaded", (e) => {
        let casperBtn = document.querySelector('.title button:nth-child(1)');
        let casperVanBtn = document.querySelector('.title button:nth-child(2)');
        let delite = document.querySelectorAll('.top_detail, .top_detail_1, .top_detail_2, .top_detail_3:nth-child(0), .top_detail_4:nth-child(0), .top_detail_5:nth-child(0)');
        let produce = document.querySelectorAll('.top_detail_6, .top_detail_7, .top_detail_8 top_detail_9, .top_detail_10');

        let isHiddenCasper = true;
        let isHiddenCasperVan = true;

        casperBtn.addEventListener('click', (e) => {
            if (isHiddenCasper) {
                delite.forEach((e) => {
                    e.style.display = 'block';
                });
            }

            isHiddenCasper = false;
            isHiddenCasperVan = true;

            casperBtn.classList.add('on');
            casperVanBtn.classList.remove('on');
        });

        casperVanBtn.addEventListener('click', (e) => {
            if (isHiddenCasperVan) {
                delite.forEach((element) => {
                    element.style.display = 'none';
                });
                produce.forEach((e) => {
                    e.style.display = 'block';
                });
            }

            isHiddenCasperVan = false;
            isHiddenCasper = true;

            casperVanBtn.classList.add('on');
            casperBtn.classList.remove('on');
        });
    });
})();


    document.addEventListener("DOMContentLoaded", (e) => {
        let casperBtn = document.querySelector('.title button:nth-child(1)');
        let casperVanBtn = document.querySelector('.title button:nth-child(2)');
        let delite = document.querySelectorAll('.top_detail, .top_detail_1, .top_detail_2, .top_detail_3:nth-child(0), .top_detail_4:nth-child(0), .top_detail_5:nth-child(0)');
        let produce = document.querySelectorAll('.top_detail_6, .top_detail_7, .top_detail_8 top_detail_9, .top_detail_10');

        let isHiddenCasper = true;
        let isHiddenCasperVan = true;

        casperBtn.addEventListener('click', (e) => {
            if (isHiddenCasper) {
                delite.forEach((e) => {
                    e.style.display = 'block';
                });
            }

            isHiddenCasper = false;
            isHiddenCasperVan = true;

            casperBtn.classList.add('on');
            casperVanBtn.classList.remove('on');
        });

        casperVanBtn.addEventListener('click', (e) => {
            if (isHiddenCasperVan) {
                delite.forEach((element) => {
                    element.style.display = 'none';
                });
                produce.forEach((e) => {
                    e.style.display = 'block';
                });
            }

            isHiddenCasperVan = false;
            isHiddenCasper = true;

            casperVanBtn.classList.add('on');
            casperBtn.classList.remove('on');
        });
    });




const subInit = ()  => {
    subText();
    subVisual();
    eventBanner();
}


// inquiry 서브 페이지 시작
;( () => {
    window.addEventListener('load', e => {
        subInit();
    })    


    let arr = [];
    
    let dt = document.querySelectorAll('.xi-angle-down');
    let dd = document.querySelectorAll('dd');

    window.addEventListener('load', () => {
        dd.forEach((item) => {
            item.style.height = '0px';
        });
    });

    dt.forEach((item, idx) => {
        let h = getComputedStyle(dd[idx]).height;
        arr.push(h);
        dd[idx].style.height = '0px';
        dd[0].style.height = arr[0];

        item.addEventListener('click', (e) => {
            if (dd[idx].style.height === '0px') {
                dd.forEach((dditem, idx) => {
                    dd[idx].style.height = '0px';
                    dd[idx].style.borderBottom = '1px solid #999';
                    dt[idx].classList.remove('on');
                });
                dt[idx].classList.add('on');
                dd[idx].style.height = arr[idx];
            } else {
                dt[idx].classList.remove('on');
                dd[idx].style.height = '0px';
            }
        });
    });

    document.addEventListener("DOMContentLoaded", (e) => {
        const Check = document.querySelectorAll('input[type="radio"]')[0];
        const NoCheck = document.querySelectorAll('input[type="radio"]')[1];
        const submitBtn = document.querySelector('.btn2');

        submitBtn.addEventListener('click', (e) => {
            if (Check.checked) {
                alert('등록이 완료되었습니다.');
            } else if (!Check.checked && !NoCheck.checked) {
                alert('개인정보 수집 및 이용에 동의 또는 비동의를 체크해주세요.');
            } else {
                alert('비동의 체크시 등록이 불가합니다.');
            }
        });
    });
})();
