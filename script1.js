let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let a="admin"

submitBtn.addEventListener("click", () => {
    let username_data = document.getElementById("username-field").value;
    let password_data = document.getElementById("password-field").value;

    if (username_data === a && password_data === a ) {
        window.location.href = "currency_convertor.html";
    } else {
        alert("Invalid Username or Password");
    }
});

resetBtn.addEventListener("click", () => {
    document.getElementById("username-field").value = "";
    document.getElementById("password-field").value = "";
});
