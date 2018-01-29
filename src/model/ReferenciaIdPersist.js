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
    root.Pier.ReferenciaIdPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReferenciaIdPersist model module.
   * @module model/ReferenciaIdPersist
   * @version 2.50.17
   */

  /**
   * Constructs a new <code>ReferenciaIdPersist</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o de objeto de refer\u00C3\u00AAncia por Id.
   * @alias module:model/ReferenciaIdPersist
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ReferenciaIdPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReferenciaIdPersist} obj Optional instance to populate.
   * @return {module:model/ReferenciaIdPersist} The populated <code>ReferenciaIdPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));
