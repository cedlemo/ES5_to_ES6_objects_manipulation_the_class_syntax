class SimpleWindow {
    constructor(title) {
        this.title = title;
    }

    hide() {
        console.log("Hide " + this.title);
    }
}

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
mainWindow.hide();
