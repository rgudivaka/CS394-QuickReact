import { days, terms } from "../constants";
import { getCourseTerm } from "../helpers";

const hasConflict = (course, selected) =>
  selected.some(selection => courseConflict(course, selection));

const courseConflict = (course1, course2) =>
  course1 !== course2 &&
  getCourseTerm(course1) === getCourseTerm(course2) &&
  timeConflict(course1, course2);

const timeConflict = (course1, course2) =>
  daysOverlap(course1.days, course2.days) &&
  hoursOverlap(course1.hours, course2.hours);

const daysOverlap = (days1, days2) =>
  days.some(day => days1.includes(day) && days2.includes(day));

const hoursOverlap = (hours1, hours2) =>
  Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end);

export default hasConflict;
