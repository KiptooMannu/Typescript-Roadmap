import { oddType, evenType } from "./externalTypes";

const typeAliances = () => {
    //   Type Aliases : Type Aliases allow defining types with a custom name (an Alias).


    //creating a variable,  type and assign a value
    let age: number = 20;

    //creating a type alias
    type age2 = number;

    let graceAge: age2 = 20;

    type stringOrNumber = string | number;  //union type

    let ourValueOrString: stringOrNumber = "name";  // "name" or 20

    //arrays
    // const evenNumbers: number[] = [2, 4, 6, 8, 10];

    // type oddType = number[];
    // type evenType = Array<number>;

    let evenNumbers: evenType = [2, 4, 6, 8, 10];
    let oddNumbers: oddType = [1, 3, 5, 7, 9];

    // console.log(evenNumbers);
    // console.log(oddNumbers);

    //objects
    // let kevinCar: { brand: string, model: string, year: number } = {
    //     brand: "Toyota",
    //     model: "Camry",
    //     year: 2020
    // }

    // type car = { brand: string, model: string, year: number }

    //complex objects
    // type carYear = number;
    // type carBrand = string;
    // type carModel = string;
    // type car = {
    //     year: carYear,
    //     brand: carBrand,
    //     model: carModel
    // }

    // let kevinCar: car = {
    //     brand: "Toyota",
    //     model: "Camry",
    //     year: 2020
    // }


    // console.log(`My car is a ${kevinCar.year} ${kevinCar.brand} ${kevinCar.model}`)

    //extending type aliases
    type person = {
        name: string,
        age: number,
        id: number,
        married: boolean,
        gender: string,
        address?: {
            street: string,
            city: string,
            state: {
                stateName: string,
                stateCode: string
            }
            zip: number
        }
    }
    type student = person & {
        studentId: number,
        school: string,
        grade: number
    }

    let kevin: student = {
        name: "Kevin",
        age: 20,
        gender: "male",
        id: 12345,
        married: false,
        studentId: 54321,
        school: "MIT",
        grade: 12,
        address: {
            city: "Boston",
            state: {
                stateCode: "MA",
                stateName: "Massachusetts"
            },
            street: "123 Main St",
            zip: 12345
        }
    }

    // console.log(kevin.address.state.stateName)



}

export default typeAliances;