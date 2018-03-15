(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TelefoneAdicionalUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelefoneAdicionalUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AdicionalUpdate = factory(root.Pier.ApiClient, root.Pier.TelefoneAdicionalUpdate);
  }
}(this, function(ApiClient, TelefoneAdicionalUpdate) {
  'use strict';

  /**
   * The AdicionalUpdate model module.
   * @module model/AdicionalUpdate
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>AdicionalUpdate</code>.
   * Objeto Adicional
   * @alias module:model/AdicionalUpdate
   * @class
   * @param nome
   * @param numeroReceitaFederal
   */
  var exports = function(nome, numeroReceitaFederal) {

    this['nome'] = nome;

    this['numeroReceitaFederal'] = numeroReceitaFederal;








  };

  /**
   * Constructs a <code>AdicionalUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdicionalUpdate} obj Optional instance to populate.
   * @return {module:model/AdicionalUpdate} The populated <code>AdicionalUpdate</code> instance.
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
      if (data.hasOwnProperty('idParentesco')) {
        obj['idParentesco'] = ApiClient.convertToType(data['idParentesco'], 'Integer');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefoneAdicionalUpdate]);
      }
    }
    return obj;
  }


  /**
   * Nome completo do Adicional.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Nome do Adicional que ser\u00E1 gravado no Cart\u00E3o.
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * N\u00FAmero do CPF ou CNPJ do Adicional.
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * Data de Nascimento do Adicional em formato yyyy-MM-dd.
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00E3o Especificado).
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * N\u00FAmero do Documento de Identidade do Adicional.
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * Nome do Org\u00E3o Emissor do Documento de Identidade do Adicional.
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * Sigla da Unidade Federativa onde o Documento de Identidade do Adicional foi emitido.
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * Data de emiss\u00E3o do Documento de Identidade do Adicional em formato yyyy-MM-dd.
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do Parentesco do Adicional com o Titular.
   * @member {Integer} idParentesco
   */
  exports.prototype['idParentesco'] = undefined;

  /**
   * Lista de telefones do adicional.
   * @member {Array.<module:model/TelefoneAdicionalUpdate>} telefones
   */
  exports.prototype['telefones'] = undefined;




  return exports;
}));
