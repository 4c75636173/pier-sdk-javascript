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
    root.Pier.PessoaDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PessoaDetalheResponse model module.
   * @module model/PessoaDetalheResponse
   * @version 2.33.0
   */

  /**
   * Constructs a new <code>PessoaDetalheResponse</code>.
   * PessoaDetalheResponse
   * @alias module:model/PessoaDetalheResponse
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>PessoaDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaDetalheResponse} obj Optional instance to populate.
   * @return {module:model/PessoaDetalheResponse} The populated <code>PessoaDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('nomeMae')) {
        obj['nomeMae'] = ApiClient.convertToType(data['nomeMae'], 'String');
      }
      if (data.hasOwnProperty('idEstadoCivil')) {
        obj['idEstadoCivil'] = ApiClient.convertToType(data['idEstadoCivil'], 'Integer');
      }
      if (data.hasOwnProperty('idProfissao')) {
        obj['idProfissao'] = ApiClient.convertToType(data['idProfissao'], 'String');
      }
      if (data.hasOwnProperty('idNaturezaOcupacao')) {
        obj['idNaturezaOcupacao'] = ApiClient.convertToType(data['idNaturezaOcupacao'], 'Integer');
      }
      if (data.hasOwnProperty('idNacionalidade')) {
        obj['idNacionalidade'] = ApiClient.convertToType(data['idNacionalidade'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorrente')) {
        obj['numeroContaCorrente'] = ApiClient.convertToType(data['numeroContaCorrente'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('nomeEmpresa')) {
        obj['nomeEmpresa'] = ApiClient.convertToType(data['nomeEmpresa'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador da pessoa
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
   * @member {String} nomeMae
   */
  exports.prototype['nomeMae'] = undefined;

  /**
   * Id Estado civil da pessoa fisica
   * @member {Integer} idEstadoCivil
   */
  exports.prototype['idEstadoCivil'] = undefined;

  /**
   * Profiss\u00C3\u00A3o da pessoa fisica
   * @member {String} idProfissao
   */
  exports.prototype['idProfissao'] = undefined;

  /**
   * Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
   * @member {Integer} idNaturezaOcupacao
   */
  exports.prototype['idNaturezaOcupacao'] = undefined;

  /**
   * Id Nacionalidade da pessoa fisica
   * @member {Integer} idNacionalidade
   */
  exports.prototype['idNacionalidade'] = undefined;

  /**
   * N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * N\u00C3\u00BAmero da conta corrente.
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * Email da pessoa fisica
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Nome que deve ser impresso no cart\u00C3\u00A3o
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;




  return exports;
}));
