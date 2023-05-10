const talkingCalendar = function(date) {
  // Your code here
  let formattedDate = "";
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const dateArray = date.split('/');

  function getDateSuffix(day) {
    if(day === 1 || day === 21 || day === 31) return 'st';
    if(day === 2 || day === 22) return 'nd';
    if(day === 3 || day === 23) return 'rd';
    return 'th';
  }

  const year = dateArray[0]
  const month = months[dateArray[1] - 1]
  const day = Number(dateArray[2])
  const dayWithSuffix = `${day}${getDateSuffix(day)}`

  formattedDate = `${month} ${dayWithSuffix}, ${year}`
  return formattedDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1995/10/16"));
console.log(talkingCalendar("2020/09/02"));


