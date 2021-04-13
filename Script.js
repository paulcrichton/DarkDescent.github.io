function save(){
    var d = new Date();

    d.setTime(d.getTime() + (365*24*60*60*1000));

    var expires = "expires="+ d.toUTCString();
    var pagelocation = window.location.href;

    document.cookie = "save" + "=" + pagelocation + ";" + expires;
    alert("saved")

}


function load(){    
    var x = getCookie("save");
    window.location.href = x

}


// inspired from W3schools https://www.w3schools.com/js/js_cookies.asp
function getCookie(cookieName) {

    var name = cookieName + "=";
    var cookieArray = document.cookie.split(';');

    for(var counter = 0; counter < cookieArray.length; counter++) {
      
      var cookie = cookieArray[counter];
      
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }

    }

    alert("not working");
    return "";

  }

var text_Counter = 0;

function change_text(){
    let scentences = ["Stop it", "haha funny now go back to the start", "Nah stop it", "Ok maybe you might get something if you keep clicking", "Go on", "2 more", "Last one", "Lol you thought"];
    switch(text_Counter){
      case 0:
        document.getElementById("joke").innerHTML = "Stop it";
        break;
      case 1:
        document.getElementById("joke").innerHTML = "haha funny now go back to the start";
        break;
      case 2:
        document.getElementById("joke").innerHTML = "Nah Stop It";
        break;
      case 3:
        document.getElementById("joke").innerHTML = "Ok maybe you might get something if you keep clicking";
        break;
      case 4:
        document.getElementById("joke").innerHTML = "Go on";
        break;
      case 5:
        document.getElementById("joke").innerHTML = "2 more";
        break;
      case 6:
        document.getElementById("joke").innerHTML = "Last one";
        break;
      case 7:
        document.getElementById("joke").innerHTML = "Lol you thought :)";
        break;
    }
    text_Counter += 1;
}

