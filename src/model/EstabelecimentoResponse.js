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
    root.Pier.EstabelecimentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EstabelecimentoResponse model module.
   * @module model/EstabelecimentoResponse
   * @version 2.46.5
   */

  /**
   * Constructs a new <code>EstabelecimentoResponse</code>.
   * Objeto Estabelecimento
   * @alias module:model/EstabelecimentoResponse
   * @class
   */
  var exports = function() {






















  };

  /**
   * Constructs a <code>EstabelecimentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstabelecimentoResponse} obj Optional instance to populate.
   * @return {module:model/EstabelecimentoResponse} The populated <code>EstabelecimentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('numeroReceitaFederal')) {
        obj['numeroReceitaFederal'] = ApiClient.convertToType(data['numeroReceitaFederal'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasia')) {
        obj['nomeFantasia'] = ApiClient.convertToType(data['nomeFantasia'], 'String');
      }
      if (data.hasOwnProperty('cep')) {
        obj['cep'] = ApiClient.convertToType(data['cep'], 'String');
      }
      if (data.hasOwnProperty('nomeLogradouro')) {
        obj['nomeLogradouro'] = ApiClient.convertToType(data['nomeLogradouro'], 'String');
      }
      if (data.hasOwnProperty('numeroEndereco')) {
        obj['numeroEndereco'] = ApiClient.convertToType(data['numeroEndereco'], 'String');
      }
      if (data.hasOwnProperty('complemento')) {
        obj['complemento'] = ApiClient.convertToType(data['complemento'], 'String');
      }
      if (data.hasOwnProperty('bairro')) {
        obj['bairro'] = ApiClient.convertToType(data['bairro'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
      if (data.hasOwnProperty('pais')) {
        obj['pais'] = ApiClient.convertToType(data['pais'], 'String');
      }
      if (data.hasOwnProperty('dataCadastramento')) {
        obj['dataCadastramento'] = ApiClient.convertToType(data['dataCadastramento'], 'String');
      }
      if (data.hasOwnProperty('obs')) {
        obj['obs'] = ApiClient.convertToType(data['obs'], 'String');
      }
      if (data.hasOwnProperty('contato')) {
        obj['contato'] = ApiClient.convertToType(data['contato'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('flagArquivoSecrFazenda')) {
        obj['flagArquivoSecrFazenda'] = ApiClient.convertToType(data['flagArquivoSecrFazenda'], 'Integer');
      }
      if (data.hasOwnProperty('flagCartaoDigitado')) {
        obj['flagCartaoDigitado'] = ApiClient.convertToType(data['flagCartaoDigitado'], 'Integer');
      }
      if (data.hasOwnProperty('inativo')) {
        obj['inativo'] = ApiClient.convertToType(data['inativo'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Conductor.
   * @member {String} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal.
   * @member {Integer} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * Nome do Estabelecimento.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Raz\u00C3\u00A3o Social do Estabelecimento.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * T\u00C3\u00ADtulo Comercial do Estabelecimento.
   * @member {String} nomeFantasia
   */
  exports.prototype['nomeFantasia'] = undefined;

  /**
   * C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * Nome do Logradouro.
   * @member {String} nomeLogradouro
   */
  exports.prototype['nomeLogradouro'] = undefined;

  /**
   * N\u00C3\u00BAmero do endere\u00C3\u00A7o.
   * @member {String} numeroEndereco
   */
  exports.prototype['numeroEndereco'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
   * @member {String} complemento
   */
  exports.prototype['complemento'] = undefined;

  /**
   * Nome do bairro do endere\u00C3\u00A7o.
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * Nome da cidade do endere\u00C3\u00A7o.
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * Nome do pa\u00C3\u00ADs.
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * Data de Cadastro do Estabelecimento.
   * @member {String} dataCadastramento
   */
  exports.prototype['dataCadastramento'] = undefined;

  /**
   * Detalhes espec\u00C3\u00ADficos quanto ao Cadastro do Estabelecimento.
   * @member {String} obs
   */
  exports.prototype['obs'] = undefined;

  /**
   * Nome da pessoa para contato com o Estabelecimento.
   * @member {String} contato
   */
  exports.prototype['contato'] = undefined;

  /**
   * E-mail da pessoa para contato com o Estabelecimento.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual.
   * @member {Integer} flagArquivoSecrFazenda
   */
  exports.prototype['flagArquivoSecrFazenda'] = undefined;

  /**
   * Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o.
   * @member {Integer} flagCartaoDigitado
   */
  exports.prototype['flagCartaoDigitado'] = undefined;

  /**
   * Indica se o estabelecimento est\u00C3\u00A1 inativo.
   * @member {Integer} inativo
   */
  exports.prototype['inativo'] = undefined;




  return exports;
}));
