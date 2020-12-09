const fs = require('fs')
const moment = require('moment')

const todoList = [
  {
    text: 'phone a.',
    date: moment('19.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
    id: 0,
    done: false
  },
  {
    text: 'get out',
    date: moment('24.12.2020, 11:19', 'DD.MM.YYYY, hh:mm'),
    id: 1,
    done: false
  },
  {
    text: 'get lunch with b.',
    date: moment('19.10.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
    id: 2,
    done: false
  }
]

const json = JSON.stringify(todoList)

fs.writeFileSync('todo.json', json)
