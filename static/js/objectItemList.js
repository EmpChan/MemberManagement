$(function(){
    selectTap(1);
    $('.setting > .tab-menu').addClass("on");
    $('.sideSubtab2').addClass("on");
    
    /* 항목추가 모달창 */
    $(".radio-choose").on("click",function(){
        var chooseOn = $(this).hasClass("on");
        if (!chooseOn) {
            $(".radio-choose").removeClass("on");
            $(this).addClass("on");
            $(this).find(":radio").prop("checked",true);
            
            if($(this).hasClass("itemAdd")){
                $(".itemWrap").css("display","block");
            }else{
                $(".itemWrap").css("display","none");
            }
        }
    });
    
    /* 항목 추가 요청 전송 */
    $("#saveBtn").on('click', function(){				
        $.ajax({
            type: 'POST',
            url: '/image/main/addObjectItemList.do',
            data: JSON.stringify({
                    inputType: $('input[name=inputType]:checked').val(),
                    objectitemName: $('input[name=objectitemName]').val(),
                    objectitemCode: $('input[name=objectitemCode]').val(),
                    description: $('input[name=description]').val(),
                    isPrimary: ($("select[name=isPrimary]").val() === "Y") ? true : false,
                    isSub: ($("select[name=isSub]").val() === "Y") ? true : false,
                    isRelation: ($("select[name=isRelation]").val() === "Y") ? true : false
                }),
            success: () => { location.reload(); },
            error: () => { alert('저장 도중 오류가 발생하였습니다.') },
            contentType: "application/json;charset=utf-8",
            dataType: 'json'
        });
        
    });
});

$(window).on('load', function(){
    $('.setting > .setting-sub').css("display","block");
});
    
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('selectBox');
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    });
};	

function itemAddtMd() {
    document.getElementById("AddModar").style.display="block";
}

function closeModal() {
    document.getElementById("AddModar").style.display="none";
}
 

/* 비활성화 모달창 */
function disabledBtn(){
    document.getElementById("disabledModar").style.display="block";
}
function closeModal2() {
    document.getElementById("disabledModar").style.display="none";
}