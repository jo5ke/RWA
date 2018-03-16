export function getRandomNumber() {
    return new Promise((resolve,reject)=>{
        setTimeout( () => resolve(parseInt(Math.random()*10)),2000);
    }); 
}