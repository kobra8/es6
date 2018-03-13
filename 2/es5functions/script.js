
var findGreenBoxes = function () {
    boxes = document.getElementsByClassName("green");
    return boxes
}

var paintRed = function (boxes) {
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
var paintBlue = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "blue";
    }
}
var paintBrown = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "brown";
    }
}
var paintPink = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "pink";
    }
}
var paintWhite = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "white";
        boxes[i].style.border = "thin solid #000000";
    }
}
var paintOrange = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "orange";
    }
}
var paintGreen = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "skyblue";
    }
}
var paintSilver = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "silver";
    }
}
var paintGold = function (boxes) {
    var i = 0, max = boxes.length;
    for (; i < max; i += 1) {
        boxes[i].style.backgroundColor = "gold";
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
    var s = document.createElement("span");
    s.innerHTML = src + ' - ';
    document.getElementsByClassName("container")[0].appendChild(s);
};

var childArr = [];
var writeLetter = function(letter) {
    var x = document.createElement("h2");
    x.innerHTML = letter;
    document.getElementsByTagName("p")[0].appendChild(x);
    this.childArr.push(x);
    console.log(this.childArr)
    //return childarr;
}
var clearScreen = function() {
    var par = document.getElementsByTagName("p");
    for(var i=0; i < par.length; i++ ) {
        par[i].removeChild(this.childArr[i]);
    }
}

var animateItem = function() {
    var item = document.getElementById("item");
    item.classList.add("animate");
    setTimeout(function(){ item.classList.remove("animate") }, 10001);
}

var clearText = function() {
    var text = document.getElementsByTagName("textarea");
    text.value = "";
}

findNodes(plusFife);
//7777777777777777777777777777777777777777777777


//77777777777777777777777777777777777777777

// 777777777777000000000000000000000000000



//000000000000000000000000000000000000777777777777777777













