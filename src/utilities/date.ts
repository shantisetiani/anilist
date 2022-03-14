import moment from "moment";

export const toDateHourString = (date: number) =>
  moment(date).format("DD MMM YYYY HH:mm");

export const toMonthString = (month: number) => moment.months(month - 1);
