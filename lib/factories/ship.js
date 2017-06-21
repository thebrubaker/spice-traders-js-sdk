const factory = require('faker-factory')
const Ship = require('../models/ship.js')

factory.register('ship', Ship, faker => {
  return {
    'name': faker.name.lastName(),
    'type': faker.random.arrayElement([
      'Tactical',
      'Fast Attack',
      'Explorer',
      'Express',
      'Racing',
      'Stealth',
      'Pirate'
    ]),
    'manufacturer': faker.random.arrayElement([
      'Alpha New Hope',
      'Pine Industries',
      'New Glory',
      'Outreach United',
      'Zeltech',
      'Fontana',
      'Evergreen'
    ]),
    'class': faker.random.arrayElement([
      'Cruiser',
      'Frigate',
      'Destroyer',
      'Battleship',
      'Trawler',
      'Freighter',
    ]),
    'make': faker.random.arrayElement([
      'Mark I',
      'Mark II',
      'Mark III',
      'Mark IV',
      'Mark V',
      'Mark VI',
    ]),
    'mass': faker.random.number({
      'min': 10000,
      'max': 50000
    }),
    'length': faker.random.number({
      'min': 15,
      'max': 50
    }),
    'shields': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'flak_cannons': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'thrusters': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'network_firewall': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'armor_plating': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'lasers': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'missles': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'kinetic_cannons': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'exploit_kits': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'engines': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'med_bay': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'workshop': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'crew_quarters': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'cargo_bay': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'passenger_bay': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'sensor_array': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'processing_cluster': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'offensive_chip': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'defensive_chip': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'sensor_chip': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'scrambler_chip': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
    'network_chip': faker.random.number({
      'min': 3,
      'max': 10,
      'precision': 0.01
    }).toFixed(2),
  }
})