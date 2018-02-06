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
    root.Pier.TransferenciaCreditoContaBancariaPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaCreditoContaBancariaPersist model module.
   * @module model/TransferenciaCreditoContaBancariaPersist
   * @version 2.52.0
   */

  /**
   * Constructs a new <code>TransferenciaCreditoContaBancariaPersist</code>.
   * Transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para conta banc\u00C3\u00A1ria
   * @alias module:model/TransferenciaCreditoContaBancariaPersist
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
   * Constructs a <code>TransferenciaCreditoContaBancariaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaCreditoContaBancariaPersist} obj Optional instance to populate.
   * @return {module:model/TransferenciaCreditoContaBancariaPersist} The populated <code>TransferenciaCreditoContaBancariaPersist</code> instance.
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
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Representa o N\u00C3\u00BAmero Sequencial \u00C3\u009Anico que identifica a transa\u00C3\u00A7\u00C3\u00A3o no sistema que a originou.
   * @member {Integer} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * Representa o Identificador do Cartao.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Representa o Identificador da conta banc\u00C3\u00A1ria.
   * @member {Integer} idContaBancaria
   */
  exports.prototype['idContaBancaria'] = undefined;

  /**
   * Representa o Valor da transfer\u00C3\u00AAncia.
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * Representa o N\u00C3\u00BAmero de Parcelas pelo qual o valor da transfer\u00C3\u00AAncia ser\u00C3\u00A1 dividido.
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * Representa o N\u00C3\u00BAmero de Meses concedido como car\u00C3\u00AAncia.
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;

  /**
   * Representa a Data e hora do terminal requisitante.
   * @member {String} dataHoraTerminal
   */
  exports.prototype['dataHoraTerminal'] = undefined;

  /**
   * Representa a identifica\u00C3\u00A7\u00C3\u00A3o do terminal requisitante.
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * Representa a identifica\u00C3\u00A7\u00C3\u00A3o do n\u00C3\u00BAmero do estabelecimento.
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;




  return exports;
}));
