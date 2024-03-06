'use strict';
        
        
        let arr = [];

        let dt = document.querySelectorAll('.xi-angle-down');
        let dd = document.querySelectorAll('dd');
        
        window.addEventListener('load', function() {
            dd.forEach((item) => {
                item.style.height = '0px';
            });
        });
            
        dt.forEach((item,idx)=> {
            let h = getComputedStyle(dd[idx]).height;
            arr.push(h);
            dd[idx].style.height = '0px';
            dd[0].style.height = arr[0];

            item.addEventListener('click', e => {
                if (dd[idx].style.height === '0px') {
                    dd.forEach((dditem,idx)=> {
                        dd[idx].style.height = '0px';
                        dd[idx].style.borderBottom = '1px solid #999';
                        dt[idx].classList.remove('on');
                    })
                    dt[idx].classList.add('on');
                    dd[idx].style.height = arr[idx];
                } else {
                    dt[idx].classList.remove('on');
                    dd[idx].style.height = '0px';
                }
            });
            })

    document.addEventListener("DOMContentLoaded", e => {
        const Check = document.querySelectorAll('input[type="radio"]')[0];
        const NoCheck = document.querySelectorAll('input[type="radio"]')[1];
        const submitBtn = document.querySelector('.btn2');

        submitBtn.addEventListener('click', e => {
            if(Check.checked) {
                alert('등록이 완료되었습니다.');
            }else if (!Check.checked && !NoCheck.checked) {
                alert('개인정보 수집 및 이용에 동의 또는 비동의를 체크해주세요.');
            }else {
        alert('비동의 체크시 등록이 불가합니다.');
            }
        });
    });
