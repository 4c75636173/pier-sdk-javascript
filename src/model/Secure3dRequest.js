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
    root.Pier.Secure3dRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Secure3dRequest model module.
   * @module model/Secure3dRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>Secure3dRequest</code>.
   * {{{request_secure_3d_description}}}
   * @alias module:model/Secure3dRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>Secure3dRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Secure3dRequest} obj Optional instance to populate.
   * @return {module:model/Secure3dRequest} The populated <code>Secure3dRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('otp')) {
        obj['otp'] = ApiClient.convertToType(data['otp'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{id_cartao_3d_secure}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{id_cartao_3d_secure}}}
   * @member {String} otp
   */
  exports.prototype['otp'] = undefined;




  return exports;
}));
