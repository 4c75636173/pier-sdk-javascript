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
    root.Pier.AtendimentoClienteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AtendimentoClienteResponse model module.
   * @module model/AtendimentoClienteResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>AtendimentoClienteResponse</code>.
   * {{{atendimento_cliente_response_description}}}
   * @alias module:model/AtendimentoClienteResponse
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>AtendimentoClienteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AtendimentoClienteResponse} obj Optional instance to populate.
   * @return {module:model/AtendimentoClienteResponse} The populated <code>AtendimentoClienteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idAtendimento')) {
        obj['idAtendimento'] = ApiClient.convertToType(data['idAtendimento'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoAtendimento')) {
        obj['idTipoAtendimento'] = ApiClient.convertToType(data['idTipoAtendimento'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoAtendimento')) {
        obj['descricaoTipoAtendimento'] = ApiClient.convertToType(data['descricaoTipoAtendimento'], 'String');
      }
      if (data.hasOwnProperty('conteudoAtendimento')) {
        obj['conteudoAtendimento'] = ApiClient.convertToType(data['conteudoAtendimento'], 'String');
      }
      if (data.hasOwnProperty('detalhesAtendimento')) {
        obj['detalhesAtendimento'] = ApiClient.convertToType(data['detalhesAtendimento'], 'String');
      }
      if (data.hasOwnProperty('nomeAtendente')) {
        obj['nomeAtendente'] = ApiClient.convertToType(data['nomeAtendente'], 'String');
      }
      if (data.hasOwnProperty('nomeSistema')) {
        obj['nomeSistema'] = ApiClient.convertToType(data['nomeSistema'], 'String');
      }
      if (data.hasOwnProperty('dataHoraInicioAtendimento')) {
        obj['dataHoraInicioAtendimento'] = ApiClient.convertToType(data['dataHoraInicioAtendimento'], 'String');
      }
      if (data.hasOwnProperty('dataHoraFimAtendimento')) {
        obj['dataHoraFimAtendimento'] = ApiClient.convertToType(data['dataHoraFimAtendimento'], 'String');
      }
      if (data.hasOwnProperty('dataAtendimento')) {
        obj['dataAtendimento'] = ApiClient.convertToType(data['dataAtendimento'], 'String');
      }
      if (data.hasOwnProperty('dataAgendamento')) {
        obj['dataAgendamento'] = ApiClient.convertToType(data['dataAgendamento'], 'String');
      }
      if (data.hasOwnProperty('dataProcessamento')) {
        obj['dataProcessamento'] = ApiClient.convertToType(data['dataProcessamento'], 'String');
      }
      if (data.hasOwnProperty('flagProcessamento')) {
        obj['flagProcessamento'] = ApiClient.convertToType(data['flagProcessamento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{atendimento_cliente_response_id_atendimento_value}}}
   * @member {Integer} idAtendimento
   */
  exports.prototype['idAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{atendimento_cliente_response_id_tipo_atendimento_value}}}
   * @member {Integer} idTipoAtendimento
   */
  exports.prototype['idTipoAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_descricao_tipo_atendimento_value}}}
   * @member {String} descricaoTipoAtendimento
   */
  exports.prototype['descricaoTipoAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_conteudo_atendimento_value}}}
   * @member {String} conteudoAtendimento
   */
  exports.prototype['conteudoAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_detalhes_atendimento_value}}}
   * @member {String} detalhesAtendimento
   */
  exports.prototype['detalhesAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_nome_atendente_value}}}
   * @member {String} nomeAtendente
   */
  exports.prototype['nomeAtendente'] = undefined;

  /**
   * {{{atendimento_cliente_response_nome_sistema_value}}}
   * @member {String} nomeSistema
   */
  exports.prototype['nomeSistema'] = undefined;

  /**
   * {{{atendimento_cliente_response_data_hora_inicio_atendimento_value}}}
   * @member {String} dataHoraInicioAtendimento
   */
  exports.prototype['dataHoraInicioAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_data_hora_fim_atendimento_value}}}
   * @member {String} dataHoraFimAtendimento
   */
  exports.prototype['dataHoraFimAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_data_atendimento_value}}}
   * @member {String} dataAtendimento
   */
  exports.prototype['dataAtendimento'] = undefined;

  /**
   * {{{atendimento_cliente_response_data_agendamento_value}}}
   * @member {String} dataAgendamento
   */
  exports.prototype['dataAgendamento'] = undefined;

  /**
   * {{{atendimento_cliente_response_data_processamento_value}}}
   * @member {String} dataProcessamento
   */
  exports.prototype['dataProcessamento'] = undefined;

  /**
   * {{{atendimento_cliente_response_flag_processamento_value}}}
   * @member {Integer} flagProcessamento
   */
  exports.prototype['flagProcessamento'] = undefined;




  return exports;
}));
