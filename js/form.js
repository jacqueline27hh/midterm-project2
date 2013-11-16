 //create function that will grab all the id
 function register()
    {
        var x = new Array();
        x[0] = document.getElementById('name').value;
        x[1] = document.getElementById('email').value;
        x[2] = document.getElementById('phone').value;
        x[3] = document.getElementById('address').value;
        x[4] = document.getElementById('postalcode').value;
        x[5] = document.getElementById('comments').value;

     
       //return user input
       //going to try div overlay to style the alert box next time:)

        var r = new Array(); // required field validation // grab all the error 
        r[0] = "<span style = 'color: red'>Please enter your name</span>";
        r[1] = "<span style = 'color: red'>Please enter your email</span>";
        r[2] = "<span style = 'color: red'>Please enter your phone</span>";
        r[3] = "<span style = 'color: red'>Please enter your address</span>";
        r[4] = "<span style = 'color: red'>Please enter your postal code</span>";
        r[5] = "<span style = 'color: red'>Please enter your comments</span>";

        // error flag 
        var flag = 0; // if 0 then there is no error , if 1 there is at least one error

        //document.getElementById('v-name').innerHTML ="It Works!";

        var divs= new Array("v-name","v-email", "v-phone", "v-address", "v-postalcode","v-coments")

        // for(i in x)
        for(i=0; i<x.length;i++)
        {
        
            var error = r[i]
            var div = divs[i]

            if(x[i]=="")
            {
                document.getElementById(div).innerHTML = error;
                return(alert("please fill out all the text area in the form before submitting "));
                
            }
            else 
            {
               try
                {
                    //expression validation
                    var validation_name = /^[A-Z]/;
                    var validation_phone = /^\d{10}$/;
                    var validation_email = /^[a-zA-Z0-9.!#$%&amp;'*+\-\/=?\^_`{|}~\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*$/;
                    var validation_postalcode =  /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
                   
                    
                    switch(i)
                    {
                        case 0: 
                                if (!validation_name.test(x[i])) {
                                    flag = 1;
                                    throw "Capitalize the first letter in your name";
                                }
                                break; 
                        case 1:
                                if(!validation_email.test(x[i])){
                                    flag = 1;

                                    throw "invalid email"
                                }
                                break; 
                        case 2:
                                if(!validation_phone.test(x[i])){
                                    flag = 1;

                                    throw "invalid phone"
                                }
                                break; 
                        case 4:
                                if(!validation_postalcode.test(x[i])){
                                    flag = 1;

                                    throw "invalid postal code"
                                }
                                 break; 
                    }
                }
                catch(e)
                {
                    alert(e);

                } 
   
            }
           
        }

        if(flag==0){
            //thank you message
        return(alert("thank you, "+x[0] + ". I will get back to you as soon as possible."));  
        }
        
      
    }

