function sidebaropen(){
    var s = document.getElementById("sidebar");
    var gridcontainer = document.getElementById("grid-container");
        s.style.display = "flex";
        gridcontainer.style.filter = "brightness(50%)";
}


function sidebarclose(){
    var s = document.getElementById("sidebar");
    var gridcontainer = document.getElementById("grid-container");
        s.style.display = "none";
        gridcontainer.style.filter = "brightness(100%)";
}