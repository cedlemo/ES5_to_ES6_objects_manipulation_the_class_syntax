# ES5 to ES6 Object manipulation: the Class syntax

* [Object constructor](#object-constructor)
* [Object methods](#object-methods)
* [Object getters and setters](#object-getters-and-setters)
* [Object inheritance](#object-inheritance)

## Object constructor

### ES5

```javascript
function SimpleWindow(title) {
    this.title = title;
}

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
```

### ES6

```javascript
class SimpleWindow {
    constructor(title) {
        this.title = title;
    }
}

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
```

## Object methods

### ES5

```javascript
function SimpleWindow(title) {
    this.title = title;
    this.hide = function() {
	console.log("hide " + title);
    }
}

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
mainWindow.hide();
```

### ES6

```javascript
class SimpleWindow {
    constructor(title) {
        this.title = title;
    }
    hide() {
	console.log("hide " + title);
    }
}

var mainWindow = new SimpleWindow("My main window");
console.log(mainWindow.title);
mainWindow.hide();
```

## Object getters and setters

### ES5

```javascript
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
```

### ES6

```javascript
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
```

## Object inheritance

### ES5

```javascript
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
```

### ES6

```javascript
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
```

## Resources:

* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
* https://coryrylan.com/blog/javascript-prototypal-inheritance
* https://coryrylan.com/blog/javascript-es6-class-syntax
* https://javascriptplayground.com/es5-getters-setters/
* https://stackoverflow.com/questions/5222209/getter-setter-in-constructor
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
