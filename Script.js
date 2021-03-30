function save(){
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var pagelocation = window.location.href;
    document.cookie = "save" + pagelocation + ";" + expires;
    alert(document.cookie)

}


function load(){    
    var x = getCookie("save");
    alert(x);

}


// adapted from W3schools https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    alert("not working")
    return "";
  }