const reverseString = str => {
  const newStr = str
                    .split('')
                    .reverse()
                    .join('');
    return newStr;
}

module.exports = reverseString;