//let axios = require('axios');
export const handleSubmitSignIn = async function (event) {
    //go back to index.html with proper permissions or throw error/alert message

    event.preventDefault();

   // console.log($(`#uname-signIn`).val())

    let r = await axios({
        method: "post",
        url: "http://localhost:3000/account/login",
        data: {
            name: "" + $(`#uname-signIn`).val() + "",
            pass: "" + $(`#pswrd-signIn`).val() + ""
        }
    });

    /*
    let r = axios.post('http://localhost:3000/account/login', {
        name: "" + $(`#uname-signIn`).val() + "",
        pass: "" + $(`#pswrd-signIn`).val() + ""
    });*/

    console.log(r)
    window.jwt = r.data.jwt
/*
    r.then(response => {
        console.log(response.data);
        window.jwt = response.data.jwt
    }).catch(error => {
        alert(error);
    });*/

    
    let req = axios.get('http://localhost:3000/account/status', 
        {
            headers: {
                "Authorization": "Bearer " + window.jwt
            }
        }
    );

    req.then(response => {
        console.log(response.data);
        window.location.href = "http://localhost:3001/signed_in.html"

        //document.getElementById("sign_in").remove()
        //document.getElementById("sign_out").style.visibility = "show";
    }).catch(error => {
        alert(error);
    });
    

}

export const loadSignInForm = function () {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    const form = `
    <form class="container">
        <div class="container imgcontainer">
            <img src="pictures/user.png" alt="Avatar" class="avatar">
        </div>
    
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" id="uname-signIn" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="pswrd-signIn" required>
        
            <button class="button_signIn" type="submit" id="signInButton">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>
    
        <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="button cancelbtn" id="cancelButton-signIn"><a href="index.html" style="text-decoration: none; color: white;">Cancel</a></button>
            
            <span class="psw" style="padding-right: 20px;"><a href="sign_up.html">Create New Account</a></span>
        </div>
    </form>
    `;
    // removed forgot password because logic is not needed for assignment; see code below
    /*
    <span class="psw">Forgot <a href="#">Password?</a></span>
    */
    $root.append(form);
    //set listeners for each added element
    $(`#signInButton`).on("click", null, null, handleSubmitSignIn);
};


$(function () {
    loadSignInForm();
});