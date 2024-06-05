$(function(){
    selectTap(2);
    sublistTab(0);
    $('.setting > .tab-menu').addClass("on");
    $('.sideSubtab3').addClass("on");
});

$(window).on('load', function(){
    $('.setting > .setting-sub').css("display","block");
});
    

// input 클릭시 이미지 미리보기

function realUpload(input){
    var reader = new FileReader();
  
    reader.onload = function(e){
        $('#img-regist').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]);
}


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

    /* 탭메뉴 클릭시 메뉴바 라인 슬라이드 이동 */
    
    $(document).on("click", ".sl-st", function(e) {
        var horizontalUnderLine = document.getElementById("horizontal-tab");
        horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
        horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
        horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 6 + "px" ;
    });