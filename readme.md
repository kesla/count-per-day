# count-per-day

Get counts per day from a list of dates

[![NPM](https://nodei.co/npm/count-per-day.png?downloads&stars)](https://nodei.co/npm/count-per-day/)

[![NPM](https://nodei.co/npm-dl/count-per-day.png)](https://nodei.co/npm/count-per-day/)

## Installation

```
npm install count-per-day
```

## Example

### Input

```javascript
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
```

### Output

```
You can get the counts by day as an object
{ '2014-01-01': 2, '2014-01-04': 1, '2014-01-02': 1 }
But you can also get it as an array from first date to last date
[ { day: '2014-01-01', count: 2 },
  { day: '2014-01-02', count: 1 },
  { day: '2014-01-03', count: 0 },
  { day: '2014-01-04', count: 1 } ]
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

