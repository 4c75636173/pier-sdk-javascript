(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TelefoneResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelefoneResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AdicionalDetalheResponse = factory(root.Pier.ApiClient, root.Pier.TelefoneResponse);
  }
}(this, function(ApiClient, TelefoneResponse) {
  'use strict';

  /**
   * The AdicionalDetalheResponse model module.
   * @module model/AdicionalDetalheResponse
   * @version 2.46.4
   */

  /**
   * Constructs a new <code>AdicionalDetalheResponse</code>.
   * Resposta do recurso de cadastrar adicional detalhe
   * @alias module:model/AdicionalDetalheResponse
   * @class
   */
  var exports = function() {





















  };

  /**
   * Constructs a <code>AdicionalDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdicionalDetalheResponse} obj Optional instance to populate.
   * @return {module:model/AdicionalDetalheResponse} The populated <code>AdicionalDetalheResponse</code> instance.
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
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Integer');
      }
      if (data.hasOwnProperty('dataCadastroPortador')) {
        obj['dataCadastroPortador'] = ApiClient.convertToType(data['dataCadastroPortador'], 'String');
      }
      if (data.hasOwnProperty('dataCancelamentoPortador')) {
        obj['dataCancelamentoPortador'] = ApiClient.convertToType(data['dataCancelamentoPortador'], 'String');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefoneResponse]);
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta para cadastro do Adicional
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Adicional
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * Nome completo do Adicional
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Nome do Adicional que ser\u00C3\u00A1 gravado no Cart\u00C3\u00A3o
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * N\u00C3\u00BAmero do CPF ou CNPJ do Adicional
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * Data de Nascimento do Adicional
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00C3\u00A3o Especificado).
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * N\u00C3\u00BAmero do Documento de Identidade do Adicional
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * Nome do Org\u00C3\u00A3o Emissor do Documento de Identidade do Adicional
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * Sigla da Unidade Federativa onde o Documento de Identidade do Adicional foi emitido
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * Data de emiss\u00C3\u00A3o do Documento de Identidade do Adicional
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Estado Civil do Adicional
   * @member {Integer} idEstadoCivil
   */
  exports.prototype['idEstadoCivil'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Profissao do Adicional
   * @member {Integer} idProfissao
   */
  exports.prototype['idProfissao'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Nacionalidade do Adicional
   * @member {Integer} idNacionalidade
   */
  exports.prototype['idNacionalidade'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Parentesco do Adicional com o Titular
   * @member {Integer} idParentesco
   */
  exports.prototype['idParentesco'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Parentesco do Adicional com o Titular
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Indica se o adicional est\u00C3\u00A1 ativo = 1 ou inativo = 0
   * @member {Integer} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * Indica a data de cadastro do adicional
   * @member {String} dataCadastroPortador
   */
  exports.prototype['dataCadastroPortador'] = undefined;

  /**
   * Indica a data de cancelamento do adicional
   * @member {String} dataCancelamentoPortador
   */
  exports.prototype['dataCancelamentoPortador'] = undefined;

  /**
   * Lista dos telefones do adicional
   * @member {Array.<module:model/TelefoneResponse>} telefones
   */
  exports.prototype['telefones'] = undefined;




  return exports;
}));
