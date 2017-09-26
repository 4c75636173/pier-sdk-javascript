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
    root.Pier.ConfiguracaoEmailResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConfiguracaoEmailResponse model module.
   * @module model/ConfiguracaoEmailResponse
   * @version 2.35.2
   */

  /**
   * Constructs a new <code>ConfiguracaoEmailResponse</code>.
   * Objeto Configura\u00C3\u00A7\u00C3\u00A3o EMAIL
   * @alias module:model/ConfiguracaoEmailResponse
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>ConfiguracaoEmailResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfiguracaoEmailResponse} obj Optional instance to populate.
   * @return {module:model/ConfiguracaoEmailResponse} The populated <code>ConfiguracaoEmailResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'String');
      }
      if (data.hasOwnProperty('portTLSSTARTTLS')) {
        obj['portTLSSTARTTLS'] = ApiClient.convertToType(data['portTLSSTARTTLS'], 'String');
      }
      if (data.hasOwnProperty('portSSL')) {
        obj['portSSL'] = ApiClient.convertToType(data['portSSL'], 'String');
      }
      if (data.hasOwnProperty('protocolo')) {
        obj['protocolo'] = ApiClient.convertToType(data['protocolo'], 'String');
      }
      if (data.hasOwnProperty('requerAutenticacao')) {
        obj['requerAutenticacao'] = ApiClient.convertToType(data['requerAutenticacao'], 'Boolean');
      }
      if (data.hasOwnProperty('requerSSL')) {
        obj['requerSSL'] = ApiClient.convertToType(data['requerSSL'], 'Boolean');
      }
      if (data.hasOwnProperty('requerTLS')) {
        obj['requerTLS'] = ApiClient.convertToType(data['requerTLS'], 'Boolean');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracao')) {
        obj['dataAlteracao'] = ApiClient.convertToType(data['dataAlteracao'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id da Configura\u00C3\u00A7\u00C3\u00A3o EMAIL.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * IP (Host) do servidor de e-mail.
   * @member {String} host
   */
  exports.prototype['host'] = undefined;

  /**
   * Porta usada pelo servidor de e-mail.
   * @member {String} port
   */
  exports.prototype['port'] = undefined;

  /**
   * Porta usada pelo servi\u00C3\u00A7o TLS/STARTTLS.
   * @member {String} portTLSSTARTTLS
   */
  exports.prototype['portTLSSTARTTLS'] = undefined;

  /**
   * Porta usada pelo servi\u00C3\u00A7o SSL.
   * @member {String} portSSL
   */
  exports.prototype['portSSL'] = undefined;

  /**
   * Protocolo de comunica\u00C3\u00A7\u00C3\u00A3o usado pelo servi\u00C3\u00A7o de e-mail (Ex: smtp).
   * @member {String} protocolo
   */
  exports.prototype['protocolo'] = undefined;

  /**
   * O servi\u00C3\u00A7o de e-mail requer autentica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Boolean} requerAutenticacao
   */
  exports.prototype['requerAutenticacao'] = undefined;

  /**
   * O servi\u00C3\u00A7o de e-mail requer SSL.
   * @member {Boolean} requerSSL
   */
  exports.prototype['requerSSL'] = undefined;

  /**
   * O servi\u00C3\u00A7o de e-mail requer TLS.
   * @member {Boolean} requerTLS
   */
  exports.prototype['requerTLS'] = undefined;

  /**
   * Usuario do servi\u00C3\u00A7o de e-mail.
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * Senha de usu\u00C3\u00A1rio do servi\u00C3\u00A7o de e-mail.
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * Data de inclus\u00C3\u00A3o.
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * Data de altera\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;




  return exports;
}));
