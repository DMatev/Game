class Player extends GameObject {
    speed: number;
    maxHealth: number;
    currentHealth: number;
    score: number;
    LastMoveRight: boolean;

    constructor(gamesettings: GameSettings) {
        super();
        this.maxHealth = 2;
        this.currentHealth = this.maxHealth;
        this.width = 100;
        this.height = 105;
        this.left = gamesettings.gameScreenWidth / 2 - this.width / 2;
        this.top = 0;
        this.speed = 10;
        this.score = 0;
        this.LastMoveRight = true;
        this.img = $('<img src="img/right.png" />')[0];
    }

    turnLeft(){
        this.LastMoveRight = false;
        this.img.src = 'img/left.png';
    }

    turnRight(){
        this.LastMoveRight = false;
        this.img.src = 'img/right.png';
    }
}