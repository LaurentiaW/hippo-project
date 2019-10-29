export function strSplit(str) {
  // create arrays of the words in the string the string should be split in 2 and the smallest amount of words on the first array and the rest in the second
  const array = str.split(' ')
  // the idea is not to have more than two strings but spliting here on 2 and rounding to the lower integer could result in 3 arrays (that is dealt with later)
  const size = Math.floor(array.length / 2)
  const chunked = []
  let index = 0
  // here push the words arrays in the new arrays
  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  let secondStr
  if (chunked.length > 2) {
    secondStr = chunked[chunked.length - 2]
      .concat(chunked[chunked.length - 1])
      .join(' ')
  } else {
    secondStr = chunked[chunked.length - 1].join(' ')
  }

  const firstStr = chunked[0].join(' ')
  return [firstStr, secondStr]
}
