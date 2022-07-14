
function colorMood() {  
var Mood = document.getElementById("answer").value;
    if (Mood >= 7) {  
       document.getElementById("comment").innerHTML = " I hope you have a wonderful rest of your day! :)";       
       document.body.style.backgroundColor = "purple";
      }
    
      else {
    document.getElementById("comment").innerHTML = "Do something nice for yourself today! Read a book, go outside and take a walk or talk to a friend you have not spoken to in a while! :)";    
     document.body.style.backgroundColor= "yellow";
       }
    }

    f