let randomNum = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
                    //task1
let task1 = () => {
    let num1 = randomNum(-100, 100)
    let num2 = randomNum(-100, 100)
    let num3 = randomNum(-100, 100)
    console.log(`Task 1: \nrandom number are: ${num1},${num2},${num3}`)
    if(num1>0) {
        console.log(`there a positive numbers are: ${num1}`)
    } if(num2>0) {
        console.log(`there a positive numbers are: ${num2}`)
    } if(num3>0) {
        console.log(`there a positive numbers are: ${num3}`)
    } else {
        console.log('there are no positive number...')
    }
}
                    //task2
let task2 = () => {
    let num1 = randomNum(-100, 100)
    let num2 = randomNum(-100, 100)
    let num3 = randomNum(-100, 100)
    console.log(`\nTask2: \nnumber1 = ${num1} \nnumber2 = ${num2} \nnumber3 = ${num3}`)

    if(num1>num3) {
        let temp1 = num1
        num1 = num3
        num3 = temp1
        console.log(`number1 > number2  \nnumber1 = ${num1} \nnumber2 = ${num2} \nnumber3 = ${num3}`)
    }
}
                    //task3
let task3 = () => {
    let numArr = []
    let sum = 0
    for (let i = 0; i<=9; i++) {
        numArr.push(randomNum(0, 100))
    }
    console.log(`\nTask 3: \nArray is: ${numArr}`)

    let min = Math.min.apply(null, numArr)
    let max = Math.max.apply(null, numArr)
    let index1 = numArr.indexOf(min)
    let index2 = numArr.indexOf(max)
    let temp = numArr[index1]
    numArr[index1]=numArr[index2]
    numArr[index2]=temp
    console.log(`1. \nmax value of the array: ${max} \nmin: ${min} \nnew array: ${numArr}`)

    for(let i in numArr) {
        if(i%2!=0) {
            sum += numArr[i]
        }
    }
    console.log(`2. \nthe sum of values with odd [i]: ${sum}`)

    numArr.pop()
    console.log(`3. \ndeleted the last element of the array: ${numArr}`)
}

task1()
task2()
task3()
