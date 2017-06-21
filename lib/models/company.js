let Model = require('firebase-model')
let User = require('./user')

module.exports = class Company extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'company'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'name',
      'symbol',
      'userId'
    ]
  }

  /**
   * A company belongs to a user.
   * @return {BelongsTo}
   */
  user () {
    return this.belongsTo(User, 'userId')
  }
}
