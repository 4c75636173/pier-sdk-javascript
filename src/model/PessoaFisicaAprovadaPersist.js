(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './EnderecoAprovadoPersist', './ModelDate', './TelefonePessoaAprovadaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnderecoAprovadoPersist'), require('./ModelDate'), require('./TelefonePessoaAprovadaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaFisicaAprovadaPersist = factory(root.Pier.ApiClient, root.Pier.EnderecoAprovadoPersist, root.Pier.ModelDate, root.Pier.TelefonePessoaAprovadaPersist);
  }
}(this, function(ApiClient, EnderecoAprovadoPersist, ModelDate, TelefonePessoaAprovadaPersist) {
  'use strict';

  /**
   * The PessoaFisicaAprovadaPersist model module.
   * @module model/PessoaFisicaAprovadaPersist
   * @version 2.15.0
   */

  /**
   * Constructs a new <code>PessoaFisicaAprovadaPersist</code>.
   * PessoaJuridicaAprovadaPersist
   * @alias module:model/PessoaFisicaAprovadaPersist
   * @class
   * @param nome
   * @param cpf
   * @param idOrigemComercial
   * @param idProduto
   * @param diaVencimento
   * @param enderecos
   */
  var exports = function(nome, cpf, idOrigemComercial, idProduto, diaVencimento, enderecos) {

    this['nome'] = nome;



    this['cpf'] = cpf;








    this['idOrigemComercial'] = idOrigemComercial;
    this['idProduto'] = idProduto;



    this['diaVencimento'] = diaVencimento;



    this['enderecos'] = enderecos;
  };

  /**
   * Constructs a <code>PessoaFisicaAprovadaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaFisicaAprovadaPersist} obj Optional instance to populate.
   * @return {module:model/PessoaFisicaAprovadaPersist} The populated <code>PessoaFisicaAprovadaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('nomeMae')) {
        obj['nomeMae'] = ApiClient.convertToType(data['nomeMae'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], ModelDate);
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
        obj['dataEmissaoIdentidade'] = ApiClient.convertToType(data['dataEmissaoIdentidade'], ModelDate);
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
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefonePessoaAprovadaPersist]);
      }
      if (data.hasOwnProperty('enderecos')) {
        obj['enderecos'] = ApiClient.convertToType(data['enderecos'], [EnderecoAprovadoPersist]);
      }
    }
    return obj;
  }


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
   * @member {module:model/ModelDate} dataNascimento
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
   * N\u00C3\u00BAmero da Identidade
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * Org\u00C3\u00A3o expedidor do RG.
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * Sigla da Unidade Federativa de onde foi expedido a Identidade
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * Data emiss\u00C3\u00A3o da identidade no formato aaaa-MM-dd
   * @member {module:model/ModelDate} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

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
   * Nome que deve ser impresso no cart\u00C3\u00A3o
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;

  /**
   * Apresenta os telefones da empresa
   * @member {Array.<module:model/TelefonePessoaAprovadaPersist>} telefones
   */
  exports.prototype['telefones'] = undefined;

  /**
   * Pode ser informado os seguintes tipos de endere\u00C3\u00A7o: Residencial, Comercial, e Outros
   * @member {Array.<module:model/EnderecoAprovadoPersist>} enderecos
   */
  exports.prototype['enderecos'] = undefined;




  return exports;
}));
