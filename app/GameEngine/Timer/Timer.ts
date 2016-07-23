class Timer {
    time: any;
    nowMs: number;
    refreshTimeMs: number;

    constructor(gameSettings: GameSettings) {
        this.time = 0;
        this.refreshTimeMs = gameSettings.refreshTimeMs;
    }

    increment() {
        this.time += this.refreshTimeMs;
    }
}