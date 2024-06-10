$(function(){
    //selectTap(2);
    sublistTab(0);
    $('.setting > .tab-menu').addClass("on");
    $('.sideSubtab3').addClass("on");
});

$(window).on('load', function(){
    $('.setting > .setting-sub').css("display","block");
});


function sublistTab(num){
    var menuLength = $(".sl-st").length;

    for(var i = 0; i < menuLength; i++){
        if(i == num){
            $(".sl-st:eq("+i+")").addClass("on");
        }
        else{
            $(".sl-st:eq("+i+")").removeClass("on");
        }
    }
}

function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('selectBox');
        
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}

/* 탭메뉴 클릭시 메뉴바 라인 슬라이드 이동 */
$(document).on("click", ".sl-st", function(e) {
    var horizontalUnderLine = document.getElementById("horizontal-tab");
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 6 + "px" ;
});


/* 비활성화 모달창 */
function disabledBtn(){
    document.getElementById("disabledModar").style.display="block";
}
function closeModal2() {
    document.getElementById("disabledModar").style.display="none";
}

var objectRegister = document.getElementById("object_register");

objectRegister.addEventListener('click', function(){
    window.location.href = '/objectRegister';
});