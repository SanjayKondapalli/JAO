document.getElementById("addComp").onclick = function(){

   
    var text = document.getElementById("myText").value;
    var id1 = document.getElementById("jobapp_status").value;
    var li = document.createElement("li")
    li.innerHTML = text;//"<li class='list-group-item' draggable='true' ondragstart='drag(event)'>" + text + "<li>";
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('draggable', 'true');
    li.setAttribute('ondragstart', 'drag(event)');
    
    document.getElementById(id1).appendChild(li);

    document.getElementById("myText").value = "";
    document.getElementById("jobapp_status").value = "applied";
    console.log("Got it!");
    
}