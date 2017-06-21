let Model = require('firebase-model')
let User = require('./user')

module.exports = class Event extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'event'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'type',
      'message',
      'options',
      'defaultOption',
      'ownerId',
      'targetId',
    ]
  }

  /**
   * An event is owned by and belongs to a user.
   * @return {BelongsTo}
   */
  owner () {
    return this.belongsTo(User, 'ownerId')
  }

  /**
   * An event targets and belongs to a user.
   * @return {BelongsTo}
   */
  target () {
    return this.belongsTo(User, 'targetId')
  }
}
