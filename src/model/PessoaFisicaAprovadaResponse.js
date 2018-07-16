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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>PessoaFisicaAprovadaResponse</code>.
   * {{{pessoa_fisica_aprovada_response_description}}}
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
   * {{{pessoa_fisica_aprovada_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_nome_mae_value}}}
   * @member {String} nomeMae
   */
  exports.prototype['nomeMae'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_sexo_value}}}
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_numero_identidade_value}}}
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_orgao_expedidor_identidade_value}}}
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_unidade_federativa_identidade_value}}}
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_data_emissao_identidade_value}}}
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_estado_civil_value}}}
   * @member {Integer} idEstadoCivil
   */
  exports.prototype['idEstadoCivil'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_profissao_value}}}
   * @member {String} idProfissao
   */
  exports.prototype['idProfissao'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_natureza_ocupacao_value}}}
   * @member {Integer} idNaturezaOcupacao
   */
  exports.prototype['idNaturezaOcupacao'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_nacionalidade_value}}}
   * @member {Integer} idNacionalidade
   */
  exports.prototype['idNacionalidade'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_numero_conta_corrente_value}}}
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_dia_vencimento_value}}}
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_nome_empresa_value}}}
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_id_proposta_value}}}
   * @member {Integer} idProposta
   */
  exports.prototype['idProposta'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_canal_entrada_value}}}
   * @member {String} canalEntrada
   */
  exports.prototype['canalEntrada'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_valor_pontuacao_value}}}
   * @member {Integer} valorPontuacao
   */
  exports.prototype['valorPontuacao'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_telefones_value}}}
   * @member {Array.<module:model/TelefonePessoaAprovadaResponse>} telefones
   */
  exports.prototype['telefones'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_enderecos_value}}}
   * @member {Array.<module:model/EnderecoAprovadoResponse>} enderecos
   */
  exports.prototype['enderecos'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_limite_global_value}}}
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_limite_maximo_value}}}
   * @member {Number} limiteMaximo
   */
  exports.prototype['limiteMaximo'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_limite_parcelas_value}}}
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * {{{pessoa_fisica_aprovada_response_limite_consignado_value}}}
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;




  return exports;
}));
