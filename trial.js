function ClosestEnemy(arr) { 

    var str = "";
    var newIndex = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] == 1){
        var index = i;
      }
      else if(arr[i] == 2){
        str += i;
      }
    }
    var minIndex = index - str[0];
    for (var i = 0; i < str.length; i++){
      var diff = str[i] - index;
      if (diff < 0)
        diff = -(diff);
      if (diff < minIndex){
        minIndex = diff;
        newIndex = str[i];
      }
      else{
        newIndex = str[0];
      }
    }
    var newDiff =  index - newIndex;
    if(newDiff < 0)
        newDiff = - (newDiff);
    return newDiff; 
}
console.log(ClosestEnemy([2, 0, 0, 0, 2, 2, 1, 0]));