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
    root.Pier.StatusContaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusContaResponse model module.
   * @module model/StatusContaResponse
   * @version 2.46.3
   */

  /**
   * Constructs a new <code>StatusContaResponse</code>.
   * Status Conta
   * @alias module:model/StatusContaResponse
   * @class
   * @param id
   * @param nome
   */
  var exports = function(id, nome) {

    this['id'] = id;
    this['nome'] = nome;









  };

  /**
   * Constructs a <code>StatusContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusContaResponse} obj Optional instance to populate.
   * @return {module:model/StatusContaResponse} The populated <code>StatusContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('permiteAlterarVencimento')) {
        obj['permiteAlterarVencimento'] = ApiClient.convertToType(data['permiteAlterarVencimento'], 'Integer');
      }
      if (data.hasOwnProperty('permiteAlterarLimite')) {
        obj['permiteAlterarLimite'] = ApiClient.convertToType(data['permiteAlterarLimite'], 'Integer');
      }
      if (data.hasOwnProperty('permiteEmitirNovaViaCartao')) {
        obj['permiteEmitirNovaViaCartao'] = ApiClient.convertToType(data['permiteEmitirNovaViaCartao'], 'Integer');
      }
      if (data.hasOwnProperty('permiteFazerTransferencia')) {
        obj['permiteFazerTransferencia'] = ApiClient.convertToType(data['permiteFazerTransferencia'], 'Integer');
      }
      if (data.hasOwnProperty('permiteReceberTransferencia')) {
        obj['permiteReceberTransferencia'] = ApiClient.convertToType(data['permiteReceberTransferencia'], 'Integer');
      }
      if (data.hasOwnProperty('permiteCriarAcordoCobranca')) {
        obj['permiteCriarAcordoCobranca'] = ApiClient.convertToType(data['permiteCriarAcordoCobranca'], 'Integer');
      }
      if (data.hasOwnProperty('permiteAtribuirComoBloqueio')) {
        obj['permiteAtribuirComoBloqueio'] = ApiClient.convertToType(data['permiteAtribuirComoBloqueio'], 'Integer');
      }
      if (data.hasOwnProperty('permiteDesbloquear')) {
        obj['permiteDesbloquear'] = ApiClient.convertToType(data['permiteDesbloquear'], 'Integer');
      }
      if (data.hasOwnProperty('permiteAtribuirComoCancelamento')) {
        obj['permiteAtribuirComoCancelamento'] = ApiClient.convertToType(data['permiteAtribuirComoCancelamento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status da Conta (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome atribu\u00C3\u00ADdo ao Status da Conta.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite a solicita\u00C3\u00A7\u00C3\u00A3o da altera\u00C3\u00A7\u00C3\u00A3o do Dia para Vencimento das Faturas, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteAlterarVencimento
   */
  exports.prototype['permiteAlterarVencimento'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite altera\u00C3\u00A7\u00C3\u00A3o de Limites, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteAlterarLimite
   */
  exports.prototype['permiteAlterarLimite'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite solicitar uma nova via de Cart\u00C3\u00A3o, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteEmitirNovaViaCartao
   */
  exports.prototype['permiteEmitirNovaViaCartao'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite originar Transfer\u00C3\u00AAncias de Cr\u00C3\u00A9dito para outras Contas do mesmo Emissor ou para uma Conta Banc\u00C3\u00A1ria, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteFazerTransferencia
   */
  exports.prototype['permiteFazerTransferencia'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite  receber Transfer\u00C3\u00AAncias de Cr\u00C3\u00A9dito originadas de outras Contas do mesmo emissor, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteReceberTransferencia
   */
  exports.prototype['permiteReceberTransferencia'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite ter um Acordo de Cobran\u00C3\u00A7a de D\u00C3\u00ADvida criado para ela, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteCriarAcordoCobranca
   */
  exports.prototype['permiteCriarAcordoCobranca'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite ser atribu\u00C3\u00ADdo para Bloquear temporariamente uma Conta, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteAtribuirComoBloqueio
   */
  exports.prototype['permiteAtribuirComoBloqueio'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite ser desbloqueada, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteDesbloquear
   */
  exports.prototype['permiteDesbloquear'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o Status da conta permite ser atribu\u00C3\u00ADdo para realizar o cancelamento definitivo de uma conta, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteAtribuirComoCancelamento
   */
  exports.prototype['permiteAtribuirComoCancelamento'] = undefined;




  return exports;
}));
