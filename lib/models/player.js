let Model = require('firebase-model')
let Company = require('./company')
let Fleet = require('./fleet')
let Ship = require('./ship')

module.exports = class Player extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'player'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'displayName',
      'email',
      'photoURL',
      'credits',
      'fleetId'
    ]
  }

  /**
   * A player belongs to a company.
   * @return {BelongsTo}
   */
  company () {
    return this.belongsTo(Company, 'companyId')
  }

  /**
   * A player belongs to a fleet.
   * @return {BelongsTo}
   */
  fleet () {
    return this.belongsTo(Fleet, 'fleetId')
  }

  /**
   * A player has many ships through their fleet.
   * @return {HasManyThrough}
   */
  ships () {
    return this.hasManyThrough(Ship, Fleet, 'fleetId')
  }
}
