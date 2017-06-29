let Model = require('firebase-model')
let Player = require('./player')

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
      'playerId'
    ]
  }

  /**
   * A company belongs to a player.
   * @return {BelongsTo}
   */
  player () {
    return this.belongsTo(Player, 'playerId')
  }
}
