var zoomin=document.getElementById("zoomin");
var zoomout=document.getElementById("zoomout");
var image=document.getElementById("image");

zoomin.addEventListener("click",function(){
    var width=image.clientWidth;
    var height=image.clientHeight;
    if(width>=400 && height>=400){
        alert("max width and height exist");
    }else{
        image.style.width=(width+20)+"px";
        image.style.height=(height+20)+"px";
    }
});

zoomout.addEventListener("click",function(){
    var width=image.clientWidth;
    var height=image.clientHeight;
    if(width<=200 && height<=200){
        alert("min width and height exit");
    }else{
        image.style.width=(width-20)+"px";
        image.style.height=(height-20)+"px";
    }
});
