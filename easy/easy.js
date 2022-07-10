const ScrambleIt = (input) => {
    var str = input
    var newArr = [];
    var neww = '';
    var text = str.split(' ');
    
    text.map(function(v) {
      v.split('').map(function() {
        var hash = Math.floor(Math.random() * v.length);
        neww += v[hash];
        v = v.replace(v.charAt(hash), '');
      });
      newArr.push(neww);
      neww = '';
    });
    var x = newArr.map(v => v.split('').join(' ')).join('\n');
    str.value = x.split('').map(v => v.toUpperCase()).join('');
    console.log(x.toLocaleUpperCase())
}
//ScrambleIt('Pirates approaching system Alderon')
const ReverseIt = (input) => {
  let splitInput = input.split('')
  console.log(splitInput.reverse('').join('').toUpperCase())
}
//ReverseIt('Ore stockpile at Ligma prime reaching capacity')
const ReverseItAndMore = (input) => {
  let splitInput = input.split('')
  let removedChar = splitInput.pop()
  splitInput.unshift(removedChar)
  console.log(splitInput.reverse('').join('').toUpperCase())
}
//ReverseItAndMore('Fuel shortage on earth')
