let Model = require('firebase-model')
let User = require('./user')

module.exports = class Command extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'command'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'name',
      'payload',
      'userId',
    ]
  }


  /**
   * A fleet belongs to a user.
   * @return {BelongsTo}
   */
  user () {
    return this.belongsTo(User, 'userId')
  }
}
