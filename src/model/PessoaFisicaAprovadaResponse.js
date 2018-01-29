(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './EnderecoAprovadoResponse', './TelefonePessoaAprovadaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnderecoAprovadoResponse'), require('./TelefonePessoaAprovadaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaFisicaAprovadaResponse = factory(root.Pier.ApiClient, root.Pier.EnderecoAprovadoResponse, root.Pier.TelefonePessoaAprovadaResponse);
  }
}(this, function(ApiClient, EnderecoAprovadoResponse, TelefonePessoaAprovadaResponse) {
  'use strict';

  /**
   * The PessoaFisicaAprovadaResponse model module.
   * @module model/PessoaFisicaAprovadaResponse
   * @version 2.50.18
   */

  /**
   * Constructs a new <code>PessoaFisicaAprovadaResponse</code>.
   * PessoaFisicaAprovadaResponse
   * @alias module:model/PessoaFisicaAprovadaResponse
   * @class
   * @param nome
   * @param cpf
   * @param idOrigemComercial
   * @param idProduto
   * @param diaVencimento
   * @param enderecos
   * @param limiteGlobal
   * @param limiteMaximo
   * @param limiteParcelas
   * @param limiteConsignado
   */
  var exports = function(nome, cpf, idOrigemComercial, idProduto, diaVencimento, enderecos, limiteGlobal, limiteMaximo, limiteParcelas, limiteConsignado) {


    this['nome'] = nome;



    this['cpf'] = cpf;








    this['idOrigemComercial'] = idOrigemComercial;
    this['idProduto'] = idProduto;



    this['diaVencimento'] = diaVencimento;







    this['enderecos'] = enderecos;
    this['limiteGlobal'] = limiteGlobal;
    this['limiteMaximo'] = limiteMaximo;
    this['limiteParcelas'] = limiteParcelas;
    this['limiteConsignado'] = limiteConsignado;
  };

  /**
   * Constructs a <code>PessoaFisicaAprovadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaFisicaAprovadaResponse} obj Optional instance to populate.
   * @return {module:model/PessoaFisicaAprovadaResponse} The populated <code>PessoaFisicaAprovadaResponse</code> instance.
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
      if (data.hasOwnProperty('nomeMae')) {
        obj['nomeMae'] = ApiClient.convertToType(data['nomeMae'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('sexo')) {
        obj['sexo'] = ApiClient.convertToType(data['sexo'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
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
        obj['idProfissao'] = ApiClient.convertToType(data['idProfissao'], 'String');
      }
      if (data.hasOwnProperty('idNaturezaOcupacao')) {
        obj['idNaturezaOcupacao'] = ApiClient.convertToType(data['idNaturezaOcupacao'], 'Integer');
      }
      if (data.hasOwnProperty('idNacionalidade')) {
        obj['idNacionalidade'] = ApiClient.convertToType(data['idNacionalidade'], 'Integer');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
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
      if (data.hasOwnProperty('diaVencimento')) {
        obj['diaVencimento'] = ApiClient.convertToType(data['diaVencimento'], 'Integer');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('nomeEmpresa')) {
        obj['nomeEmpresa'] = ApiClient.convertToType(data['nomeEmpresa'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idProposta')) {
        obj['idProposta'] = ApiClient.convertToType(data['idProposta'], 'Integer');
      }
      if (data.hasOwnProperty('canalEntrada')) {
        obj['canalEntrada'] = ApiClient.convertToType(data['canalEntrada'], 'String');
      }
      if (data.hasOwnProperty('valorPontuacao')) {
        obj['valorPontuacao'] = ApiClient.convertToType(data['valorPontuacao'], 'Integer');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefonePessoaAprovadaResponse]);
      }
      if (data.hasOwnProperty('enderecos')) {
        obj['enderecos'] = ApiClient.convertToType(data['enderecos'], [EnderecoAprovadoResponse]);
      }
      if (data.hasOwnProperty('limiteGlobal')) {
        obj['limiteGlobal'] = ApiClient.convertToType(data['limiteGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteMaximo')) {
        obj['limiteMaximo'] = ApiClient.convertToType(data['limiteMaximo'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelas')) {
        obj['limiteParcelas'] = ApiClient.convertToType(data['limiteParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteConsignado')) {
        obj['limiteConsignado'] = ApiClient.convertToType(data['limiteConsignado'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa fisica (id)
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Apresenta o nome completo da pessoa fisica.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
   * @member {String} nomeMae
   */
  exports.prototype['nomeMae'] = undefined;

  /**
   * Data de Nascimento da Pessoa. Essa data deve ser informada no formato aaaa-MM-dd.
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino).
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * N\u00C3\u00BAmero do Cadastro de Pessoa Fisica (CPF)
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * N\u00C3\u00BAmero da identidade.
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * Org\u00C3\u00A3o expedidor da Identidade.
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * Sigla da Unidade Federativa de onde foi expedido a Identidade
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * Data emiss\u00C3\u00A3o da Identidade no formato aaaa-MM-dd
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

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
   * Id da origem comercial
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * Id do produto
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

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
   * Dia vencimento
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * Nome que deve ser impresso no cart\u00C3\u00A3o
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * Nome da empresa
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta cadastrada
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da proposta
   * @member {Integer} idProposta
   */
  exports.prototype['idProposta'] = undefined;

  /**
   * Indica o canal pelo qual o cadastro do cliente foi realizado
   * @member {String} canalEntrada
   */
  exports.prototype['canalEntrada'] = undefined;

  /**
   * Indica o valor da pontua\u00C3\u00A7\u00C3\u00A3o atribuido ao cliente (caso n\u00C3\u00A3o informado ser\u00C3\u00A1 atribuido o valor = 0)
   * @member {Integer} valorPontuacao
   */
  exports.prototype['valorPontuacao'] = undefined;

  /**
   * Apresenta os telefones da empresa
   * @member {Array.<module:model/TelefonePessoaAprovadaResponse>} telefones
   */
  exports.prototype['telefones'] = undefined;

  /**
   * Pode ser informado os seguintes tipos de endere\u00C3\u00A7o: Residencial, Comercial, e Outros
   * @member {Array.<module:model/EnderecoAprovadoResponse>} enderecos
   */
  exports.prototype['enderecos'] = undefined;

  /**
   * Valor do Limite Global
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * Valor m\u00C3\u00A1ximo do limite de cr\u00C3\u00A9dito para realizar transa\u00C3\u00A7\u00C3\u00B5es
   * @member {Number} limiteMaximo
   */
  exports.prototype['limiteMaximo'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito acumulado da soma das parcelas das compras
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * Valor do limite de margem consignado
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;




  return exports;
}));
