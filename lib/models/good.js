let Model = require('firebase-model')
let Route = require('./route')

module.exports = class Good extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'good'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'name',
      'type',
      'description',
      'properties',
      'volume'
    ]
  }
}
