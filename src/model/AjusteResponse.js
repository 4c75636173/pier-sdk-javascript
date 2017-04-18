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
    root.Pier.AjusteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AjusteResponse model module.
   * @module model/AjusteResponse
   * @version 2.13.0
   */

  /**
   * Constructs a new <code>AjusteResponse</code>.
   * @alias module:model/AjusteResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AjusteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AjusteResponse} obj Optional instance to populate.
   * @return {module:model/AjusteResponse} The populated <code>AjusteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idAjuste')) {
        obj['idAjuste'] = ApiClient.convertToType(data['idAjuste'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do ajuste (id)
   * @member {Integer} idAjuste
   */
  exports.prototype['idAjuste'] = undefined;




  return exports;
}));
