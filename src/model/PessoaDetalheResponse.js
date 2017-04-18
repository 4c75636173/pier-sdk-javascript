(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PessoaDetalheResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PessoaDetalheResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaDetalheResponse = factory(root.Pier.ApiClient, root.Pier.PessoaDetalheResponse);
  }
}(this, function(ApiClient, PessoaDetalheResponse) {
  'use strict';

  /**
   * The PessoaDetalheResponse model module.
   * @module model/PessoaDetalheResponse
   * @version 2.13.0
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

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [PessoaDetalheResponse]);
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
      }
      if (data.hasOwnProperty('firstPage')) {
        obj['firstPage'] = ApiClient.convertToType(data['firstPage'], 'Boolean');
      }
      if (data.hasOwnProperty('hasContent')) {
        obj['hasContent'] = ApiClient.convertToType(data['hasContent'], 'Boolean');
      }
      if (data.hasOwnProperty('hasNextPage')) {
        obj['hasNextPage'] = ApiClient.convertToType(data['hasNextPage'], 'Boolean');
      }
      if (data.hasOwnProperty('hasPreviousPage')) {
        obj['hasPreviousPage'] = ApiClient.convertToType(data['hasPreviousPage'], 'Boolean');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('nextPage')) {
        obj['nextPage'] = ApiClient.convertToType(data['nextPage'], 'Integer');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfElements')) {
        obj['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Integer');
      }
      if (data.hasOwnProperty('previousPage')) {
        obj['previousPage'] = ApiClient.convertToType(data['previousPage'], 'Integer');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('totalElements')) {
        obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Integer');
      }
      if (data.hasOwnProperty('totalPages')) {
        obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Integer');
      }
      if (data.hasOwnProperty('nomeMae')) {
        obj['nomeMae'] = ApiClient.convertToType(data['nomeMae'], 'String');
      }
      if (data.hasOwnProperty('idEstadoCivil')) {
        obj['idEstadoCivil'] = ApiClient.convertToType(data['idEstadoCivil'], 'Integer');
      }
      if (data.hasOwnProperty('profissao')) {
        obj['profissao'] = ApiClient.convertToType(data['profissao'], 'String');
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
   * @member {Array.<module:model/PessoaDetalheResponse>} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {Boolean} first
   */
  exports.prototype['first'] = undefined;

  /**
   * @member {Boolean} firstPage
   */
  exports.prototype['firstPage'] = undefined;

  /**
   * @member {Boolean} hasContent
   */
  exports.prototype['hasContent'] = undefined;

  /**
   * @member {Boolean} hasNextPage
   */
  exports.prototype['hasNextPage'] = undefined;

  /**
   * @member {Boolean} hasPreviousPage
   */
  exports.prototype['hasPreviousPage'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da pessoa
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;

  /**
   * @member {Integer} nextPage
   */
  exports.prototype['nextPage'] = undefined;

  /**
   * @member {Integer} number
   */
  exports.prototype['number'] = undefined;

  /**
   * @member {Integer} numberOfElements
   */
  exports.prototype['numberOfElements'] = undefined;

  /**
   * @member {Integer} previousPage
   */
  exports.prototype['previousPage'] = undefined;

  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member {Integer} totalElements
   */
  exports.prototype['totalElements'] = undefined;

  /**
   * @member {Integer} totalPages
   */
  exports.prototype['totalPages'] = undefined;

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
   * @member {String} profissao
   */
  exports.prototype['profissao'] = undefined;

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
