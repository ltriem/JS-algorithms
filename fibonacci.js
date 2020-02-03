const fibonacci = (num) => {
    let a = 1,
        b = 1;

    for (i = 3; i <= num; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

