console.log('Learning generator');
function* helloMotherFucker() {
  yield 2020;
  return "Learning redux saga";
}

const result = helloMotherFucker();
console.log('result 1', result.next());
console.log('result 2', result.next());
