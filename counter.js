function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(`This function has been called ${count} times`);
  };
}

const counter = createCounter();

counter(); 
counter();  
counter();  