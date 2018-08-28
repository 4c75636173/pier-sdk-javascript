(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TelefoneAdicionalPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelefoneAdicionalPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AdicionalPersist = factory(root.Pier.ApiClient, root.Pier.TelefoneAdicionalPersist);
  }
}(this, function(ApiClient, TelefoneAdicionalPersist) {
  'use strict';

  /**
   * The AdicionalPersist model module.
   * @module model/AdicionalPersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AdicionalPersist</code>.
   * {{{adicional_persist_description}}}
   * @alias module:model/AdicionalPersist
   * @class
   * @param nome
   * @param numeroReceitaFederal
   */
  var exports = function(nome, numeroReceitaFederal) {

    this['nome'] = nome;

    this['numeroReceitaFederal'] = numeroReceitaFederal;












  };

  /**
   * Constructs a <code>AdicionalPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdicionalPersist} obj Optional instance to populate.
   * @return {module:model/AdicionalPersist} The populated <code>AdicionalPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('numeroReceitaFederal')) {
        obj['numeroReceitaFederal'] = ApiClient.convertToType(data['numeroReceitaFederal'], 'String');
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
      if (data.hasOwnProperty('idEstadoCivil')) {
        obj['idEstadoCivil'] = ApiClient.convertToType(data['idEstadoCivil'], 'Integer');
      }
      if (data.hasOwnProperty('idProfissao')) {
        obj['idProfissao'] = ApiClient.convertToType(data['idProfissao'], 'Integer');
      }
      if (data.hasOwnProperty('idNacionalidade')) {
        obj['idNacionalidade'] = ApiClient.convertToType(data['idNacionalidade'], 'Integer');
      }
      if (data.hasOwnProperty('idParentesco')) {
        obj['idParentesco'] = ApiClient.convertToType(data['idParentesco'], 'Integer');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefoneAdicionalPersist]);
      }
    }
    return obj;
  }


  /**
   * {{{adicional_persist_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{adicional_persist_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{adicional_persist_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{adicional_persist_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{adicional_persist_sexo_value}}}
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * {{{adicional_persist_numero_identidade_value}}}
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * {{{adicional_persist_orgao_expedidor_identidade_value}}}
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * {{{adicional_persist_unidade_federativa_identidade_value}}}
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * {{{adicional_persist_data_emissao_identidade_value}}}
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * {{{adicional_persist_id_estado_civil_value}}}
   * @member {Integer} idEstadoCivil
   */
  exports.prototype['idEstadoCivil'] = undefined;

  /**
   * {{{adicional_persist_id_profissao_value}}}
   * @member {Integer} idProfissao
   */
  exports.prototype['idProfissao'] = undefined;

  /**
   * {{{adicional_persist_id_nacionalidade_value}}}
   * @member {Integer} idNacionalidade
   */
  exports.prototype['idNacionalidade'] = undefined;

  /**
   * {{{adicional_persist_id_parentesco_value}}}
   * @member {Integer} idParentesco
   */
  exports.prototype['idParentesco'] = undefined;

  /**
   * {{{adicional_persist_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{adicional_persist_telefones_value}}}
   * @member {Array.<module:model/TelefoneAdicionalPersist>} telefones
   */
  exports.prototype['telefones'] = undefined;




  return exports;
}));
