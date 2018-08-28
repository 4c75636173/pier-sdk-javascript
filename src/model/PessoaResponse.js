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
    root.Pier.PessoaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PessoaResponse model module.
   * @module model/PessoaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PessoaResponse</code>.
   * {{{pessoa_response_description}}}
   * @alias module:model/PessoaResponse
   * @class
   * @param id
   * @param nome
   * @param tipo
   */
  var exports = function(id, nome, tipo) {

    this['id'] = id;
    this['nome'] = nome;
    this['tipo'] = tipo;








  };

  /**
   * Constructs a <code>PessoaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaResponse} obj Optional instance to populate.
   * @return {module:model/PessoaResponse} The populated <code>PessoaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('tipo')) {
        obj['tipo'] = ApiClient.convertToType(data['tipo'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('cnpj')) {
        obj['cnpj'] = ApiClient.convertToType(data['cnpj'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('numeroIdentidade')) {
        obj['numeroIdentidade'] = ApiClient.convertToType(data['numeroIdentidade'], 'String');
      }
      if (data.hasOwnProperty('orgaoExpedidorIdentidade')) {
        obj['orgaoExpedidorIdentidade'] = ApiClient.convertToType(data['orgaoExpedidorIdentidade'], 'String');
      }
      if (data.hasOwnProperty('sexo')) {
        obj['sexo'] = ApiClient.convertToType(data['sexo'], 'String');
      }
      if (data.hasOwnProperty('unidadeFederativaIdentidade')) {
        obj['unidadeFederativaIdentidade'] = ApiClient.convertToType(data['unidadeFederativaIdentidade'], 'String');
      }
      if (data.hasOwnProperty('dataEmissaoIdentidade')) {
        obj['dataEmissaoIdentidade'] = ApiClient.convertToType(data['dataEmissaoIdentidade'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{pessoa_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{pessoa_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{pessoa_response_tipo_value}}}
   * @member {String} tipo
   */
  exports.prototype['tipo'] = undefined;

  /**
   * {{{pessoa_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{pessoa_response_cnpj_value}}}
   * @member {String} cnpj
   */
  exports.prototype['cnpj'] = undefined;

  /**
   * {{{pessoa_response_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{pessoa_response_numero_identidade_value}}}
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * {{{pessoa_response_orgao_expedidor_identidade_value}}}
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * {{{pessoa_response_sexo_value}}}
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * {{{pessoa_response_unidade_federativa_identidade_value}}}
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * {{{pessoa_response_data_emissao_identidade_value}}}
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;




  return exports;
}));
