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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>DocumentoDetalhadoResponse</code>.
   * {{{documento_detalhado_response_description}}}
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
   * {{{documento_detalhado_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{documento_detalhado_response_id_template_documento_value}}}
   * @member {Integer} idTemplateDocumento
   */
  exports.prototype['idTemplateDocumento'] = undefined;

  /**
   * {{{documento_detalhado_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{documento_detalhado_response_documento_value}}}
   * @member {String} documento
   */
  exports.prototype['documento'] = undefined;

  /**
   * {{{documento_detalhado_response_extensao_value}}}
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * {{{documento_detalhado_response_documento_detalhes_value}}}
   * @member {Array.<module:model/DocumentoDetalheResponse>} documentoDetalhes
   */
  exports.prototype['documentoDetalhes'] = undefined;




  return exports;
}));
