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
    root.Pier.GrupoOrigemComercialResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GrupoOrigemComercialResponse model module.
   * @module model/GrupoOrigemComercialResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>GrupoOrigemComercialResponse</code>.
   * Objeto de resposta do grupo de origem comercial
   * @alias module:model/GrupoOrigemComercialResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>GrupoOrigemComercialResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GrupoOrigemComercialResponse} obj Optional instance to populate.
   * @return {module:model/GrupoOrigemComercialResponse} The populated <code>GrupoOrigemComercialResponse</code> instance.
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
   * C\u00F3digo de Identifica\u00E7\u00E3o do grupo de origem comercial.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do grupo da origem comercial
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
