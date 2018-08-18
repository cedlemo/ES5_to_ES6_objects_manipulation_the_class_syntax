function SimpleWindow(title) {
    this.title = title;
    this.hide = function() {
	console.log("hide " + title);
    }
}

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
mainWindow.hide();
