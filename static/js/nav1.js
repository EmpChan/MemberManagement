
document.getElementById('down_arrow').style.transform = 'rotate(180deg)';
var settings_more=true;

document.getElementById("nav2_scal").style.display='none';

home = document.getElementById("container");
if(home){
    document.getElementById('btn_home').style.backgroundColor = 'aliceblue';
}
setup = document.getElementById("setupMain");
if(setup){
    document.getElementById('setting').style.backgroundColor = 'aliceblue';
}


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