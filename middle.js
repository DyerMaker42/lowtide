const middle = (input) => {
  let output = [];
  if (input.length <= 2) {
    return output;
  }
  const even = (input.length % 2 === 0);
  const mid = input.length / 2;
  //hypo 4 length , want index 1,2
  if (even) {
    output = [input[(mid) - 1], input[mid]];
  } else {
    //hypo 3 length want index 1
    output = [input[((input.length - 1) / 2)]];
  }
  //console.log(output, "output");
  return output;
};

module.exports= middle;
