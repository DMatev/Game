var GameSettings = (function () {
    function GameSettings() {
        this.refreshTimeMs = 25;
        this.gameScreenWidth = 500;
        this.holeScreenWidth = 800;
        this.holeScreenHeight = 540;
        this.mainScreenWidth = 800;
        this.mainScreenHeight = 500;
        this.scoreScreenWidth = 200;
        this.healthScreenWidth = 200;
        this.timerScreenWidth = 400;
        this.gameSpeed = 5;
        this.backgroundOffset = 0;
        this.scoreScale = 1;
        this.isGameOver = true;
        this.isPaused = false;
        this.backgroundImg = $('<img src="assets/img/background.jpg" />')[0];
        this.lastBabySpawnTimestamp = -1;
        this.babySpawnFrequencyMs = 1000;
        this.babySpeed = 5;
    }
    return GameSettings;
}());
//# sourceMappingURL=GameSettings.js.map