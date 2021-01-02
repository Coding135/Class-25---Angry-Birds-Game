class Spring {
    constructor(bodyA, bodyB) {
        var options = {
            'length': 10,
            'stiffness': 0.04,
            'bodyA': bodyA,
            'bodyB': bodyB
        }
        this.spring = Constraint.create(options);
        World.add(world, this.spring);
    }

    display() {
        var pointA = this.spring.bodyA.position;
        var pointB = this.spring.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}