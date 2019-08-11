const fizzBuzz = (a, b) => {
    let start = a;
  
    while (start <= b) {
      if (start % 3 === 0 && start % 5 === 0) {
        console.log('FizzBuzz');
      } else if (start % 3 === 0 && start % 5 !== 0) {
        console.log('Fizz');
      } else if (start % 3 !== 0 && start % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(start);
      }
      start += 1;
    }
  };

