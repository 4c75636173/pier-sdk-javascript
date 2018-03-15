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
    root.Pier.TipoOrigemComercialResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoOrigemComercialResponse model module.
   * @module model/TipoOrigemComercialResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TipoOrigemComercialResponse</code>.
   * Objeto de resposta do recurso de tipos de origens comerciais
   * @alias module:model/TipoOrigemComercialResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TipoOrigemComercialResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoOrigemComercialResponse} obj Optional instance to populate.
   * @return {module:model/TipoOrigemComercialResponse} The populated <code>TipoOrigemComercialResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Tipo de Origem Comercial.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do tipo de origem comercial
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
