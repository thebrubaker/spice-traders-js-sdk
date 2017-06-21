let Model = require('firebase-model')
let Node = require('./node')
let Good = require('./good')

module.exports = class Station extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  get location () { 
    return 'station'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  get fillable () { 
    return [
      'name',
      'type',
      'nodeId',
      'volume'
    ]
  }

  /**
   * A station belongs to a node.
   * @return {BelongsTo}
   */
  node () {
    return this.belongsTo(Node, 'nodeId')
  }

  /**
   * A station has many goods.
   * @return {HasMany}
   */
  goods () {
    return this.hasMany(Good, 'goods')
  }
}
