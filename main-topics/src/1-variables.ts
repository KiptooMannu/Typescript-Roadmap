
const variables = () => {
    // 1. Variable Declarations : TypeScript allows you to declare variables with a specific type

    let a: number = 10;
    let name: string = "John";
    let gender: boolean = false;
    let evenNumbers: number[] = [2, 4, 6, 8, 10];
    let g: any[] = [1, "John", true];
    //2. variable inference: TypeScript can infer the type of a variable based on its value

    let b = 1;
    let j:(number | string | boolean)[] = [1, 1, true];


    console.log("--Typescript Variables types:--");
    // console.log(`Type of a: ${typeof a} value : ${a}`)
    // console.log(`Type of name: ${typeof name} && value : ${name}`)
    // console.log(`Type of name: ${typeof gender} && value : ${gender}`)
    // console.log(`Type of name: ${typeof evenNumbers} && value : ${evenNumbers}`)
    // console.log(`Type of name: ${typeof g} && value : ${g}`)
    // console.log(`Type of name: ${typeof j} && value : ${j}`)

}

export default variables;