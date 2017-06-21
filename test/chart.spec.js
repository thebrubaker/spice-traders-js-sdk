const assert = require('assert')
const Model = require('firebase-model')
const Node = require('../lib/models/node')
const serviceAccount = require('../service-account.json')

Model.init(admin => {
  return {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://spice-traders-core.firebaseio.com"
  }
})

describe('Node', function() {
  it('should have a method to create a new chart', done => {
    let node = new Node()
    node.create({
      'name': 'Earth',
      'type': 'Planet',
      'description': 'The birthplace of humanity.',
      'location': {
        x: 0,
        y: 0
      }
    }).then(node => {
      assert(node.name === 'Earth')
      done()
    }).catch(error => {
      done()
    })
  })
})