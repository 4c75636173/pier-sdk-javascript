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
    root.Pier.ContaBancariaPortadorUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaBancariaPortadorUpdate model module.
   * @module model/ContaBancariaPortadorUpdate
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>ContaBancariaPortadorUpdate</code>.
   * Objeto ContaBancariaPortador
   * @alias module:model/ContaBancariaPortadorUpdate
   * @class
   * @param banco
   * @param numeroAgencia
   * @param numeroConta
   * @param flagAtivo
   * @param flagContaOrigemDoc
   * @param flagContaPoupanca
   * @param favorecido
   * @param numeroReceiraFederal
   */
  var exports = function(banco, numeroAgencia, numeroConta, flagAtivo, flagContaOrigemDoc, flagContaPoupanca, favorecido, numeroReceiraFederal) {


    this['banco'] = banco;
    this['numeroAgencia'] = numeroAgencia;

    this['numeroConta'] = numeroConta;

    this['flagAtivo'] = flagAtivo;
    this['flagContaOrigemDoc'] = flagContaOrigemDoc;
    this['flagContaPoupanca'] = flagContaPoupanca;
    this['favorecido'] = favorecido;
    this['numeroReceiraFederal'] = numeroReceiraFederal;

  };

  /**
   * Constructs a <code>ContaBancariaPortadorUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaBancariaPortadorUpdate} obj Optional instance to populate.
   * @return {module:model/ContaBancariaPortadorUpdate} The populated <code>ContaBancariaPortadorUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nomeAgencia')) {
        obj['nomeAgencia'] = ApiClient.convertToType(data['nomeAgencia'], 'String');
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
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Integer');
      }
      if (data.hasOwnProperty('flagContaOrigemDoc')) {
        obj['flagContaOrigemDoc'] = ApiClient.convertToType(data['flagContaOrigemDoc'], 'Integer');
      }
      if (data.hasOwnProperty('flagContaPoupanca')) {
        obj['flagContaPoupanca'] = ApiClient.convertToType(data['flagContaPoupanca'], 'Integer');
      }
      if (data.hasOwnProperty('favorecido')) {
        obj['favorecido'] = ApiClient.convertToType(data['favorecido'], 'String');
      }
      if (data.hasOwnProperty('numeroReceiraFederal')) {
        obj['numeroReceiraFederal'] = ApiClient.convertToType(data['numeroReceiraFederal'], 'String');
      }
      if (data.hasOwnProperty('titularidade')) {
        obj['titularidade'] = ApiClient.convertToType(data['titularidade'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Descri\u00E7\u00E3o da ag\u00EAncia
   * @member {String} nomeAgencia
   */
  exports.prototype['nomeAgencia'] = undefined;

  /**
   * C\u00F3digo do banco
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * N\u00FAmero da ag\u00EAncia
   * @member {String} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * D\u00EDgito da ag\u00EAncia
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * N\u00FAmero da conta
   * @member {String} numeroConta
   */
  exports.prototype['numeroConta'] = undefined;

  /**
   * D\u00EDgito da conta
   * @member {String} digitoConta
   */
  exports.prototype['digitoConta'] = undefined;

  /**
   * Sinaliza se conta banc\u00E1ria est\u00E1 ativa ou n\u00E3o (1: Ativa, 0: Inativa)
   * @member {Integer} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * Sinaliza se origem \u00E9 DOC (1: DOC, 0: TED)
   * @member {Integer} flagContaOrigemDoc
   */
  exports.prototype['flagContaOrigemDoc'] = undefined;

  /**
   * Sinaliza se conta banc\u00E1ria \u00E9 poupan\u00E7a (1: Poupan\u00E7a, 0: Conta corrente)
   * @member {Integer} flagContaPoupanca
   */
  exports.prototype['flagContaPoupanca'] = undefined;

  /**
   * Nome do favorecido
   * @member {String} favorecido
   */
  exports.prototype['favorecido'] = undefined;

  /**
   * Documento do favorecido
   * @member {String} numeroReceiraFederal
   */
  exports.prototype['numeroReceiraFederal'] = undefined;

  /**
   * Titularidade da conta (1:Portador \u00E9 o titular, 0: Portador n\u00E3o \u00E9 o t\u00EDtular
   * @member {Integer} titularidade
   */
  exports.prototype['titularidade'] = undefined;




  return exports;
}));
