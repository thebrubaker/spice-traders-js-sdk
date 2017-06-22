const assert = require('assert')
const Model = require('firebase-model')
const Node = require('../lib/models/node')
const firebase = require('firebase-admin')
const serviceAccount = require('../service-account.json')

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://spice-traders-core.firebaseio.com"
})

Model.init(firebase)

describe('Node', function() {
  it('should have a method to create a new node', done => {
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
      done(error)
    })
  })
})