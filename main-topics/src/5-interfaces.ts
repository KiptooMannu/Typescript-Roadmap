
const myInterface = () => {
    //interface: Interfaces are used to define the structure of an object.

    interface areaType {
        width: number;
        height: number;
        color?: string;
    }

    const calculateArea = (rectangle: areaType): number => {
        return rectangle.width * rectangle.height;
    }

    // console.log(calculateArea({ height: 20, width: 10 }))

    //extend interface
    interface volumeType extends areaType {
        depth: number;
    }
    
    const calculateVolume = (rectangle: volumeType): number => {
        return rectangle.width * rectangle.height * rectangle.depth;
    }
    console.log(calculateVolume({depth: 10, height: 20, width: 10}))

}
export default myInterface;