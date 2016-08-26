(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.Chronology = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Chronology model module.
   * @module model/Chronology
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>Chronology</code>.
   * @alias module:model/Chronology
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>Chronology</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Chronology} obj Optional instance to populate.
   * @return {module:model/Chronology} The populated <code>Chronology</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('calendarType')) {
        obj['calendarType'] = ApiClient.convertToType(data['calendarType'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} calendarType
   */
  exports.prototype['calendarType'] = undefined;

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));
