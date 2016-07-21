var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(gamesettings) {
        _super.call(this);
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
    Player.prototype.turnLeft = function () {
        this.LastMoveRight = false;
        this.img.src = 'img/left.png';
    };
    Player.prototype.turnRight = function () {
        this.LastMoveRight = false;
        this.img.src = 'img/right.png';
    };
    return Player;
}(GameObject));
//# sourceMappingURL=Player.js.map