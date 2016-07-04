var Shapes;

(function (Shapes) {
    
    var Point = (function () {
        
        // Contructor
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        
        // Instance member
        Point.prototype.getDist = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        
        return Point;
        
    }());
    
    Shapes.Point = Point;
    
}(Shapes || (Shapes = {})));