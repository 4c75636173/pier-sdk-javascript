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
    root.Pier.TipoArquivoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoArquivoResponse model module.
   * @module model/TipoArquivoResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TipoArquivoResponse</code>.
   * Objeto Response do tipo arquivo.
   * @alias module:model/TipoArquivoResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>TipoArquivoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoArquivoResponse} obj Optional instance to populate.
   * @return {module:model/TipoArquivoResponse} The populated <code>TipoArquivoResponse</code> instance.
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
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do tipo arquivo
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do tipo do arquivo
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00E7\u00E3o do tipo do arquivo
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
