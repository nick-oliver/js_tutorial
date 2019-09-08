// reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns True for a palindrome, false otherwise.
function palindrome(string) {
  let processContent = string.toLowerCase();
  return processContent === reverse(processContent);
}
