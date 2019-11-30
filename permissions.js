/*export const signInPermissions = function() {
    const account_status = getAccountStatus();
    let account_type = account_status.data.account_type
        if (account_type == "user" || account_type == "private") {
            document.getElementById("sign_in").style.visibility = "hidden";
            document.getElementById("sign_out").style.visibility = "show";
            document.getElementById("sign_in").replaceWith(document.getElementById("sign_out"));
            lactationData.forEach(room => {
                document.getElementById(room.id+"AddCommentButton").style.visbility = "show";
            });
        } else {
            document.getElementById("sign_in").style.visibility = "show";
            document.getElementById("sign_out").style.visibility = "hidden";  
            lactationData.forEach(room => {
                document.getElementById(room.id+"AddCommentButton").style.visbility = "hidden";
            });          
        }
}



export const getAccountStatus = async function() {
    const response = await axios({
        method: "get",
        url: "http://localhost:3000/account/status",
        
    });
    
    return response;

    let r = axios.get('http://localhost:3000/account/status',
        {
            headers: {
                //jwt is the jwt from logging in
                    "Authorization": "Bearer " + jwt
            },
            
        });

    r.then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });

}


$(function() {
    signInPermissions();
})*/