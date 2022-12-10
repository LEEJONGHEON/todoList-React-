const arr = [1,2,3,4,5];

// 각 item 참조해서 로직실행
arr.forEach(item => {
    console.log(item ** 2);
})

// 각 item 참조해서 값 반환
const newArr = arr.map(item => {
    return item ** 2
})
console.log(newArr)

// 코드 간략화
const newArr2 = arr.map(item => item ** 2);
console.log(newArr2)

// 각 item 중 조건 맞는것 return
const conArr = arr.filter((item) => {
    return n % 2 === 1;
})

// 각 item 중 조건 맞는것 return 간략화
const conArr2 = arr.filter(item => n % 2 === 1)
