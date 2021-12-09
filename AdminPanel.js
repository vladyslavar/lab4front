function CreateChangeColor()
{
    var toAppend1 = document.getElementsByClassName("forRemove")[0];
    var conteinr = document.createElement("div");
    conteinr.className = "Container";
    toAppend1.appendChild(conteinr);

    var toAppend2 = conteinr
    var row1 = document.createElement("div");
    row1.className = "firstRow";
    toAppend2.appendChild(row1);

    var row2 = document.createElement("div");
    row2.className = "secondRow";
    toAppend2.appendChild(row2);

    var toAppend3 = row1;
    var drag1 = document.createElement("img");
    drag1.id = "drag1";
    drag1.src = "1.png";
    drag1.draggable = "true";
    drag1.setAttribute("ondragstart","drag(event)" );
    drag1.width="128";
    drag1.height="128";
    toAppend3.appendChild(drag1);

    var drag2 = document.createElement("img");
    drag2.id = "drag2";
    drag2.src = "2.png";
    drag2.draggable = "true";
    drag2.setAttribute("ondragstart","drag(event)" );
    drag2.width="128";
    drag2.height="128";
    toAppend3.appendChild(drag2);

    var toAppend4 = row2;
    var drag3 = document.createElement("img");
    drag3.id = "drag3";
    drag3.src = "3.png";
    drag3.draggable = "true";
    drag3.setAttribute("ondragstart","drag(event)" );
    drag3.width="128";
    drag3.height="128";
    toAppend4.appendChild(drag3);

    var drag4 = document.createElement("img");
    drag4.id = "drag4";
    drag4.src = "4.png";
    drag4.draggable = "true";
    drag4.setAttribute("ondragstart","drag(event)" );
    drag4.width="128";
    drag4.height="128";
    toAppend4.appendChild(drag4);


    var arrow = document.createElement("p");
    arrow.className = "Arrow";
    arrow.textContent = "➔";
    toAppend1.appendChild(arrow);


    var conteinr2 = document.createElement("div");
    conteinr2.className = "ContainerEmpty";
    toAppend1.appendChild(conteinr2);

    var toAppend5 = conteinr2
    var row3 = document.createElement("div");
    row3.className = "firstRow";
    toAppend5.appendChild(row3);

    var row4 = document.createElement("div");
    row4.className = "secondRow";
    toAppend5.appendChild(row4);

    var toAppend6 = row3;
    var div1 = document.createElement("div");
    div1.id = "div1";
    div1.setAttribute("ondrop","drop(event)" );
    div1.setAttribute("ondragover", "allowDrop(event)");
    toAppend6.appendChild(div1);

    var div2 = document.createElement("div");
    div2.id = "div2";
    div2.setAttribute("ondrop","drop(event)" );
    div2.setAttribute("ondragover", "allowDrop(event)");
    toAppend6.appendChild(div2);

    var toAppend7 = row4;
    var div3 = document.createElement("div");
    div3.id = "div3";
    div3.setAttribute("ondrop","drop(event)" );
    div3.setAttribute("ondragover", "allowDrop(event)");
    toAppend7.appendChild(div3);

    var div4 = document.createElement("div");
    div4.id = "div4";
    div4.setAttribute("ondrop","drop(event)" );
    div4.setAttribute("ondragover", "allowDrop(event)");
    toAppend7.appendChild(div4);



}

function RestartOrder()
{
    var delete1 = document.getElementsByClassName("Container")[0];
    delete1.remove();
    var delete2 = document.getElementsByClassName("Arrow")[0];
    delete2.remove();
    var delete3 = document.getElementsByClassName("ContainerEmpty")[0];
    delete3.remove();
    CreateChangeColor();
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

function SaveColor()
{
    var color = document.getElementsByClassName("color")[0]
    console.log(color.value);
    
    //var url = "https://localhost:44362/api/admin/postcolor/"+color.value;
    var url = "https://gelder.ga/api/admin/postcolor/"+color.value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};
    xhr.send();

}
function SaveSize()
{
    var size = document.getElementsByClassName("size")[0]
    console.log(size.value);

    
    //var url = "https://localhost:44362/api/admin/postwh/"+size.value+"/"+size.value;
    var url = "https://gelder.ga/api/admin/postwh/"+size.value+"/"+size.value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};
    xhr.send();

}
function SaveOrder()
{
    var order = [];

    var firstimg = document.getElementById("drag1").parentElement;
    if(firstimg.id == "div1") order[0] = "1";
    if(firstimg.id == "div2") order[1] = "1";
    if(firstimg.id == "div3") order[2] = "1";
    if(firstimg.id == "div4") order[3] = "1";

    var secimg = document.getElementById("drag2").parentElement;
    if(secimg.id == "div1") order[0] = "2";
    if(secimg.id == "div2") order[1] = "2";
    if(secimg.id == "div3") order[2] = "2";
    if(secimg.id == "div4") order[3] = "2";

    var thirdimg = document.getElementById("drag3").parentElement;
    if(thirdimg.id == "div1") order[0] = "3";
    if(thirdimg.id == "div2") order[1] = "3";
    if(thirdimg.id == "div3") order[2] = "3";
    if(thirdimg.id == "div4") order[3] = "3";

    var fourthimg = document.getElementById("drag4").parentElement;
    if(fourthimg.id == "div1") order[0] = "4";
    if(fourthimg.id == "div2") order[1] = "4";
    if(fourthimg.id == "div3") order[2] = "4";
    if(fourthimg.id == "div4") order[3] = "4";

    console.log(order);
    var ordertosend;
    if(order.length == 4 )
    {
        order.forEach(element => {
            if(ordertosend==null) ordertosend = element;
            else ordertosend += element;

        });
        console.log(ordertosend);

        
    //var url = "https://localhost:44362/api/admin/postcolororder/"+ordertosend;
    var url = "https://gelder.ga/api/admin/postcolororder/"+ordertosend;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};
    xhr.send();

    }
}