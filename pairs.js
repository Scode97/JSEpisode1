/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  //do this first return [] and u will pass two tests
    if(names === undefined)
    {
    // or if(!names)
      return [];
    }
    if (names.length === 0)
    {
      return [];
    }
    /*  OR
    if(!names || !names.length)
    return [];
    */

    const pairings = [];

    while (names.length > 1)
    {
      //pairingss.push([names.pop(), names.pop()])
      pairings.push([names.getRandom(), names.getRandom()])


    }
if(names.length){
  pairings.push(names);

}
return pairings;

  //if(names.length === 2)
    //  {
    //    let x = names.getRandom();
    //    let y = names.getRandom();
    //    return [[x,y]];
  //  }
    // return [[names.getRandom(), names.getRandom()]]; and u will pass test num 3

//  if()

  //  }


    //else {
      //return names.getRandom();
  //  }




}

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've including this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

console.log(pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato']));
