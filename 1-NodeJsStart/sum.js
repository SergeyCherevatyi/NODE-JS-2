const main = () => {
  const inputData = process.argv[2]

  if (!inputData) {
    throw new Error('No data provided')
  }
  const arrayData = JSON.parse(inputData)

  const recSum = (data) => {
    let sum = 0

    data.forEach(item => {
      if (Array.isArray(item)) {
        sum += recSum(item)
      } else {
        if (typeof item === 'number') {
          sum += item
        } else {
          throw new Error('Invalid data')
        }
      }
    })
    return sum
  }

  return recSum(arrayData)
}

const res = main()
console.log(res)
