var canvas = new fabric.Canvas('myCanvas');

var block_height = 20;
var block_width = 20;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update()
{
    fabric.Image.fromURL("captain_america.png", function(Img)
    {
        player_object = Img ;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(140);
        player_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(player_object);
    }
    );
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("'Shift' and 'P' are pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("Current_width").innerHTML = block_width;
        document.getElementById("Current_height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("'Shift' and 'P' are pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("Current_width").innerHTML = block_width;
        document.getElementById("Current_height").innerHTML = block_height;
    }

    if(keyPressed == '70')
    {
        new_image('spiderman_face.png');
        console.log("F");
    }

    if(keyPressed == '66')
    {
        new_image('ironman_body.png');
        console.log("B");
    }

    if(keyPressed == '76')
    {
        new_image('hulk_legs.png');
        console.log("B");
    }

    if(keyPressed == '66')
    {
        new_image('ironman_body.png');
        console.log("B");
    }

    if(keyPressed == '82')
    {
        new_image('thor_right_hand.png');
        console.log("R");
    }

    if(keyPressed == '72')
    {
        new_image('captain_america_left_hand.png');
        console.log("H");
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(player_y > 0)
    {
        player_y = player_y - block_height;
        console.log("block Image height " + block_height);
        console.log("When up arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function down()
{
    if(player_y <= 500)
    {
        player_y = player_y + block_height;
        console.log("block Image Height = " + block_height);
        console.log("When down is pressed, x =" + player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if (player_x > 0)
    {
        player_x = player_x - block_width;
        console.log("block Image Width" + blockwidth);
        console.log("When left is pressed, x = "+ player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x < 850)
    {
        player_x = player_x + block_width;
        console.log("block Image Width" + block_width);
        console.log("When right is pressed, x = "+ player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}