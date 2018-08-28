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
    root.Pier.AdicionalContaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AdicionalContaResponse model module.
   * @module model/AdicionalContaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AdicionalContaResponse</code>.
   * {{{adicional_conta_response_description}}}
   * @alias module:model/AdicionalContaResponse
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>AdicionalContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdicionalContaResponse} obj Optional instance to populate.
   * @return {module:model/AdicionalContaResponse} The populated <code>AdicionalContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('numeroReceitaFederal')) {
        obj['numeroReceitaFederal'] = ApiClient.convertToType(data['numeroReceitaFederal'], 'String');
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
      if (data.hasOwnProperty('dataCadastroPortador')) {
        obj['dataCadastroPortador'] = ApiClient.convertToType(data['dataCadastroPortador'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{adicional_conta_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{adicional_conta_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{adicional_conta_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{adicional_conta_response_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{adicional_conta_response_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{adicional_conta_response_id_estado_civil_value}}}
   * @member {Integer} idEstadoCivil
   */
  exports.prototype['idEstadoCivil'] = undefined;

  /**
   * {{{adicional_conta_response_id_profissao_value}}}
   * @member {Integer} idProfissao
   */
  exports.prototype['idProfissao'] = undefined;

  /**
   * {{{adicional_conta_response_id_nacionalidade_value}}}
   * @member {Integer} idNacionalidade
   */
  exports.prototype['idNacionalidade'] = undefined;

  /**
   * {{{adicional_conta_response_id_parentesco_value}}}
   * @member {Integer} idParentesco
   */
  exports.prototype['idParentesco'] = undefined;

  /**
   * {{{adicional_conta_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{adicional_conta_response_data_cadastro_portador_value}}}
   * @member {String} dataCadastroPortador
   */
  exports.prototype['dataCadastroPortador'] = undefined;




  return exports;
}));
