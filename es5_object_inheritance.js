function SimpleWindow(title) {
    this.title = title;
    this._height = 0;
    this._width = 0;

    Object.defineProperties(this, {
        "width": {
            "get": function() {
                return this._width;
             },
             "set": function(w) {
                if (w >= 0 || w < 1000)
	                this._width = w;
             }
        },
       "height": {
            "get": function() {
                return this._height;
             },
             "set": function(h) {
                if (h >= 0 || h < 1000)
	                this._height = h;
             }
        }
    });
}

function PositionnedWindow(title, x, y){
    this.title = title;
    this.x = x;
    this.y = y;
}

PositionnedWindow.prototype = Object.create(SimpleWindow.prototype);
PositionnedWindow.prototype.constructor = PositionnedWindow;
PositionnedWindow.prototype.displayPosition = function() {
    console.log("x : "+ this.x + " y : " + this.y);
}

var win = new PositionnedWindow("My window", 10, 10);
console.log(win.title);
win.height = 100;
win.width = 50;
console.log("w: " + win.width + " height: " + win.height);
win.displayPosition();
