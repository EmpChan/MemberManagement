$(function(){
		
    /* colorpickr */
    const pickrContainer = document.querySelector('.pickr-container');
    const themeContainer = document.querySelector('.theme-container');
    const themes = [
    [
        'classic',
        {
            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],

            components: {
                preview: true,
                opacity: true,
                hue: true,

                interaction: {
                    hex: true,
                    rgba: true,
                    hsva: true,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        }
    ],
];

const buttons = [];
let pickr = null;

for (const [theme, config] of themes) {
    const button = document.createElement('button');
    button.innerHTML = theme;
    buttons.push(button);

    button.addEventListener('click', () => {
        const el = document.createElement('p');
        pickrContainer.appendChild(el);

        // Delete previous instance
        if (pickr) {
            pickr.destroyAndRemove();
        }

        // Apply active class
        for (const btn of buttons) {
            btn.classList[btn === button ? 'add' : 'remove']('active');
        }

        // Create fresh instance
        pickr = new Pickr(Object.assign({
            el, theme,
            default: '#42445a'
        }, config));

        // Set events
        pickr.on('init', instance => {
            console.log('Event: "init"', instance);
        }).on('hide', instance => {
            console.log('Event: "hide"', instance);
        }).on('show', (color, instance) => {
            console.log('Event: "show"', color, instance);
        }).on('save', (color, instance) => {
            console.log('Event: "save"', color, instance);
        }).on('clear', instance => {
            console.log('Event: "clear"', instance);
        }).on('change', (color, source, instance) => {
            console.log('Event: "change"', color, source, instance);
        }).on('changestop', (source, instance) => {
            console.log('Event: "changestop"', source, instance);
        }).on('cancel', instance => {
            console.log('cancel', pickr.getColor().toRGBA().toString(0));
        }).on('swatchselect', (color, instance) => {
            console.log('Event: "swatchselect"', color, instance);
        });
    });

    themeContainer.appendChild(button);
}

buttons[0].click();
    
});

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


$(function(){
	selectTap(3);
	$('.setting > .tab-menu').addClass("on");
	$('.sideSubtab4').addClass("on");
});

$(window).on('load', function(){
	$('.setting > .setting-sub').css("display","block");
});
	
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