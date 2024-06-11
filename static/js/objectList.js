function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('selectBox');
        
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}

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

function search() {
    const query = document.getElementById('searchInput').value;
    const url = new URL(window.location.href);
    url.searchParams.set('query', query);
    window.location.href = url.toString();
}

document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search();
    }
});