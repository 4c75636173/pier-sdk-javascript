(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PropriedadeDocumentoRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropriedadeDocumentoRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DocumentoParametrosRequest = factory(root.Pier.ApiClient, root.Pier.PropriedadeDocumentoRequest);
  }
}(this, function(ApiClient, PropriedadeDocumentoRequest) {
  'use strict';

  /**
   * The DocumentoParametrosRequest model module.
   * @module model/DocumentoParametrosRequest
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DocumentoParametrosRequest</code>.
   * {{{documento_parametros_request_description}}}
   * @alias module:model/DocumentoParametrosRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DocumentoParametrosRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoParametrosRequest} obj Optional instance to populate.
   * @return {module:model/DocumentoParametrosRequest} The populated <code>DocumentoParametrosRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTemplateDocumento')) {
        obj['idTemplateDocumento'] = ApiClient.convertToType(data['idTemplateDocumento'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('parametrosConteudo')) {
        obj['parametrosConteudo'] = ApiClient.convertToType(data['parametrosConteudo'], [PropriedadeDocumentoRequest]);
      }
    }
    return obj;
  }


  /**
   * {{{documento_parametros_request_id_template_documento_value}}}
   * @member {Integer} idTemplateDocumento
   */
  exports.prototype['idTemplateDocumento'] = undefined;

  /**
   * {{{documento_parametros_request_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{documento_parametros_request_parametros_conteudo_value}}}
   * @member {Array.<module:model/PropriedadeDocumentoRequest>} parametrosConteudo
   */
  exports.prototype['parametrosConteudo'] = undefined;




  return exports;
}));
