
// Btn 1

let ss_status = document.getElementById('ss_status');
let ss_btn = document.getElementById('ss_btn');
let ss_logo = document.getElementById('ss_logo');
let ss_text = document.getElementById('ss_text');
var checkbox_toggle = document.getElementById('light-dark');
let ss_num = 3;

checkbox_toggle.onclick = function () {
    ss_num++;
    if (ss_num % 2 == 0) {
        ss_status.style.backgroundImage = "linear-gradient(45deg, #614cff, #8083ff)";
        // ss_status.style.backgroundImage = "linear-gradient(0deg, #614cff, #8083ff)";
        ss_logo.style.color = "#6f4fff";
        ss_logo.style.background = "white";
        ss_text.style.color = "white";
        ss_btn.innerHTML = "On";
        console.log("bật")
    }
    else {
        ss_status.style.backgroundImage = "white";
        ss_status.style.backgroundImage = "none";
        ss_logo.style.color = "white";
        ss_logo.style.background = "linear-gradient(0deg, #614cff, #8083ff)";
        ss_text.style.color = "#2b3674";
        ss_btn.innerHTML = "Off";
        console.log("tắt")

    }
}


// Btn 2

let ss_status1 = document.getElementById('ss_status1');
let ss_btn1 = document.getElementById('ss_btn1');
let ss_logo1 = document.getElementById('ss_logo1');
let ss_text1 = document.getElementById('ss_text1');
var checkbox_toggle1 = document.getElementById('light-dark1');
let ss_num1 = 3;

checkbox_toggle1.onclick = function () {
    ss_num1++;
    if (ss_num1 % 2 == 0) {
        ss_status1.style.backgroundImage = "linear-gradient(45deg, #614cff, #8083ff)";
        ss_logo1.style.color = "#6f4fff";
        ss_logo1.style.background = "white";
        ss_text1.style.color = "white";
        ss_btn1.innerHTML = "On";
        console.log("bật")
    }
    else {
        ss_status1.style.backgroundImage = "white";
        ss_status1.style.backgroundImage = "none";
        ss_logo1.style.color = "white";
        ss_logo1.style.background = "linear-gradient(0deg, #614cff, #8083ff)";
        ss_text1.style.color = "#2b3674";
        ss_btn1.innerHTML = "Off";
        console.log("tắt")
    }
}


// Btn 3

let ss_status2 = document.getElementById('ss_status2');
let ss_btn2 = document.getElementById('ss_btn2');
let ss_logo2 = document.getElementById('ss_logo2');
let ss_text2 = document.getElementById('ss_text2');
var checkbox_toggle2 = document.getElementById('light-dark2');
let ss_num2 = 3;

checkbox_toggle2.onclick = function () {
    ss_num2++;
    if (ss_num2 % 2 == 0) {
        ss_status2.style.backgroundImage = "linear-gradient(45deg, #614cff, #8083ff)";
        // ss_status2.style.backgroundImage = "linear-gradient(0deg, #614cff, #8083ff)";
        ss_logo2.style.color = "#6f4fff";
        ss_logo2.style.background = "white";
        ss_text2.style.color = "white";
        ss_btn2.innerHTML = "On";
        console.log("bật")
    }
    else {
        ss_status2.style.backgroundImage = "white";
        ss_status2.style.backgroundImage = "none";
        ss_logo2.style.color = "white";
        ss_logo2.style.background = "linear-gradient(0deg, #614cff, #8083ff)";
        ss_text2.style.color = "#2b3674";
        ss_btn2.innerHTML = "Off";
        console.log("tắt")
    }
}


// Btn 4

let ss_status3 = document.getElementById('ss_status3');
let ss_btn3 = document.getElementById('ss_btn3');
let ss_logo3 = document.getElementById('ss_logo3');
let ss_text3 = document.getElementById('ss_text3');
var checkbox_toggle3 = document.getElementById('light-dark3');
let ss_num3 = 3;

checkbox_toggle3.onclick = function () {
    ss_num3++;
    if (ss_num3 % 2 == 0) {
        ss_status3.style.backgroundImage = "linear-gradient(45deg, #614cff, #8083ff)";
        ss_logo3.style.color = "#6f4fff";
        ss_logo3.style.background = "white";
        ss_text3.style.color = "white";
        ss_btn3.innerHTML = "On";
        console.log("bật")
    }
    else {
        ss_status3.style.backgroundImage = "white";
        ss_status3.style.backgroundImage = "none";
        ss_logo3.style.color = "white";
        ss_logo3.style.background = "linear-gradient(0deg, #614cff, #8083ff)";
        ss_text3.style.color = "#2b3674";
        ss_btn3.innerHTML = "Off";
        console.log("tắt")
    }
}


