class Board {
    constructor (x, y, width, height) {
        var options = {
            isStatic: true
        };
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/board.png");
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display () {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
