function save(){
    document.cookie =  currentUrl;
    var x = document.cookie;
    alert("Saved!")
}


function load(){    
    try{
        var x = document.cookie;
        window.location.href = x;
    }catch{
        alert(X)
    }
}
