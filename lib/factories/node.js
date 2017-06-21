const factory = require('faker-factory')
const Node = require('../models/node.js')

factory.register('node', Node, faker => {
  return {
    'name': faker.name.lastName(),
    'type': faker.random.arrayElement([
      'Planet',
      'Moon',
      'Gas Giant',
      'Ice Giant',
      'Gas Cloud',
      'Dwarf Planet',
      'Star',
      'Comet',
      'Asteroid Belt'
    ]),
    'radius': faker.random.number({
      'min': 100,
      'max': 1200
    }),
    'mass': faker.random.number({
      'min': 1,
      'max': 2000000000
    }),
    'habitable': faker.random.boolean(),
    'colonized': faker.random.boolean(),
    'sovereignty': faker.random.arrayElement([
      'Alpha New Hope',
      'Pine Industries',
      'New Glory',
      'Outreach United',
      'Zeltech',
      'Fontana',
      'Evergreen',
      'The Federation'
    ]),
  }
})