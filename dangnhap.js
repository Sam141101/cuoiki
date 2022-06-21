// Đăng nhập

const login = document.getElementById('login');
const login_box = document.getElementById('login-box');
const main = document.getElementById('main');



login.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            // const dt = new Date();

            // var sang = user.uid;

            // database.ref('/users/' + user.uid).set({
            //     email: email,
            // });

            login_box.style.display = 'none';
            main.style.display = 'block';


            alert('User loged in!');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            login_box.style.display = 'block';
            main.style.display = 'none';
            alert(errorMessage);
        });

});



// Thoát
const dong = document.querySelector('.close');
dong.addEventListener('click', () => {
    login_box.style.display = 'block';
    main.style.display = 'none';
})
