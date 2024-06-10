
document.getElementById('down_arrow').style.transform = 'rotate(180deg)';
var settings_more=true;

home = document.getElementById("main_home");
if(home){
    document.getElementById("nav2_scal").style.display='none';
    document.getElementById('btn_home').style.backgroundColor = 'aliceblue';
}
setup = document.getElementById("setupMain");
if(setup){
    document.getElementById('setting').style.backgroundColor = 'aliceblue';
}
setup = document.getElementById("objectList.html");
if(setup){
    document.getElementById('object_manage').style.backgroundColor = 'aliceblue';
    document.getElementById('object_manage_t').style.backgroundColor = 'aliceblue';
}
manage = document.getElementById("manage.html");
if(manage){
    document.getElementById('usr_manage').style.backgroundColor = 'aliceblue';
    document.getElementById('usr_manage_t').style.backgroundColor = 'aliceblue';
}
linkLevelList = document.getElementById("linkLevelList.html");
if(linkLevelList){
    document.getElementById('link_level_manage').style.backgroundColor = 'aliceblue';
    document.getElementById('link_level_manage_t').style.backgroundColor = 'aliceblue';
}
linkList = document.getElementById("linkList.html");
if(linkList){
    document.getElementById('link_manage').style.backgroundColor = 'aliceblue';
    document.getElementById('link_manage_t').style.backgroundColor = 'aliceblue';
}

//이 부분 나중에 더 추가해야함..

document.addEventListener('DOMContentLoaded', function() {
    var more_setting = document.getElementById('more_setting');
    more_setting.classList.add('visible'); // 페이지 로드 시 보이도록 설정
});

// 기존 이벤트 리스너에 애니메이션 적용
document.getElementById('down_arrow').addEventListener('click', function() {
    if (settings_more) {
        document.getElementById('down_arrow').style.transform = 'rotate(0deg)';
        var settingsElements = document.getElementsByClassName('settings');
        for (var i = 0; i < settingsElements.length; i++) {
            settingsElements[i].classList.toggle('hidden');
        }
        settings_more = false;
    } else {
        document.getElementById('down_arrow').style.transform = 'rotate(180deg)';
        var settingsElements = document.getElementsByClassName('settings');
        for (var i = 0; i < settingsElements.length; i++) {
            settingsElements[i].classList.remove('hidden');
        }
        settings_more = true;
    }

    // nav2_scal 애니메이션 제어
    var more_setting = document.getElementById('more_setting');
    if (more_setting.classList.contains('visible')) {
        more_setting.classList.remove('visible');
    } else {
        more_setting.classList.add('visible');
    }
});




var btnHome = document.getElementById('btn_home');
var btnSettings = document.getElementById('btn_settings');
var usrManage = document.getElementById('usr_manage');
var objectManage = document.getElementById('object_manage');
var linkLevelManage = document.getElementById('link_level_manage');
var linkManage = document.getElementById('link_manage');

btnHome.addEventListener('click', function() {
    window.location.href = '/';
});

btnSettings.addEventListener('click', function() {
    window.location.href = '/setupMain';
});

usrManage.addEventListener('click', function() {
    window.location.href = '/manage';
});

objectManage.addEventListener('click', function(){
    window.location.href = '/objectList';
});

linkLevelManage.addEventListener('click', function() {
    window.location.href = '/linkLevelList';
});

linkManage.addEventListener('click', function() {
    window.location.href = '/linkList';
});


var maname_t = document.getElementById("usr_manage_t");
var objectManage_T = document.getElementById("object_manage_t");
var linkLevelList = document.getElementById("link_level_manage_t");
var linkList = document.getElementById("link_manage_t");

maname_t.addEventListener('click', function() {
    window.location.href = '/manage';
});

objectManage_T.addEventListener('click', function(){
    window.location.href = '/objectList';
});

linkLevelList.addEventListener('click', function() {
    window.location.href = '/linkLevelList';
});

linkList.addEventListener('click', function() {
    window.location.href = '/linkList';
});