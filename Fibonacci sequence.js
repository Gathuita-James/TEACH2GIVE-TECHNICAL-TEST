//Question 2: Fibonacci Sequence
  function generateFibonacciUpToN(n) {
    let a = 0,
      b = 1,
      nextTerm;
  
    console.log(a);
    while (b <= n) {
      console.log(b);
      nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
  }
  
  generateFibonacciUpToN(100);
  
