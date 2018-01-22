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
    root.Pier.ConfiguracaoRegistroCobrancaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConfiguracaoRegistroCobrancaResponse model module.
   * @module model/ConfiguracaoRegistroCobrancaResponse
   * @version 2.50.14
   */

  /**
   * Constructs a new <code>ConfiguracaoRegistroCobrancaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de configura\u00C3\u00A7\u00C3\u00A3o de registro de cobran\u00C3\u00A7a.
   * @alias module:model/ConfiguracaoRegistroCobrancaResponse
   * @class
   */
  var exports = function() {
















  };

  /**
   * Constructs a <code>ConfiguracaoRegistroCobrancaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfiguracaoRegistroCobrancaResponse} obj Optional instance to populate.
   * @return {module:model/ConfiguracaoRegistroCobrancaResponse} The populated <code>ConfiguracaoRegistroCobrancaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('codigoBanco')) {
        obj['codigoBanco'] = ApiClient.convertToType(data['codigoBanco'], 'Integer');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('keyStoreName')) {
        obj['keyStoreName'] = ApiClient.convertToType(data['keyStoreName'], 'String');
      }
      if (data.hasOwnProperty('keyStorePassword')) {
        obj['keyStorePassword'] = ApiClient.convertToType(data['keyStorePassword'], 'String');
      }
      if (data.hasOwnProperty('keystoreAlias')) {
        obj['keystoreAlias'] = ApiClient.convertToType(data['keystoreAlias'], 'String');
      }
      if (data.hasOwnProperty('keyStorePrivateKeyPassword')) {
        obj['keyStorePrivateKeyPassword'] = ApiClient.convertToType(data['keyStorePrivateKeyPassword'], 'String');
      }
      if (data.hasOwnProperty('typeKeystore')) {
        obj['typeKeystore'] = ApiClient.convertToType(data['typeKeystore'], 'String');
      }
      if (data.hasOwnProperty('trustStoreName')) {
        obj['trustStoreName'] = ApiClient.convertToType(data['trustStoreName'], 'String');
      }
      if (data.hasOwnProperty('trustStorePassword')) {
        obj['trustStorePassword'] = ApiClient.convertToType(data['trustStorePassword'], 'String');
      }
      if (data.hasOwnProperty('truststoreAlias')) {
        obj['truststoreAlias'] = ApiClient.convertToType(data['truststoreAlias'], 'String');
      }
      if (data.hasOwnProperty('typeTruststore')) {
        obj['typeTruststore'] = ApiClient.convertToType(data['typeTruststore'], 'String');
      }
      if (data.hasOwnProperty('uriAdicional')) {
        obj['uriAdicional'] = ApiClient.convertToType(data['uriAdicional'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador da configura\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo do emissor.
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * C\u00C3\u00B3digo do Banco.
   * @member {Integer} codigoBanco
   */
  exports.prototype['codigoBanco'] = undefined;

  /**
   * URL de acesso ao banco.
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;

  /**
   * Caminho do certificado digital do emissor.
   * @member {String} keyStoreName
   */
  exports.prototype['keyStoreName'] = undefined;

  /**
   * Senha do certificado digital do emissor.
   * @member {String} keyStorePassword
   */
  exports.prototype['keyStorePassword'] = undefined;

  /**
   * Alias do certificado digital do emissor.
   * @member {String} keystoreAlias
   */
  exports.prototype['keystoreAlias'] = undefined;

  /**
   * Senha da chave privada do certificado digital do emissor.
   * @member {String} keyStorePrivateKeyPassword
   */
  exports.prototype['keyStorePrivateKeyPassword'] = undefined;

  /**
   * Tipo do certificado digital do emissor.
   * @member {String} typeKeystore
   */
  exports.prototype['typeKeystore'] = undefined;

  /**
   * Caminho do certificado digital do banco.
   * @member {String} trustStoreName
   */
  exports.prototype['trustStoreName'] = undefined;

  /**
   * Senha do certificado digital do banco.
   * @member {String} trustStorePassword
   */
  exports.prototype['trustStorePassword'] = undefined;

  /**
   * Alias do certificado digital do banco.
   * @member {String} truststoreAlias
   */
  exports.prototype['truststoreAlias'] = undefined;

  /**
   * Tipo do certificado digital do banco.
   * @member {String} typeTruststore
   */
  exports.prototype['typeTruststore'] = undefined;

  /**
   * URL adicional de acesso ao banco.
   * @member {String} uriAdicional
   */
  exports.prototype['uriAdicional'] = undefined;

  /**
   * Status indicador se a configura\u00C3\u00A7\u00C3\u00A3o est\u00C3\u00A1 ativa.
   * @member {module:model/ConfiguracaoRegistroCobrancaResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO",
    
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO"
  };

  return exports;
}));
