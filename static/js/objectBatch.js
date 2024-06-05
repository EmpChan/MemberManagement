$(function(){
    selectTap(2);
    sublistTab(1);
    $('.setting > .tab-menu').addClass("on");
    $('.sideSubtab3').addClass("on");

    // 인풋박스안에 파일이름 넣기
    var uploadFile = $('.file-box .realFile');
    uploadFile.on('change', function () {
        var filename = "";
        if (window.FileReader) {
            filename = $(this)[0].files[0].name;
        } else {
            filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name').val(filename);
    });     
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

function batchMd() {
    document.getElementById("batchModar").style.display="block";
}

function closeModal() {
    document.getElementById("batchModar").style.display="none";
}

function delModal() {
    document.getElementById("delectModar").style.display="block";
}
function closeModal2() {
    document.getElementById("delectModar").style.display="none";
}

function uploadFail() {
    document.getElementById("upfailModar").style.display="block";
}
function closeModal3() {
    document.getElementById("upfailModar").style.display="none";
}

function uploadSuc() {
    document.getElementById("successModar").style.display="block";
}
function closeModal4() {
    document.getElementById("successModar").style.display="none";
}