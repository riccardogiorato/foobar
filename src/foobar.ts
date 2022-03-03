// foobar
// prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers that are multiples of both three and five print "FooBar".
const foobar = ({ from = 1, to = 100 }: { from?: number; to?: number }) => {
  let output = "";
  for (let i = from; i <= to; i++) {
    if (i % 5 && i % 3) {
      output += i;
    }
    if (i % 3 === 0) {
      output += "Foo";
    }
    if (i % 5 === 0) {
      output += "Bar";
    }
    output += " ";
  }
  return output.trim();
};

export default foobar;
