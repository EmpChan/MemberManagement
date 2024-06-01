
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

//이 부분 나중에 더 추가해야함..


document.getElementById('down_arrow').addEventListener('click', function() {
    if(settings_more){
        document.getElementById('down_arrow').style.transform = 'rotate(0deg)';
        var settingsElements = document.getElementsByClassName('settings');
        for (var i = 0; i < settingsElements.length; i++) {
            settingsElements[i].classList.toggle('hidden');
        }
        settings_more=false;
    }
    else{
        document.getElementById('down_arrow').style.transform = 'rotate(180deg)';
        var settingsElements = document.getElementsByClassName('settings');
        for (var i = 0; i < settingsElements.length; i++) {
            settingsElements[i].classList.remove('hidden');
        }
        settings_more=true;
    }
});

var btnHome = document.getElementById('btn_home');
var btnSettings = document.getElementById('btn_settings');
var usrManage = document.getElementById('usr_manage');
var objectNumManage = document.getElementById('object_num_manage');
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

objectNumManage.addEventListener('click', function() {
    window.location.href = '/objectRegister';
});

objectManage.addEventListener('click', function() {
    window.location.href = '/objectList';
});

linkLevelManage.addEventListener('click', function() {
    window.location.href = '/linkLevelList';
});

linkManage.addEventListener('click', function() {
    window.location.href = '/linkList';
});


var maname_t = document.getElementById("usr_manage_t");
var objectRegister = document.getElementById("object_num_manage_t");
var objectList = document.getElementById("object_manage_t");
var linkLevelList = document.getElementById("link_level_manage_t");
var linkList = document.getElementById("link_manage_t");

maname_t.addEventListener('click', function() {
    window.location.href = '/manage';
});

objectRegister.addEventListener('click', function() {
    window.location.href = '/objectRegister';
});

objectList.addEventListener('click', function() {
    window.location.href = '/objectList';
});

linkLevelList.addEventListener('click', function() {
    window.location.href = '/linkLevelList';
});

linkList.addEventListener('click', function() {
    window.location.href = '/linkList';
});