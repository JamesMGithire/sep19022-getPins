let possibleindx = new Set();
function getPINs(pin) {
    let strPin = `${pin}`;
    let pinArr = strPin.split("");
    let possibleArr = getPossible(pinArr);
    let possibleObj = {
        "1": ["1", "2", "3"],
        "2": ["2", "1", "4"],
        "3": ["3", "1", "4"],
        "4": ["4", "2", "3"]
    }
    let possiblePins = new Set();
    possibleArr.map(val => {
        let decimalArr = (val.split(""));
        decimalArr = decimalArr.map(el => parseInt(el));
        let possibleArray = [];
        for (let i = 0; i < pinArr.length; i++) {
            possibleArray.push(possibleObj[pinArr[i]][decimalArr[i]])
        }
        possiblePins.add(possibleArray.join(""));
    })
    console.log(possiblePins.size);
}

getPINs(134214)

function shifter(arr, num) {
    let newArr = null;
    // let i = arr.length;
    while( i > 0) {
        newArr = [...arr];
        newArr[i - 1] = `${num}`;
        possibleindx.add(newArr.join(""));
        possibleindx.add(newArr.reverse().join(""));
        i--
        while(i>0){
            shifter([...newArr],i)
        }
    }
    return newArr;
}
function unshifter(arr, num) {
    let newArr = null;
    let xnewArr = null;
    let i = 1;
    for (i = 0; i < arr.length; i++) {
        newArr = [...arr];
        newArr[i] = `${num}`;
        possibleindx.add(newArr.join(""));
        possibleindx.add(newArr.reverse().join(""));
        xnewArr = [...newArr]
        for (let j = 0; j < 3; j++) {
            for (let k = i; k > 0; k--) {
                for (let l = 0; l < 3; l++) {
                    xnewArr[k] = `${l}`;
                    possibleindx.add(xnewArr.join(""));
                    possibleindx.add(xnewArr.reverse().join(""));
                }
            }
        }
    }
    return newArr;
}

function getPossible(pinArr) {
    let originalStrArr = pinArr.map(() => "0");
    possibleindx.add(originalStrArr.join(""))
    let originalStrArr1 = pinArr.map(() => "1");
    possibleindx.add(originalStrArr1.join(""))
    let originalStrArr2 = pinArr.map(() => "2");
    possibleindx.add(originalStrArr2.join(""))
    let originalStrArr10 = originalStrArr1.map((el, indx) => indx % 2 === 0 ? "0" : "1");
    possibleindx.add(originalStrArr10.join(""))
    let originalStrArr01 = originalStrArr10.map((el, indx) => indx % 2 === 0 ? "1" : "0");
    let originalStrArr12 = originalStrArr1.map((el, indx) => indx % 2 === 0 ? "2" : "1");
    possibleindx.add(originalStrArr12.join(""))
    let originalStrArr21 = originalStrArr12.map((el, indx) => indx % 2 === 0 ? "1" : "2");
    possibleindx.add(originalStrArr21.join(""))
    let originalStrArr20 = originalStrArr2.map((el, indx) => indx % 2 === 0 ? "0" : "2");
    possibleindx.add(originalStrArr20.join(""))
    let originalStrArr02 = originalStrArr20.map((el, indx) => indx % 2 === 0 ? "2" : "0");
    let lastEntry = [];
    for (let i = 0; i < 3; i++) {
        let newArr0 = [shifter(originalStrArr, i), shifter(originalStrArr1, i), shifter(originalStrArr10, i), shifter(originalStrArr01, i), shifter(originalStrArr12, i), shifter(originalStrArr2, i), shifter(originalStrArr21, i), shifter(originalStrArr20, i), shifter(originalStrArr02, i)];
        for (let n = 0; n < newArr0.length; n++) {
            shifter(newArr0[n], i);
            unshifter(newArr0[n], i);
            lastEntry = [...shifter(newArr0[n], i)];
            for (let i = 2; i >= 0; i--) {
                let reverse = shifter(lastEntry.reverse(), i);
                shifter(reverse, i);
            }
        }
    }

    return [...possibleindx];
}
