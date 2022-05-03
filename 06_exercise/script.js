/*Write a function called weekNumbersToWords when given an input array of numbers 1-7, it outputs an array of the weeksdays written out. You must use a switch, not if/else.

Example:
Input: [1,4,6,3,2]
Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

Estimated time: 30 minutes
Total points: 30/*  */
function weekNumbersToWords(list) {
  let day;
  let output = [];
  for (let i = 0; i < list.length; i++) {
    switch (list[i]) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    output.push(day);
  }
  return output;
}
