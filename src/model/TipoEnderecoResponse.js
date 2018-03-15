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
    root.Pier.TipoEnderecoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoEnderecoResponse model module.
   * @module model/TipoEnderecoResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TipoEnderecoResponse</code>.
   * Representa\u00E7\u00E3o do recurso Tipo Endere\u00E7o
   * @alias module:model/TipoEnderecoResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TipoEnderecoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoEnderecoResponse} obj Optional instance to populate.
   * @return {module:model/TipoEnderecoResponse} The populated <code>TipoEnderecoResponse</code> instance.
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
   * C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Endere\u00E7o (id)
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do Tipo do Endere\u00E7o
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
