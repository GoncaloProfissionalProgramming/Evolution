function OpenMenu(){
    document.getElementById("ContainerMenu").style.zIndex="1";
    document.getElementById("Main").style.zIndex = "0";
    document.getElementById("ContainerMenu").style.opacity=0.95;
    document.getElementById("barraNav").style.display = "none";
}

function closeMenu(){
    document.getElementById("Main").style.zIndex = "1";
    document.getElementById("ContainerMenu").style.zIndex="0";
    document.getElementById("barraNav").style.display = "inline";
}