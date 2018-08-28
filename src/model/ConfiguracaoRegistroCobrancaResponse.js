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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ConfiguracaoRegistroCobrancaResponse</code>.
   * {{{configuracao_registro_cobranca_response_description}}}
   * @alias module:model/ConfiguracaoRegistroCobrancaResponse
   * @class
   * @param secret
   * @param clientID
   */
  var exports = function(secret, clientID) {
















    this['secret'] = secret;
    this['clientID'] = clientID;
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
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('clientID')) {
        obj['clientID'] = ApiClient.convertToType(data['clientID'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{configuracao_registro_cobranca_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_id_emissor_value}}}
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_codigo_banco_value}}}
   * @member {Integer} codigoBanco
   */
  exports.prototype['codigoBanco'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_uri_value}}}
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_key_store_name_value}}}
   * @member {String} keyStoreName
   */
  exports.prototype['keyStoreName'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_key_store_password_value}}}
   * @member {String} keyStorePassword
   */
  exports.prototype['keyStorePassword'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_keystore_alias_value}}}
   * @member {String} keystoreAlias
   */
  exports.prototype['keystoreAlias'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_key_store_private_key_password_value}}}
   * @member {String} keyStorePrivateKeyPassword
   */
  exports.prototype['keyStorePrivateKeyPassword'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_type_keystore_value}}}
   * @member {String} typeKeystore
   */
  exports.prototype['typeKeystore'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_trust_store_name_value}}}
   * @member {String} trustStoreName
   */
  exports.prototype['trustStoreName'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_trust_store_password_value}}}
   * @member {String} trustStorePassword
   */
  exports.prototype['trustStorePassword'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_truststore_alias_value}}}
   * @member {String} truststoreAlias
   */
  exports.prototype['truststoreAlias'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_type_truststore_value}}}
   * @member {String} typeTruststore
   */
  exports.prototype['typeTruststore'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_uri_adicional_value}}}
   * @member {String} uriAdicional
   */
  exports.prototype['uriAdicional'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_response_status_value}}}
   * @member {module:model/ConfiguracaoRegistroCobrancaResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_secret_value}}}
   * @member {module:model/ConfiguracaoRegistroCobrancaResponse.SecretEnum} secret
   */
  exports.prototype['secret'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_client_id_value}}}
   * @member {module:model/ConfiguracaoRegistroCobrancaResponse.ClientIDEnum} clientID
   */
  exports.prototype['clientID'] = undefined;


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
  };  /**
   * Allowed values for the <code>secret</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SecretEnum = { 
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
  };  /**
   * Allowed values for the <code>clientID</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ClientIDEnum = { 
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
