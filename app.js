function getData(pagename){
    var req = new XMLHttpRequest();
    req.open("get",pagename);
    req.onload=function(){
        var content = document.getElementById("content");
        content.innerHTML=this.responseText;
    }
    req.send();
}

