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
    root.Pier.PessoaJuridicaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PessoaJuridicaResponse model module.
   * @module model/PessoaJuridicaResponse
   * @version 2.47.3
   */

  /**
   * Constructs a new <code>PessoaJuridicaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de pessoa jur\u00C3\u00ADdica
   * @alias module:model/PessoaJuridicaResponse
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>PessoaJuridicaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaJuridicaResponse} obj Optional instance to populate.
   * @return {module:model/PessoaJuridicaResponse} The populated <code>PessoaJuridicaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('razaoSocial')) {
        obj['razaoSocial'] = ApiClient.convertToType(data['razaoSocial'], 'String');
      }
      if (data.hasOwnProperty('cnpj')) {
        obj['cnpj'] = ApiClient.convertToType(data['cnpj'], 'String');
      }
      if (data.hasOwnProperty('inscricaoEstadual')) {
        obj['inscricaoEstadual'] = ApiClient.convertToType(data['inscricaoEstadual'], 'String');
      }
      if (data.hasOwnProperty('contato')) {
        obj['contato'] = ApiClient.convertToType(data['contato'], 'String');
      }
      if (data.hasOwnProperty('banco')) {
        obj['banco'] = ApiClient.convertToType(data['banco'], 'Integer');
      }
      if (data.hasOwnProperty('agencia')) {
        obj['agencia'] = ApiClient.convertToType(data['agencia'], 'Integer');
      }
      if (data.hasOwnProperty('digitoVerificadorAgencia')) {
        obj['digitoVerificadorAgencia'] = ApiClient.convertToType(data['digitoVerificadorAgencia'], 'String');
      }
      if (data.hasOwnProperty('contaCorrente')) {
        obj['contaCorrente'] = ApiClient.convertToType(data['contaCorrente'], 'String');
      }
      if (data.hasOwnProperty('digitoVerificadorContaCorrente')) {
        obj['digitoVerificadorContaCorrente'] = ApiClient.convertToType(data['digitoVerificadorContaCorrente'], 'String');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador da pessoa jur\u00C3\u00ADdica
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * C\u00C3\u00B3digo do Cadastro Nacional de Pessoas Jur\u00C3\u00ADdicas
   * @member {String} cnpj
   */
  exports.prototype['cnpj'] = undefined;

  /**
   * N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
   * @member {String} inscricaoEstadual
   */
  exports.prototype['inscricaoEstadual'] = undefined;

  /**
   * Nome da pessoa para entrar em contato
   * @member {String} contato
   */
  exports.prototype['contato'] = undefined;

  /**
   * C\u00C3\u00B3digo do banco
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * C\u00C3\u00B3digo da ag\u00C3\u00AAncia
   * @member {Integer} agencia
   */
  exports.prototype['agencia'] = undefined;

  /**
   * D\u00C3\u00ADgito verificador da ag\u00C3\u00AAncia
   * @member {String} digitoVerificadorAgencia
   */
  exports.prototype['digitoVerificadorAgencia'] = undefined;

  /**
   * C\u00C3\u00B3digo da Conta Corrente
   * @member {String} contaCorrente
   */
  exports.prototype['contaCorrente'] = undefined;

  /**
   * D\u00C3\u00ADgito Verificador da Conta Corrente
   * @member {String} digitoVerificadorContaCorrente
   */
  exports.prototype['digitoVerificadorContaCorrente'] = undefined;

  /**
   * Login do usu\u00C3\u00A1rio para registro da inser\u00C3\u00A7\u00C3\u00A3o
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;




  return exports;
}));
