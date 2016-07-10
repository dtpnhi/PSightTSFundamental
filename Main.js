var test;
(function (test) {
    var squareItBasic = function (num) { return num * num; };
})(test || (test = {}));
var demo;
(function (demo) {
    var _this = this;
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squar1 = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + name || 'unknown person');
    };
    var squareIt;
    var rect1 = { h: 10 };
    var rect2 = { h: 20, w: 40 };
    squareIt = function (rec) {
        if (rec.w === undefined) {
            return rec.h * rec.h;
        }
        return rec.h * rec.w;
    };
    console.log(squareIt(rect1));
    console.log(squareIt(rect2));
    var p = {
        name: '',
        age: 34,
        kids: 4,
        calcPet: function () {
            return _this.kids * 2;
        }
    };
    p.name = 'PN Dang';
    p.age = 34;
    p.kids = 4;
    p.calcPet = function () { return p.kids * 2; };
    p.makeYounger = function (years) {
        p.age -= years;
    };
    p.greet = function (msg) {
        return msg + ' ' + p.name;
    };
    console.log(p.greet);
})(demo || (demo = {}));
//# sourceMappingURL=Main.js.map