var dateToDay = function (date) {
      return date.toJSON().slice(0, 10)
    }
  , countByDay = function (days) {
      var count = {}

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
  , withWeight = function (input) {
      var result = {}

      input.forEach(function (obj) {
        var day = dateToDay(obj.date)
        result[day] = (result[day] || 0) + obj.weight
      })

      return result
    }
  , withWeightArray = function (input) {
      var sorted = input.sort(function (x, y) { return y.date - x.date })
        , to = sorted[0].date
        , from = sorted[sorted.length - 1].date
        , countByDayObj = withWeight(input)
        , date = new Date(dateToDay(from))
        , result = []

      for(; date <= to; date.setDate(date.getDate() + 1))(function () {
        var day = dateToDay(date)

        result.push({
            day: day
          , weight: countByDayObj[day] || 0
        })
      })()

      return result
    }

module.exports = countByDay
module.exports.array = array
module.exports.withWeight = withWeight
module.exports.withWeight.array = withWeightArray