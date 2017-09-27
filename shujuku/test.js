var ary = [
  {id : 30},
  {id : 20},
  {id : 35},
  {id : 70},
  {id : 37},
  {id : 40},
  {id : 31},
  {id : 60},
  {id : 39}
];

function sort(arr) {
  arr = arr.sort(function (a,b) {
    return b.id-a.id;
  });
  return arr;
}
var a = sort(ary);
console.log(a) ;
