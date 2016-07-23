var Drawer = (function () {
    function Drawer(gameSettings) {
        var canvas = document.getElementById('GameScreen');
        this.context = canvas.getContext('2d');
        this.gameSettings = gameSettings;
    }
    Drawer.prototype.clearScreen = function () {
        this.context.clearRect(0, 0, this.gameSettings.holeScreenWidth, this.gameSettings.holeScreenHeight);
    };
    Drawer.prototype.drawBackground = function () {
        this.context.save();
        this.gameSettings.backgroundOffset += this.gameSettings.gameSpeed;
        if (this.gameSettings.backgroundOffset >= 1400) {
            this.context.drawImage(this.gameSettings.backgroundImg, 0, 700 - (this.gameSettings.backgroundOffset - 1400));
        }
        if (this.gameSettings.backgroundOffset >= 2100) {
            this.gameSettings.backgroundOffset = 0;
        }
        this.context.drawImage(this.gameSettings.backgroundImg, 0, -this.gameSettings.backgroundOffset);
        this.context.restore();
    };
    Drawer.prototype.drawGameObject = function (gameObject) {
        this.context.save();
        this.context.drawImage(gameObject.img, gameObject.left, gameObject.top, gameObject.width, gameObject.height);
        this.context.restore();
    };
    Drawer.prototype.drawGameOver = function () {
        this.context.save();
        this.context.clearRect(0, 0, this.gameSettings.holeScreenWidth, this.gameSettings.holeScreenHeight);
        this.context.font = "50px Georgia";
        this.context.fillStyle = "black";
        this.context.fillText("Game Over", 300, 280);
        this.context.restore();
    };
    Drawer.prototype.drawTimer = function (timer) {
        var minutes = Math.floor(parseInt((timer.time / 1000).toString()) / 60);
        var seconds = parseInt((timer.time / 1000).toString()) - minutes * 60;
        this.context.save();
        this.context.translate(this.gameSettings.scoreScreenWidth, this.gameSettings.mainScreenHeight);
        this.context.font = "20px Georgia";
        this.context.fillStyle = "red";
        this.context.fillText("Time: " + minutes + ":" + seconds, 100, 30);
        this.context.restore();
    };
    Drawer.prototype.drawScore = function (score) {
        this.context.save();
        this.context.translate(0, this.gameSettings.mainScreenHeight);
        this.context.font = "20px Georgia";
        this.context.fillStyle = "red";
        this.context.fillText("Score: " + score, 10, 30);
        this.context.restore();
    };
    Drawer.prototype.drawHealthBar = function (player) {
        var HealthBarHeight = 20;
        var HealthBarWidth = this.gameSettings.healthScreenWidth / (player.maxHealth + 2);
        this.context.save();
        this.context.translate((this.gameSettings.scoreScreenWidth + this.gameSettings.timerScreenWidth), this.gameSettings.mainScreenHeight);
        this.context.beginPath();
        this.context.strokeStyle = "red";
        this.context.fillStyle = "red";
        for (var i = 0; i < player.maxHealth; i++) {
            this.context.rect(i * HealthBarWidth + 20, 10, HealthBarWidth, HealthBarHeight);
            this.context.stroke();
        }
        for (var i = 0; i < player.currentHealth; i++) {
            this.context.fillRect(i * HealthBarWidth + 20, 10, HealthBarWidth, HealthBarHeight);
            this.context.stroke();
        }
        this.context.restore();
    };
    return Drawer;
}());
//# sourceMappingURL=Drawer.js.map