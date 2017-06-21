let Model = require('firebase-model')
let User = require('./user')
let Ship = require('./ship')

module.exports = class Fleet extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'fleet'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'name',
      'userId'
    ]
  }

  /**
   * A fleet belongs to a user.
   * @return {BelongsTo}
   */
  user () {
    return this.belongsTo(User, 'userId')
  }

  /**
   * A fleet has many ships.
   * @return {HasMany}
   */
  ships () {
    return this.hasMany(Ship, 'ships')
  }
}
