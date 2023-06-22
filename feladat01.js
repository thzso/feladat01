function feladat01(szinek) {
  let combinations = [];

  let max = false;
  for (let i = 0; i < szinek.length; i++) {
    let curr = szinek[i];

    for (let j = 0; j < szinek.length; j++) {
      let newC = [curr];
      if (szinek[j] !== curr) {
        newC = [...newC, szinek[j]];
        let used = false;
        for (let m = 0; m < combinations.length; m++) {
          if (checkIfContains(combinations[m], newC)) {
            used = true;
          }
        }

        if (!used) {
          combinations = [...combinations, newC];
          used = false;
        }

        if (newC.length < szinek.length && !max) {
          for (let k = j + 1; k < szinek.length; k++) {
            newC = [...newC, szinek[k]];
            combinations = [...combinations, newC];
            if (newC.length === szinek.length) {
              max = true;
            }
          }
        }
      }
    }
  }
  return szinek.length <=1 ? 0 : combinations.length;
}

const checkIfContains = (arr1, arr2) => {
  let contains = [];

  for (let i = 0; i < arr1.length; i++) {
    let curr = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === curr) {
        contains = [...contains, arr2[j]];
      }
    }
  }

  return contains.length === arr1.length;
};

