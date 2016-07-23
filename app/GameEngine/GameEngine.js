var GameEngine = (function () {
    function GameEngine(userInterface) {
        this.init();
        this.userInterface = userInterface;
    }
    GameEngine.prototype.init = function () {
        this.gameSettings = new GameSettings();
        this.timer = new Timer(this.gameSettings);
        this.drawer = new Drawer(this.gameSettings);
        this.player = new Player(this.gameSettings);
        this.inputHandler = new InputHandler();
        this.inputHandler.init(this.turnRightHandler, this.turnLeftHandler, this.slowDownHandler, this.speedUpHandler, this);
        this.babies = [];
    };
    GameEngine.prototype.mainLoop = function () {
        this.timer.increment();
        this.spawnBaby();
        this.updateScreen();
        this.updateScore();
        this.interactionManager();
    };
    GameEngine.prototype.updateScreen = function () {
        this.drawer.clearScreen();
        this.drawer.drawBackground();
        this.drawer.drawGameObject(this.player);
        for (var i = 0; i < this.babies.length; i++) {
            this.drawer.drawGameObject(this.babies[i]);
        }
        this.drawer.drawScore(this.player.score);
        this.drawer.drawTimer(this.timer);
        this.drawer.drawHealthBar(this.player);
    };
    GameEngine.prototype.updateScore = function () {
        this.player.score += this.gameSettings.scoreScale;
    };
    GameEngine.prototype.interactionManager = function () {
        for (var i = 0; i < this.babies.length; i++) {
            //moving babies
            if ((this.babies[i].top + this.gameSettings.babySpeed) >= 0) {
                this.babies[i].updatePosition(this.babies[i].left, this.babies[i].top + this.gameSettings.babySpeed);
            }
            else {
                this.babies.splice(i, 1);
                if (i > 0) {
                    i--;
                }
                else {
                    break;
                }
            }
            //detecting player rhit a baby
            if (this.detectCollision(this.player, this.babies[i])) {
                this.babies.splice(i, 1);
                this.playerTakeDmg(1);
                if (i > 0) {
                    i--;
                }
                else {
                    break;
                }
            }
        }
    };
    GameEngine.prototype.detectCollision = function (obj1, obj2) {
        var hit = (obj1.left < obj2.left + obj2.width &&
            obj1.left + obj1.width > obj2.left &&
            obj1.top < obj2.top + obj2.height &&
            obj1.height + obj1.top > obj2.top);
        return hit;
    };
    GameEngine.prototype.turnRightHandler = function () {
        if ((this.player.left + this.player.width + this.player.speed) <= this.gameSettings.mainScreenWidth) {
            this.player.updatePosition(this.player.left + this.player.speed, this.player.top);
            if (!this.player.LastMoveRight) {
                this.player.turnRight();
            }
        }
    };
    GameEngine.prototype.turnLeftHandler = function () {
        if ((this.player.left - this.player.speed) >= 0) {
            this.player.updatePosition(this.player.left - this.player.speed, this.player.top);
            if (this.player.LastMoveRight) {
                this.player.turnLeft();
            }
        }
    };
    GameEngine.prototype.slowDownHandler = function () {
        if (this.gameSettings.scoreScale > 5) {
            this.gameSettings.babySpeed -= 1;
            this.gameSettings.scoreScale -= 5;
        }
    };
    GameEngine.prototype.speedUpHandler = function () {
        this.gameSettings.babySpeed += 1;
        this.gameSettings.scoreScale += 5;
    };
    GameEngine.prototype.playerTakeDmg = function (dmg) {
        if ((this.player.currentHealth - dmg) > 0) {
            this.player.currentHealth--;
        }
        else {
            this.gameOver();
        }
    };
    GameEngine.prototype.spawnBaby = function () {
        this.timer.nowMs = Date.now();
        if (this.timer.nowMs - this.gameSettings.lastBabySpawnTimestamp > this.gameSettings.babySpawnFrequencyMs) {
            this.gameSettings.lastBabySpawnTimestamp = this.timer.nowMs;
            this.babies.push(new Baby(this.gameSettings));
        }
    };
    GameEngine.prototype.gameOver = function () {
        this.gameSettings.isGameOver = true;
        clearInterval(this.gameInterval);
        this.inputHandler.removeListeners();
        this.drawer.drawGameOver();
        this.userInterface.gameOver();
    };
    GameEngine.prototype.gameStart = function () {
        var me = this;
        if (this.gameSettings.isGameOver) {
            this.gameSettings.isGameOver = false;
            this.inputHandler.assignListeners();
            this.gameInterval = setInterval(function () {
                me.mainLoop();
            }, this.gameSettings.refreshTimeMs);
        }
    };
    GameEngine.prototype.isGameOver = function () {
        return this.gameSettings.isGameOver;
    };
    GameEngine.prototype.togglePause = function () {
        var me = this;
        if (this.gameSettings.isPaused && !this.gameSettings.isGameOver) {
            this.inputHandler.assignListeners();
            this.gameInterval = setInterval(function () {
                me.mainLoop();
            }, this.gameSettings.refreshTimeMs);
            this.gameSettings.isPaused = !this.gameSettings.isPaused;
        }
        else {
            clearInterval(this.gameInterval);
            this.inputHandler.removeListeners();
            this.gameSettings.isPaused = !this.gameSettings.isPaused;
        }
    };
    GameEngine.prototype.assignListeners = function (hanlder, scope) {
        this.userInterface;
    };
    return GameEngine;
}());
//# sourceMappingURL=GameEngine.js.map