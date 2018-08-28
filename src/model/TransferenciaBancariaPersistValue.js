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
    root.Pier.TransferenciaBancariaPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaBancariaPersistValue model module.
   * @module model/TransferenciaBancariaPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TransferenciaBancariaPersistValue</code>.
   * {{{transferencia_bancaria_persist_description}}}
   * @alias module:model/TransferenciaBancariaPersistValue
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
   * Constructs a <code>TransferenciaBancariaPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaBancariaPersistValue} obj Optional instance to populate.
   * @return {module:model/TransferenciaBancariaPersistValue} The populated <code>TransferenciaBancariaPersistValue</code> instance.
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
   * {{{transferencia_bancaria_persist_valor_compra_value}}}
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_documento_favorecido_value}}}
   * @member {String} documentoFavorecido
   */
  exports.prototype['documentoFavorecido'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_banco_value}}}
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_numero_agencia_value}}}
   * @member {String} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_digito_agencia_value}}}
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_numero_conta_value}}}
   * @member {String} numeroConta
   */
  exports.prototype['numeroConta'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_digito_conta_value}}}
   * @member {String} digitoConta
   */
  exports.prototype['digitoConta'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_flag_conta_poupanca_value}}}
   * @member {Integer} flagContaPoupanca
   */
  exports.prototype['flagContaPoupanca'] = undefined;

  /**
   * {{{transferencia_bancaria_persist_nome_favorecido_value}}}
   * @member {String} nomeFavorecido
   */
  exports.prototype['nomeFavorecido'] = undefined;




  return exports;
}));
