var test = require('tap').test
  , countPerDay = require('./count-per-day')
  , days = [
        new Date('2014-01-01T12:00:00')
      , new Date('2014-01-04T11:00:00')
      , new Date('2014-01-01T14:00:00')
      , new Date('2014-01-02T16:55:00')
    ]

test('countPerDay()', function (t) {
  t.deepEqual(
      countPerDay(days)
    , { '2014-01-01': 2, '2014-01-04': 1, '2014-01-02': 1 }
  )
  t.end()
})

test('countPerDay.array()', function (t) {
  t.deepEqual(
      countPerDay.array(days)
    , [
          { day: '2014-01-01', count: 2 }
        , { day: '2014-01-02', count: 1 }
        , { day: '2014-01-03', count: 0 }
        , { day: '2014-01-04', count: 1 }
      ]
  )
  t.end()
})

console.log('You can get the counts by day as an object')
console.log(countPerDay(days))
console.log('But you can also get it as an array from first date to last date')
console.log(countPerDay.array(days))