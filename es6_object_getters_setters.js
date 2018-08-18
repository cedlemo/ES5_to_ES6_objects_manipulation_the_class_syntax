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

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
mainWindow.height = 100;
mainWindow.width = 50;
console.log("w: " + mainWindow.width + " height: " + mainWindow.height);
