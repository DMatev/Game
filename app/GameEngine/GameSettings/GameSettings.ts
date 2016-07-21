class GameSettings {
    refreshTimeMs: number;
    gameScreenWidth: number;
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

    constructor() {
        this.refreshTimeMs = 25;
        this.gameScreenWidth = 500;
        this.holeScreenWidth = 800;
        this.holeScreenHeight = 540;
        this.gameSpeed = 5;
        this.backgroundOffset = 0;
        this.scoreScale = 1;
        this.mainScreenWidth = 800;
        this.mainScreenHeight = 500;
        this.isGameOver = true;
        this.scoreScreenWidth = 200;
        this.healthScreenWidth = 200;
        this.timerScreenWidth = 400;
        // this.backgroundImg =
    }

}