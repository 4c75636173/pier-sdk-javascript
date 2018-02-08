(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ArquivoParametroAUDResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArquivoParametroAUDResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ArquivoAUDResponse = factory(root.Pier.ApiClient, root.Pier.ArquivoParametroAUDResponse);
  }
}(this, function(ApiClient, ArquivoParametroAUDResponse) {
  'use strict';

  /**
   * The ArquivoAUDResponse model module.
   * @module model/ArquivoAUDResponse
   * @version 2.54.0
   */

  /**
   * Constructs a new <code>ArquivoAUDResponse</code>.
   * Objeto Response da auditoria do arquivo.
   * @alias module:model/ArquivoAUDResponse
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>ArquivoAUDResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArquivoAUDResponse} obj Optional instance to populate.
   * @return {module:model/ArquivoAUDResponse} The populated <code>ArquivoAUDResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('rev')) {
        obj['rev'] = ApiClient.convertToType(data['rev'], 'Integer');
      }
      if (data.hasOwnProperty('revType')) {
        obj['revType'] = ApiClient.convertToType(data['revType'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('idRespostaAcessoDigital')) {
        obj['idRespostaAcessoDigital'] = ApiClient.convertToType(data['idRespostaAcessoDigital'], 'String');
      }
      if (data.hasOwnProperty('dataHoraRespostaAcessoDigital')) {
        obj['dataHoraRespostaAcessoDigital'] = ApiClient.convertToType(data['dataHoraRespostaAcessoDigital'], 'String');
      }
      if (data.hasOwnProperty('idRespostaNeurotech')) {
        obj['idRespostaNeurotech'] = ApiClient.convertToType(data['idRespostaNeurotech'], 'String');
      }
      if (data.hasOwnProperty('dataHoraRespostaNeurotech')) {
        obj['dataHoraRespostaNeurotech'] = ApiClient.convertToType(data['dataHoraRespostaNeurotech'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('dataHoraInclusao')) {
        obj['dataHoraInclusao'] = ApiClient.convertToType(data['dataHoraInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataHoraAlteracao')) {
        obj['dataHoraAlteracao'] = ApiClient.convertToType(data['dataHoraAlteracao'], 'String');
      }
      if (data.hasOwnProperty('extensao')) {
        obj['extensao'] = ApiClient.convertToType(data['extensao'], 'String');
      }
      if (data.hasOwnProperty('parametros')) {
        obj['parametros'] = ApiClient.convertToType(data['parametros'], [ArquivoParametroAUDResponse]);
      }
    }
    return obj;
  }


  /**
   * Identificador da auditoria arquivo
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;

  /**
   * Identificador do tipo de auditoria (0 - Criado, 1 - Alterado, 2 - Exclu\u00C3\u00ADdo)
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * Identificador do arquivo auditado
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do arquivo auditado
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Identificador da resposta da Acesso Digital
   * @member {String} idRespostaAcessoDigital
   */
  exports.prototype['idRespostaAcessoDigital'] = undefined;

  /**
   * Data de resposta da Acesso Digital
   * @member {String} dataHoraRespostaAcessoDigital
   */
  exports.prototype['dataHoraRespostaAcessoDigital'] = undefined;

  /**
   * Identificador da resposta da Neurotech
   * @member {String} idRespostaNeurotech
   */
  exports.prototype['idRespostaNeurotech'] = undefined;

  /**
   * Data de resposta da Neurotech
   * @member {String} dataHoraRespostaNeurotech
   */
  exports.prototype['dataHoraRespostaNeurotech'] = undefined;

  /**
   * Uri de acesso
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;

  /**
   * Data de inclus\u00C3\u00A3o do arquivo auditado
   * @member {String} dataHoraInclusao
   */
  exports.prototype['dataHoraInclusao'] = undefined;

  /**
   * Data de altera\u00C3\u00A7\u00C3\u00A3o do arquivo auditado
   * @member {String} dataHoraAlteracao
   */
  exports.prototype['dataHoraAlteracao'] = undefined;

  /**
   * Extens\u00C3\u00A3o do arquivo auditado
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * Lista  de par\u00C3\u00A2metros do arquivo auditado
   * @member {Array.<module:model/ArquivoParametroAUDResponse>} parametros
   */
  exports.prototype['parametros'] = undefined;




  return exports;
}));
