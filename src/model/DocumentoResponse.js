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
    root.Pier.DocumentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentoResponse model module.
   * @module model/DocumentoResponse
   * @version 2.46.4
   */

  /**
   * Constructs a new <code>DocumentoResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta resumida para o recurso de Documento
   * @alias module:model/DocumentoResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>DocumentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoResponse} obj Optional instance to populate.
   * @return {module:model/DocumentoResponse} The populated <code>DocumentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTemplateDocumento')) {
        obj['idTemplateDocumento'] = ApiClient.convertToType(data['idTemplateDocumento'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('extensao')) {
        obj['extensao'] = ApiClient.convertToType(data['extensao'], 'String');
      }
    }
    return obj;
  }


  /**
   * ID do Documento.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * ID do Template de Documento associado.
   * @member {Integer} idTemplateDocumento
   */
  exports.prototype['idTemplateDocumento'] = undefined;

  /**
   * Nome do Documento.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Extens\u00C3\u00A3o do Documento.
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;




  return exports;
}));
