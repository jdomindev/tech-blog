module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with only the time
    format_date: (date) => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      },
  };
  