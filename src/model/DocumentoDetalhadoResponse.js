(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DocumentoDetalheResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentoDetalheResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DocumentoDetalhadoResponse = factory(root.Pier.ApiClient, root.Pier.DocumentoDetalheResponse);
  }
}(this, function(ApiClient, DocumentoDetalheResponse) {
  'use strict';

  /**
   * The DocumentoDetalhadoResponse model module.
   * @module model/DocumentoDetalhadoResponse
   * @version 2.46.4
   */

  /**
   * Constructs a new <code>DocumentoDetalhadoResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta para o recurso de Documento
   * @alias module:model/DocumentoDetalhadoResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>DocumentoDetalhadoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoDetalhadoResponse} obj Optional instance to populate.
   * @return {module:model/DocumentoDetalhadoResponse} The populated <code>DocumentoDetalhadoResponse</code> instance.
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
      if (data.hasOwnProperty('documento')) {
        obj['documento'] = ApiClient.convertToType(data['documento'], 'String');
      }
      if (data.hasOwnProperty('extensao')) {
        obj['extensao'] = ApiClient.convertToType(data['extensao'], 'String');
      }
      if (data.hasOwnProperty('documentoDetalhes')) {
        obj['documentoDetalhes'] = ApiClient.convertToType(data['documentoDetalhes'], [DocumentoDetalheResponse]);
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
   * Representa\u00C3\u00A7\u00C3\u00A3o do documento em Base64.
   * @member {String} documento
   */
  exports.prototype['documento'] = undefined;

  /**
   * Extens\u00C3\u00A3o do Documento.
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * Detalhamento do documento.
   * @member {Array.<module:model/DocumentoDetalheResponse>} documentoDetalhes
   */
  exports.prototype['documentoDetalhes'] = undefined;




  return exports;
}));
