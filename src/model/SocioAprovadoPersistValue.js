(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TelefonePessoaAprovadaPersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelefonePessoaAprovadaPersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.SocioAprovadoPersistValue = factory(root.Pier.ApiClient, root.Pier.TelefonePessoaAprovadaPersistValue);
  }
}(this, function(ApiClient, TelefonePessoaAprovadaPersistValue) {
  'use strict';

  /**
   * The SocioAprovadoPersistValue model module.
   * @module model/SocioAprovadoPersistValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>SocioAprovadoPersistValue</code>.
   * {{{socio_aprovado_persist_description}}}
   * @alias module:model/SocioAprovadoPersistValue
   * @class
   * @param nome
   */
  var exports = function(nome) {

    this['nome'] = nome;












  };

  /**
   * Constructs a <code>SocioAprovadoPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SocioAprovadoPersistValue} obj Optional instance to populate.
   * @return {module:model/SocioAprovadoPersistValue} The populated <code>SocioAprovadoPersistValue</code> instance.
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
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefonePessoaAprovadaPersistValue]);
      }
    }
    return obj;
  }


  /**
   * {{{socio_aprovado_persist_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{socio_aprovado_persist_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{socio_aprovado_persist_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{socio_aprovado_persist_sexo_value}}}
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * {{{socio_aprovado_persist_numero_identidade_value}}}
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_persist_orgao_expedidor_identidade_value}}}
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_persist_unidade_federativa_identidade_value}}}
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_persist_data_emissao_identidade_value}}}
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_persist_estado_civil_value}}}
   * @member {String} estadoCivil
   */
  exports.prototype['estadoCivil'] = undefined;

  /**
   * {{{socio_aprovado_persist_profissao_value}}}
   * @member {String} profissao
   */
  exports.prototype['profissao'] = undefined;

  /**
   * {{{socio_aprovado_persist_nacionalidade_value}}}
   * @member {String} nacionalidade
   */
  exports.prototype['nacionalidade'] = undefined;

  /**
   * {{{socio_aprovado_persist_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{socio_aprovado_persist_telefones_value}}}
   * @member {Array.<module:model/TelefonePessoaAprovadaPersistValue>} telefones
   */
  exports.prototype['telefones'] = undefined;




  return exports;
}));
