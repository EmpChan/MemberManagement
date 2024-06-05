$(function(){
    selectTap(0);
    $('.setting > .tab-menu').addClass("on");
    $('.sideSubtab1').addClass("on");
});

$(window).on('load', function(){
    $('.setting > .setting-sub').css("display","block");
});

function selectAll(selectAll) {
    const checkboxes = document.getElementsByName('selectBox');
      
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}

/* 모달창 */
 
function delModal() {
    document.getElementById("delectModar").style.display="block";
}
function closeModal() {
    document.getElementById("delectModar").style.display="none";
}
 
function saveModal() {
    document.getElementById("saveModar").style.display="block";
}
function closeModal2() {
    document.getElementById("saveModar").style.display="none";
}	