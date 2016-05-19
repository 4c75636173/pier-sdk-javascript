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
    root.Pier.PessoaFisicaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PessoaFisicaResponse model module.
   * @module model/PessoaFisicaResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PessoaFisicaResponse</code>.
   * @alias module:model/PessoaFisicaResponse
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>PessoaFisicaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaFisicaResponse} obj Optional instance to populate.
   * @return {module:model/PessoaFisicaResponse} The populated <code>PessoaFisicaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('bairro')) {
        obj['bairro'] = ApiClient.convertToType(data['bairro'], 'String');
      }
      if (data.hasOwnProperty('cep')) {
        obj['cep'] = ApiClient.convertToType(data['cep'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('complementoLogradouro')) {
        obj['complementoLogradouro'] = ApiClient.convertToType(data['complementoLogradouro'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('dataEmissaoIdentidade')) {
        obj['dataEmissaoIdentidade'] = ApiClient.convertToType(data['dataEmissaoIdentidade'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('dddcelular')) {
        obj['dddcelular'] = ApiClient.convertToType(data['dddcelular'], 'String');
      }
      if (data.hasOwnProperty('dddtelefone')) {
        obj['dddtelefone'] = ApiClient.convertToType(data['dddtelefone'], 'String');
      }
      if (data.hasOwnProperty('endereco')) {
        obj['endereco'] = ApiClient.convertToType(data['endereco'], 'String');
      }
      if (data.hasOwnProperty('idPessoaFisica')) {
        obj['idPessoaFisica'] = ApiClient.convertToType(data['idPessoaFisica'], 'Integer');
      }
      if (data.hasOwnProperty('identidade')) {
        obj['identidade'] = ApiClient.convertToType(data['identidade'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('numeroCelular')) {
        obj['numeroCelular'] = ApiClient.convertToType(data['numeroCelular'], 'String');
      }
      if (data.hasOwnProperty('numeroLogradouro')) {
        obj['numeroLogradouro'] = ApiClient.convertToType(data['numeroLogradouro'], 'Integer');
      }
      if (data.hasOwnProperty('numeroTelefone')) {
        obj['numeroTelefone'] = ApiClient.convertToType(data['numeroTelefone'], 'String');
      }
      if (data.hasOwnProperty('orgaoEmissor')) {
        obj['orgaoEmissor'] = ApiClient.convertToType(data['orgaoEmissor'], 'String');
      }
      if (data.hasOwnProperty('sexo')) {
        obj['sexo'] = ApiClient.convertToType(data['sexo'], 'String');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * @member {String} complementoLogradouro
   */
  exports.prototype['complementoLogradouro'] = undefined;

  /**
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * @member {String} dddcelular
   */
  exports.prototype['dddcelular'] = undefined;

  /**
   * @member {String} dddtelefone
   */
  exports.prototype['dddtelefone'] = undefined;

  /**
   * @member {String} endereco
   */
  exports.prototype['endereco'] = undefined;

  /**
   * @member {Integer} idPessoaFisica
   */
  exports.prototype['idPessoaFisica'] = undefined;

  /**
   * @member {String} identidade
   */
  exports.prototype['identidade'] = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * @member {String} numeroCelular
   */
  exports.prototype['numeroCelular'] = undefined;

  /**
   * @member {Integer} numeroLogradouro
   */
  exports.prototype['numeroLogradouro'] = undefined;

  /**
   * @member {String} numeroTelefone
   */
  exports.prototype['numeroTelefone'] = undefined;

  /**
   * @member {String} orgaoEmissor
   */
  exports.prototype['orgaoEmissor'] = undefined;

  /**
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;




  return exports;
}));
