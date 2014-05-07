var countPerDay = require('./count-per-day')
  , days = [
        new Date('2014-01-01T12:00:00')
      , new Date('2014-01-04T11:00:00')
      , new Date('2014-01-01T14:00:00')
      , new Date('2014-01-02T16:55:00')
    ]

console.log('You can get the counts by day as an object')
console.log(countPerDay(days))
console.log('But you can also get it as an array from first date to last date')
console.log(countPerDay.array(days))