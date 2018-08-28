(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './EnderecoAprovadoPersistValue', './ReferenciaComercialAprovadoPersistValue', './SocioAprovadoPersistValue', './TelefonePessoaAprovadaPersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnderecoAprovadoPersistValue'), require('./ReferenciaComercialAprovadoPersistValue'), require('./SocioAprovadoPersistValue'), require('./TelefonePessoaAprovadaPersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaJuridicaAprovadaPersist = factory(root.Pier.ApiClient, root.Pier.EnderecoAprovadoPersistValue, root.Pier.ReferenciaComercialAprovadoPersistValue, root.Pier.SocioAprovadoPersistValue, root.Pier.TelefonePessoaAprovadaPersistValue);
  }
}(this, function(ApiClient, EnderecoAprovadoPersistValue, ReferenciaComercialAprovadoPersistValue, SocioAprovadoPersistValue, TelefonePessoaAprovadaPersistValue) {
  'use strict';

  /**
   * The PessoaJuridicaAprovadaPersist model module.
   * @module model/PessoaJuridicaAprovadaPersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PessoaJuridicaAprovadaPersist</code>.
   * {{{pessoa_juridica_aprovada_persist_description}}}
   * @alias module:model/PessoaJuridicaAprovadaPersist
   * @class
   * @param razaoSocial
   * @param cnpj
   * @param dataAberturaEmpresa
   * @param idOrigemComercial
   * @param idProduto
   * @param diaVencimento
   * @param enderecos
   * @param limiteGlobal
   * @param limiteMaximo
   * @param limiteParcelas
   */
  var exports = function(razaoSocial, cnpj, dataAberturaEmpresa, idOrigemComercial, idProduto, diaVencimento, enderecos, limiteGlobal, limiteMaximo, limiteParcelas) {

    this['razaoSocial'] = razaoSocial;

    this['cnpj'] = cnpj;

    this['dataAberturaEmpresa'] = dataAberturaEmpresa;
    this['idOrigemComercial'] = idOrigemComercial;
    this['idProduto'] = idProduto;




    this['diaVencimento'] = diaVencimento;





    this['enderecos'] = enderecos;


    this['limiteGlobal'] = limiteGlobal;
    this['limiteMaximo'] = limiteMaximo;
    this['limiteParcelas'] = limiteParcelas;
  };

  /**
   * Constructs a <code>PessoaJuridicaAprovadaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaJuridicaAprovadaPersist} obj Optional instance to populate.
   * @return {module:model/PessoaJuridicaAprovadaPersist} The populated <code>PessoaJuridicaAprovadaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
      if (data.hasOwnProperty('valorRenda')) {
        obj['valorRenda'] = ApiClient.convertToType(data['valorRenda'], 'Number');
      }
      if (data.hasOwnProperty('canalEntrada')) {
        obj['canalEntrada'] = ApiClient.convertToType(data['canalEntrada'], 'String');
      }
      if (data.hasOwnProperty('valorPontuacao')) {
        obj['valorPontuacao'] = ApiClient.convertToType(data['valorPontuacao'], 'Integer');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefonePessoaAprovadaPersistValue]);
      }
      if (data.hasOwnProperty('enderecos')) {
        obj['enderecos'] = ApiClient.convertToType(data['enderecos'], [EnderecoAprovadoPersistValue]);
      }
      if (data.hasOwnProperty('socios')) {
        obj['socios'] = ApiClient.convertToType(data['socios'], [SocioAprovadoPersistValue]);
      }
      if (data.hasOwnProperty('referenciasComerciais')) {
        obj['referenciasComerciais'] = ApiClient.convertToType(data['referenciasComerciais'], [ReferenciaComercialAprovadoPersistValue]);
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
   * {{{pessoa_juridica_aprovada_persist_razao_social_value}}}
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_nome_fantasia_value}}}
   * @member {String} nomeFantasia
   */
  exports.prototype['nomeFantasia'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_cnpj_value}}}
   * @member {String} cnpj
   */
  exports.prototype['cnpj'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_inscricao_estadual_value}}}
   * @member {String} inscricaoEstadual
   */
  exports.prototype['inscricaoEstadual'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_data_abertura_empresa_value}}}
   * @member {String} dataAberturaEmpresa
   */
  exports.prototype['dataAberturaEmpresa'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_numero_banco_value}}}
   * @member {Integer} numeroBanco
   */
  exports.prototype['numeroBanco'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_numero_conta_corrente_value}}}
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_dia_vencimento_value}}}
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_valor_renda_value}}}
   * @member {Number} valorRenda
   */
  exports.prototype['valorRenda'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_canal_entrada_value}}}
   * @member {String} canalEntrada
   */
  exports.prototype['canalEntrada'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_valor_pontuacao_value}}}
   * @member {Integer} valorPontuacao
   */
  exports.prototype['valorPontuacao'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_telefones_value}}}
   * @member {Array.<module:model/TelefonePessoaAprovadaPersistValue>} telefones
   */
  exports.prototype['telefones'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_enderecos_value}}}
   * @member {Array.<module:model/EnderecoAprovadoPersistValue>} enderecos
   */
  exports.prototype['enderecos'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_socios_value}}}
   * @member {Array.<module:model/SocioAprovadoPersistValue>} socios
   */
  exports.prototype['socios'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_referencias_comerciais_value}}}
   * @member {Array.<module:model/ReferenciaComercialAprovadoPersistValue>} referenciasComerciais
   */
  exports.prototype['referenciasComerciais'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_limite_global_value}}}
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_limite_maximo_value}}}
   * @member {Number} limiteMaximo
   */
  exports.prototype['limiteMaximo'] = undefined;

  /**
   * {{{pessoa_juridica_aprovada_persist_limite_parcelas_value}}}
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;




  return exports;
}));
