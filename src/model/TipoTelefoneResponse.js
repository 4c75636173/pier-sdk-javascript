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
    root.Pier.TipoTelefoneResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoTelefoneResponse model module.
   * @module model/TipoTelefoneResponse
   * @version 2.51.0
   */

  /**
   * Constructs a new <code>TipoTelefoneResponse</code>.
   * ObjetoTipoTelefone
   * @alias module:model/TipoTelefoneResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TipoTelefoneResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoTelefoneResponse} obj Optional instance to populate.
   * @return {module:model/TipoTelefoneResponse} The populated <code>TipoTelefoneResponse</code> instance.
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
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do Tipo do Telefone
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
