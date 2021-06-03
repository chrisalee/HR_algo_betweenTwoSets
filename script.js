const getTotalX = (a, b) => {
    // Write your code here
    // a.sort((a,b) => a-b)
    // b.sort((a,b) => a-b)
    let solutions = []
    let factor = a[a.length-1]
    while(true){
        let flag = true;
        for(let i = 0; i<a.length; i++){
            console.log(factor);
            if(factor % a[i] !== 0){
                flag = false;
                break;
            } 
            //console.log("factor.filter(num => num%factor === 0));
            if(b.filter(num => num%factor === 0).length !== b.length){
                flag = false;
                break;
            }
        }
        if(flag){
            solutions.push(factor)
        };
        factor += a[a.length-1];
        if(factor>b[0]) {
            break;
        } 
    }
    // console.log(solutions)
    return solutions.length;
}


// ////////////////////////////////////////////////////////////////////// 
function getTotalX(a, b) {
    // Write your code here

    return new Array(100).fill(1).reduce((target, item, index) => {
        (a.every(value => !((index + 1) % value)) && b.every(value => !(value % (index + 1)))) && target++;

        return target;
    }, 0);
}
