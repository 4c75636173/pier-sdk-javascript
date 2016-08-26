(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CartaoResponseOld'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartaoResponseOld'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ConsultarCartaoResponse = factory(root.Pier.ApiClient, root.Pier.CartaoResponseOld);
  }
}(this, function(ApiClient, CartaoResponseOld) {
  'use strict';

  /**
   * The ConsultarCartaoResponse model module.
   * @module model/ConsultarCartaoResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ConsultarCartaoResponse</code>.
   * @alias module:model/ConsultarCartaoResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>ConsultarCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultarCartaoResponse} obj Optional instance to populate.
   * @return {module:model/ConsultarCartaoResponse} The populated <code>ConsultarCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cartoes')) {
        obj['cartoes'] = ApiClient.convertToType(data['cartoes'], [CartaoResponseOld]);
      }
      if (data.hasOwnProperty('codigoRetorno')) {
        obj['codigoRetorno'] = ApiClient.convertToType(data['codigoRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoRetorno')) {
        obj['descricaoRetorno'] = ApiClient.convertToType(data['descricaoRetorno'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/CartaoResponseOld>} cartoes
   */
  exports.prototype['cartoes'] = undefined;

  /**
   * @member {Integer} codigoRetorno
   */
  exports.prototype['codigoRetorno'] = undefined;

  /**
   * @member {String} descricaoRetorno
   */
  exports.prototype['descricaoRetorno'] = undefined;




  return exports;
}));
