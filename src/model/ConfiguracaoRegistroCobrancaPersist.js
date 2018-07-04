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
    root.Pier.ConfiguracaoRegistroCobrancaPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConfiguracaoRegistroCobrancaPersist model module.
   * @module model/ConfiguracaoRegistroCobrancaPersist
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>ConfiguracaoRegistroCobrancaPersist</code>.
   * {{{configuracao_registro_cobranca_persist_description}}}
   * @alias module:model/ConfiguracaoRegistroCobrancaPersist
   * @class
   * @param codigoBanco
   * @param status
   */
  var exports = function(codigoBanco, status) {

    this['codigoBanco'] = codigoBanco;











    this['status'] = status;


  };

  /**
   * Constructs a <code>ConfiguracaoRegistroCobrancaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfiguracaoRegistroCobrancaPersist} obj Optional instance to populate.
   * @return {module:model/ConfiguracaoRegistroCobrancaPersist} The populated <code>ConfiguracaoRegistroCobrancaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
   * {{{configuracao_registro_cobranca_persist_codigo_banco_value}}}
   * @member {Integer} codigoBanco
   */
  exports.prototype['codigoBanco'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_uri_value}}}
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_key_store_name_value}}}
   * @member {String} keyStoreName
   */
  exports.prototype['keyStoreName'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_key_store_password_value}}}
   * @member {String} keyStorePassword
   */
  exports.prototype['keyStorePassword'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_keystore_alias_value}}}
   * @member {String} keystoreAlias
   */
  exports.prototype['keystoreAlias'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_key_store_private_key_password_value}}}
   * @member {String} keyStorePrivateKeyPassword
   */
  exports.prototype['keyStorePrivateKeyPassword'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_type_keystore_value}}}
   * @member {String} typeKeystore
   */
  exports.prototype['typeKeystore'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_trust_store_name_value}}}
   * @member {String} trustStoreName
   */
  exports.prototype['trustStoreName'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_trust_store_password_value}}}
   * @member {String} trustStorePassword
   */
  exports.prototype['trustStorePassword'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_truststore_alias_value}}}
   * @member {String} truststoreAlias
   */
  exports.prototype['truststoreAlias'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_type_truststore_value}}}
   * @member {String} typeTruststore
   */
  exports.prototype['typeTruststore'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_uri_adicional_value}}}
   * @member {String} uriAdicional
   */
  exports.prototype['uriAdicional'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_status_value}}}
   * @member {module:model/ConfiguracaoRegistroCobrancaPersist.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_secret_value}}}
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;

  /**
   * {{{configuracao_registro_cobranca_persist_client_id_value}}}
   * @member {String} clientID
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
  };

  return exports;
}));
