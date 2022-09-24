let posssibleVals = new Set();
let allpossible = new Set();
function cracker(num) {
    let str = `${num}`
    let arr = str.split("");
    let possibleArr = []
    console.log(("The given value was " + str));
    console.log("Posssible combinations :");
    posssibleVals.add(str);
    // arrRec(str)
    for (let i = 0; i < arr.length; i++) {
        arrRec(i, str)
        for (let j = 1; j <= posssibleVals.length; j++) {
            arrRec(j, posssibleVals[j])
        }

    }
    // posssibleVals.forEach((val) => possibleArr.push(val));
    console.log(posssibleVals)
}


function arrRec(p = 0, str) {
    let arr = str.split("");
    if (str[p] === "1" || str[p] === "4") {
        arr[p] = "2";
        posssibleVals.add(arr.join(""))
        arr[p] = "3";
        posssibleVals.add(arr.join(""))
        arr.join("") === "21" ? console.log("Here") : null;
    }
    else if (str[p] === "2" || str[p] === "3") {
        arr[p] = "1";
        console.log()
        posssibleVals.add(arr.join(""))
        arr[p] = "4";
        posssibleVals.add(arr.join(""))
        arr.join("") === "21" ? console.log("Here") : null;
    }
    console.log
    return (arr.join(""))
}
cracker(12)

function recursion(arr, i) {
    while (i < arr.length) {
        let j =arr.length;
        for (j; j >0; j--){
            arr[j] = `${j}`;
            console.log(arr);
        }
        console.log("Outside for loop "+arr);
        i++
        recursion([arr], i)
        j++
    }
    console.log(arr)
    console.log("////////")
}
recursion(["0", "0", "0"], 0)