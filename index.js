//code your solution here
 const record = [{year: (""), result: ("")}]

// function superbowlWin(record) {
//     let = array.find(record === "W");
//     return year;
// }

// console.log(record.find(superbowlWin));

// function superbowlWin(record){
//     record.find(season => season = season.result = "W")
//     }
// const record = [
//     { year: "2018", result: "N/A"},
//     { year: "2017", result: "N/A"},
//     { year: "2016", result: "N/A"},
//     { year: "2015", result: "W"},
//]
// function superbowlWin(record) {
//     let yearWon = record.find((record) => record.result === "W");
//     return yearWon;
// }
// superbowlWin(yearWon);
superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }