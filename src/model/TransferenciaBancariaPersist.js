(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ModelDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelDate'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TransferenciaBancariaPersist = factory(root.Pier.ApiClient, root.Pier.ModelDate);
  }
}(this, function(ApiClient, ModelDate) {
  'use strict';

  /**
   * The TransferenciaBancariaPersist model module.
   * @module model/TransferenciaBancariaPersist
   * @version 2.15.5
   */

  /**
   * Constructs a new <code>TransferenciaBancariaPersist</code>.
   * Transfer\u00C3\u00AAncia banc\u00C3\u00A1ria
   * @alias module:model/TransferenciaBancariaPersist
   * @class
   * @param dataCompra
   * @param proximoVencimentoPadrao
   * @param proximoVencimentoReal
   * @param valorCompra
   * @param nomeFavorecido
   * @param documentoFavorecido
   * @param banco
   * @param numeroAgencia
   * @param numeroConta
   * @param flagContaPoupanca
   */
  var exports = function(dataCompra, proximoVencimentoPadrao, proximoVencimentoReal, valorCompra, nomeFavorecido, documentoFavorecido, banco, numeroAgencia, numeroConta, flagContaPoupanca) {

    this['dataCompra'] = dataCompra;
    this['proximoVencimentoPadrao'] = proximoVencimentoPadrao;
    this['proximoVencimentoReal'] = proximoVencimentoReal;
    this['valorCompra'] = valorCompra;
    this['nomeFavorecido'] = nomeFavorecido;
    this['documentoFavorecido'] = documentoFavorecido;
    this['banco'] = banco;
    this['numeroAgencia'] = numeroAgencia;

    this['numeroConta'] = numeroConta;

    this['flagContaPoupanca'] = flagContaPoupanca;
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

      if (data.hasOwnProperty('dataCompra')) {
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], ModelDate);
      }
      if (data.hasOwnProperty('proximoVencimentoPadrao')) {
        obj['proximoVencimentoPadrao'] = ApiClient.convertToType(data['proximoVencimentoPadrao'], ModelDate);
      }
      if (data.hasOwnProperty('proximoVencimentoReal')) {
        obj['proximoVencimentoReal'] = ApiClient.convertToType(data['proximoVencimentoReal'], ModelDate);
      }
      if (data.hasOwnProperty('valorCompra')) {
        obj['valorCompra'] = ApiClient.convertToType(data['valorCompra'], 'Number');
      }
      if (data.hasOwnProperty('nomeFavorecido')) {
        obj['nomeFavorecido'] = ApiClient.convertToType(data['nomeFavorecido'], 'String');
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
    }
    return obj;
  }


  /**
   * Data da transfer\u00C3\u00AAncia
   * @member {module:model/ModelDate} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * Dia do vencimento padr\u00C3\u00A3o da fatura
   * @member {module:model/ModelDate} proximoVencimentoPadrao
   */
  exports.prototype['proximoVencimentoPadrao'] = undefined;

  /**
   * Data do vencimento real da fatura
   * @member {module:model/ModelDate} proximoVencimentoReal
   */
  exports.prototype['proximoVencimentoReal'] = undefined;

  /**
   * Valor da transfer\u00C3\u00AAncia
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)'.
   * @member {String} nomeFavorecido
   */
  exports.prototype['nomeFavorecido'] = undefined;

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




  return exports;
}));
