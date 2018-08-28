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
    root.Pier.TransferenciaCreditoContaBancariaPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaCreditoContaBancariaPersistValue model module.
   * @module model/TransferenciaCreditoContaBancariaPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TransferenciaCreditoContaBancariaPersistValue</code>.
   * {{{transferencia_credito_conta_bancaria_persist_description}}}
   * @alias module:model/TransferenciaCreditoContaBancariaPersistValue
   * @class
   * @param nsuOrigem
   * @param idCartao
   * @param idContaBancaria
   * @param valor
   * @param numeroParcelas
   * @param numeroMesesCarencia
   * @param dataHoraTerminal
   * @param terminalRequisitante
   * @param numeroEstabelecimento
   */
  var exports = function(nsuOrigem, idCartao, idContaBancaria, valor, numeroParcelas, numeroMesesCarencia, dataHoraTerminal, terminalRequisitante, numeroEstabelecimento) {

    this['nsuOrigem'] = nsuOrigem;
    this['idCartao'] = idCartao;
    this['idContaBancaria'] = idContaBancaria;
    this['valor'] = valor;
    this['numeroParcelas'] = numeroParcelas;
    this['numeroMesesCarencia'] = numeroMesesCarencia;
    this['dataHoraTerminal'] = dataHoraTerminal;
    this['terminalRequisitante'] = terminalRequisitante;
    this['numeroEstabelecimento'] = numeroEstabelecimento;
  };

  /**
   * Constructs a <code>TransferenciaCreditoContaBancariaPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaCreditoContaBancariaPersistValue} obj Optional instance to populate.
   * @return {module:model/TransferenciaCreditoContaBancariaPersistValue} The populated <code>TransferenciaCreditoContaBancariaPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idContaBancaria')) {
        obj['idContaBancaria'] = ApiClient.convertToType(data['idContaBancaria'], 'Integer');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('numeroMesesCarencia')) {
        obj['numeroMesesCarencia'] = ApiClient.convertToType(data['numeroMesesCarencia'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraTerminal')) {
        obj['dataHoraTerminal'] = ApiClient.convertToType(data['dataHoraTerminal'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{transferencia_credito_conta_bancaria_persist_nsu_origem_value}}}
   * @member {Integer} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_id_conta_bancaria_value}}}
   * @member {Integer} idContaBancaria
   */
  exports.prototype['idContaBancaria'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_numero_meses_carencia_value}}}
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_data_hora_terminal_value}}}
   * @member {String} dataHoraTerminal
   */
  exports.prototype['dataHoraTerminal'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_terminal_requisitante_value}}}
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_persist_numero_estabelecimento_value}}}
   * @member {String} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;




  return exports;
}));
