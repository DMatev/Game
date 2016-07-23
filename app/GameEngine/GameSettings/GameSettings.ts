class GameSettings {
    refreshTimeMs: number;
    holeScreenWidth: number;
    holeScreenHeight: number;
    mainScreenWidth: number;
    mainScreenHeight: number;
    scoreScreenWidth: number;
    healthScreenWidth: number;
    timerScreenWidth: number;
    gameSpeed: number;
    backgroundOffset: number;
    backgroundImg: any;
    scoreScale: number;
    isGameOver: boolean;
    isPaused: boolean;
    lastBabySpawnTimestamp: number;
    babySpawnFrequencyMs: number;
    babySpeed: number;

    constructor() {
        let image = document.createElement('img');
        image.setAttribute('src', 'assets/img/background.jpg');
        this.backgroundImg = image;
        this.refreshTimeMs = 25;
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
        this.lastBabySpawnTimestamp = -1;
        this.babySpawnFrequencyMs = 1000;
        this.babySpeed = 5;
    }
}