export const EasyEncrypt = () => {
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

}
// can be solved with practice and skill