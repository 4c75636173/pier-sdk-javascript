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
    root.Pier.ContaBancariaPortadorPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaBancariaPortadorPersistValue model module.
   * @module model/ContaBancariaPortadorPersistValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ContaBancariaPortadorPersistValue</code>.
   * {{{conta_bancaria_portador_persist_description}}}
   * @alias module:model/ContaBancariaPortadorPersistValue
   * @class
   * @param idConta
   * @param banco
   * @param numeroAgencia
   * @param numeroConta
   * @param flagAtivo
   * @param flagContaOrigemDoc
   * @param idPessoaFisica
   * @param flagContaPoupanca
   */
  var exports = function(idConta, banco, numeroAgencia, numeroConta, flagAtivo, flagContaOrigemDoc, idPessoaFisica, flagContaPoupanca) {

    this['idConta'] = idConta;

    this['banco'] = banco;
    this['numeroAgencia'] = numeroAgencia;

    this['numeroConta'] = numeroConta;

    this['flagAtivo'] = flagAtivo;
    this['flagContaOrigemDoc'] = flagContaOrigemDoc;
    this['idPessoaFisica'] = idPessoaFisica;
    this['flagContaPoupanca'] = flagContaPoupanca;



  };

  /**
   * Constructs a <code>ContaBancariaPortadorPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaBancariaPortadorPersistValue} obj Optional instance to populate.
   * @return {module:model/ContaBancariaPortadorPersistValue} The populated <code>ContaBancariaPortadorPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
   * {{{conta_bancaria_portador_persist_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_nome_agencia_value}}}
   * @member {String} nomeAgencia
   */
  exports.prototype['nomeAgencia'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_banco_value}}}
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_numero_agencia_value}}}
   * @member {String} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_digito_agencia_value}}}
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_numero_conta_value}}}
   * @member {String} numeroConta
   */
  exports.prototype['numeroConta'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_digito_conta_value}}}
   * @member {String} digitoConta
   */
  exports.prototype['digitoConta'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_flag_ativo_value}}}
   * @member {Integer} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_flag_conta_origem_doc_value}}}
   * @member {Integer} flagContaOrigemDoc
   */
  exports.prototype['flagContaOrigemDoc'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_id_pessoa_fisica_value}}}
   * @member {Integer} idPessoaFisica
   */
  exports.prototype['idPessoaFisica'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_flag_conta_poupanca_value}}}
   * @member {Integer} flagContaPoupanca
   */
  exports.prototype['flagContaPoupanca'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_favorecido_value}}}
   * @member {String} favorecido
   */
  exports.prototype['favorecido'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_numero_receira_federal_value}}}
   * @member {String} numeroReceiraFederal
   */
  exports.prototype['numeroReceiraFederal'] = undefined;

  /**
   * {{{conta_bancaria_portador_persist_titularidade_value}}}
   * @member {Integer} titularidade
   */
  exports.prototype['titularidade'] = undefined;




  return exports;
}));
