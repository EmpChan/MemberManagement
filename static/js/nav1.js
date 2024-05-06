var settingsElements = document.getElementsByClassName('settings');
for (var i = 0; i < settingsElements.length; i++) {
    settingsElements[i].classList.add('hidden');
}

var settings_more=false;

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
    set_back_white();
    this.style.backgroundColor = 'aliceblue';
});

btnSettings.addEventListener('click', function() {
    set_back_white();
    document.getElementById('setupMain').style.display='block';
    this.style.backgroundColor = 'aliceblue';
});

usrManage.addEventListener('click', function() {
    set_back_white();
    this.style.backgroundColor = 'aliceblue';
    document.getElementById('usr_manage_t').style.backgroundColor = 'aliceblue';
});

objectNumManage.addEventListener('click', function() {
    set_back_white()
    this.style.backgroundColor = 'aliceblue';
    document.getElementById('object_num_manage_t').style.backgroundColor = 'aliceblue';
});

objectManage.addEventListener('click', function() {
    set_back_white()
    this.style.backgroundColor = 'aliceblue';
    document.getElementById('object_manage_t').style.backgroundColor = 'aliceblue';
});

linkLevelManage.addEventListener('click', function() {
    set_back_white()
    this.style.backgroundColor = 'aliceblue';
    document.getElementById('link_level_manage_t').style.backgroundColor = 'aliceblue';
});

linkManage.addEventListener('click', function() {
    set_back_white()
    this.style.backgroundColor = 'aliceblue';
    document.getElementById('link_manage_t').style.backgroundColor = 'aliceblue';
});

function set_back_white() {
    document.getElementById('btn_home').style.backgroundColor='white';
    document.getElementById('btn_settings').style.backgroundColor='white';
    document.getElementById('usr_manage').style.backgroundColor='white';
    document.getElementById('object_num_manage').style.backgroundColor='white';
    document.getElementById('object_manage').style.backgroundColor='white';
    document.getElementById('link_level_manage').style.backgroundColor='white';
    document.getElementById('link_manage').style.backgroundColor='white';
    document.getElementById('usr_manage_t').style.backgroundColor='white';
    document.getElementById('object_num_manage_t').style.backgroundColor='white';
    document.getElementById('object_manage_t').style.backgroundColor='white';
    document.getElementById('link_level_manage_t').style.backgroundColor='white';
    document.getElementById('link_manage_t').style.backgroundColor='white';
}