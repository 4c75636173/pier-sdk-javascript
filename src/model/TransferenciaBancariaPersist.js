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
    root.Pier.TransferenciaBancariaPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaBancariaPersist model module.
   * @module model/TransferenciaBancariaPersist
   * @version 2.36.2
   */

  /**
   * Constructs a new <code>TransferenciaBancariaPersist</code>.
   * Transfer\u00C3\u00AAncia banc\u00C3\u00A1ria
   * @alias module:model/TransferenciaBancariaPersist
   * @class
   * @param valorCompra
   * @param valor
   * @param documentoFavorecido
   * @param banco
   * @param numeroAgencia
   * @param numeroConta
   * @param flagContaPoupanca
   * @param nomeFavorecido
   */
  var exports = function(valorCompra, valor, documentoFavorecido, banco, numeroAgencia, numeroConta, flagContaPoupanca, nomeFavorecido) {

    this['valorCompra'] = valorCompra;
    this['valor'] = valor;
    this['documentoFavorecido'] = documentoFavorecido;
    this['banco'] = banco;
    this['numeroAgencia'] = numeroAgencia;

    this['numeroConta'] = numeroConta;

    this['flagContaPoupanca'] = flagContaPoupanca;
    this['nomeFavorecido'] = nomeFavorecido;
  };

  /**
   * Constructs a <code>TransferenciaBancariaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaBancariaPersist} obj Optional instance to populate.
   * @return {module:model/TransferenciaBancariaPersist} The populated <code>TransferenciaBancariaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('valorCompra')) {
        obj['valorCompra'] = ApiClient.convertToType(data['valorCompra'], 'Number');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('documentoFavorecido')) {
        obj['documentoFavorecido'] = ApiClient.convertToType(data['documentoFavorecido'], 'String');
      }
      if (data.hasOwnProperty('banco')) {
        obj['banco'] = ApiClient.convertToType(data['banco'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'String');
      }
      if (data.hasOwnProperty('digitoAgencia')) {
        obj['digitoAgencia'] = ApiClient.convertToType(data['digitoAgencia'], 'String');
      }
      if (data.hasOwnProperty('numeroConta')) {
        obj['numeroConta'] = ApiClient.convertToType(data['numeroConta'], 'String');
      }
      if (data.hasOwnProperty('digitoConta')) {
        obj['digitoConta'] = ApiClient.convertToType(data['digitoConta'], 'String');
      }
      if (data.hasOwnProperty('flagContaPoupanca')) {
        obj['flagContaPoupanca'] = ApiClient.convertToType(data['flagContaPoupanca'], 'Integer');
      }
      if (data.hasOwnProperty('nomeFavorecido')) {
        obj['nomeFavorecido'] = ApiClient.convertToType(data['nomeFavorecido'], 'String');
      }
    }
    return obj;
  }


  /**
   * Valor da transfer\u00C3\u00AAncia
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * Valor da transfer\u00C3\u00AAncia
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * N\u00C3\u00BAmero do CPF ou CNPJ.
   * @member {String} documentoFavorecido
   */
  exports.prototype['documentoFavorecido'] = undefined;

  /**
   * C\u00C3\u00B3digo do banco
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * N\u00C3\u00BAmero da ag\u00C3\u00AAncia
   * @member {String} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * D\u00C3\u00ADgito da ag\u00C3\u00AAncia
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * N\u00C3\u00BAmero da conta
   * @member {String} numeroConta
   */
  exports.prototype['numeroConta'] = undefined;

  /**
   * D\u00C3\u00ADgito da conta
   * @member {String} digitoConta
   */
  exports.prototype['digitoConta'] = undefined;

  /**
   * Sinaliza se conta banc\u00C3\u00A1ria \u00C3\u00A9 poupan\u00C3\u00A7a (1: Poupan\u00C3\u00A7a, 0: Conta corrente)
   * @member {Integer} flagContaPoupanca
   */
  exports.prototype['flagContaPoupanca'] = undefined;

  /**
   * Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)'.
   * @member {String} nomeFavorecido
   */
  exports.prototype['nomeFavorecido'] = undefined;




  return exports;
}));
