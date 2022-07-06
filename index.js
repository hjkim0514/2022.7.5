let number = [230, 1, 4000, 79, 534];
function sorting(array){
let sorted = array.sort(function(a,b){
    return b-a;
}
);
console.log(sorted)
}

function addNumber(array, callback)
{
    array.push(303030);
    console.log(array);
    callback(array);
}

addNumber(number, sorting);