(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Chronology'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Chronology'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.LocalDateTime = factory(root.Pier.ApiClient, root.Pier.Chronology);
  }
}(this, function(ApiClient, Chronology) {
  'use strict';

  /**
   * The LocalDateTime model module.
   * @module model/LocalDateTime
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>LocalDateTime</code>.
   * @alias module:model/LocalDateTime
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>LocalDateTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocalDateTime} obj Optional instance to populate.
   * @return {module:model/LocalDateTime} The populated <code>LocalDateTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('chronology')) {
        obj['chronology'] = Chronology.constructFromObject(data['chronology']);
      }
      if (data.hasOwnProperty('dayOfMonth')) {
        obj['dayOfMonth'] = ApiClient.convertToType(data['dayOfMonth'], 'Integer');
      }
      if (data.hasOwnProperty('dayOfWeek')) {
        obj['dayOfWeek'] = ApiClient.convertToType(data['dayOfWeek'], 'String');
      }
      if (data.hasOwnProperty('dayOfYear')) {
        obj['dayOfYear'] = ApiClient.convertToType(data['dayOfYear'], 'Integer');
      }
      if (data.hasOwnProperty('hour')) {
        obj['hour'] = ApiClient.convertToType(data['hour'], 'Integer');
      }
      if (data.hasOwnProperty('minute')) {
        obj['minute'] = ApiClient.convertToType(data['minute'], 'Integer');
      }
      if (data.hasOwnProperty('month')) {
        obj['month'] = ApiClient.convertToType(data['month'], 'String');
      }
      if (data.hasOwnProperty('monthValue')) {
        obj['monthValue'] = ApiClient.convertToType(data['monthValue'], 'Integer');
      }
      if (data.hasOwnProperty('nano')) {
        obj['nano'] = ApiClient.convertToType(data['nano'], 'Integer');
      }
      if (data.hasOwnProperty('second')) {
        obj['second'] = ApiClient.convertToType(data['second'], 'Integer');
      }
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Chronology} chronology
   */
  exports.prototype['chronology'] = undefined;

  /**
   * @member {Integer} dayOfMonth
   */
  exports.prototype['dayOfMonth'] = undefined;

  /**
   * @member {module:model/LocalDateTime.DayOfWeekEnum} dayOfWeek
   */
  exports.prototype['dayOfWeek'] = undefined;

  /**
   * @member {Integer} dayOfYear
   */
  exports.prototype['dayOfYear'] = undefined;

  /**
   * @member {Integer} hour
   */
  exports.prototype['hour'] = undefined;

  /**
   * @member {Integer} minute
   */
  exports.prototype['minute'] = undefined;

  /**
   * @member {module:model/LocalDateTime.MonthEnum} month
   */
  exports.prototype['month'] = undefined;

  /**
   * @member {Integer} monthValue
   */
  exports.prototype['monthValue'] = undefined;

  /**
   * @member {Integer} nano
   */
  exports.prototype['nano'] = undefined;

  /**
   * @member {Integer} second
   */
  exports.prototype['second'] = undefined;

  /**
   * @member {Integer} year
   */
  exports.prototype['year'] = undefined;


  /**
   * Allowed values for the <code>dayOfWeek</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DayOfWeekEnum = { 
    /**
     * value: MONDAY
     * @const
     */
    MONDAY: "MONDAY",
    
    /**
     * value: TUESDAY
     * @const
     */
    TUESDAY: "TUESDAY",
    
    /**
     * value: WEDNESDAY
     * @const
     */
    WEDNESDAY: "WEDNESDAY",
    
    /**
     * value: THURSDAY
     * @const
     */
    THURSDAY: "THURSDAY",
    
    /**
     * value: FRIDAY
     * @const
     */
    FRIDAY: "FRIDAY",
    
    /**
     * value: SATURDAY
     * @const
     */
    SATURDAY: "SATURDAY",
    
    /**
     * value: SUNDAY
     * @const
     */
    SUNDAY: "SUNDAY"
  };  /**
   * Allowed values for the <code>month</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MonthEnum = { 
    /**
     * value: JANUARY
     * @const
     */
    JANUARY: "JANUARY",
    
    /**
     * value: FEBRUARY
     * @const
     */
    FEBRUARY: "FEBRUARY",
    
    /**
     * value: MARCH
     * @const
     */
    MARCH: "MARCH",
    
    /**
     * value: APRIL
     * @const
     */
    APRIL: "APRIL",
    
    /**
     * value: MAY
     * @const
     */
    MAY: "MAY",
    
    /**
     * value: JUNE
     * @const
     */
    JUNE: "JUNE",
    
    /**
     * value: JULY
     * @const
     */
    JULY: "JULY",
    
    /**
     * value: AUGUST
     * @const
     */
    AUGUST: "AUGUST",
    
    /**
     * value: SEPTEMBER
     * @const
     */
    SEPTEMBER: "SEPTEMBER",
    
    /**
     * value: OCTOBER
     * @const
     */
    OCTOBER: "OCTOBER",
    
    /**
     * value: NOVEMBER
     * @const
     */
    NOVEMBER: "NOVEMBER",
    
    /**
     * value: DECEMBER
     * @const
     */
    DECEMBER: "DECEMBER"
  };

  return exports;
}));
