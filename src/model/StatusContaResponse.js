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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>StatusContaResponse</code>.
   * {{{status_conta_response_description}}}
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
   * {{{status_conta_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{status_conta_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{status_conta_response_permite_alterar_vencimento_value}}}
   * @member {Integer} permiteAlterarVencimento
   */
  exports.prototype['permiteAlterarVencimento'] = undefined;

  /**
   * {{{status_conta_response_permite_alterar_limite_value}}}
   * @member {Integer} permiteAlterarLimite
   */
  exports.prototype['permiteAlterarLimite'] = undefined;

  /**
   * {{{status_conta_response_permite_emitir_nova_via_cartao_value}}}
   * @member {Integer} permiteEmitirNovaViaCartao
   */
  exports.prototype['permiteEmitirNovaViaCartao'] = undefined;

  /**
   * {{{status_conta_response_permite_fazer_transferencia_value}}}
   * @member {Integer} permiteFazerTransferencia
   */
  exports.prototype['permiteFazerTransferencia'] = undefined;

  /**
   * {{{status_conta_response_permite_receber_transferencia_value}}}
   * @member {Integer} permiteReceberTransferencia
   */
  exports.prototype['permiteReceberTransferencia'] = undefined;

  /**
   * {{{status_conta_response_permite_criar_acordo_cobranca_value}}}
   * @member {Integer} permiteCriarAcordoCobranca
   */
  exports.prototype['permiteCriarAcordoCobranca'] = undefined;

  /**
   * {{{status_conta_response_permite_atribuir_como_bloqueio_value}}}
   * @member {Integer} permiteAtribuirComoBloqueio
   */
  exports.prototype['permiteAtribuirComoBloqueio'] = undefined;

  /**
   * {{{status_conta_response_permite_desbloquear_value}}}
   * @member {Integer} permiteDesbloquear
   */
  exports.prototype['permiteDesbloquear'] = undefined;

  /**
   * {{{status_conta_response_permite_atribuir_como_cancelamento_value}}}
   * @member {Integer} permiteAtribuirComoCancelamento
   */
  exports.prototype['permiteAtribuirComoCancelamento'] = undefined;




  return exports;
}));
