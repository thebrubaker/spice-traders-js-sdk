let Model = require('firebase-model')
let User = require('./user')
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
      'userId'
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
   * A flight plan belongs to a user.
   * @return {BelongsTo}
   */
  user () {
    return this.belongsTo(User, 'userId')
  }
}
