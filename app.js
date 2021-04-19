window.addEventListener('load', function() {    
    function deats() {
        
        //get email
        var email = document.getElementById('email').value;

        //get password
        var password = document.getElementById('password').value;

        
        
        window.alert("Email is: " + email);
        window.alert("Password is: " + password);
    }
    
    var signup = document.getElementById('signup');
    signup.addEventListener('click', deats);
});