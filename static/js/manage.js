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

function search() {
    const query = document.getElementById('searchInput').value;
    const url = new URL(window.location.href);
    url.searchParams.set('query', query);
    window.location.href = url.toString();
}

document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        search();
    }
});