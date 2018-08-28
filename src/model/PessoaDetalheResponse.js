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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PessoaDetalheResponse</code>.
   * {{{pessoa_detalhe_response_description}}}
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
      if (data.hasOwnProperty('numeroBanco')) {
        obj['numeroBanco'] = ApiClient.convertToType(data['numeroBanco'], 'Integer');
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
   * {{{pessoa_detalhe_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{pessoa_detalhe_response_nome_mae_value}}}
   * @member {String} nomeMae
   */
  exports.prototype['nomeMae'] = undefined;

  /**
   * {{{pessoa_detalhe_response_id_estado_civil_value}}}
   * @member {Integer} idEstadoCivil
   */
  exports.prototype['idEstadoCivil'] = undefined;

  /**
   * {{{pessoa_detalhe_response_id_profissao_value}}}
   * @member {String} idProfissao
   */
  exports.prototype['idProfissao'] = undefined;

  /**
   * {{{pessoa_detalhe_response_id_natureza_ocupacao_value}}}
   * @member {Integer} idNaturezaOcupacao
   */
  exports.prototype['idNaturezaOcupacao'] = undefined;

  /**
   * {{{pessoa_detalhe_response_id_nacionalidade_value}}}
   * @member {Integer} idNacionalidade
   */
  exports.prototype['idNacionalidade'] = undefined;

  /**
   * {{{pessoa_detalhe_response_numero_banco_value}}}
   * @member {Integer} numeroBanco
   */
  exports.prototype['numeroBanco'] = undefined;

  /**
   * {{{pessoa_detalhe_response_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{pessoa_detalhe_response_numero_conta_corrente_value}}}
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * {{{pessoa_detalhe_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{pessoa_detalhe_response_nome_empresa_value}}}
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;




  return exports;
}));
