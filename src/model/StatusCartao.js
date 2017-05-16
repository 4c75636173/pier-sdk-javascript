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
    root.Pier.StatusCartao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusCartao model module.
   * @module model/StatusCartao
   * @version 2.15.0
   */

  /**
   * Constructs a new <code>StatusCartao</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso Status Cart\u00C3\u00A3o
   * @alias module:model/StatusCartao
   * @class
   * @param id
   * @param nome
   * @param flagCancelaCartao
   * @param idStatusDestinoDesbloqueio
   * @param idStatusDestinoConta
   * @param flagCobraTarifa
   */
  var exports = function(id, nome, flagCancelaCartao, idStatusDestinoDesbloqueio, idStatusDestinoConta, flagCobraTarifa) {

    this['id'] = id;
    this['nome'] = nome;
    this['flagCancelaCartao'] = flagCancelaCartao;

    this['idStatusDestinoDesbloqueio'] = idStatusDestinoDesbloqueio;
    this['idStatusDestinoConta'] = idStatusDestinoConta;
    this['flagCobraTarifa'] = flagCobraTarifa;

  };

  /**
   * Constructs a <code>StatusCartao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusCartao} obj Optional instance to populate.
   * @return {module:model/StatusCartao} The populated <code>StatusCartao</code> instance.
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
      if (data.hasOwnProperty('flagCancelaCartao')) {
        obj['flagCancelaCartao'] = ApiClient.convertToType(data['flagCancelaCartao'], 'Integer');
      }
      if (data.hasOwnProperty('flagCancelaNoDesbloqueio')) {
        obj['flagCancelaNoDesbloqueio'] = ApiClient.convertToType(data['flagCancelaNoDesbloqueio'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusDestinoDesbloqueio')) {
        obj['idStatusDestinoDesbloqueio'] = ApiClient.convertToType(data['idStatusDestinoDesbloqueio'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusDestinoConta')) {
        obj['idStatusDestinoConta'] = ApiClient.convertToType(data['idStatusDestinoConta'], 'Integer');
      }
      if (data.hasOwnProperty('flagCobraTarifa')) {
        obj['flagCobraTarifa'] = ApiClient.convertToType(data['flagCobraTarifa'], 'Integer');
      }
      if (data.hasOwnProperty('flagPermiteNovaViaCartao')) {
        obj['flagPermiteNovaViaCartao'] = ApiClient.convertToType(data['flagPermiteNovaViaCartao'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id) 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome atribu\u00C3\u00ADdo ao Status de Entrega do Cart\u00C3\u00A3o.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Quando ativa, indica que ao ser atribu\u00C3\u00ADdo um idStatusCartao com essa caracter\u00C3\u00ADstica, o cart\u00C3\u00A3o ter\u00C3\u00A1 o seu idStatusCartao alterado para o que fora escolhido. Caso contr\u00C3\u00A1rio, o idStatusCartao s\u00C3\u00B3 ser\u00C3\u00A1 alterado ap\u00C3\u00B3s o desbloqueio de um novo cart\u00C3\u00A3o do mesmo Portador e Conta.
   * @member {Integer} flagCancelaCartao
   */
  exports.prototype['flagCancelaCartao'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00C3\u00A3o ativo que o portador possuir na mesma conta do cart\u00C3\u00A3o a ser desbloqueado, e que o status dele possua essa caracter\u00C3\u00ADstica, dever\u00C3\u00A1 ser cancelado quando um novo cart\u00C3\u00A3o for desbloqueado.
   * @member {Integer} flagCancelaNoDesbloqueio
   */
  exports.prototype['flagCancelaNoDesbloqueio'] = undefined;

  /**
   * Indica qual o idStatusCartao que ser\u00C3\u00A1 atribu\u00C3\u00ADdo aos cart\u00C3\u00B5es que forem cancelados devido ao desbloqueio de um novo cart\u00C3\u00A3o.
   * @member {Integer} idStatusDestinoDesbloqueio
   */
  exports.prototype['idStatusDestinoDesbloqueio'] = undefined;

  /**
   * Indica qual o idStatusCartao que ser\u00C3\u00A1 atribu\u00C3\u00ADdo a conta, caso ela seja cancelada devido ao bloqueio de um cart\u00C3\u00A3o quando for utilizado um idStatusCartao no processo de Bloqueio que possua essa caracter\u00C3\u00ADstica.
   * @member {Integer} idStatusDestinoConta
   */
  exports.prototype['idStatusDestinoConta'] = undefined;

  /**
   * Quando ativa, indica que cart\u00C3\u00B5es que tiverem um idStatusCartao atribu\u00C3\u00ADdo com essa caracter\u00C3\u00ADstica, incluir\u00C3\u00A3o a cobran\u00C3\u00A7a de uma tarifa para a conta de acordo com os valores definidos nos par\u00C3\u00A2metros do emissor.
   * @member {Integer} flagCobraTarifa
   */
  exports.prototype['flagCobraTarifa'] = undefined;

  /**
   * Par\u00C3\u00A2metro que define se o status do cart\u00C3\u00A3o permite a solicita\u00C3\u00A7\u00C3\u00A3o de uma nova via, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} flagPermiteNovaViaCartao
   */
  exports.prototype['flagPermiteNovaViaCartao'] = undefined;




  return exports;
}));
