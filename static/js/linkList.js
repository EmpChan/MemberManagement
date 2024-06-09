$(function(){
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

document.addEventListener('DOMContentLoaded', function () {
    var objLeftWrap = document.getElementById('object_list');
    var levels = document.getElementById('levels');

    // Initialize Sortable for objLeft-wrap
    Sortable.create(objLeftWrap, {
        group: {
            name: 'shared',
            pull: 'clone',  // Allow items to be cloned from this list
          // Do not allow items to be put into this list
        },
        animation: 150,
        draggable: '.dragBox',
        onEnd: function (evt) {
            // Handle item move
            console.log('Item moved from', evt.from, 'to', evt.to);
        },
        sort: false  // Disable sorting within objLeft-wrap
    });

    // Initialize Sortable for each level-box
    document.querySelectorAll('.level-box').forEach(function (levelBox) {
        Sortable.create(levelBox.querySelector('.drop-box'), {
            group: 'shared',
            animation: 150,
            draggable: '.dragBox',
            onEnd: function (evt) {
                console.log('Item moved from', evt.from, 'to', evt.to);
                // Check if the item is moved to objLeftWrap area
                console.log(objLeftWrap);
                if (evt.to === objLeftWrap) {
                    // Remove the moved item
                    evt.item.remove();
                    console.log('Item removed from levels');
                }
            }
        });
    });
});


