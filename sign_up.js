export const handleCancelSignIn = function(event) {
    //go back to index.html
}

export const handleSubmitSignIn = function(event) {
    //go back to index.html with proper permissions or throw error/alert message
}

export const handleCreateAccount = function(event) {
    //go back to index.html with proper permissions or throw error/alert message

    event.preventDefault();
    
    const response = await axios({
        method: "post",
        url: "http://localhost:3000/account/create",
        withCredentials: true,
        body: {}
    });
}

export const loadSignInForm = function() {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    const form = `
    <form class="container"action="action_page.php" method="post">
        <div class="container imgcontainer">
            <img src="pictures/user.png" alt="Avatar" class="avatar">
        </div>
    
        <div class="container">
            <label for="uname"><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="first" required>

            <label for="uname"><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name" name="last" required>

            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
        
            <button class="button_signIn" type="submit" id="createAccountButton"<Create New Account</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>
    
        <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="button cancelbtn" id="cancelButton"><a href="index.html" style="text-decoration: none; color: white;">Cancel</a></button>
        </div>
    </form>
    `;
    $root.append(form);
    //set listeners for each added element
    $(`#signInButton`).on("click", null, room, handleSubmitSignIn);
    $(`#cancelButton`).on("click", null, room, handleCancelSignIn);
    $(`#createAccountButton`).on("click", null, room, handleCreateAccount)
};

$(function() {
    loadSignInForm();
});