let Model = require('firebase-model')
let Node = require('./node')
let Ship = require('./ship')

module.exports = class Route extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'route'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'name',
      'length'
    ]
  }

  /**
   * A route has many nodes.
   * @return {HasMany}
   */
  nodes () {
    return this.hasMany(Node, 'nodes')
  }

  /**
   * A route has many ships.
   * @return {HasMany}
   */
  ships () {
    return this.hasMany(Ship, 'ships')
  }
}
