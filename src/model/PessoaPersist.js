(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TelefonePessoaAprovadaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelefonePessoaAprovadaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaPersist = factory(root.Pier.ApiClient, root.Pier.TelefonePessoaAprovadaPersist);
  }
}(this, function(ApiClient, TelefonePessoaAprovadaPersist) {
  'use strict';

  /**
   * The PessoaPersist model module.
   * @module model/PessoaPersist
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>PessoaPersist</code>.
   * PessoaPersist
   * @alias module:model/PessoaPersist
   * @class
   * @param nome
   */
  var exports = function(nome) {

    this['nome'] = nome;












  };

  /**
   * Constructs a <code>PessoaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaPersist} obj Optional instance to populate.
   * @return {module:model/PessoaPersist} The populated <code>PessoaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('sexo')) {
        obj['sexo'] = ApiClient.convertToType(data['sexo'], 'String');
      }
      if (data.hasOwnProperty('numeroIdentidade')) {
        obj['numeroIdentidade'] = ApiClient.convertToType(data['numeroIdentidade'], 'String');
      }
      if (data.hasOwnProperty('orgaoExpedidorIdentidade')) {
        obj['orgaoExpedidorIdentidade'] = ApiClient.convertToType(data['orgaoExpedidorIdentidade'], 'String');
      }
      if (data.hasOwnProperty('unidadeFederativaIdentidade')) {
        obj['unidadeFederativaIdentidade'] = ApiClient.convertToType(data['unidadeFederativaIdentidade'], 'String');
      }
      if (data.hasOwnProperty('dataEmissaoIdentidade')) {
        obj['dataEmissaoIdentidade'] = ApiClient.convertToType(data['dataEmissaoIdentidade'], 'String');
      }
      if (data.hasOwnProperty('estadoCivil')) {
        obj['estadoCivil'] = ApiClient.convertToType(data['estadoCivil'], 'String');
      }
      if (data.hasOwnProperty('profissao')) {
        obj['profissao'] = ApiClient.convertToType(data['profissao'], 'String');
      }
      if (data.hasOwnProperty('nacionalidade')) {
        obj['nacionalidade'] = ApiClient.convertToType(data['nacionalidade'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefonePessoaAprovadaPersist]);
      }
    }
    return obj;
  }


  /**
   * Apresenta o Nome do Socio
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * N\u00C3\u00BAmero do CPF, quando PF.
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino).
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * N\u00C3\u00BAmero da Identidade.
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * Org\u00C3\u00A3o expedidor da Identidade.
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * Sigla da Unidade Federativa de onde foi expedido a Identidade
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * Data emiss\u00C3\u00A3o da Identidade
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * Estado civil do s\u00C3\u00B3cio
   * @member {String} estadoCivil
   */
  exports.prototype['estadoCivil'] = undefined;

  /**
   * Profiss\u00C3\u00A3o do s\u00C3\u00B3cio
   * @member {String} profissao
   */
  exports.prototype['profissao'] = undefined;

  /**
   * Nacionalidade do s\u00C3\u00B3cio
   * @member {String} nacionalidade
   */
  exports.prototype['nacionalidade'] = undefined;

  /**
   * Email do s\u00C3\u00B3cio
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Informa os telefones do s\u00C3\u00B3cio
   * @member {Array.<module:model/TelefonePessoaAprovadaPersist>} telefones
   */
  exports.prototype['telefones'] = undefined;




  return exports;
}));
