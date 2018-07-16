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
    root.Pier.AdicionalResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AdicionalResponse model module.
   * @module model/AdicionalResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>AdicionalResponse</code>.
   * {{{adicional_response_description}}}
   * @alias module:model/AdicionalResponse
   * @class
   */
  var exports = function() {
















  };

  /**
   * Constructs a <code>AdicionalResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdicionalResponse} obj Optional instance to populate.
   * @return {module:model/AdicionalResponse} The populated <code>AdicionalResponse</code> instance.
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
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Integer');
      }
      if (data.hasOwnProperty('dataCadastroPortador')) {
        obj['dataCadastroPortador'] = ApiClient.convertToType(data['dataCadastroPortador'], 'String');
      }
      if (data.hasOwnProperty('dataCancelamentoPortador')) {
        obj['dataCancelamentoPortador'] = ApiClient.convertToType(data['dataCancelamentoPortador'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{adicional_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{adicional_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{adicional_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{adicional_response_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{adicional_response_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{adicional_response_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{adicional_response_sexo_value}}}
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * {{{adicional_response_numero_identidade_value}}}
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * {{{adicional_response_orgao_expedidor_identidade_value}}}
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * {{{adicional_response_unidade_federativa_identidade_value}}}
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * {{{adicional_response_data_emissao_identidade_value}}}
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * {{{adicional_response_id_parentesco_value}}}
   * @member {Integer} idParentesco
   */
  exports.prototype['idParentesco'] = undefined;

  /**
   * {{{adicional_response_flag_ativo_value}}}
   * @member {Integer} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * {{{adicional_response_data_cadastro_portador_value}}}
   * @member {String} dataCadastroPortador
   */
  exports.prototype['dataCadastroPortador'] = undefined;

  /**
   * {{{adicional_response_data_cancelamento_portador_value}}}
   * @member {String} dataCancelamentoPortador
   */
  exports.prototype['dataCancelamentoPortador'] = undefined;




  return exports;
}));
