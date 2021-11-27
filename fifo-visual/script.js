/*

First in first out 

take in an array and move the element by an index amount

input:
[1,2,3,4,5,6] , index = 5
[2,3,2,4,5,6] , index =2

output:
[6,1,2,3,4,5]
[2,4,5,6,2,3]

*/

function fifoarray(arr, index) {
    new_arr = new Array();
    old_arr = new Array();

    for (let i = 0; i < arr.length; i++) {
        if (i <= index - 1) {
            old_arr.push(arr[i]);
        } else if (i > index - 1) {
            new_arr.push(arr[i]);
        }
    }
    // console.log(new_arr);
    // console.log(old_arr);
    new_arr = new_arr.concat(old_arr);
    // console.log(new_arr);
    return new_arr;
}
let arr = [];
let index;
document.querySelector('.check').addEventListener('click', function () {
    let myarr = document.querySelector('.myarr').value;
    if (myarr.includes(',') || myarr.includes(' ')) {
        myarr = myarr.includes(',') ? myarr.split(',') : myarr.split(' ');
    } else {
        myarr = myarr.split('');
    }
    arr = myarr;
    document.querySelector('.arrayValue').textContent = myarr;
    if (index) {
        document.querySelector('.newArrayValue').textContent = fifoarray(
            myarr,
            index
        );
    }
});

document.querySelector('.moveArr').addEventListener('click', function () {
    let _index = document.querySelector('.index').value;
    document.querySelector('.indexValue').textContent = _index;
    index = _index;
    if (arr) {
        document.querySelector('.newArrayValue').textContent = fifoarray(
            arr,
            index
        );
    }
});
