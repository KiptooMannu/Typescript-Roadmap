
const promises = () => {

    //Promises are a powerful tool for managing asynchronous operations.
    // The Promise constructor accepts a function with two parameters:
    // A function to resolve the promise.
    // A function to reject the promise. Here’s an example:

    const doHomework: Promise<string> = new Promise((resolve, reject) => {
        console.log('😏starting my homework')
        //await 5sec to finish homework
        setTimeout(() => {
            resolve('🤓finished my homework');
        }, 5000)
        // setTimeout(() => {
        //     reject('💀Failed my homework');
        // }, 2000);
    })


    //handle the promise with async/await

    // async function doMyHomeworkAsync() {
    //     try {
    //         const result = await doHomework;
    //         console.log(result)
    //     } catch (error: unknown) {
    //         console.log("error" + error)
    //     }
    // }
    // doMyHomeworkAsync();

    //handle the promise with .then() and .catch()

    doHomework.then((result) => {
        console.log("result" + result)
    }).catch((error) => {
        console.log("error" + error)
    })




}
export default promises;