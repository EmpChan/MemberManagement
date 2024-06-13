function warnPop(){
    document.getElementById("warnModar").style.display="block";
}
function closeModal2() {
    document.getElementById("warnModar").style.display="none";
}

document.addEventListener('DOMContentLoaded', function () {
    var objLeftWrap = document.getElementById('object_list');
    var levels = document.getElementById('levels');

    // Initialize Sortable for objLeft-wrap
    Sortable.create(objLeftWrap, {
        group: {
            name: 'shared',
            pull: 'clone',  // Allow items to be cloned from this list
          // Do not allow items to be put into this list
        },
        animation: 150,
        draggable: '.dragBox',
        onEnd: function (evt) {
            // Handle item move
            console.log('Item moved from', evt.from, 'to', evt.to);

        },
        sort: false  // Disable sorting within objLeft-wrap
    });

    // Initialize Sortable for each level-box
    document.querySelectorAll('.level-box').forEach(function (levelBox) {
        Sortable.create(levelBox.querySelector('.drop-box'), {
            group: 'shared',
            animation: 150,
            draggable: '.dragBox',
            onEnd: function (evt) {
                console.log('Item moved from', evt.from, 'to', evt.to);
                // Check if the item is moved to objLeftWrap area
                console.log(objLeftWrap);
                if (evt.to === objLeftWrap) {
                    // Remove the moved item
                    evt.item.remove();
                    console.log('Item removed from levels');
                }
            }
        });
    });
});


//document.getElementById("link_save").addEventListener('click', );
/*
function saveItems() {
    var parentElement = document.getElementById("parent");
    var dragBoxesp = parentElement.getElementsByClassName("dragBox");
    var parentData = [];

    for (var i = 0; i < dragBoxesp.length; i++) {
        var dragBoxp = dragBoxesp[i];
        var pgroupName = dragBoxp.querySelector("p.drag-list").textContent;
        parentData.push(pgroupName);
       // console.log(pgroupName);
    }

    //console.log('하위');

    var childElement = document.getElementById("childe");
    var dragBoxesc = childElement.getElementsByClassName("dragBox");
    var childData = [];

    for (var i = 0; i < dragBoxesc.length; i++) {
        var dragBoxc = dragBoxesc[i];
        var cgroupName = dragBoxc.querySelector("p.drag-list").textContent;
        childData.push(cgroupName);
        //console.log(cgroupName);
    }

    var data = {
        parent: parentData,
        child: childData
    };

    var jsonData = JSON.stringify(data);
    console.log(jsonData);
}
*/
function saveItems() {
    var parentElement = document.getElementById("parent");
    var dragBoxesp = parentElement.getElementsByClassName("dragBox");
    var parentData = [];

    for (var i = 0; i < dragBoxesp.length; i++) {
        var dragBoxp = dragBoxesp[i];
        var pgroupName = dragBoxp.querySelector("p.drag-list").textContent;
        parentData.push(pgroupName);
    }

    var childElement = document.getElementById("childe");
    var dragBoxesc = childElement.getElementsByClassName("dragBox");
    var childData = [];

    for (var i = 0; i < dragBoxesc.length; i++) {
        var dragBoxc = dragBoxesc[i];
        var cgroupName = dragBoxc.querySelector("p.drag-list").textContent;
        childData.push(cgroupName);
    }

    var data = {
        parent: parentData,
        child: childData
    };

    var jsonData = JSON.stringify(data);
    console.log(jsonData);

    // 폼 생성
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/linkList");

    // CSRF 토큰 입력 추가 (Django는 POST 요청에 이 토큰이 필요함)
    var csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;
    var csrfInput = document.createElement("input");
    csrfInput.setAttribute("type", "hidden");
    csrfInput.setAttribute("name", "csrfmiddlewaretoken");
    csrfInput.setAttribute("value", csrfToken);
    form.appendChild(csrfInput);

    // parent와 child 데이터를 위한 숨겨진 입력 필드 생성
    var parentInput = document.createElement("input");
    parentInput.setAttribute("type", "hidden");
    parentInput.setAttribute("name", "parent");
    parentInput.setAttribute("value", JSON.stringify(parentData));
    form.appendChild(parentInput);

    var childInput = document.createElement("input");
    childInput.setAttribute("type", "hidden");
    childInput.setAttribute("name", "child");
    childInput.setAttribute("value", JSON.stringify(childData));
    form.appendChild(childInput);

    // 폼을 body에 추가하고 제출
    document.body.appendChild(form);
    form.submit();
}

document.getElementById('re').addEventListener('click', function(){
    location.reload();
});



