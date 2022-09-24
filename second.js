let combos = new Set()
function shifter(arr, num, p) {
    let newA = [...arr];
    while (p < newA.length) {
        newA[p] = `${num}`;
        combos.add(newA.join(""));
        p++;
        for (let j = 0; j < 3; j++) {
            shifter(newA, j, p);
        }
        combos.add(newA.join(""));
    }
}
function getPossible(pinArr) {
    let pinArr0 = pinArr.map(el=>"0")
    for (let i = 0; i < 3; i++)
        shifter(pinArr0, i, 0);
}
function getPINs(pin) {
    let strPin = `${pin}`;
    let pinArr = strPin.split("");
    getPossible(pinArr);
    let possibleObj = {
        "1": ["1", "2", "3"],
        "2": ["2", "1", "4"],
        "3": ["3", "1", "4"],
        "4": ["4", "2", "3"]
    }
    let possiblePins = new Set();
    let combosArray = [...combos];
    combosArray.map(val => {
        let decimalArr = (val.split(""));
        decimalArr = decimalArr.map(el => parseInt(el));
        let possibleArray = [];
        for (let i = 0; i < pinArr.length; i++) {
            possibleArray.push(possibleObj[pinArr[i]][decimalArr[i]])
        }
        possiblePins.add(possibleArray.join(""));
    })
    console.log(possiblePins);
}
getPINs(124243)