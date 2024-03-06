let arr = [];

let dt = document.querySelectorAll('dt');
let dd = document.querySelectorAll('dd');

window.addEventListener('load', function() {
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

    item.addEventListener('click', e => {
        if (dd[idx].style.height === '0px') {
            dd.forEach((dditem, index) => {
                dd[index].style.height = '0px';
                dt[index].classList.remove('on');
                dt[index].querySelector('i').classList.remove('xi-angle-up');
                dt[index].querySelector('i').classList.add('xi-angle-down');
                dt[index].querySelector('i').style.marginLeft = '210px'; 
            })
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

      

