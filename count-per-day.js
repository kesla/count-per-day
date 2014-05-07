var dateToDay = function (date) {
      return date.toJSON().slice(0, 10)
    }
  , countByDay = function (days) {
      var count = {};

      days.forEach(function (date) {
        var day = dateToDay(date)
        count[day] = (count[day] || 0) + 1
      })

      return count
    }
  , array = function (days) {
      var sorted = days.sort(function (x, y) { return y - x })
        , to = sorted[0]
        , from = sorted[sorted.length - 1]
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