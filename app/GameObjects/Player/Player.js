var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(gamesettings) {
        var image = document.createElement('img');
        image.setAttribute('src', 'assets/img/right.png');
        _super.call(this);
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
    Player.prototype.turnLeft = function () {
        this.LastMoveRight = false;
        this.img.src = 'assets/img/left.png';
    };
    Player.prototype.turnRight = function () {
        this.LastMoveRight = true;
        this.img.src = 'assets/img/right.png';
    };
    return Player;
}(GameObject));
//# sourceMappingURL=Player.js.map