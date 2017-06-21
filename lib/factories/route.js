const factory = require('faker-factory')
const Route = require('../models/route.js')

factory.register('route', Route, faker => {
  return {
    'name': faker.name.lastName(),
    'security': faker.random.number({
      'min': 0,
      'max': 100
    }),
    'traffic_density': faker.random.number({
      'min': 100,
      'max': 20000
    })
  }
})
