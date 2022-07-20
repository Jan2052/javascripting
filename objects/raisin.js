// const raisinAlarm = function (cookie) {

//   let raisins = false;

//   for (let i = 0; i < cookie.length; i++) {
//     if (cookie[i] === "🍇") {
//       raisins = true;
//     }
//   }
//   if (raisins === true) {
//     return "Raisin alert!";
//   } else {
//     return "All good!";
//   }
// };

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  let raisins = false;
  let alert = [];
  for (let i = 0; i < cookies.length; i++) {
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        raisins = true;
      }
    }
    if (raisins) {
      alert.push("Raisin alert!");
      raisins = false;
    } else {
      alert.push("All good!");
    }
  }
  return alert;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);