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
    root.Pier.DocumentoTipoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentoTipoRequest model module.
   * @module model/DocumentoTipoRequest
   * @version 2.35.2
   */

  /**
   * Constructs a new <code>DocumentoTipoRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do tipo de documento.
   * @alias module:model/DocumentoTipoRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DocumentoTipoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoTipoRequest} obj Optional instance to populate.
   * @return {module:model/DocumentoTipoRequest} The populated <code>DocumentoTipoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('sigla')) {
        obj['sigla'] = ApiClient.convertToType(data['sigla'], 'String');
      }
    }
    return obj;
  }


  /**
   * Nome do tipo de documento.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de documento.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Sigla do tipo de documento.
   * @member {String} sigla
   */
  exports.prototype['sigla'] = undefined;




  return exports;
}));
