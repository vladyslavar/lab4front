window.onload = main
function main()
{
    CreateBlueblock();
}
var sidesize = 20;
var blueblockColor = "#eb4034";
var text = "";

function CreateAnimation()
{

    var deletecontent  = document.getElementsByClassName("main-text-fourth")[0];
    deletecontent.remove();
    var deleteplay  = document.getElementsByClassName("playButton")[0];
    deleteplay.remove();

    
    var toAppend1 = document.getElementsByClassName("main-block")[0];

    var toAppendtext = document.getElementsByClassName("ForText")[0];

    
    var textPlay = document.createElement("p");
    textPlay.textContent = "Play pressed";
    textPlay.className = "texttoappere"
    toAppendtext.appendChild(textPlay);

    var conteinr = document.createElement("div");
    conteinr.className = "ContainerAtfourth";
    toAppend1.appendChild(conteinr);

    var toAppend2 = conteinr
    var row1 = document.createElement("div");
    row1.className = "firstRow";
    toAppend2.appendChild(row1);

    var row2 = document.createElement("div");
    row2.className = "secondRow";
    toAppend2.appendChild(row2);

    var animat = document.createElement("div");
    animat.className = "Animation";
    toAppend2.appendChild(animat);

    var toAppend3 = row1;
    var color1 = document.createElement("div");
    color1.className = "BlockFirst";
    toAppend3.appendChild(color1);

    var color2 = document.createElement("div");
    color2.className = "BlockSecond";
    toAppend3.appendChild(color2);

    var toAppend4 = row2;
    var color3 = document.createElement("div");
    color3.className = "BlockThird";
    toAppend4.appendChild(color3);

    var color4 = document.createElement("div");
    color4.className = "BlockFourth";
    toAppend4.appendChild(color4);

    //controls

    var movebtn = document.createElement("button");
    movebtn.textContent = "move";
    movebtn.onclick = Move;
    movebtn.className = "MoveButton";
    toAppend1.appendChild(movebtn);

    var closebtn = document.createElement("button");
    closebtn.textContent = "close";
    closebtn.onclick = DeleteAll;
    closebtn.className = "CloseButton";
    toAppend1.appendChild(closebtn);

    toAppend0 = document.getElementsByClassName("text-in-info")[0];
    var reloadbtn = document.createElement("button");
    reloadbtn.textContent = "reload";
    reloadbtn.onclick = Reload;
    reloadbtn.className = "ReloadButton";
    toAppend0.appendChild(reloadbtn);

    AddBackground();
    blueBlockRequest();

    

}
function Reload()
{
    var toAppend1 = document.getElementsByClassName("ForText")[0];
    
    var textreload = document.createElement("p");
    textreload.textContent = "Reload pressed";
    textreload.className = "texttoappere"
    toAppend1.appendChild(textreload);

    var deletereload  = document.getElementsByClassName("ReloadButton")[0];
    deletereload.remove();

    DeleteAll();

}
function AddBackground()
{
    //var url = "https://localhost:44362/api/admin/getcolororder";
    var url = "https://gelder.ga/api/admin/getcolororder";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Accept", "*/*");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            resp = xhr.response;
            var objrec = JSON.parse(resp);
            var obj = objrec.order;
            var digits = obj.toString().split('');
            var ord = digits.map(Number)
            console.log(ord);
            
            for(var i = 0; i < ord.length; i++)
            {
                if(i==0) {
                    console.log("h1")
                    var el =document.getElementsByClassName("BlockFirst")[0]
                    var img = "url('"+ord[i]+".png')"
                    el.style.backgroundImage = img 
                }
                if(i==1) {
                    console.log("h2")
                    var el =document.getElementsByClassName("BlockSecond")[0]
                    var img = "url('"+ord[i]+".png')"
                    el.style.backgroundImage = img 
                }
                if(i==2) {
                    console.log("h3")
                    var el =document.getElementsByClassName("BlockThird")[0]
                    var img = "url('"+ord[i]+".png')"
                    el.style.backgroundImage = img 
                }
                if(i==3) {
                    console.log("h4")
                    var el =document.getElementsByClassName("BlockFourth")[0]
                    var img = "url('"+ord[i]+".png')"
                    el.style.backgroundImage = img 
                }
            }
        }};
    xhr.send();
}
function blueBlockRequest()
{
    //var url = "https://localhost:44362/api/admin/getblueblock";
    var url = "https://gelder.ga/api/admin/getblueblock";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Accept", "*/*");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            resp = xhr.response;
            var obj = JSON.parse(resp);
            sidesize = obj.height;
            blueblockColor = "#"+obj.color;;
            console.log(obj);
            CreateBlueblock();

        }};
    xhr.send();
}
function CreateBlueblock()
{ 
    var animation = document.getElementsByClassName("Animation")[0];
    animation.style.backgroundColor = blueblockColor;
    var textSize = sidesize+"px";
    var possitionText = 128 - sidesize; 
    animation.style.width=textSize;
    animation.style.height=textSize;
    animation.style.top = possitionText+"px";
    animation.style.left = possitionText+"px";
}
function DeleteAll()
{
    var delete1 = document.getElementsByClassName("CloseButton")[0];
    delete1.remove();

    var delete2 = document.getElementsByClassName("MoveButton")[0];
    delete2.remove();

    var delete3 = document.getElementsByClassName("BlockFourth")[0];
    delete3.remove();

    var delete4 = document.getElementsByClassName("BlockThird")[0];
    delete4.remove();

    var delete5 = document.getElementsByClassName("BlockSecond")[0];
    delete5.remove();
    
    var delete6 = document.getElementsByClassName("BlockFirst")[0];
    delete6.remove();

    var delete7 = document.getElementsByClassName("Animation")[0];
    delete7.remove();

    var delete8 = document.getElementsByClassName("secondRow")[0];
    delete8.remove();

    var delete9 = document.getElementsByClassName("firstRow")[0];
    delete9.remove();
    
    var delete10 = document.getElementsByClassName("ContainerAtfourth")[0];
    delete10.remove();

    var toAppend1 = document.getElementsByClassName("main-block")[0];
    var conteinr = document.createElement("h1");
    conteinr.textContent = "Fourth Page here";
    conteinr.className = "main-text-fourth";
    toAppend1.appendChild(conteinr);

    var toAppend2 = document.getElementsByClassName("text-in-info")[0];
    var playbtn = document.createElement("button");
    playbtn.textContent = "Play";
    playbtn.onclick = CreateAnimation;
    playbtn.className = "playButton";
    toAppend2.appendChild(playbtn);
}

function Move()
{

    var toAppend1 = document.getElementsByClassName("ForText")[0];
    
    var textmove = document.createElement("p");
    textmove.textContent = "Move pressed";
    textmove.className = "texttoappere"
    toAppend1.appendChild(textmove);

    var blocks = document.getElementsByClassName("Block");
    var animation = document.getElementsByClassName("Animation")[0];
    //animation.style.backgroundColor = "#eb4034";
    var pos = 128-sidesize;
    var move = 1;
    var val = 1;
    var id = setInterval(frame, 120);
    function frame()
    {
        if(pos==216 || pos==0)
        {
            clearInterval(id);
        }
        else{
            switch(move)
            {
                case 1: 
                    pos = pos-val;
                    animation.style.left = pos+"px"; 
                    move = 2;
                    val++;
                break;
                case 2:
                    pos = pos+val;
                    animation.style.top = pos+"px";
                    move = 3;
                    val++;
                break;
                case 3:
                    pos = pos-val;
                    animation.style.top = pos+"px";
                    move = 4;
                    val++;
                break
                case 4 :
                    pos = pos+val;
                    animation.style.left = pos+"px";
                    move = 1;
                    val++;
                    break;
            }
        }
        
        
    }
}