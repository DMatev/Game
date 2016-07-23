class GameEngine {
    private timer: Timer;
    private gameSettings: GameSettings;
    private player: Player;
    private drawer: Drawer;
    private gameInterval: any;
    private inputHandler: InputHandler;
    private babies: Array<Baby>;
    private userInterface: UserInterface;

    constructor(userInterface: UserInterface) {
        this.init();
        this.userInterface = userInterface;
    }

    init() {
        this.gameSettings = new GameSettings();
        this.timer = new Timer(this.gameSettings);
        this.drawer = new Drawer(this.gameSettings);
        this.player = new Player(this.gameSettings);
        this.inputHandler = new InputHandler();
        this.inputHandler.init(this.turnRightHandler, this.turnLeftHandler, this.slowDownHandler, this.speedUpHandler, this);
        this.babies = [];
    }

    mainLoop() {
        this.timer.increment();
        this.spawnBaby();
        this.updateScreen();
        this.updateScore();
        this.interactionManager();
    }

    updateScreen() {
        this.drawer.clearScreen();
        this.drawer.drawBackground();
        this.drawer.drawGameObject(this.player);
        for (let i = 0; i < this.babies.length; i++) {
            this.drawer.drawGameObject(this.babies[i]);
        }
        this.drawer.drawScore(this.player.score);
        this.drawer.drawTimer(this.timer);
        this.drawer.drawHealthBar(this.player);
    }

    updateScore() {
        this.player.score += this.gameSettings.scoreScale;
    }

    interactionManager() {
        for (let i = 0; i < this.babies.length; i++) {
            //moving babies
            if ((this.babies[i].top + this.gameSettings.babySpeed) >= 0) {
                this.babies[i].updatePosition(this.babies[i].left, this.babies[i].top + this.gameSettings.babySpeed);
            } else {
                this.babies.splice(i, 1);
                if (i > 0) {
                    i--;
                } else {
                    break;
                }
            }
            //detecting player rhit a baby
            if (this.detectCollision(this.player, this.babies[i])) {
                this.babies.splice(i, 1);
                this.playerTakeDmg(1);
                if (i > 0) {
                    i--;
                } else {
                    break;
                }
            }
        }
    }

    detectCollision(obj1: GameObject, obj2: GameObject) {
        let hit = (obj1.left < obj2.left + obj2.width &&
            obj1.left + obj1.width > obj2.left &&
            obj1.top < obj2.top + obj2.height &&
            obj1.height + obj1.top > obj2.top)
        return hit;
    }

    turnRightHandler() {
        if ((this.player.left + this.player.width + this.player.speed) <= this.gameSettings.mainScreenWidth) {
            this.player.updatePosition(this.player.left + this.player.speed, this.player.top)
            if (!this.player.LastMoveRight) {
                this.player.turnRight();
            }
        }
    }

    turnLeftHandler() {
        if ((this.player.left - this.player.speed) >= 0) {
            this.player.updatePosition(this.player.left - this.player.speed, this.player.top);
            if (this.player.LastMoveRight) {
                this.player.turnLeft();
            }
        }
    }

    slowDownHandler() {
        if (this.gameSettings.scoreScale > 5) {
            this.gameSettings.babySpeed -= 1;
            this.gameSettings.scoreScale -= 5;
        }
    }

    speedUpHandler() {
        this.gameSettings.babySpeed += 1;
        this.gameSettings.scoreScale += 5;
    }


    playerTakeDmg(dmg: number) {
        if ((this.player.currentHealth - dmg) > 0) {
            this.player.currentHealth--;
        } else {
            this.gameOver();
        }
    }

    spawnBaby() {
        this.timer.nowMs = Date.now();
        if (this.timer.nowMs - this.gameSettings.lastBabySpawnTimestamp > this.gameSettings.babySpawnFrequencyMs) {
            this.gameSettings.lastBabySpawnTimestamp = this.timer.nowMs;
            this.babies.push(new Baby(this.gameSettings));
        }
    }

    gameOver() {
        this.gameSettings.isGameOver = true;
        clearInterval(this.gameInterval);
        this.inputHandler.removeListeners();
        this.drawer.drawGameOver();
        this.userInterface.gameOver();
    }

    gameStart() {
        let me = this;
        if (this.gameSettings.isGameOver) {
            this.gameSettings.isGameOver = false;
            this.inputHandler.assignListeners();
            this.gameInterval = setInterval(function () {
                me.mainLoop();
            }, this.gameSettings.refreshTimeMs);
        }
    }

    isGameOver() {
        return this.gameSettings.isGameOver;
    }

    togglePause() {
        let me = this;
        if (this.gameSettings.isPaused && !this.gameSettings.isGameOver) {
            this.inputHandler.assignListeners();
            this.gameInterval = setInterval(function () {
                me.mainLoop();
            }, this.gameSettings.refreshTimeMs);
            this.gameSettings.isPaused = !this.gameSettings.isPaused;
        } else {
            clearInterval(this.gameInterval);
            this.inputHandler.removeListeners();
            this.gameSettings.isPaused = !this.gameSettings.isPaused;
        }
    }

    assignListeners(hanlder: any, scope: any) {
        this.userInterface
    }
}