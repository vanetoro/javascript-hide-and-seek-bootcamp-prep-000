function getFirstSelector(selector){
  var get = document.querySelector(selector);
  return get;
}

function nestedTarget(){
  return document.querySelector('#nested div div div div');
}

function increaseRankBy(n){
  var list =  document.querySelectorAll('.ranked-list li');

  for(var i = 0; i<list.length; i++){
  var newNum = (Number(list[i].innerHTML) + n);
  list[i].innerHTML = newNum;
  }
}
function deepestChild(){
  var answer = document.querySelectorAll('#grand-node div');
  return answer[answer.length-1];


}




