function doubleArray(arr, callback) {
    const doubledArray = arr.map((num) => {
        return callback(num);
    });
    return doubledArray;
}

const originalArray = [1, 2, 3, 4];

function callback(num) {
    return num * 2;
}



const doubledArray = doubleArray(originalArray, callback);
console.log(doubleArray);
