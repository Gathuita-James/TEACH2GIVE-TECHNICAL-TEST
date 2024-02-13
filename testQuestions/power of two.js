//Question 3: Power of Two
  function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
  }
  
  // Examples
  console.log(isPowerOfTwo(8)); // returns true
  console.log(isPowerOfTwo(6)); // returns false
  
 
