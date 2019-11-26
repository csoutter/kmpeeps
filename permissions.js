/*export const signInPermissions = function() {
    const account_status = getAccountStatus();
    let account_type = account_status.data.account_type
        if (account_type == "user" || account_type == "private") {
            document.getElementById("sign_in").style.visibility = "hidden";
            document.getElementById("sign_out").style.visibility = "show";
            document.getElementById("sign_in").replaceWith(document.getElementById("sign_out"));
        } else {
            document.getElementById("sign_in").style.visibility = "show";
            document.getElementById("sign_out").style.visibility = "hidden";            
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
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hyaXMiLCJkYXRhIjp7InJvbGUiOjIsImRlc2NyaXB0aW9uIjoiTGF6eS4uLiJ9LCJpYXQiOjE1Njk5MDE4OTcsImV4cCI6MTU3MjQ5Mzg5N30.DRZZQw2Hfex7Z7E_SAcgtUfRk1C-wVmauyMXqG3SrB0`
              }
            
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