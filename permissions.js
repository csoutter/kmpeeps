function signInPermissions() {
    let signed_in = false;
        if (signed_in) {
            document.getElementById("sign_in").style.visibility = "hidden";
            document.getElementById("sign_out").style.visibility = "show";
            document.getElementById("sign_in").replaceWith(document.getElementById("sign_out"));
        } else {
            document.getElementById("sign_in").style.visibility = "show";
            document.getElementById("sign_out").style.visibility = "hidden";            
        }
}

$(function() {
    signInPermissions();
});