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

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
mainWindow.height = 100;
mainWindow.width = 50;
console.log("w: " + mainWindow.width + " height: " + mainWindow.height);
