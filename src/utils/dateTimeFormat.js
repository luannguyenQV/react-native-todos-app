import moment from "moment";

function timeFromNow(myDate) {
  return moment
    .utc(myDate)
    .utcOffset(moment().utcOffset())
    .calendar(null, {
      lastDay: "[Yesterday]",
      sameDay: "[Today], HH:MM",
      lastWeek: "MMMM DD, YYYY",
      nextDay: "[Tomorrow]",
      nextWeek: "dddd",

      sameElse: () => {
        return "MMMM DD, YYYY";
      },
    });
}

export { timeFromNow };
