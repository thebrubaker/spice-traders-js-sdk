let Model = require('firebase-model')
let Route = require('./route')

module.exports = class Node extends Model {
  /**
   * The location of this model in your database.
   * @return {string}
   */
  location () { 
    return 'node'
  }

  /**
   * Return the fillable attributes for the model.
   * @return {array}
   */
  fillable () { 
    return [
      'name',
      'type',
      'description',
      'location'
    ]
  }

  populate () {
    return [
      'stations',
      'routes'
    ]
  }

  // /**
  //  * A node has many routes.
  //  * @return {HasMany}
  //  */
  // stations () {
  //   return this.hasMany(Station, 'stations')
  // }

  // /**
  //  * A node has many routes.
  //  * @return {HasMany}
  //  */
  // routes () {
  //   return this.hasMany(Route, 'routes')
  // }
}
