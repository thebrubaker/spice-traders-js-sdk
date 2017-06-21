let Model = require('firebase-model')
let Company = require('./company')
let Fleet = require('./fleet')
let Ship = require('./ship')

module.exports = class User extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'user'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'username',
      'email',
      'photo',
      'companyId',
      'fleetId'
    ]
  }

  /**
   * A user belongs to a company.
   * @return {BelongsTo}
   */
  company () {
    return this.belongsTo(Company, 'companyId')
  }

  /**
   * A user belongs to a fleet.
   * @return {BelongsTo}
   */
  fleet () {
    return this.belongsTo(Fleet, 'fleetId')
  }

  /**
   * A user has many ships through their fleet.
   * @return {HasManyThrough}
   */
  ships () {
    return this.hasManyThrough(Ship, Fleet, 'fleetId')
  }
}
