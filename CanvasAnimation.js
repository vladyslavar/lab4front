
sidesize = 40;
function tocreateimg()
{
    var toAppend = document.getElementsByClassName("images")[0];
    var img1 = document.createElement("img");
    img1.id = "imgFirst";
    img1.src = "1.png";
    img1.onload = function()
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img1, 0, 0);
    }

    var img2 = document.createElement("img");
    img2.id = "imgSecond";
    img2.src = "2.png";
    img2.onload = function()
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img2, 128, 0);
    }

    var img3 = document.createElement("img");
    img3.id = "imgThird";
    img3.src = "3.png";
    img3.onload = function()
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img3, 0, 128);
    }

    var img4 = document.createElement("img");
    img4.id = "imgFourth";
    img4.src = "4.png";
    img4.onload = function()
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img4, 128, 128);
        drawRectangle()
    }
}

    var i = 80;
    var j = 80;
    var move = 1;
    var val = 1;
function drawRectangle()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    
    if(i<216 && j<216 && i>0  && j>0)
    {
        switch(move)
            {
                case 1: 
                    j=j-val;
                    ctx.fillRect(i, j,40,40)
                    move = 2;
                    val++;
                break;
                case 2:
                    i = i+val-1;
                    ctx.fillRect(i, j,40,40)
                    move = 3;
                    val++;
                break;
                case 3:
                    i = i - val;
                    ctx.fillRect(i, j,40,40)
                    move = 4;
                    val++;
                break
                case 4 :
                    j = j + val-1;
                    ctx.fillRect(i, j,40,40)
                    move = 1;
                    val++;
                break;
            }
        setTimeout(tocreateimg, 80);
            
    }
    else{
        if(i<=0)  ctx.fillRect(0, j, 40,40);
        if(j<=0)  ctx.fillRect(i,0,40,40);
        if(i>=216) ctx.fillRect(216, j, 40,40);
        if(j>=216) ctx.fillRect(i,216,40,40);
    }
    
    
}
