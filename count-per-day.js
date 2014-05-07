var countBy = require('lodash.countby')
  , min = require('lodash.min')
  , max = require('lodash.max')
  , dateToDay = function (date) {
      return date.toJSON().slice(0, 10)
    }
  , countByDay = function (days) {
      return countBy(days, function (day) {
        return dateToDay(day)
      })
    }
  , array = function (days) {
      var from = min(days)
        , to = max(days)
        , countByDayObj = countByDay(days)
        // day is begining of the day
        , date = new Date(dateToDay(from))
        , result = []

      for(; date <= to; date.setDate(date.getDate() + 1))(function () {
        var day = dateToDay(date)

        result.push({
            day: day
          , count: countByDayObj[day] || 0
        })
      })()

      return result
    }

module.exports = countByDay
module.exports.array = array