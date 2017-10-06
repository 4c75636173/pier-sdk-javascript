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
    root.Pier.IntegrarDocumentoRequest = factory(root.Pier.ApiClient, root.Pier.PropriedadeDocumentoRequest);
  }
}(this, function(ApiClient, PropriedadeDocumentoRequest) {
  'use strict';

  /**
   * The IntegrarDocumentoRequest model module.
   * @module model/IntegrarDocumentoRequest
   * @version 2.39.3
   */

  /**
   * Constructs a new <code>IntegrarDocumentoRequest</code>.
   * Objeto de requisi\u00C3\u00A7\u00C3\u00A3o.
   * @alias module:model/IntegrarDocumentoRequest
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>IntegrarDocumentoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrarDocumentoRequest} obj Optional instance to populate.
   * @return {module:model/IntegrarDocumentoRequest} The populated <code>IntegrarDocumentoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTemplate')) {
        obj['idTemplate'] = ApiClient.convertToType(data['idTemplate'], 'Integer');
      }
      if (data.hasOwnProperty('arquivo')) {
        obj['arquivo'] = ApiClient.convertToType(data['arquivo'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('propriedades')) {
        obj['propriedades'] = ApiClient.convertToType(data['propriedades'], [PropriedadeDocumentoRequest]);
      }
    }
    return obj;
  }


  /**
   * Identificador do template de documento
   * @member {Integer} idTemplate
   */
  exports.prototype['idTemplate'] = undefined;

  /**
   * Conte\u00C3\u00BAdo do arquivo convertido em Base 64
   * @member {String} arquivo
   */
  exports.prototype['arquivo'] = undefined;

  /**
   * Nome do arquivo.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Lista de par\u00C3\u00A2metros para montagem do documento.
   * @member {Array.<module:model/PropriedadeDocumentoRequest>} propriedades
   */
  exports.prototype['propriedades'] = undefined;




  return exports;
}));
