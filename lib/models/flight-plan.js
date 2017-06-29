let Model = require('firebase-model')
let Player = require('./player')
let Route = require('./route')

module.exports = class FlightPlan extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'flight-plan'
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
   * A flight plan has many routes.
   * @return {HasMany}
   */
  routes () {
    return this.hasMany(Route, 'routes')
  }

  /**
   * A flight plan belongs to a player.
   * @return {BelongsTo}
   */
  player () {
    return this.belongsTo(Player, 'playerId')
  }
}
