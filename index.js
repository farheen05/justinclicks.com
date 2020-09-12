function login() {
    var email = document.getElementById("InputEmail").value;
    var uname = document.getElementById("InputUsername").value;
    var pwd = document.getElementById("InputPassword").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == '') {
        alert("Please enter the email address!");
    } else if (uname == '') {
        alert("Please enter the firstname!");
    } else if (pwd == '') {
        alert("Please enter the mobile no.");
    } else if (!filter.test(email)) {
        alert("Please enter a valid email ID.");
    } else if (pwd.length < 10 || pwd.length > 10) {
        alert("The Mobiloe Number should only be 10 characters long!");
    } else {
        alert("Welcome, " + uname);
    }
}