class GameObject {
    left: number;
    top: number;
    width: number;
    height: number;
    img: any;

    updatePosition(left: number, top: number) {
        this.left = left;
        this.top = top;
    }

}