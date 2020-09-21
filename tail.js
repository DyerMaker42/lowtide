const tail = (input) => {
  if (!input) {
    return [];
  }
  if (input.length === 0) {
    return [];
  }
  if (input.length >= 1) {
    return input.slice(1);
  }  
};

module.exports = tail;