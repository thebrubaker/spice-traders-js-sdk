let Model = require('firebase-model')
let Fleet = require('./fleet')
let Node = require('./node')
let Route = require('./route')
let Log = require('./log')

module.exports = class Ship extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'ship'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'name',
      'manufacturer',
      'speed',
      'cargoSize',
      'fleetId',
      'nodeId',
      'routeId'
    ]
  }

  /**
   * A ship belongs to a fleet.
   * @return {BelongsTo}
   */
  fleet () {
    return this.belongsTo(Fleet, 'fleetId')
  }

  /**
   * A ship belongs to a node.
   * @return {BelongsTo}
   */
  node () {
    return this.belongsTo(Node, 'nodeId')
  }

  /**
   * A ship belongs to a route.
   * @return {BelongsTo}
   */
  route () {
    return this.belongsTo(Route, 'routeId')
  }


  /**
   * A ship has many logs.
   * @return {HasMany}
   */
  logs () {
    return this.hasMany(Log, 'logs')
  }
}
