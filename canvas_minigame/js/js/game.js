//Traer una referencia del objeto canvas
const canvas = document.getElementById("myCanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;

const enemies = [ {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 1,
}, 
{
    x: 150,
    y: 150,
    w: 40,
    h: 40,
    color: "yellow",
    speedY: 2,
}, 
{
    x: 80,
    y: 80,
    w: 40,
    h: 40,
    color: "green",
    speedY: 0.5,
},
{
    x: 200,
    y: 200,
    w: 40,
    h: 40,
    color: "pink",
    speedY: 1.5,
},
{
    x: 10,
    y: 10,
    w: 40,
    h: 40,
    color: "purple",
    speedY: 2.5,
},
];

for (let i = 0; i < enemies.length; i++) {
    const element = enemies[i];
    function update() {
        enemies[i].y += enemies[i].speedY; 
        if (enemies[i].y +enemies[i].h >= GAME_H) {
          enemies[i].speedY = enemies[i].speedY * -1;
          enemies[i].y = GAME_H - enemies[i].h; //para que el cuadrado no salga del marco
        } else if (enemies[i].y <= 0) {
            enemies[i].speedY = enemies[i].speedY * -1;
            enemies[i].y = 0; //para que el cuadrado no salga del marco
        };
        console.log(enemies);
    };
};

for (let i = 0; i < enemies.length; i++) {
    const element = enemies[i];
    function draw() {
        ctx.clearRect(0,0, GAME_W, GAME_H);
        ctx.fillStyle = enemies[i].color;
        ctx.fillRect(enemies[i].x, enemies[i].y, enemies[i].w, enemies[i].h);
    };
};


draw();


setInterval(function() {
    draw();
    update();
} ,20);