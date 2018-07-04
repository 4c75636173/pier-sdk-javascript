(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './EnderecoAprovadoResponse', './ReferenciaComercialAprovadoResponse', './SocioAprovadoResponse', './TelefonePessoaAprovadaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnderecoAprovadoResponse'), require('./ReferenciaComercialAprovadoResponse'), require('./SocioAprovadoResponse'), require('./TelefonePessoaAprovadaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaJuridicaAprovadaResponse = factory(root.Pier.ApiClient, root.Pier.EnderecoAprovadoResponse, root.Pier.ReferenciaComercialAprovadoResponse, root.Pier.SocioAprovadoResponse, root.Pier.TelefonePessoaAprovadaResponse);
  }
}(this, function(ApiClient, EnderecoAprovadoResponse, ReferenciaComercialAprovadoResponse, SocioAprovadoResponse, TelefonePessoaAprovadaResponse) {
  'use strict';

  /**
   * The PessoaJuridicaAprovadaResponse model module.
   * @module model/PessoaJuridicaAprovadaResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>PessoaJuridicaAprovadaResponse</code>.
   * {{{pessoa_juridica_aprovada_response_description}}}
   * @alias module:model/PessoaJuridicaAprovadaResponse
   * @class
   * @param limiteGlobal
   * @param limiteMaximo
   * @param limiteParcelas
   */
  var exports = function(limiteGlobal, limiteMaximo, limiteParcelas) {























    this['limiteGlobal'] = limiteGlobal;
    this['limiteMaximo'] = limiteMaximo;
    this['limiteParcelas'] = limiteParcelas;
  };

  /**
   * Constructs a <code>PessoaJuridicaAprovadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaJuridicaAprovadaResponse} obj Optional instance to populate.
   * @return {module:model/PessoaJuridicaAprovadaResponse} The populated <code>PessoaJuridicaAprovadaResponse</code> instance.
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
      if (data.hasOwnProperty('nomeFantasia')) {
        obj['nomeFantasia'] = ApiClient.convertToType(data['nomeFantasia'], 'String');
      }
      if (data.hasOwnProperty('cnpj')) {
        obj['cnpj'] = ApiClient.convertToType(data['cnpj'], 'String');
      }
      if (data.hasOwnProperty('inscricaoEstadual')) {
        obj['inscricaoEstadual'] = ApiClient.convertToType(data['inscricaoEstadual'], 'String');
      }
      if (data.hasOwnProperty('dataAberturaEmpresa')) {
        obj['dataAberturaEmpresa'] = ApiClient.convertToType(data['dataAberturaEmpresa'], 'String');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
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
      if (data.hasOwnProperty('diaVencimento')) {
        obj['diaVencimento'] = ApiClient.convertToType(data['diaVencimento'], 'Integer');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
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
      if (data.hasOwnProperty('socios')) {
        obj['socios'] = ApiClient.convertToType(data['socios'], [SocioAprovadoResponse]);
      }
      if (data.hasOwnProperty('referencias')) {
        obj['referencias'] = ApiClient.convertToType(data['referencias'], [ReferenciaComercialAprovadoResponse]);
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
    }
    return obj;
  }


  /**
   * {{{pessoa_juridica_aprovada_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_razao_social_value}}}
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_nome_fantasia_value}}}
   * @member {String} nomeFantasia
   */
  exports.prototype['nomeFantasia'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_cnpj_value}}}
   * @member {String} cnpj
   */
  exports.prototype['cnpj'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_inscricao_estadual_value}}}
   * @member {String} inscricaoEstadual
   */
  exports.prototype['inscricaoEstadual'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_data_abertura_empresa_value}}}
   * @member {String} dataAberturaEmpresa
   */
  exports.prototype['dataAberturaEmpresa'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_numero_banco_value}}}
   * @member {Integer} numeroBanco
   */
  exports.prototype['numeroBanco'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_numero_conta_corrente_value}}}
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_dia_vencimento_value}}}
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_id_proposta_value}}}
   * @member {Integer} idProposta
   */
  exports.prototype['idProposta'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_canal_entrada_value}}}
   * @member {String} canalEntrada
   */
  exports.prototype['canalEntrada'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_valor_pontuacao_value}}}
   * @member {Integer} valorPontuacao
   */
  exports.prototype['valorPontuacao'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_telefones_value}}}
   * @member {Array.<module:model/TelefonePessoaAprovadaResponse>} telefones
   */
  exports.prototype['telefones'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_enderecos_value}}}
   * @member {Array.<module:model/EnderecoAprovadoResponse>} enderecos
   */
  exports.prototype['enderecos'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_socios_value}}}
   * @member {Array.<module:model/SocioAprovadoResponse>} socios
   */
  exports.prototype['socios'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_referencias_value}}}
   * @member {Array.<module:model/ReferenciaComercialAprovadoResponse>} referencias
   */
  exports.prototype['referencias'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_limite_global_value}}}
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_limite_maximo_value}}}
   * @member {Number} limiteMaximo
   */
  exports.prototype['limiteMaximo'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_response_limite_parcelas_value}}}
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;




  return exports;
}));
