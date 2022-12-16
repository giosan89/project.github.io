
function scriptForm() 
{ 
    var name = document.forms["Form"]["Name"];  
    var email = document.forms["Form"]["Email"];
    var phone = document.forms["Form"]["Cellphone"];               
    var rad = document.forms["Form"]["Gender"];

    //checks if name field is empty
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    
    //checks if phone field is empty
    if (phone.value == "")                           
    { 
        window.alert("Please enter your cellphone number."); 
        phone.focus(); 
        return false; 
    } 

    //checks if email field is empty
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    //checks if email field contains @
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    //checks if email field contains .
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    //checks if any of the radio buttons was selected
    if (rad.selectedIndex == null)                  
    { 
        alert("Please select a gender."); 
        rad.focus(); 
        return false; 
    }

    //checks if any of the courses from drop down menu was selected
    if (what.selectedIndex < 1)                  
    { 
        alert("Please enter your plan."); 
        what.focus(); 
        return false; 
    }

    //if everything is filled up/selected then submission will continue without the browser giving any alert dialog boxes
    return true; 
}