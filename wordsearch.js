const wordSearch = (letters, word) => {
  const transpose = (oldArray) => {
    let array = [];
    for (let i = 0; i < oldArray[0].length; i++) {
      array.push([]);
    }
    for (let row = 0; row < oldArray.length; row++) {
      for (let col = 0; col < oldArray[row].length; col++) {
        array[col][row] = oldArray[row][col];
      }
    }
    return array;
  };
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalFlip = transpose(letters).map((ls) => ls.join(""));

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      for (l of verticalFlip) {
        if (l.includes(word)) return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;