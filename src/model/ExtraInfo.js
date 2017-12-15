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
    root.Pier.ExtraInfo = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExtraInfo model module.
   * @module model/ExtraInfo
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>ExtraInfo</code>.
   * @alias module:model/ExtraInfo
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ExtraInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtraInfo} obj Optional instance to populate.
   * @return {module:model/ExtraInfo} The populated <code>ExtraInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;




  return exports;
}));
