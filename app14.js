function findPerson(data, source) {
  var scr = Object.keys(source);

  return data.filter(function (obj) {
    for (var i = 0; i < scr.length; i++) {
      if (
        obj.hasOwnProperty(scr[i]) === false ||
        obj[scr[i]] !== source[scr[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  findPerson(
    [
      { lastName: "Tom", name: "Durana" },
      { lastName: "Juliette", name: "Garcia" },
      { lastName: "Jean", name: "Lafite" },
      { lastName: "Lucien", name: "Lafite" },
    ],
    { name: "Lafite" }
  )
);


// const findPerson = (data, source) => {
//   const keys = Object.keys(source);
//   return data.filter(obj => keys.every(key => obj[key] === source[key]));
// };
