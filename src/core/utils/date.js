import moment from 'moment';

export const getNow = () => moment();
export const getTimeAgo = (amount, unit) => moment().subtract(amount, unit);
export const getDayAgo = () => getTimeAgo(1, 'days');
export const getFortnightAgo = () => getTimeAgo(15, 'days');
export const getWeekAgo = () => getTimeAgo(7, 'days');
export const getMonthAgo = () => getTimeAgo(1, 'months');
export const getYearAgo = () => getTimeAgo(1, 'years');

const dateUtils = {
  getNow,
  getTimeAgo,
  getDayAgo,
  getFortnightAgo,
  getWeekAgo,
  getMonthAgo,
  getYearAgo,
};

export default dateUtils;
