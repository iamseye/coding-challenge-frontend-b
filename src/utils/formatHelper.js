import moment from 'moment-timezone';

export const formatHelper = {
  getLocalTime: (time, timezone) => {
    return moment.tz(time, timezone).format('HH:mm, dddd, MMMM Do YYYY');
  },
  priceFormatter: (currency, amount) => {
    return currency + ' $' + String(amount).slice(0, -2) + '.' + String(amount).slice(-2);
  }
}

export default formatHelper;
