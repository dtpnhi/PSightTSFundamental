module test {

    interface SquareFunction {
        (x: number): number
    }

    var squareItBasic: SquareFunction = (num) => num * num;
}

module demo {
    
    var squareItSimple = function(h: number, w: number) {
        return h * w;
    }
    
    var squar1 = (h: number, w: number) => h * w;

    var helloWorld: (name?: string) => void;

    helloWorld = (name?: string) => {
        console.log('Hello ' + name || 'unknown person');
    }
    
    interface Rectangle {
        h: number,
        w?: number
    }

    var squareIt: (rec: Rectangle) => number;

    var rect1 = {h: 10};
    var rect2 = {h: 20, w: 40};

    squareIt =  (rec) => {
        if (rec.w === undefined) {
            return rec.h * rec.h;
        }
        return rec.h * rec.w;
    }
    console.log(squareIt(rect1));
    console.log(squareIt(rect2));
    
    interface Person {
        name: String;
        age?: number;
        kids: number;
        calcPet: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: String) => string;
    }
    
    var p: Person = {
        name: '',
        age: 34,
        kids: 4,
        calcPet: () => {
            return this.kids * 2;
        }
    };


    p.name = 'PN Dang';
    p.age = 34;
    p.kids = 4;
    p.calcPet = () => p.kids * 2;
    p.makeYounger = (years) => {
        p.age -= years;
    };
    p.greet = (msg: String) => {
        return msg + ' ' + p.name;
    };

    console.log(p.greet);
}
