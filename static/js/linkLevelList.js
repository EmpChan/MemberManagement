function levelAdd() {
    document.getElementById("levelaModar").style.display="block";
}
function closeModal() {
    document.getElementById("levelaModar").style.display="none";
}

function levelRetouch() {
    document.getElementById("levelrModar").style.display="block";
}
function closeModal2() {
    document.getElementById("levelrModar").style.display="none";
}

/* 비활성화 모달창 */
function disabledBtn(){
    document.getElementById("disabledModar").style.display="block";
}
function closeModal3() {
    document.getElementById("disabledModar").style.display="none";
}


// $(function(){
// 	selectTap(3);
// 	$('.setting > .tab-menu').addClass("on");
// 	$('.sideSubtab4').addClass("on");
// });

// $(window).on('load', function(){
// 	$('.setting > .setting-sub').css("display","block");
// });
	
function selectAll(selectAll) {
	const checkboxes = document.getElementsByName('selectBox');

	checkboxes.forEach((checkbox) => {
	    checkbox.checked = selectAll.checked;
	})
};

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