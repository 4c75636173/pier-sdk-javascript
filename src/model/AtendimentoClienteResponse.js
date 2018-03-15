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
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>AtendimentoClienteResponse</code>.
   * Objeto AtendimentoCliente
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
   * C\u00F3digo de Identifica\u00E7\u00E3o do Atendimento (id)
   * @member {Integer} idAtendimento
   */
  exports.prototype['idAtendimento'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o da Conta a qual o Atendimento est\u00E1 associado
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Tipo de Atendimento (id)
   * @member {Integer} idTipoAtendimento
   */
  exports.prototype['idTipoAtendimento'] = undefined;

  /**
   * Apresenta a descri\u00E7\u00E3o do Tipo de Atendimento
   * @member {String} descricaoTipoAtendimento
   */
  exports.prototype['descricaoTipoAtendimento'] = undefined;

  /**
   * Apresenta as informa\u00E7\u00F5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00E7\u00F5es relacionadas ao Atendimento.
   * @member {String} conteudoAtendimento
   */
  exports.prototype['conteudoAtendimento'] = undefined;

  /**
   * Apresenta os detalhes lan\u00E7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento.
   * @member {String} detalhesAtendimento
   */
  exports.prototype['detalhesAtendimento'] = undefined;

  /**
   * Apresenta o nome do Atendente que registrou o Atendimento.
   * @member {String} nomeAtendente
   */
  exports.prototype['nomeAtendente'] = undefined;

  /**
   * Apresenta o nome do Sistema, Servidor, M\u00F3dulo ou M\u00E9todo REST que originou o registro do Atendimento.
   * @member {String} nomeSistema
   */
  exports.prototype['nomeSistema'] = undefined;

  /**
   * Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos.
   * @member {String} dataHoraInicioAtendimento
   */
  exports.prototype['dataHoraInicioAtendimento'] = undefined;

  /**
   * Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos.
   * @member {String} dataHoraFimAtendimento
   */
  exports.prototype['dataHoraFimAtendimento'] = undefined;

  /**
   * Apresenta a data e hora em que o Atendimento foi realizado.
   * @member {String} dataAtendimento
   */
  exports.prototype['dataAtendimento'] = undefined;

  /**
   * Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data e hora para processamento ou a data para retorno do Atendimento.
   * @member {String} dataAgendamento
   */
  exports.prototype['dataAgendamento'] = undefined;

  /**
   * Quando utilizado, apresenta a data e hora em que a solicita\u00E7\u00E3o registrada no Atendimento fora processada.
   * @member {String} dataProcessamento
   */
  exports.prototype['dataProcessamento'] = undefined;

  /**
   * Quando aplic\u00E1vel, de acordo com o Indica se o Processamento da solicita\u00E7\u00E3o fora realizado.
   * @member {Integer} flagProcessamento
   */
  exports.prototype['flagProcessamento'] = undefined;




  return exports;
}));
