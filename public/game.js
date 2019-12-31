var red = 0;
var green = 0;
var blue = 0;
var newcolor;
var prevcolor;
var box = 9;
var friend;
var dummy;
var num;
var reset = false;
var start = false;
var diff = true;
var diffclick = true;
var flag = [];
var idvcolor = [];

for (var i = 0; i < 9; i++) {
    flag[i] = false;
}

var a = document.querySelectorAll("a");
var td = document.querySelectorAll("td");
var tr = document.querySelectorAll("tr");
var h3 = document.querySelector("h3");
var h1 = document.querySelector("h1");
var div = document.querySelector("div");
var body = document.querySelector(("body"))

a[0].addEventListener("click", startgame);
a[1].addEventListener("click", easygame);
a[2].addEventListener("click", hardgame);
a[3].addEventListener("click", resetgame);

function resetgame() {
    window.location.reload()
}

function easygame() {
    if (diffclick) {
        diff = false;
        box = 6;
        checkdiff();
        tr[2].style.display = "none";
    }
}

function hardgame() {
    if (diffclick) {
        diff = true;
        box = 9;
        checkdiff();
        tr[2].style.display = "table-row";
    }

}

function checkdiff() {
    diffclick = false;
    if (diff) {
        a[2].classList.add("btn-danger");
        a[1].classList.remove("btn-success");
    } else {
        a[1].classList.add("btn-success");
        a[2].classList.remove("btn-danger");
    }
}

for (i = 0; i < box; i++) {
    td[i].addEventListener("click", function () {
        friend = this.style.backgroundColor;
        if (friend === dummy) {
            div.style.backgroundColor = friend;
            h1.innerHTML = "You Win!!!";
            
            for (i = 0; i < box; i++) {
                td[i].style.backgroundColor = friend;
            }
        } else {
            this.style.backgroundColor = "whitesmoke";
        }
    });
}

function randomnum(ran) {
    num = Math.round(ran * Math.random());
}

function randomcolor() {
    red = Math.round(255 * Math.random());
    green = Math.round(255 * Math.random());
    blue = Math.round(255 * Math.random());
}

function startgame() {
    if (!reset && !diffclick) {
        if(diffclick){
            randomnum(9);
        }else{
            randomnum(6);
        }
        for (i = 0; i < box; i++) {
            randomcolor();
            idvcolor[i] = rgb(red, blue, green);
            td[i].style.backgroundColor = idvcolor[i];
        }

        function rgb(r, g, b) {
            newcolor = "rgb(" + r + ", " + g + ", " + b + ")";
            prevcolor = newcolor;
            if (newcolor != prevcolor) {
                if (num == i) {
                    dummy = newcolor;
                }
                return newcolor;
            } else {
                randomcolor();
                newcolor = "rgb(" + r + ", " + g + ", " + b + ")";
                prevcolor = newcolor;
                if (num == i) {
                    dummy = newcolor;
                }
                return newcolor;
            }
        }
        h3.innerHTML = dummy;
        reset = true;
    }
}