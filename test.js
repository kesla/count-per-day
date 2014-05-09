var test = require('tap').test
  , countPerDay = require('./count-per-day')
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

test('countPerDay.withWeight()', function (t) {
  t.deepEqual(
      countPerDay.withWeight(daysWithWeight)
    , { '2014-01-01': 1, '2014-01-04': 13.37, '2014-01-02': -1000 }
  )
  t.end()
})

test('countPerDay.withWeight.array()', function (t) {
  t.deepEqual(
      countPerDay.withWeight.array(daysWithWeight)
    , [
          { day: '2014-01-01', weight: 1 }
        , { day: '2014-01-02', weight: -1000 }
        , { day: '2014-01-03', weight: 0 }
        , { day: '2014-01-04', weight: 13.37 }
      ]
  )
  t.end()
})