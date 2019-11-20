export const handleSubmitSignIn = async function(event) {
    //go back to index.html with proper permissions or throw error/alert message

    event.preventDefault();

    console.log("hello")
/*
    const response = await axios({
        method: "post",
        url: "http://localhost:3000/account/create",
        withCredentials: true,
        body: {
            username: $(`#uname`).val(),
            password: $(`#pswrd`).val()
        }
    });*/
    window.location.href = "http://localhost:3000/index.html"
}

export const loadSignInForm = function() {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    const form = `
    <form class="container">
        <div class="container imgcontainer">
            <img src="pictures/user.png" alt="Avatar" class="avatar">
        </div>
    
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" id="uname" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="pswrd" required>
        
            <button class="button_signIn" type="submit" id="signInButton">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>
    
        <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="button cancelbtn" id="cancelButton"><a href="index.html" style="text-decoration: none; color: white;">Cancel</a></button>
            <span class="psw">Forgot <a href="#">Password?</a></span>
            <span class="psw" style="padding-right: 20px;"><a href="sign_up.html">Create New Account</a></span>
        </div>
    </form>
    `;
    $root.append(form);
    //set listeners for each added element
    $(`#signInButton`).on("click", null, null, handleSubmitSignIn);
};

$(function() {
    loadSignInForm();
});