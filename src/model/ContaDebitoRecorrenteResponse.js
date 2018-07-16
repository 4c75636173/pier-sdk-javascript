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
    root.Pier.ContaDebitoRecorrenteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaDebitoRecorrenteResponse model module.
   * @module model/ContaDebitoRecorrenteResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ContaDebitoRecorrenteResponse</code>.
   * {{{conta_debito_recorrente_response_description}}}
   * @alias module:model/ContaDebitoRecorrenteResponse
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>ContaDebitoRecorrenteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaDebitoRecorrenteResponse} obj Optional instance to populate.
   * @return {module:model/ContaDebitoRecorrenteResponse} The populated <code>ContaDebitoRecorrenteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ativo')) {
        obj['ativo'] = ApiClient.convertToType(data['ativo'], 'Boolean');
      }
      if (data.hasOwnProperty('dataHoraFim')) {
        obj['dataHoraFim'] = ApiClient.convertToType(data['dataHoraFim'], 'String');
      }
      if (data.hasOwnProperty('dataHoraInicio')) {
        obj['dataHoraInicio'] = ApiClient.convertToType(data['dataHoraInicio'], 'String');
      }
      if (data.hasOwnProperty('dataHoraUltimoPagamento')) {
        obj['dataHoraUltimoPagamento'] = ApiClient.convertToType(data['dataHoraUltimoPagamento'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idContaDebitoRecorrente')) {
        obj['idContaDebitoRecorrente'] = ApiClient.convertToType(data['idContaDebitoRecorrente'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoDebitoRecorrente')) {
        obj['idTipoDebitoRecorrente'] = ApiClient.convertToType(data['idTipoDebitoRecorrente'], 'Integer');
      }
      if (data.hasOwnProperty('idUsuario')) {
        obj['idUsuario'] = ApiClient.convertToType(data['idUsuario'], 'Integer');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('origem')) {
        obj['origem'] = ApiClient.convertToType(data['origem'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{conta_debito_recorrente_response_ativo_value}}}
   * @member {Boolean} ativo
   */
  exports.prototype['ativo'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_data_hora_fim_value}}}
   * @member {String} dataHoraFim
   */
  exports.prototype['dataHoraFim'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_data_hora_inicio_value}}}
   * @member {String} dataHoraInicio
   */
  exports.prototype['dataHoraInicio'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_data_hora_ultimo_pagamento_value}}}
   * @member {String} dataHoraUltimoPagamento
   */
  exports.prototype['dataHoraUltimoPagamento'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_id_conta_debito_recorrente_value}}}
   * @member {Integer} idContaDebitoRecorrente
   */
  exports.prototype['idContaDebitoRecorrente'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_id_tipo_debito_recorrente_value}}}
   * @member {Integer} idTipoDebitoRecorrente
   */
  exports.prototype['idTipoDebitoRecorrente'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_id_usuario_value}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_id_login_value}}}
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_num_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{conta_debito_recorrente_response_origem_value}}}
   * @member {String} origem
   */
  exports.prototype['origem'] = undefined;




  return exports;
}));
