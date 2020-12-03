var list1 = [1, 3, 5, 5, 2, 5, 7];
var list2 = ["abc", "xy", "bb", "xy"];

function CheckDuplicateArraySimple(arr) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] === arr[j]) {
                result = true;
                break;
            }
        }
        if (result) break;
    }
    return result;
}
console.log("simple");
console.log(CheckDuplicateArraySimple(list1));
console.log(CheckDuplicateArraySimple(list2));;
console.log("==============================================================");
/////////////////////////////////////////////////////////////////////////////

function CheckDuplicateArrayUsingSome(arr) {
    let result = arr.some((it, index) => arr.indexOf(it) !== index);
    return result;
}
console.log("using some function");
console.log(CheckDuplicateArrayUsingSome(list1));
console.log(CheckDuplicateArrayUsingSome(list2));
console.log("==============================================================");

/////////////////////////////////////////////////////////////////////////////

function CheckDuplicateArrayCompareIndex(arr) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            result = true;
            break;
        }
    }
    return result;
}

console.log("using compare index");
console.log(CheckDuplicateArrayCompareIndex(list1));
console.log(CheckDuplicateArrayCompareIndex(list2));
console.log("==============================================================");

/////////////////////////////////////////////////////////////////////////////
/* For ES6 */
function CheckDuplicateArrayUsingSet(arr) {
    let result = false;
    const uniqueArr = new Set(arr);

    if (arr.length !== uniqueArr.size()) {
        result = true;
    }
    return result;
}

console.log("using Set Object");
console.log(CheckDuplicateArrayUsingSet(list1));
console.log(CheckDuplicateArrayUsingSet(list2));
console.log("==============================================================");

/////////////////////////////////////////////////////////////////////////////

function CheckDuplicateArrayUsingObject(arr) {
    let result = false;
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            result = true;
            break;
        }
        map[arr[i]] = true;
    }
    return result;
}

console.log("using Set Object");
console.log(CheckDuplicateArrayUsingObject(list1));
console.log(CheckDuplicateArrayUsingObject(list2));
console.log("==============================================================");

// https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3