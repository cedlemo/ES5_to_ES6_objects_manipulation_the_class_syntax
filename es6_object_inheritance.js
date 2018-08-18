class SimpleWindow {
    constructor(title){
        this.title = title;
        this._width = 0;
        this._height = 0;
    }

    get width(){
        return this._width;
    }
    set width(w){
        if (w >= 0 || w < 1000)
	    this._width = w;
    }

    get height(){
        return this._height;
    }
    set height(h){
        if (h >= 0 || h < 1000)
             this._height = h;
    }
}

class PositionnedWindow extends SimpleWindow {
    constructor(title, x, y) {
        super(title);
        this.x = x;
        this.y = y;
    }
    displayPosition() {
        console.log("x : "+ this.x + " y : " + this.y);
   }
}

var win = new PositionnedWindow("My window", 10, 10);
console.log(win.title);
win.height = 100;
win.width = 50;
console.log("w: " + win.width + " height: " + win.height);
win.displayPosition();
