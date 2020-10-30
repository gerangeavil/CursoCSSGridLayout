function numberOfItems(arr, item) {
  //console.log(arr.isArray());
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].isArray) {
      numberOfItems(arr[i], item);
      j++;
      console.log(j);
    }
  }
}

var arr = [25, 'apple', ['banana', 'strawberry', 'apple', 25]];

numberOfItems(arr, 25);
//console.log(numberOfItems(arr, 25));
//console.log(numberOfItems(arr, "apple"));
