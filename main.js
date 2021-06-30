canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_array=["mast cam.jpg", "mast.jpg", "sand mars.jpg", "gray mars"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
var rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
backround_image=mars_array[random_number];
console.log ("Backround image="+backround_image);
rover_image="rover.png";


function add() {
    backround_img_tag=new Image();
    backround_img_tag.onload=upload_background;
    backround_img_tag.src=backround_image;
    
    rover_img_tag=new Image();
    rover_img_tag.onload=upload_rover;
    rover_img_tag.src=rover_image;

}

function upload_background() {
    ctx.drawImage(backround_img_tag,0,0,canvas.width,canvas.height);
    
}

function upload_rover() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);

    if (keypressed=='38') {
        up();
        console.log("up");
    }
    if (keypressed=='40') {
        down();
        console.log("down");
    }
    if (keypressed=='37') {
        left();
        console.log("left");
    }
    if (keypressed=='39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >=0) {
        rover_y= rover_y-10;
        //rover_y-=10;
        console.log("When up arrow was pressed, x= "+rover_x+", y= " +rover_y);
        upload_background();
        upload_rover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y=rover_y+10;
        console.log("When down arrow was pressed, x= "+rover_x+", y= "+rover_y);
        upload_background();
        upload_rover();
    }
}
function left() {
    if (rover_x >=0){
        rover_x=rover_x-10;
        console.log("When left arrow was pressed, x= "+rover_x,", y= "+rover_y);
        upload_background();
        upload_rover();
    }
}
function right() {
    if (rover_x <=700) {
        rover_x=rover_x+10;
        console.log("When right arrow was pressed, x= "+rover_x,", y= "+rover_y);
        upload_background();
        upload_rover();
    }
}
