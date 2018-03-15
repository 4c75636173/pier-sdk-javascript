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
    root.Pier.ContaBancariaPortadorResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaBancariaPortadorResponse model module.
   * @module model/ContaBancariaPortadorResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>ContaBancariaPortadorResponse</code>.
   * @alias module:model/ContaBancariaPortadorResponse
   * @class
   */
  var exports = function() {
















  };

  /**
   * Constructs a <code>ContaBancariaPortadorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaBancariaPortadorResponse} obj Optional instance to populate.
   * @return {module:model/ContaBancariaPortadorResponse} The populated <code>ContaBancariaPortadorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
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
      if (data.hasOwnProperty('idPessoaFisica')) {
        obj['idPessoaFisica'] = ApiClient.convertToType(data['idPessoaFisica'], 'Integer');
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
   * C\u00F3digo identificador da conta banc\u00E1ria
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00F3digo identificador da conta cart\u00E3o
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

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
   * C\u00F3digo da pessoa
   * @member {Integer} idPessoaFisica
   */
  exports.prototype['idPessoaFisica'] = undefined;

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
