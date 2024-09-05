var user_name = document.getElementById('user');
var pass_word = document.getElementById('pass');
var error1 = document.getElementById('err1');
var error2 = document.getElementById('err2');

function akash(callback) {
    if (user_name.value == '' || pass_word.value == '') {
        alert('Fill the details');
    } else if (user_name.value == 'admin' && pass_word.value == '12345') {
        error1.innerText = 'user name is valid';
        error1.style.color = 'green';
        error1.style.fontStyle = 'italic';
        error2.innerHTML = 'password is valid';
        error2.style.color = 'green';
        error2.style.fontStyle = 'italic';

        // Execute the callback function if login is successful
        if (callback && typeof callback === 'function') {
            callback();
        }
    } else {
        alert('user name and Password is Invalid');
    }
    return false;
}

// Example usage of the akash function with a callback
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    akash(function() {
        window.location.href = 'second.html';
    });
};





// var reguser=/^([a-zA-Z\s])+$/
// var regpass=/^([0-9]{5})$/


// function submit(){
//     if(reguser.test(user_name.value)){
//         error1.innerText='username valid';
//         error1.style.color='green';

//     }else{
//         error1.alert('invalid username');

//     }
//     if(regpass.test(password.value)){
//         error2.innerText='password valid';
//         error2.style.color='green';
        
//     }else{
        
//         error2.alert('invalid password');
//     }
//     return false;
// }