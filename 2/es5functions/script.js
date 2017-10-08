
var findGreenBoxes = function () {
    boxes = document.getElementsByClassName("green");
    return boxes
}

var paintRed = function (boxes) {
    console.log(boxes);
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "red";
    }
}

var paintGrey = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "grey";
    }
}

var paintBlack = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "black";
    }
}
var paintYellow = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "yellow";
    }
}

var findNodes = function (callback) {
    var i = 100,
        nodes = [],
        found;
    if (typeof callback !== "function") {
        callback = false
    }

    while (i) {
        i -= 1
        if (i % 2 === 0) {
            found = i;
        }
        if (callback) {
            callback(found)  
        }
        nodes.push(found);
    }
    return nodes;
}

var plusFife = function (node) {
    node = node + 5;
    console.log(node);
}

var word = document.getElementsByClassName("word");
function gucio() {
this.word[0].innerHTML="Gucio";
}

var duzoGuciow = function(src) {
    var s = document.createElement("li");
    s.innerHTML = src;
    document.getElementsByTagName("ul")[0].appendChild(s);
};

findNodes(plusFife);