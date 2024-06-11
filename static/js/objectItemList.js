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