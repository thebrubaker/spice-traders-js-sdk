let Model = require('firebase-model')
let Ship = require('./ship')

module.exports = class Log extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'log'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'type',
      'message',
      'shipId'
    ]
  }

  /**
   * A log belongs to a ship.
   * @return {BelongsTo}
   */
  ship () {
    return this.belongsTo(Ship, 'shipId')
  }
}
