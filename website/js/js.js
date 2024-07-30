function change(){
    var imgElement=document.getElementById("campus");
    if(imgElement.src.endsWith("jigyo.jpg")){
        imgElement.src="images/yoneyama.jpg";
    }
    else if(imgElement.src.endsWith("images/yoneyama.jpg")){
        imgElement.src="images/animemanga.jpg";
    }
    else{imgElement.src="images/jigyo.jpg";
    }
}
