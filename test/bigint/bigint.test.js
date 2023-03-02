
// `new` 키워드 없이 생성


describe('Bigint test', ()=>{
  test('Not equal safe max', ()=>{
    const bigNum = BigInt(9007199254741091) // MAX_SAFE_INTEGER + 100, 9007199254741092n
    expect(bigNum).not.toBe(Number.MAX_SAFE_INTEGER + 100) // 9007199254741092n 1 오차 발생
  })

  test("")
})

// Number.MAX_SAFE_INTEGER : 9007199254740991


// const strBigNum = BigInt('9007199254741091')
// console.log(strBigNum) // 9007199254741091n
//
// const bigTrue = BigInt(true)
// console.log(bigTrue) // 1n
//
// const bigFalse = BigInt(false)
// console.log(bigFalse) // 0n
