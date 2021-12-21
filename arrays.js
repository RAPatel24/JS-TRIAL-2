'use strict';

// 1. printIndices
function printIndices(items) {
  
  for(const item in items) {
    console.log(`${items[item]} ${item}`)
  }

}
//printIndices(['apple','cherry','berry'])


// 2. everyOtherItem
function everyOtherItem(items) {
 const result = [];

 for (let i = 0; i < items.length; i++) {
   if(i % 2 == 0) {
     result.push(items[i]);
   }
 }

 console.log(result);
}

//everyOtherItem([1, 30, 4, 21, 100000])

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  let sortedNItems = items.sort((a,b) => a - b);
  sortedNItems = sortedNItems.slice(0,n);

  console.log(sortedNItems.reverse())
}
smallestNItems([100,3,2,50], 2)