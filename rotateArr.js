const array = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5]
];
    

const newArray = [];
let newRow = [];
const rotate = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            newRow.push(array[array.length - 1 - k][0]);
        }
        newArray.push(newRow)
    }
};

rotate(array);