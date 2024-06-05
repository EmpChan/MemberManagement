$(function(){
    selectTap(4);
    $('.setting > .tab-menu').addClass("on");
    $('.sideSubtab5').addClass("on");
    
    /* 메인 오브젝트 */
    $("#selectAll").on('click',function(){
        if($(".objLeft-wrap").find("input[name='drag-chk']").prop("checked")){
            $(".objLeft-wrap").find("input[name='drag-chk']").prop("checked", false);
        }else{
            $(".objLeft-wrap").find("input[name='drag-chk']").prop("checked", true);
        }
    });	
    
    
    /* 연관 오브젝트 */
    $("#belongAll").on('click',function(){
        if($(".relate1").find("input[name='drag-chk']").prop("checked")){
            /* 전체선택시 disabled를 제외한 모든 체크박스 선택 */
            $(".relate1").find("input[name='drag-chk']:not(:disabled)").prop("checked", false);
        }else{
            $(".relate1").find("input[name='drag-chk']:not(:disabled)").prop("checked", true);
        }
    });	
    
    /* 동일 기준 오브젝트 */
    $("#groupAll").on('click',function(){
        if($(".relate2").find("input[name='drag-chk']").prop("checked")){
            /* 전체선택시 disabled를 제외한 모든 체크박스 선택 */
            $(".relate2").find("input[name='drag-chk']:not(:disabled)").prop("checked", false);
        }else{
            $(".relate2").find("input[name='drag-chk']:not(:disabled)").prop("checked", true);
        }
    });	
    
    /* 연결 오브젝트1 */
    $("#levelAll").on('click',function(){
        if($("#level-box1").find("input[name='drag-chk']").prop("checked")){
            $("#level-box1").find("input[name='drag-chk']").prop("checked", false);
        }else{
            $("#level-box1").find("input[name='drag-chk']").prop("checked", true);
        }
    });	
    

    /* 연결 오브젝트2 */
    $("#levelAll2").on('click',function(){
        if($("#level-box2").find("input[name='drag-chk']").prop("checked")){
            $("#level-box2").find("input[name='drag-chk']").prop("checked", false);
        }else{
            $("#level-box2").find("input[name='drag-chk']").prop("checked", true);
        }
    });	
    
    /* 연결 오브젝트3 */
    $("#levelAll3").on('click',function(){
        if($("#level-box3").find("input[name='drag-chk']").prop("checked")){
            $("#level-box3").find("input[name='drag-chk']").prop("checked", false);
        }else{
            $("#level-box3").find("input[name='drag-chk']").prop("checked", true);
        }
    });	
    
    /* 연결 오브젝트4 */
    $("#levelAll4").on('click',function(){
        if($("#level-box4").find("input[name='drag-chk']").prop("checked")){
            $("#level-box4").find("input[name='drag-chk']").prop("checked", false);
        }else{
            $("#level-box4").find("input[name='drag-chk']").prop("checked", true);
        }
    });	
    
    /* 연결 오브젝트5 */
    $("#levelAll5").on('click',function(){
        if($("#level-box5").find("input[name='drag-chk']").prop("checked")){
            $("#level-box5").find("input[name='drag-chk']").prop("checked", false);
        }else{
            $("#level-box5").find("input[name='drag-chk']").prop("checked", true);
        }
    });	
});

$(window).on('load', function(){
    $('.setting > .setting-sub').css("display","block");
});
 
function warnPop(){
    document.getElementById("warnModar").style.display="block";
}
function closeModal2() {
    document.getElementById("warnModar").style.display="none";
}