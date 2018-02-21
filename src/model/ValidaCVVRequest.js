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
    root.Pier.ValidaCVVRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidaCVVRequest model module.
   * @module model/ValidaCVVRequest
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>ValidaCVVRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da requisi\u00C3\u00A7\u00C3\u00A3o de valida\u00C3\u00A7\u00C3\u00A3o do CVV.
   * @alias module:model/ValidaCVVRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ValidaCVVRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidaCVVRequest} obj Optional instance to populate.
   * @return {module:model/ValidaCVVRequest} The populated <code>ValidaCVVRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idChaveCriptografia')) {
        obj['idChaveCriptografia'] = ApiClient.convertToType(data['idChaveCriptografia'], 'Integer');
      }
      if (data.hasOwnProperty('cvv')) {
        obj['cvv'] = ApiClient.convertToType(data['cvv'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do chave de criptografia.
   * @member {Integer} idChaveCriptografia
   */
  exports.prototype['idChaveCriptografia'] = undefined;

  /**
   * Valor de Verifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (CVV).
   * @member {String} cvv
   */
  exports.prototype['cvv'] = undefined;




  return exports;
}));
