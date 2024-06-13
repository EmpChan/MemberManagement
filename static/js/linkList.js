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


document.getElementById("link_save").addEventListener('click', function () {
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

});

document.getElementById('re').addEventListener('click', function(){
    location.reload();
});



