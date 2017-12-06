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
   * @version 2.47.3
   */

  /**
   * Constructs a new <code>DocumentoParametrosRequest</code>.
   * Objeto que encapsula os par\u00C3\u00A2metros para gera\u00C3\u00A7\u00C3\u00A3o de um documento
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
   * ID para o template do documento.
   * @member {Integer} idTemplateDocumento
   */
  exports.prototype['idTemplateDocumento'] = undefined;

  /**
   * Nome para o arquivo.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Lista de par\u00C3\u00A2metros para montagem do documento.
   * @member {Array.<module:model/PropriedadeDocumentoRequest>} parametrosConteudo
   */
  exports.prototype['parametrosConteudo'] = undefined;




  return exports;
}));
