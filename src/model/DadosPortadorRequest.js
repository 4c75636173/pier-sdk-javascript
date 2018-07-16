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
    root.Pier.DadosPortadorRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DadosPortadorRequest model module.
   * @module model/DadosPortadorRequest
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DadosPortadorRequest</code>.
   * {{{dados_portador_request_description}}}
   * @alias module:model/DadosPortadorRequest
   * @class
   * @param cartao
   * @param cpf
   * @param cepResidencial
   * @param email
   */
  var exports = function(cartao, cpf, cepResidencial, email) {

    this['cartao'] = cartao;
    this['cpf'] = cpf;


    this['cepResidencial'] = cepResidencial;
    this['email'] = email;


  };

  /**
   * Constructs a <code>DadosPortadorRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DadosPortadorRequest} obj Optional instance to populate.
   * @return {module:model/DadosPortadorRequest} The populated <code>DadosPortadorRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cartao')) {
        obj['cartao'] = ApiClient.convertToType(data['cartao'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('cepResidencial')) {
        obj['cepResidencial'] = ApiClient.convertToType(data['cepResidencial'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{dados_portador_request_cartao_value}}}
   * @member {String} cartao
   */
  exports.prototype['cartao'] = undefined;

  /**
   * {{{dados_portador_request_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{dados_portador_request_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{dados_portador_request_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{dados_portador_request_cep_residencial_value}}}
   * @member {String} cepResidencial
   */
  exports.prototype['cepResidencial'] = undefined;

  /**
   * {{{dados_portador_request_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{dados_portador_request_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{dados_portador_request_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;




  return exports;
}));
