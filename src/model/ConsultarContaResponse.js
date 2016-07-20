(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContaCartaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContaCartaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ConsultarContaResponse = factory(root.Pier.ApiClient, root.Pier.ContaCartaoResponse);
  }
}(this, function(ApiClient, ContaCartaoResponse) {
  'use strict';

  /**
   * The ConsultarContaResponse model module.
   * @module model/ConsultarContaResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ConsultarContaResponse</code>.
   * @alias module:model/ConsultarContaResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ConsultarContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultarContaResponse} obj Optional instance to populate.
   * @return {module:model/ConsultarContaResponse} The populated <code>ConsultarContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codRetorno')) {
        obj['codRetorno'] = ApiClient.convertToType(data['codRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('codigoRetorno')) {
        obj['codigoRetorno'] = ApiClient.convertToType(data['codigoRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('contas')) {
        obj['contas'] = ApiClient.convertToType(data['contas'], [ContaCartaoResponse]);
      }
      if (data.hasOwnProperty('descricaoRetorno')) {
        obj['descricaoRetorno'] = ApiClient.convertToType(data['descricaoRetorno'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} codRetorno
   */
  exports.prototype['codRetorno'] = undefined;

  /**
   * @member {Integer} codigoRetorno
   */
  exports.prototype['codigoRetorno'] = undefined;

  /**
   * @member {Array.<module:model/ContaCartaoResponse>} contas
   */
  exports.prototype['contas'] = undefined;

  /**
   * @member {String} descricaoRetorno
   */
  exports.prototype['descricaoRetorno'] = undefined;




  return exports;
}));
