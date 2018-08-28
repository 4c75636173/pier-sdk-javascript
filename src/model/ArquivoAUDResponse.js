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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ArquivoAUDResponse</code>.
   * {{{arquivo_a_u_d_response_description}}}
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
   * {{{arquivo_a_u_d_response_rev_value}}}
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_rev_type_value}}}
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_id_resposta_acesso_digital_value}}}
   * @member {String} idRespostaAcessoDigital
   */
  exports.prototype['idRespostaAcessoDigital'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_data_hora_resposta_acesso_digital_value}}}
   * @member {String} dataHoraRespostaAcessoDigital
   */
  exports.prototype['dataHoraRespostaAcessoDigital'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_id_resposta_neurotech_value}}}
   * @member {String} idRespostaNeurotech
   */
  exports.prototype['idRespostaNeurotech'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_data_hora_resposta_neurotech_value}}}
   * @member {String} dataHoraRespostaNeurotech
   */
  exports.prototype['dataHoraRespostaNeurotech'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_uri_value}}}
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_data_hora_inclusao_value}}}
   * @member {String} dataHoraInclusao
   */
  exports.prototype['dataHoraInclusao'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_data_hora_alteracao_value}}}
   * @member {String} dataHoraAlteracao
   */
  exports.prototype['dataHoraAlteracao'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_extensao_value}}}
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * {{{arquivo_a_u_d_response_parametros_value}}}
   * @member {Array.<module:model/ArquivoParametroAUDResponse>} parametros
   */
  exports.prototype['parametros'] = undefined;




  return exports;
}));
