/* ***********************************************************
 * 신경아 : 캐스퍼구매안내, 내차만들기, 이벤트, 공지사항, 퀵메뉴
 ************************************************************ */

// const xx = () => {
//     let xx = document.querySelector('태그명');
//     console.log(xx)
//     if (xx) {
//         내용
//     }
// }



/* -------- notice -------- */
const notice = () => {
    let notice = document.querySelector('.notice');
    if (notice) {
// 더보기 눌렀을 때 이미지 3개씩 24개까지 보이게 설정
let arr = ["", "", "", "", "현대카드 서비스 일시 중단 안내 (9/30)", "10월 초저금리 프로모션", "CASPER 전용카드 신차 구매 혜택", "현대카드 서비스 일시 중단 안내 (9/30)", "캐스퍼 크루 추천 프로그램 시즌2 ", "그린카 X CASPER 2시간 무료 시승", "캐스퍼 X 운전결심 운전 고수 되기 프로젝트", "현대자동차 워런티 플러스", "CASPER STUDIO 해운대 23년 12월까지 연장", "SOCAR 누구나 2시간 무료 시승", "중고차 견적에 추가 보상금을 더 드려요!", "캐스퍼 그리기 대회 당선작 발표", "월간 캐스퍼 10월 : 단풍 with 캐스퍼", "캐스퍼 고객 감사 이벤트", "10월 초저금리 프로모션", "CASPER 전용카드 신차 구매 혜택", "CASPER 전용카드 블루 세이브-오토 혜택", "캐스퍼 크루 추천 프로그램 시즌2", "그린카 X CASPER 2시간 무료 시승", "캐스퍼 X 운전결심 운전 고수 되기 프로젝트", "현대자동차 워런티 플러스"];
let date = ["", "", "", "", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23 ", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23", "2023-10-23"];
let cont = ["", "", "", "", "CASPER 전용카드 신차 구매 혜택", "CASPER 전용카드 신차 구매 혜택", "CASPER 전용카드 신차 구매 혜택", "본인확인 웹 서비스 시스템 작업으로 인해 NICE 본인확인 서비스 사용이 일시 중단될 예정입니다.", "캐스퍼 크루 추천 프로그램 시즌2 ", "그린카 X CASPER 2시간 무료 시승", "캐스퍼 X 운전결심 운전 고수 되기 프로젝트", "현대자동차 워런티 플러스", "CASPER STUDIO 해운대 23년 12월까지 연장", "SOCAR 누구나 2시간 무료 시승", "중고차 견적에 추가 보상금을 더 드려요!", "캐스퍼 그리기 대회 당선작 발표", "월간 캐스퍼 10월 : 단풍 with 캐스퍼", "캐스퍼 고객 감사 이벤트", "10월 초저금리 프로모션", "CASPER 전용카드 신차 구매 혜택", "CASPER 전용카드 블루 세이브-오토 혜택", "캐스퍼 크루 추천 프로그램 시즌2", "그린카 X CASPER 2시간 무료 시승", "캐스퍼 X 운전결심 운전 고수 되기 프로젝트", "현대자동차 워런티 플러스"];
document.querySelector('.morebtn').addEventListener('click', e => {
    e.preventDefault();
    const ul = document.querySelector('.notice .image_board');
    let cnt = ul.querySelectorAll('li').length + 1;
    for (let i = 0; i < 3 && cnt <= 24; i++) {
        const li = document.createElement('li');
        li.innerHTML = `

        <a href="#">
                            <div class="date">${date[cnt]}</div>
                            <div class="desc"><div class="title">${arr[cnt]}</div>
                            <div class="cont">${cont[cnt]}</div>
                                </div>
                            </a>

`;
        ul.appendChild(li);
        cnt++;
    }
    if (cnt > 24) {
        document.querySelector('.morebtn').style.display = 'none';
    }
})
    };


}//end notice


/* -------- tabMenu -------- */
const tabMenu = () => {
       // 탭메뉴
       const tabList = document.querySelectorAll('.tab_menu .list li');
       const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
       let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)
      
       for (var i = 0; i < tabList.length; i++) {
           tabList[i].querySelector('.btn').addEventListener('click', function(e) {
               e.preventDefault();
               for (var j = 0; j < tabList.length; j++) {
                   // 나머지 버튼 클래스 제거
                   tabList[j].classList.remove('is_on');
                   // 나머지 컨텐츠 display:none 처리
                   contents[j].style.display = 'none';
               }
               // 버튼 관련 이벤트
               this.parentNode.classList.add('is_on');
               // 버튼 클릭시 컨텐츠 전환
               activeCont = this.getAttribute('href');
               document.querySelector(activeCont).style.display = 'block';
           });
       }
}//end tabMenu



/* -------- event -------- */
const eventPage = () => {
    let eventPage = document.querySelector('.event');
    if (eventPage) {
                    // 더보기 눌렀을 때 이미지 3개씩 24개까지 보이게 설정
                    let arr = ["", "", "", "", "캐스퍼 고객 감사 이벤트", "10월 초저금리 프로모션", "CASPER 전용카드 신차 구매 혜택", "CASPER 전용카드 블루 세이브-오토 혜택", "캐스퍼 크루 추천 프로그램 시즌2 ", "그린카 X CASPER 2시간 무료 시승", "캐스퍼 X 운전결심 운전 고수 되기 프로젝트", "현대자동차 워런티 플러스", "CASPER STUDIO 해운대 23년 12월까지 연장", "SOCAR 누구나 2시간 무료 시승", "중고차 견적에 추가 보상금을 더 드려요!", "캐스퍼 그리기 대회 당선작 발표", "월간 캐스퍼 10월 : 단풍 with 캐스퍼", "캐스퍼 고객 감사 이벤트", "10월 초저금리 프로모션", "CASPER 전용카드 신차 구매 혜택", "CASPER 전용카드 블루 세이브-오토 혜택", "캐스퍼 크루 추천 프로그램 시즌2", "그린카 X CASPER 2시간 무료 시승", "캐스퍼 X 운전결심 운전 고수 되기 프로젝트", "현대자동차 워런티 플러스"];
                    let date = ["", "", "", "", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26 ", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26", "2023-11-01 ~ 2023-11-26"];
                    // let tab = document.querySelector('.event .tab_menu .list li a');
                    document.querySelector('.morebtn').addEventListener('click', e => {
                        e.preventDefault();
                        const ul = document.querySelector('.event .image_board');
                        let cnt = ul.querySelectorAll('li').length + 1;
                        for (let i = 0; i < 3 && cnt <= 24; i++) {
                            const li = document.createElement('li');
                            li.innerHTML = `
            <a href="board_detail.html" target="_self">
                <p class="img_wrap"><img src="images/img_event${cnt}.jpg" alt=""></p>
                <div>
                    <p class="title"><b>${arr[cnt]}</b></p>
                    <p class="info"><span>모든회원</span><span class="num">${date[cnt]}</span></p>
                </div>
            </a>
        `;
                            ul.appendChild(li);
                            cnt++;
                        }
                        if (cnt > 24) {
                            document.querySelector('.morebtn').style.display = 'none';
                        }
                        tab.addEventListener('click', e => {
            location.reload();})

                       
                     }); }    
}//end event





const Accordion = () => {
    let Accordion = document.querySelector('.purchase_guide');
    if (Accordion) {
        let dt = document.querySelectorAll('.purchase_guide dt');
                                let dd = document.querySelectorAll('.purchase_guide dd');
                                let arr = [];


                                dt.forEach((item, idx) => {
                                    let h = getComputedStyle(dd[idx]).height;
                                    arr.push(h);
                                    console.log(arr);
                                    dd[idx].style.height = '0px';
                                    // dd[0].style.height = arr[0];

                                    item.addEventListener('click', (e) => {
                                        dd.forEach((ddItem, index) => {
                                            dd[index].style.height = '0px';
                                            dt[index].classList.remove('on');
                                        });
                                        dt[idx].classList.add('on');
                                        dd[idx].style.height = arr[idx];
                                    });
                                });
    }
}


// 트림선택
let trimNum = 0;

function getRadioText(event) {
    const radioId = event.target.id;
    const query = 'label[for="' + radioId + '"]';
    const text = document.querySelector(query).innerText;
    document.getElementById('trim_result').innerHTML = text;
    const trim = document.getElementsByClassName("trim");
    for (let i = 0; i < trim.length; i++) {
        if (trim[i].checked) {
            trimNum += parseInt(trim[i].value);
        }
    }
    document.getElementById('trimNum').innerHTML = event.target.value;
}

//옵션선택
let optionNum = 0;

function calc() {
    const option = document.getElementsByClassName("option");
    // 추가내용 
    let option_result = '';
    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            optionNum += parseInt(option[i].value);
            option_result += document.querySelector('label[for="' + option[i].id + '"]').innerText + '<br>';

        }
    }
    document.getElementById("optionNum").innerHTML = optionNum;
    document.getElementById("option_result").innerHTML = option_result.slice(0, -1);
    optionNum = 0;
}


//컬러선택
let colorNum = 0;

function calc1() {
    const color = document.getElementsByClassName("color");
    // 추가내용 
    let color_result = '';
    for (let i = 0; i < color.length; i++) {
        if (color[i].checked) {
            colorNum += parseInt(color[i].value);
            color_result += document.querySelector('label[for="' + color[i].id + '"]').innerText;
        }
    }
    document.getElementById("colorNum").innerText = colorNum;
    document.getElementById("color_result").innerText = color_result;
    colorNum = 0;
}
// 총합
function add() {
    var num1 = document.getElementById("trimNum");
    var num2 = document.getElementById("optionNum");
    var num3 = document.getElementById("colorNum");
    var add = parseInt(num1.innerText) + parseInt(num2.innerText) + parseInt(num3.innerText); // 두 수의 합을 구하기
    total.value = add.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+'원';
    
    document.getElementById("total").innerText = add;
}//end 

/* -------- 하이라이트 con5 슬라이드 -------- */
const con5slide = () => {
    let con5slide = document.querySelector('.highlight');

    if (con5slide) {
        let list = document.querySelector('.highlight .con5 .slide_wrapper .slides .list'),
        slide = document.querySelectorAll('.highlight .con5 .slide_wrapper .slides .list li'),
        currentIdx = 0,
        slideCount = slide.length,
        preveBtn = document.querySelector('.highlight .con5 .slide_wrapper .prev'),
        slideWidth = 400,
        slideMargin =20,
        nextBtn = document.querySelector('.highlight .con5 .slide_wrapper .next');
    
        list.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';
    
        function moveSlide(num){
            list.style.left= -num * 420 +'px';
            currentIdx = num;
        }
    
        nextBtn.addEventListener('click', function(){  
          if(currentIdx < slideCount - 4){
            moveSlide(currentIdx + 1);
          }else{
            moveSlide(0);
          }
        });
    
        preveBtn.addEventListener('click', function(){
          if(currentIdx > 0 ){
            moveSlide(currentIdx - 1);
          }else{
            moveSlide(slideCount - 4);
          }
        });
    }
}



const galleryGallery = () => {
    let galleryGallery = document.querySelector('.highlight');

    if (galleryGallery) {
        const $bg = get('.highlight .bg');
        const $total = get('.highlight .popup-gallery .gallelry-header .total-img ');
        const $close = get('.highlight .popup-gallery .gallelry-header .close');
        const $next = get('.highlight .popup-gallery .gallelry-body .next');
        const $prev = get('.highlight .popup-gallery .gallelry-body .prev');
        const $more = get('.more .btn');
        const $popup = get('.highlight .popup-gallery');
        const $list = get('.highlight .galley_box .list');
        let imgurl = '', current = 0, bimg = '', totalImage = 6, cnt = 0;




        const showImg = () => {
            //if~까지만
            if (cnt > totalImage - 1) return; //0부터니까 24-1 -> totalImage
            for (let i = 0; i < 6; i++) {
                const li = document.createElement('li');
                const img = document.createElement('img');
                imgurl = `images/exterior_0${cnt}.jpg`;

                // img.setAttribute('src', 'images/photo'+cnt+'.jpg'); //cnt로 i로 하면 사진 여덟개만 반복
                img.setAttribute('src', imgurl);
                img.setAttribute('data-id', cnt); //내가 알아 볼 수 있는 말로 cnt 여덟개 다음 9 10 11이렇게 하려고?
                // img.setAttribute('id',cnt);
                // img.id=cnt; 이 둘 다 쓸 수는 있지만 좋지 않은 방법!!
                li.append(img);
                $list.append(li);
                cnt++;
            }
        }
        //화면에 사진 보이기 - 더보기 + 8
        showImg();

        const $li = getAll('.highlight .galley_box .list li');
        $li.forEach((item, idx) => {
            item.addEventListener('click', e => {
                current = idx;
                //이 방식은 많이 해봄
            })
        })

        const banner = () => {
            $total.innerHTML = `image
    <span>${current + 1}</span> of
    <strong>${totalImage}</strong>`;
            imgurl = `images/exterior_0${current}.jpg`
            bimg.setAttribute('src', imgurl)
            bimg.animate([{ opacity: 0 }, { opacity: 1 }], 300);
        }

        //아래처럼 만들 수 있구나 li를 클릭해서 forEach안돌려도 아래처럼 짤 수 있겠구나~ 방식을 바꿈
        $list.addEventListener('click', e => {
            let el = e.target; //타겟이 되면 이미지를 클릭
            current = Number(el.dataset.id);
            $bg.classList.add('show');
            $popup.classList.add('show');
            // bimg = get('.highlight .popup-gallery .gallelry-body img')
            bimg = $popup.querySelector('img');

            banner();

        })

        //총개수 부분은 innerHTML
        $next.addEventListener('click', e => {
            //current++ => current = current +1이니까 ++로 쓰면 안됨
            //totalImage를 쓰면 사진 24개가 다 나오니깐 cnt로 써야함
            // current=current>=totalImage-1 ? 0 : current+1;
            current = current >= cnt - 1 ? 0 : current + 1;
            banner();
        })
        $prev.addEventListener('click', e => {
            current = current <= 0 ? cnt - 1 : current - 1;
            banner();
        })
        $more.addEventListener('click', e => {
            showImg()
        })
        $close.addEventListener('click', e => {
            $popup.classList.remove('show');
            $bg.classList.remove('show');
        })
        $bg.addEventListener('click', e => {
            $popup.classList.remove('show');
            $bg.classList.remove('show');
        })
    }
}





const promotion = () => {
    let xx = document.querySelector('.promotion');

    if (promotion) {
        const filter1Radios = document.querySelectorAll('input[name="filter1"]');
        const filter2Radios = document.querySelectorAll('input[name="filter2"]');
        const filter3Checkboxes = document.querySelectorAll('#filter3 input[name="filter3"]');
        const filter4Checkboxes = document.querySelectorAll('#filter4 input[name="filter4"]');
        const filter5Checkboxes = document.querySelectorAll('#filter5 input[name="filter5"]');
        const data = document.querySelectorAll('.car_item');
        const filteredData = document.getElementById('data');
        const resetButton = document.getElementById('reset-button');
        const noResultsMessage = '검색 결과가 없습니다.';
    
        // 필터링 함수
        function filterData() {
            const selectedFilter1 = Array.from(filter1Radios).find(radio => radio.checked).value;
            const selectedFilter2 = Array.from(filter2Radios).find(radio => radio.checked).value;
            const selectedFilter3Values = Array.from(filter3Checkboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
            const selectedFilter4Values = Array.from(filter4Checkboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
            const selectedFilter5Values = Array.from(filter5Checkboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
    
            let resultsFound = false;
    
            filteredData.innerHTML = '';
    
            data.forEach(item => {
                const itemFilter1 = item.getAttribute('data-filter1');
                const itemFilter2 = item.getAttribute('data-filter2');
                const itemFilter3 = item.getAttribute('data-filter3');
                const itemFilter4 = item.getAttribute('data-filter4');
                const itemFilter5 = item.getAttribute('data-filter5');
    
                if (
                    itemFilter1 === selectedFilter1 &&
                    itemFilter2 === selectedFilter2 &&
                    (selectedFilter3Values.length === 0 || selectedFilter3Values.includes(itemFilter3)) &&
                    (selectedFilter4Values.length === 0 || selectedFilter4Values.includes(itemFilter4)) &&
                    (selectedFilter5Values.length === 0 || selectedFilter5Values.includes(itemFilter5))
                ) {
                    item.style.display = 'block';
                    filteredData.appendChild(item.cloneNode(true));
                    resultsFound = true;
                } else {
                    item.style.display = 'none';
                }
            });
    
            if (!resultsFound) {
                filteredData.textContent = noResultsMessage;
            }
        }
    
        // 초기 필터링 설정: 첫 번째 조건, 첫 번째 카테고리, 모든 옵션, 모든 특징, 모든 단계 선택
        filterData();
    
        // 라디오 버튼 및 체크박스 변경 이벤트 처리
        filter1Radios.forEach(filter => {
            filter.addEventListener('change', filterData);
        });
    
        filter2Radios.forEach(filter => {
            filter.addEventListener('change', filterData);
        });
    
        filter3Checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterData);
        });
    
        filter4Checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterData);
        });
    
        filter5Checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterData);
        });
    
        // 초기화 버튼 클릭 이벤트 처리
        resetButton.addEventListener('click', function() {
            filter1Radios[0].checked = true;
            filter2Radios[0].checked = true;
            filter3Checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            filter4Checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            filter5Checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            filterData();
        });
   
    }
}


/* -------- notice -------- */




/* ***********************************************************
 * 임수빈 :
 ************************************************************ */


const news = () => {
    let news = document.querySelector('.news');

    if (news) {
          // let getAll=target=>document.querySelectorAll(target);

    let $el=getAll('.tab-box .tab li a');
    let $con=getAll('.con-box .content');
    //a의 href아이디 꺼너ㅐ와서 해당 아이디 찾아가기
    $el.forEach((item,idx)=>{
        item.addEventListener('click', e => {
            e.preventDefault()
            let current = e.currentTarget;
            let thisID = current.getAttribute('href');
            let conID = document.querySelector(thisID)
            console.log(thisID,conID);
            $el.forEach(aItem => {
                aItem.classList.remove('on');
            })
            current.classList.add('on')

            $con.forEach(conItem => {
                conItem.classList.remove('on');
            })
            conID.classList.add('on');
        })
    })

    
window.addEventListener('load',e => {
    document.querySelector('.anews').classList.add('on');
    })

}
    
}


const newsMore = () => {
    let newsMore = document.querySelector('.news');
    if (newsMore) {
       
//더보기
let newstitle = [];
newstitle[0]="2023년형 현대 캐스퍼, 최신 기술로 더욱 편리하고 안전하게"
newstitle[1]="불멍 하며 멍멍…캐스퍼와 함께 '견생샷' 건졌어요"
newstitle[2]="'차박'...캠핑...전기차 열풍 타고..또다른 일상공간, 차튜닝 전성시대"
newstitle[3]="맨즈케어 시장 넓히는 올리브영... 현대차 '캐스퍼' 이벤트도 진행"
newstitle[4]="GGM '캐스퍼' 월 4000대 회복…프로모션 후 씽씽"
newstitle[5]="현대차, ‘캐스퍼’ 연계 마케팅 활짝…‘2030세대’ 정조준"
newstitle[6]="경차 사고 싶은 사회초년생 위해 ‘레이 vs 모닝 vs 캐스퍼’ 비교한 결과"
newstitle[7]="모닝vs.캐스퍼.. 탄탄한 기본기와 화려한 안전,편의사항 돋보여"
newstitle[8]="캐스퍼 사면 1년간 24만원 ‘주유비 혜택’…9월까지";
newstitle[9]="현대차, 캐스퍼 전용 '초저금리 할부 프로모션' 진행"
newstitle[10]="현대자동차, ‘2023 영동대로 카운트다운’ 연계 고객 참여 이벤트 실시"
newstitle[11]="현대차, 캠핑 체험 플랫폼 '휠핑' 시즌 4 참가자 모집"
newstitle[12]="현대차, 캐스퍼 올해 경형 차급 판매 1위 기념 고객 감사 이벤트 실시";
newstitle[13]="실용성을 더한 신규 트림 ‘디 에센셜 라이트’ 추가! 현대차, ‘2023 캐스퍼’ 출시"

let newsdate = [];
newsdate[0]="2023.10.26"
newsdate[1]="2023.10.23"
newsdate[2]="2023.10.21"
newsdate[3]="2023.10.01"
newsdate[4]="2023.09.26"
newsdate[5]="2023.09.16"
newsdate[6]="2023.09.10"
newsdate[7]="2023.08.23"
newsdate[8]="2023.08.22";
newsdate[9]="2023.08.20";
newsdate[10]="2023.08.15";
newsdate[11]="2023.08.10";
newsdate[12]="2023.08.07";
newsdate[13]="2023.08.05";
newsdate[14]="2023.08.02";
newsdate[15]="2023.07.27";
newsdate[16]="2023.07.25";
newsdate[17]="2023.07.22";
newsdate[18]="2023.07.21";
newsdate[19]="2023.07.14";
newsdate[19]="2023.07.10";
newsdate[20]="2023.07.06";
newsdate[21]="2023.05.22";
newsdate[22]="2023.05.12";
newsdate[23]="2023.05.11";
newsdate[24]="2023.05.08";
newsdate[25]="2023.05.01";
newsdate[26]="2023.04.22";
newsdate[27]="2023.04.03";


    let more1=document.querySelector('.more1');
    let tab=document.querySelector('.news .tab-box .tab li .anews');
    more1.addEventListener('click', e=>{
        e.preventDefault();
        const ul = document.querySelector('.news_board');
        let cnt = ul.querySelectorAll('.news_board li').length;
        let ran = 0, size=newstitle.length+1;
        for (let i=0; i<3 && cnt<=24; i++){
            const li = document.createElement('li');
            ran=Math.floor(Math.random()*size)
            li.innerHTML=`
            <p class="news_wrap"><img src="./images/news${ran}.jpg" alt=""></p>
            <p class="news_title">${newstitle[ran]}</p>
            <em class="news_date">${newsdate[cnt]}</em>
            `;
            ul.append(li);
            cnt++;
        }
        if (cnt>24){
            document.querySelector('.more').style.display='none';
        }
        tab.addEventListener('click', e => {
            location.reload();
        })
    })



    let more2=document.querySelector('.more2');
    let tab2=document.querySelector('.news .tab-box .tab li .abodo');
    more2.addEventListener('click', e=>{
        e.preventDefault();
        const ul = document.querySelector('.bodo_board');
        let cnt = ul.querySelectorAll('.bodo_board li').length+1;
        let ran = 0, size=newstitle.length;
        for (let i=0; i<3 && cnt<=24; i++){
            const li = document.createElement('li');
            ran=Math.floor(Math.random()*size);
            li.innerHTML=`
            <p class="news_wrap"><img src="./images/news${cnt}.jpg" alt=""></p>
            <p class="news_title">${newstitle[ran]}</p>
            <em class="news_date">${newsdate[cnt]}</em>
            `;
            ul.append(li);
            cnt++;
        }
        if (cnt>24){
            document.querySelector('.more').style.display='none';
        }
        tab2.addEventListener('click', e => {
            location.reload();
        })
    })

    let more3=document.querySelector('.more3');
    let tab3=document.querySelector('.news .tab-box .tab li .ajournal');
    more3.addEventListener('click', e=>{
        e.preventDefault();
        const ul = document.querySelector('.journal_board');
        let cnt = ul.querySelectorAll('.journal_board li').length+1;
        let ran = 0, size=newstitle.length;
        for (let i=0; i<3 && cnt<=24; i++){
            const li = document.createElement('li');
            ran=Math.floor(Math.random()*size)
            li.innerHTML=`
            <p class="news_wrap"><img src="./images/news${cnt}.jpg" alt=""></p>
            <p class="news_title">${newstitle[ran]}</p>
            <em class="news_date">${newsdate[cnt]}</em>
            `;
            ul.append(li);
            cnt++;
        }
        if (cnt>24){
            document.querySelector('.more').style.display='none';
        }
        tab.addEventListener('click', e => {
            location.reload();
        })
    })
    }
}


const showroom = () => {
    let showroom = document.querySelector('.showroom');

    if (showroom) {
        let $el=getAll('.tab-box .tab li a');
        let $con=getAll('.con-box .content');
        //a의 href아이디 꺼너ㅐ와서 해당 아이디 찾아가기
        $el.forEach((item,idx)=>{
            item.addEventListener('click', e => {
                e.preventDefault()
                let current = e.currentTarget;
                let thisID = current.getAttribute('href');
                let conID = document.querySelector(thisID)
                console.log(thisID,conID);
                $el.forEach(aItem => {
                    aItem.classList.remove('on');
                })
                current.classList.add('on')
    
                $con.forEach(conItem => {
                    conItem.classList.remove('on');
                })
                conID.classList.add('on');
            })
        })
    }
}



const allcare = () => {
    let allcare = document.querySelector('.all_care_service');
    if (allcare) {
          ///////////// 아코디언1////////////////////////

          let dt = document.querySelectorAll('.acc_wrap1 .acc dt');
          let dd = document.querySelectorAll('.acc_wrap1 .acc dd');
          let arr = [];

      dt.forEach((item,idx)=> {
          let h = getComputedStyle(dd[idx]).height;
          arr.push(h);
          console.log(h);

          dd[idx].style.height = '0px';

          item.addEventListener('click', e => {
              if (dd[idx].style.height === '0px') {
                  dd.forEach((dditem,index)=> {
                      dd[index].style.height = '0px';
                      dt[index].classList.remove('on');
                  })
                  dt[idx].classList.add('on');
                  dd[idx].style.height = arr[idx];
              } else {
                  dt[idx].classList.remove('on');
                  dd[idx].style.height = '0px';
              }
          });
          })
          ///////////// 아코디언1끝////////////////////////

          ///////////// 아코디언2////////////////////////
          let dt2 = document.querySelectorAll('.carcare .acc_wrap2 .acc2 dt');
          let dd2 = document.querySelectorAll('.carcare .acc_wrap2 .acc2 dd');
          let arr2 = [];

      dt2.forEach((item,idx)=> {
          let h = getComputedStyle(dd2[idx]).height;
          arr2.push(h);
          console.log(h);

          dd2[idx].style.height = '0px';
          // dd[0].style.height = arr[0];

          item.addEventListener('click', e => {
              if (dd2[idx].style.height === '0px') {
                  dd2.forEach((dd2item,index)=> {
                      dd2[index].style.height = '0px';
                      dt2[index].classList.remove('on2');
                  })
                  dt2[idx].classList.add('on2');
                  dd2[idx].style.height = arr2[idx];
              } else {
                  dt2[idx].classList.remove('on2');
                  dd2[idx].style.height = '0px';
              }
          });
          })
          ///////////// 아코디언2끝////////////////////////

          ///////////// 아코디언3////////////////////////
          let dt3 = document.querySelectorAll('.carcare .acc_wrap3 .acc3 dt');
          let dd3 = document.querySelectorAll('.carcare .acc_wrap3 .acc3 dd');
          let arr3 = [];

      dt3.forEach((item,idx)=> {
          let h = getComputedStyle(dd3[idx]).height;
          arr3.push(h);
          console.log(h);

          dd3[idx].style.height = '0px';

          item.addEventListener('click', e => {
              if (dd3[idx].style.height === '0px') {
                  dd3.forEach((dd3item,index)=> {
                      dd3[index].style.height = '0px';
                      dt3[index].classList.remove('on');
                  })
                  dt3[idx].classList.add('on');
                  dd3[idx].style.height = arr3[idx];
              } else {
                  dt3[idx].classList.remove('on');
                  dd3[idx].style.height = '0px';
              }
          });
          })
          ///////////// 아코디언3끝////////////////////////

          let dt4 = document.querySelectorAll('.carcare .acc_wrap4 .acc4 dt');
          let dd4 = document.querySelectorAll('.carcare .acc_wrap4 .acc4 dd');
          let arr4 = [];

      dt4.forEach((item,idx)=> {
          let h = getComputedStyle(dd4[idx]).height;
          arr4.push(h);
          console.log(h);

          dd4[idx].style.height = '0px';

          item.addEventListener('click', e => {
              if (dd4[idx].style.height === '0px') {
                  dd4.forEach((dd4item,index)=> {
                      dd4[index].style.height = '0px';
                      dt4[index].classList.remove('on');
                  })
                  dt4[idx].classList.add('on');
                  dd4[idx].style.height = arr4[idx];
              } else {
                  dt4[idx].classList.remove('on');
                  dd4[idx].style.height = '0px';
              }
          });
          })
          ///////////// 아코디언4끝////////////////////////


          let dt5 = document.querySelectorAll('.carcare .acc_wrap5 .acc5 dt');
          let dd5 = document.querySelectorAll('.carcare .acc_wrap5 .acc5 dd');
          let arr5 = [];

      dt5.forEach((item,idx)=> {
          let h = getComputedStyle(dd5[idx]).height;
          arr5.push(h);
          console.log(h);

          dd5[idx].style.height = '0px';

          item.addEventListener('click', e => {
              if (dd5[idx].style.height === '0px') {
                  dd5.forEach((dd5item,index)=> {
                      dd5[index].style.height = '0px';
                      dt5[index].classList.remove('on');
                  })
                  dt5[idx].classList.add('on');
                  dd5[idx].style.height = arr5[idx];
              } else {
                  dt5[idx].classList.remove('on');
                  dd5[idx].style.height = '0px';
              }
          });
          })
    }
}




/* ***********************************************************
 * 이충민 : 
 ************************************************************ */







const subInit = () => {
    quick();
    notice();
    eventPage();
    tabMenu();
    Accordion();
    news();
    newsMore();
    showroom();
    allcare();
    con5slide();
    galleryGallery();
    promotion();
   


}

;
(() => {
    window.addEventListener('load', e => {
        subInit();
    })
})();