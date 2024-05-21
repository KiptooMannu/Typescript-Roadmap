const unionIntersection = () => {


    // Union Types in TypeScript : Union types are used when we want to work with multiple types of values.
    let unionType: number | string | boolean;
    unionType = 10;
    unionType = "Hello";
    unionType = true;

    // Intersection Types in TypeScript : Intersection types are used when we want to combine multiple types into one.
    type A = { a: number };
    type B = { b: number };
    type C = { c: number };

    type ABC = A & B & C;   //intersection of A, B and C ==ABC

    let abc: ABC = {
        a: 10,
        b: 20,
        c: 30
    };
    // console.log(abc)

    //intersection of A and B using interface
    interface X {
        x: number
    }
    interface Y {
        y: number
    }
    interface Z {
        z: number
    }
    // type XYZ = X & Y & Z;
    interface XYZ extends X, Y, Z {}

    let xyz: XYZ = {
        x: 10,
        y: 20,
        z: 30
    }
    console.log(xyz)
}
export default unionIntersection;