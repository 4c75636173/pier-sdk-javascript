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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ValidaCVVRequest</code>.
   * {{{valida_c_v_v_request_description}}}
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
   * {{{valida_c_v_v_request_id_chave_criptografia_value}}}
   * @member {Integer} idChaveCriptografia
   */
  exports.prototype['idChaveCriptografia'] = undefined;

  /**
   * {{{valida_c_v_v_request_cvv_value}}}
   * @member {String} cvv
   */
  exports.prototype['cvv'] = undefined;




  return exports;
}));
