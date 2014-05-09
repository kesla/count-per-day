var countPerDay = require('./count-per-day')
  , days = [
        new Date('2014-01-01T12:00:00')
      , new Date('2014-01-04T11:00:00')
      , new Date('2014-01-01T14:00:00')
      , new Date('2014-01-02T16:55:00')
    ]
  , daysWithWeight = [
        { date: new Date('2014-01-01T12:00:00'), weight: -1 }
      , { date: new Date('2014-01-04T11:00:00'), weight: 13.37 }
      , { date: new Date('2014-01-01T14:00:00'), weight: 2 }
      , { date: new Date('2014-01-02T16:55:00'), weight: -1000 }        
  ]

console.log('You can get the counts by day as an object')
console.log(countPerDay(days))
console.log('But you can also get it as an array from first date to last date')
console.log(countPerDay.array(days))
console.log('You can also get counts per day with where every day has a weight')
console.log(countPerDay.withWeight(daysWithWeight))
console.log('and that can you also get as an array from first date to last')
console.log(countPerDay.withWeight.array(daysWithWeight))