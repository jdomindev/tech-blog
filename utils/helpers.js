module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with only the time
    format_date: (date) => {
        return date.toLocaleTimeString('default', { month: 'numeric', day: 'numeric', year: 'numeric' });
      },
  };
  