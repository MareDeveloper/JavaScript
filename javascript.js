

// var getPosition = getPosition(loginButton);
// console.log('Pozicija dugmeta je ' + getPosition.x + ", " + getPosition.y);
// Function for Login Button
function fnLogin() 
{   
    //With DOM call buttons from HTML
    var logBtn = document.getElementById('logBtn');
    var logForm = document.getElementById('logForm');

    //Don't display confirm Password in Login form 
    document.getElementById('conf-pass').style.display = 'none';
    // Get cordinate from a Buttons
    document.getElementById('logForm').style.left = document.getElementById('logBtn').offsetLeft;
    document.getElementById('logForm').style.top = document.getElementById('logBtn').offsetTop + document.getElementById('logBtn').offsetHeight; 
    // document.getElementById('logForm').style.display = 'block';
    // When click on Login Button, open slow.
    $('#logForm').slideToggle('slow');
}
// Function for a Register form
function fnRegister() 
{   
    // Get a Buttons form HTML...
    var regBtn = document.getElementById('regBtn');
    var logForm = document.getElementById('logForm');
    
    // Get cordinate for a Button...
    document.getElementById('logForm').style.left = document.getElementById('regBtn').offsetLeft;
    document.getElementById('logForm').style.top = document.getElementById('regBtn').offsetTop+document.getElementById('regBtn').offsetHeight; 

    // Show confirm Password in Register form
    document.getElementById('conf-pass').style.display = 'block';

    // document.getElementById('logForm').style.display = 'block';
    // Open Register form slow.
    $('#logForm').slideToggle('slow');
    
}
// When click on Buttons, close forms.
function closeForm() 
{
    document.getElementById('logForm').style.display = 'none';
}
// Open console.log() see user name recomendation...
$('#user-name').on('keyup', function(){
    console.log($(this).val());
}); 




