// Cold
const status1 = document.querySelector("#status1");
let num1 = 3;
const btn_active1 = document.querySelector("#btn_active1");
const cold_text1 = document.querySelector("#cold_text1");


status1.onclick = function () {
    num1++;
    if (num1 % 2 == 0) {
        database.ref("/Doan").update({
            "cold": "1"
        });
    }
    else {
        database.ref("/Doan").update({
            "cold": "0"
        });
    }
}


// Fan

const status2 = document.querySelector("#status2");
let num2 = 1;
const btn_active2 = document.querySelector("#btn_active2");
const cold_text2 = document.querySelector("#cold_text2");

status2.onclick = function () {
    num2++;
    if (num2 % 2 == 0) {
        database.ref("/Doan").update({
            "fan": "1"
        });
    }
    else {
        database.ref("/Doan").update({
            "fan": "0"
        });
    }
}


// Dry

const status3 = document.querySelector("#status3");
let num3 = 1;
const btn_active3 = document.querySelector("#btn_active3");
const cold_text3 = document.querySelector("#cold_text3");

status3.onclick = function () {
    num3++;
    if (num3 % 2 == 0) {
        database.ref("/Doan").update({
            "dry": "1"
        });
    }
    else {
        database.ref("/Doan").update({
            "dry": "0"
        });
    }
}

const control_icon = document.querySelector("#control_icon");
let control = 1;
// const btn_active2 = document.querySelector("#btn_active2");
// const cold_text2 = document.querySelector("#cold_text2");

control_icon.onclick = function () {
    control++;
    if (control % 2 == 0) {
        database.ref("/Doan").update({
            "control-temp": "1",
            "control-humi": "0"

        });
    }
    else {
        database.ref("/Doan").update({
            "control-humi": "1",
            "control-temp": "0"
        });
    }
}


