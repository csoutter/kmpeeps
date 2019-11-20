export const handleCreateAccount = async function(event) {
    //go back to index.html with proper permissions or throw error/alert message

    event.preventDefault();

    console.log("hello")
    /*
    const response = await axios({
        method: "post",
        url: "http://localhost:3000/account/create",
        withCredentials: true,
        body: {
            first: $(`#fname`).val(),
            last: $(`#lname`).val(),
            username: $(`#uname`).val(),
            password: $(`#pswrd`).val(),
            account_type: "user"
        }
    });*/

    window.location.href = "http://localhost:3000/index.html"

    //window.location = "index.html"

}

export const loadSignUpForm = function() {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    const form = `
    <form class="container">
        <div class="container imgcontainer">
            <img src="pictures/user.png" alt="Avatar" class="avatar">
        </div>
    
        <div class="container">
            <label for="uname"><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="first" id="fname" required>

            <label for="uname"><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name" name="last" id="lname" required>

            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" id="uname" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="pswrd" required>
        
            <a href="index.html"><button class="button_signIn" type="submit" id="createAccountButton">Create New Account</button></a>
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
    $(`#createAccountButton`).on("click", null, null, handleCreateAccount);
};

$(function() {
    loadSignUpForm();
});