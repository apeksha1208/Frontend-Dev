function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));   
    }
    return result;
}

const nums = [1, 2, 3, 4];

console.log(applyOperation(nums, x => x * 2)); 
console.log(applyOperation(nums, x => x * x)); 
