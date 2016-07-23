class Player extends GameObject {
    speed: number;
    maxHealth: number;
    currentHealth: number;
    score: number;
    LastMoveRight: boolean;

    constructor(gamesettings: GameSettings) {
        let image = document.createElement('img');
        image.setAttribute('src', 'assets/img/right.png');
        super();
        this.maxHealth = 5;
        this.currentHealth = this.maxHealth;
        this.width = 100;
        this.height = 105;
        this.left = gamesettings.mainScreenWidth / 2 - this.width / 2;
        this.top = gamesettings.mainScreenHeight - this.height;
        this.speed = 15;
        this.score = 0;
        this.LastMoveRight = true;
        this.img = image;
    }

    turnLeft() {
        this.LastMoveRight = false;
        this.img.src = 'assets/img/left.png';
    }

    turnRight() {
        this.LastMoveRight = true;
        this.img.src = 'assets/img/right.png';
    }
}