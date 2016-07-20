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
    root.Pier.EmbossadoCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmbossadoCartaoResponse model module.
   * @module model/EmbossadoCartaoResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>EmbossadoCartaoResponse</code>.
   * @alias module:model/EmbossadoCartaoResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>EmbossadoCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmbossadoCartaoResponse} obj Optional instance to populate.
   * @return {module:model/EmbossadoCartaoResponse} The populated <code>EmbossadoCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codigoRetorno')) {
        obj['codigoRetorno'] = ApiClient.convertToType(data['codigoRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoRetorno')) {
        obj['descricaoRetorno'] = ApiClient.convertToType(data['descricaoRetorno'], 'String');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} codigoRetorno
   */
  exports.prototype['codigoRetorno'] = undefined;

  /**
   * @member {String} descricaoRetorno
   */
  exports.prototype['descricaoRetorno'] = undefined;

  /**
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;




  return exports;
}));
