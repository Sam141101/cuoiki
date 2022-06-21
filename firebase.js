
// firebase

const firebaseConfig = {
    apiKey: "AIzaSyDnUtofKu98YlT3SMtoEeop4tp7EwdqZl8",
    authDomain: "do-an-1-1cdce.firebaseapp.com",
    databaseURL: "https://do-an-1-1cdce-default-rtdb.firebaseio.com",
    projectId: "do-an-1-1cdce",
    storageBucket: "do-an-1-1cdce.appspot.com",
    messagingSenderId: "851458767352",
    appId: "1:851458767352:web:b8a3eb569e970c6ecebe0d",
    measurementId: "G-V0FW6W0KSY"
};

firebase.initializeApp(firebaseConfig);


var database = firebase.database();

database.ref("/Doan/temp").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
    }
    else
        console.log("No data available!")
});



database.ref("/Doan").get().then((snapshot) => {
    if (snapshot.exists())
        console.log(snapshot.val())
    else
        console.log("no data available!")
})


// Cập nhật dữ liệu từ firebase sang web
database.ref("/Doan/cold").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let ss1 = snapshot.val();
        if (ss1 == 1) {

            status1.style.backgroundImage = "linear-gradient(45deg, #614cff, #8083ff)";
            status1.style.color = "black";

            btn_active1.style.background = "white";
            btn_active1.style.color = "#6f4fff";
            status1.style.boxShadow = "0px 0px 30px 5px #5493f4";

            cold_text1.style.color = "black";

            console.log('Đã bật chế độ lạnh');
        }
        else {

            status1.style.color = "black";

            btn_active1.style.background = "#282536";
            btn_active1.style.color = "#b7b6bc";
            status1.style.boxShadow = "0px 1px 8px #1f1a1a";

            cold_text1.style.color = "#b7b6bc";

            status1.style.backgroundImage = "none";
            console.log('Đã tắt chế độ lạnh');
        }
    } else
        console.log("No data available!")
});


database.ref("/Doan/fan").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let ss2 = snapshot.val();
        if (ss2 == 1) {

            status2.style.backgroundImage = "linear-gradient(45deg, #614cff, #8083ff)";
            status2.style.color = "black";
            btn_active2.style.background = "white";
            btn_active2.style.color = "#6f4fff";
            status2.style.boxShadow = "0px 0px 30px 5px #5493f4";
            cold_text2.style.color = "black";
            console.log('Đã bật chế độ gió');

        }
        else {
            status2.style.color = "black";
            btn_active2.style.background = "#282536";
            btn_active2.style.color = "#b7b6bc";
            status2.style.boxShadow = "0px 1px 8px #1f1a1a";
            cold_text2.style.color = "#b7b6bc";
            status2.style.backgroundImage = "none";
            console.log('Đã tắt chế độ gió');
        }
    } else
        console.log("No data available!")
});


database.ref("/Doan/dry").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let ss3 = snapshot.val();
        if (ss3 == 1) {
            status3.style.backgroundImage = "linear-gradient(45deg, #614cff, #8083ff)";
            status3.style.color = "black";
            btn_active3.style.background = "white";
            btn_active3.style.color = "#6f4fff";
            status3.style.boxShadow = "0px 0px 30px 5px #5493f4";
            cold_text3.style.color = "black";
            console.log('Đã bật chế độ hơi nước');

        }
        else {
            status3.style.color = "black";
            btn_active3.style.background = "#282536";
            btn_active3.style.color = "#b7b6bc";
            cold_text3.style.color = "#b7b6bc";
            status3.style.boxShadow = "0px 1px 8px #1f1a1a";
            status3.style.backgroundImage = "none";
            console.log('Đã tắt chế độ hơi nước');
        }
    } else
        console.log("No data available!")
});


const slider = document.querySelector("#myRange");

const output = document.querySelector("#nhietdo");

output.innerHTML = slider.value;

database.ref("/Doan/temp").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var changetemp = snapshot.val();
        if (changetemp > Number(34)) {
            database.ref("/Doan").update({
                "off": "0",
                "cold": "1",
                "fan": "0",
                "dry": "0"
            });
        }
        else if ((changetemp > Number(29)) && (changetemp < Number(34))) {
            database.ref("/Doan").update({
                "off": "0",
                "fan": "0",
                "cold": "0",
                "dry": "1"
            });
        }
        else if (changetemp < Number(15)) {
            database.ref("/Doan").update({
                "off": "1",
                "cold": "0",
                "dry": "0",
                "fan": "0"
            });
            console.log('thành công');
            off();
        }
        else {
            database.ref("/Doan").update({
                "off": "0",
                "dry": "0",
                "cold": "0",
                "fan": "1"
            });
        }
    }
    else
        console.log("No data available!")
});


slider.oninput = function () {
    slider_nhietdo.innerHTML = slider.value;
    database.ref("/slider").update({
        nhietdo: slider.value
    });
    check();
    console.log("nhiệt độ" + " " + output.innerHTML);
}

database.ref("/slider/nhietdo").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var slider_nhietdo = snapshot.val();
        document.getElementById("slider_nhietdo").innerHTML = slider_nhietdo;
        document.getElementById("myRange").value = slider_nhietdo;
    }
    else
        console.log("No data available!")
});

const sum = document.querySelector('#sum');
const minus = document.getElementById('minus');
let tong = 1;
const slider_nhietdo = document.getElementById("slider_nhietdo");

// nút cộng
sum.onclick = function () {

    database.ref("/slider").update({
        nhietdo: parseInt(slider.value) + 1
    });
    console.log("bật")
    check();
}

// nút trừ
minus.onclick = function () {

    database.ref("/slider").update({
        nhietdo: parseInt(slider.value) - 1
    });
    console.log("tắt")
    check();
}


check = function () {

    if (Number(slider.value) > Number(34)) {
        database.ref("/Doan").update({
            "cold": "1",
            "fan": "0",
            "dry": "0"
        });
    }
    else if ((Number(slider.value) > Number(29)) && (Number(slider.value) < Number(34))) {
        database.ref("/Doan").update({
            "fan": "0",
            "cold": "0",
            "dry": "1"
        });
    }
    // else if (Number(slider.value) < Number(15)) {
    //     database.ref("/Doan").update({
    //         "fan": "0",
    //         "cold": "0",
    //         "dry": "0"
    //     });
    // }
    else {
        // Btn 3
        database.ref("/Doan").update({
            "dry": "0",
            "cold": "0",
            "fan": "1"
        });
    }
}


// control temp and humi
database.ref("/Doan/control-temp").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let c1 = snapshot.val();
        if (c1 == 1) {

            control_icon.style.background = "#ef1f1f";
            control_icon.style.color = "white";
            control_icon.style.boxShadow = "0px 1px 8px #cc1648";
            document.getElementById("control-selection").innerHTML = "Temperature";
        }
        else {
            control_icon.style.background = "white";
            control_icon.style.color = "#614cff";
            control_icon.style.boxShadow = "0px 1px 8px #280be6";
            control_icon.style.backgroundImage = "none";
            document.getElementById("control-selection").innerHTML = "Humidity";
        }
    } else
        console.log("No data available!")
});




// Tự tắt hết các chế độ

const nhietdo_C = document.getElementById("nhietdo_C");

off = function () {
    database.ref("/Doan/off").on("value", function (snapshot) {
        if (snapshot.exists()) {
            let off = snapshot.val();
            if (off == 1) {

                slider_nhietdo.style.display = "none";
                nhietdo_C.style.display = "none";
            }
            else {
                slider_nhietdo.style.display = "block";
                nhietdo_C.style.display = "block";
            }
        } else
            console.log("No data available!")
    });
}



