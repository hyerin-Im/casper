(() => {
    const li = getAll(".sub-tab .tab li");
    const box = getAll(".sub-tab .acc-wrap .box");
    const con = get("#content");
    let arr = [],
        id = 0,
        h = 0;
    // sub_tab
    box.forEach((boxItem) => {
        boxItem.style.display = "none";
    });
    box[id].style.display = "block";

    li.forEach((item, idx) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            let current = e.currentTarget;
            // id = current.dataset.id;
            id = idx;
            console.log(id);

            li.forEach((liItem) => {
                liItem.classList.remove("on");
            });
            current.classList.add("on");

            box.forEach((boxItem) => {
                boxItem.style.display = "none";
            });
            box[id].style.display = "block";

            // h = 선택한 box 높이값 가져오기 + 300
            h = getComputedStyle(box[id]).height;
            h = parseInt(h) + 300;
            console.log(h);
            con.style.height = h + "px";
        });
    });

    //아코디언토글
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
})();
