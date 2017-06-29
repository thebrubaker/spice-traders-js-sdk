let Model = require('firebase-model')
let Player = require('./player')
let Route = require('./route')

module.exports = class Chart extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'chart'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'playerId'
    ]
  }

  /**
   * A chart has many routes.
   * @return {HasMany}
   */
  routes () {
    return this.hasMany(Route, 'routes')
  }

  /**
   * A chart belongs to a player.
   * @return {BelongsTo}
   */
  player () {
    return this.belongsTo(Player, 'playerId')
  }
}
