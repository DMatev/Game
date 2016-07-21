class Timer {
    time: any;
    nowMs: number;
    refreshTimeMS: number;

    constructor(gameSettings: GameSettings) {
        this.time = 0;
        this.refreshTimeMS = gameSettings.refreshTimeMs;
    }

    increment() {
        this.time += this.refreshTimeMS;
    }
}