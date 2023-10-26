var canvas = new fabric.Canvas('myCanvas');
var ball_y = 450;
var ball_x = 350;
var hole_y = 0;
var hole_x = 350;

var block_image_width = 50; // Ajustado para o tamanho real da imagem
var block_image_height = 50;

function load_img() {
    new_image();
}

function new_image() {
    fabric.Image.fromURL("bola.png", function(Img) {
        ball_obj = Img;
        ball_obj.scaleToWidth(block_image_width);
        ball_obj.scaleToHeight(block_image_height);
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (ball_x === hole_x && ball_y <= hole_y) {
        canvas.remove(ball_obj);
        console.log("Você fez um gol!!!");
        document.getElementById("hd3").innerHTML = "Você fez um gol!!!";
        document.getElementById("myCanvas").style.borderColor = "red";
    } else {
        if (keyPressed === 38) {
            // Seta para cima
            up();
            console.log("cima");
        }
        if (keyPressed === 40) {
            // Seta para baixo
            down();
            console.log("baixo");
        }
        if (keyPressed === 37) {
            // Seta para a esquerda
            left();
            console.log("esquerda");
        }
        if (keyPressed === 39) {
            // Seta para a direita
            right();
            console.log("direita");
        }
    }
}

function up() {
    if (ball_y >= block_image_height) {
        ball_y -= block_image_height;
        canvas.remove(ball_obj);
        new_image();
    }
}

function down() {
    if (ball_y + block_image_height <= canvas.height) {
        ball_y += block_image_height;
        canvas.remove(ball_obj);
        new_image();
    }
}

function left() {
    if (ball_x >= block_image_width) {
        ball_x -= block_image_width;
        canvas.remove(ball_obj);
        new_image();
    }
}

function right() {
    if (ball_x + block_image_width <= canvas.width) {
        ball_x += block_image_width;
        canvas.remove(ball_obj);
        new_image();
    }
}
