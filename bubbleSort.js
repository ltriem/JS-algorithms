const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let wasSwap = false;
        for (let j = 0; j < array.length - 1 - i; j++) { 
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return array;
};

