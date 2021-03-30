function save(){
    document.cookie =  window.location.href;
    var x = document.cookie;
    alert("Saved!")
}


function load(){    
        var x = document.cookie;
        window.location.href = x;


}
