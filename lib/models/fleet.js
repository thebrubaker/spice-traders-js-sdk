let Model = require('firebase-model')
let Player = require('./player')
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
      'playerId'
    ]
  }

  /**
   * A fleet belongs to a player.
   * @return {BelongsTo}
   */
  player () {
    return this.belongsTo(Player, 'playerId')
  }

  /**
   * A fleet has many ships.
   * @return {HasMany}
   */
  ships () {
    return this.hasMany(Ship, 'ships')
  }
}
