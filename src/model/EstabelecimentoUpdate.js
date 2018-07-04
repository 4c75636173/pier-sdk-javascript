(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ConsultaCadastroEstabelecimentoDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConsultaCadastroEstabelecimentoDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EstabelecimentoUpdate = factory(root.Pier.ApiClient, root.Pier.ConsultaCadastroEstabelecimentoDTO);
  }
}(this, function(ApiClient, ConsultaCadastroEstabelecimentoDTO) {
  'use strict';

  /**
   * The EstabelecimentoUpdate model module.
   * @module model/EstabelecimentoUpdate
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>EstabelecimentoUpdate</code>.
   * {{{estabelecimento_update_description}}}
   * @alias module:model/EstabelecimentoUpdate
   * @class
   */
  var exports = function() {




































  };

  /**
   * Constructs a <code>EstabelecimentoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstabelecimentoUpdate} obj Optional instance to populate.
   * @return {module:model/EstabelecimentoUpdate} The populated <code>EstabelecimentoUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagMatriz')) {
        obj['flagMatriz'] = ApiClient.convertToType(data['flagMatriz'], 'Integer');
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
        obj['numeroEndereco'] = ApiClient.convertToType(data['numeroEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('bairro')) {
        obj['bairro'] = ApiClient.convertToType(data['bairro'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('complemento')) {
        obj['complemento'] = ApiClient.convertToType(data['complemento'], 'String');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
      if (data.hasOwnProperty('cep2')) {
        obj['cep2'] = ApiClient.convertToType(data['cep2'], 'String');
      }
      if (data.hasOwnProperty('nomeLogradouro2')) {
        obj['nomeLogradouro2'] = ApiClient.convertToType(data['nomeLogradouro2'], 'String');
      }
      if (data.hasOwnProperty('numeroEndereco2')) {
        obj['numeroEndereco2'] = ApiClient.convertToType(data['numeroEndereco2'], 'Integer');
      }
      if (data.hasOwnProperty('bairro2')) {
        obj['bairro2'] = ApiClient.convertToType(data['bairro2'], 'String');
      }
      if (data.hasOwnProperty('cidade2')) {
        obj['cidade2'] = ApiClient.convertToType(data['cidade2'], 'String');
      }
      if (data.hasOwnProperty('complemento2')) {
        obj['complemento2'] = ApiClient.convertToType(data['complemento2'], 'String');
      }
      if (data.hasOwnProperty('uf2')) {
        obj['uf2'] = ApiClient.convertToType(data['uf2'], 'String');
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
      if (data.hasOwnProperty('idMoeda')) {
        obj['idMoeda'] = ApiClient.convertToType(data['idMoeda'], 'Integer');
      }
      if (data.hasOwnProperty('idPais')) {
        obj['idPais'] = ApiClient.convertToType(data['idPais'], 'Integer');
      }
      if (data.hasOwnProperty('associadoSPCBrasil')) {
        obj['associadoSPCBrasil'] = ApiClient.convertToType(data['associadoSPCBrasil'], 'Integer');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoEstabelecimento')) {
        obj['idTipoEstabelecimento'] = ApiClient.convertToType(data['idTipoEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('correspondencia')) {
        obj['correspondencia'] = ApiClient.convertToType(data['correspondencia'], 'Integer');
      }
      if (data.hasOwnProperty('cargoContato')) {
        obj['cargoContato'] = ApiClient.convertToType(data['cargoContato'], 'String');
      }
      if (data.hasOwnProperty('tipoPagamento')) {
        obj['tipoPagamento'] = ApiClient.convertToType(data['tipoPagamento'], 'String');
      }
      if (data.hasOwnProperty('consulta')) {
        obj['consulta'] = ConsultaCadastroEstabelecimentoDTO.constructFromObject(data['consulta']);
      }
      if (data.hasOwnProperty('consulta2')) {
        obj['consulta2'] = ConsultaCadastroEstabelecimentoDTO.constructFromObject(data['consulta2']);
      }
      if (data.hasOwnProperty('consulta3')) {
        obj['consulta3'] = ConsultaCadastroEstabelecimentoDTO.constructFromObject(data['consulta3']);
      }
    }
    return obj;
  }


  /**
   * {{{estabelecimento_update_flag_matriz_value}}}
   * @member {Integer} flagMatriz
   */
  exports.prototype['flagMatriz'] = undefined;

  /**
   * {{{estabelecimento_update_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{estabelecimento_update_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{estabelecimento_update_nome_fantasia_value}}}
   * @member {String} nomeFantasia
   */
  exports.prototype['nomeFantasia'] = undefined;

  /**
   * {{{estabelecimento_update_cep_value}}}
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * {{{estabelecimento_update_nome_logradouro_value}}}
   * @member {String} nomeLogradouro
   */
  exports.prototype['nomeLogradouro'] = undefined;

  /**
   * {{{estabelecimento_update_numero_endereco_value}}}
   * @member {Integer} numeroEndereco
   */
  exports.prototype['numeroEndereco'] = undefined;

  /**
   * {{{estabelecimento_update_bairro_value}}}
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * {{{estabelecimento_update_cidade_value}}}
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * {{{estabelecimento_update_complemento_value}}}
   * @member {String} complemento
   */
  exports.prototype['complemento'] = undefined;

  /**
   * {{{estabelecimento_update_uf_value}}}
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * {{{estabelecimento_update_cep2_value}}}
   * @member {String} cep2
   */
  exports.prototype['cep2'] = undefined;

  /**
   * {{{estabelecimento_update_nome_logradouro2_value}}}
   * @member {String} nomeLogradouro2
   */
  exports.prototype['nomeLogradouro2'] = undefined;

  /**
   * {{{estabelecimento_update_numero_endereco2_value}}}
   * @member {Integer} numeroEndereco2
   */
  exports.prototype['numeroEndereco2'] = undefined;

  /**
   * {{{estabelecimento_update_bairro2_value}}}
   * @member {String} bairro2
   */
  exports.prototype['bairro2'] = undefined;

  /**
   * {{{estabelecimento_update_cidade2_value}}}
   * @member {String} cidade2
   */
  exports.prototype['cidade2'] = undefined;

  /**
   * {{{estabelecimento_update_complemento2_value}}}
   * @member {String} complemento2
   */
  exports.prototype['complemento2'] = undefined;

  /**
   * {{{estabelecimento_update_uf2_value}}}
   * @member {String} uf2
   */
  exports.prototype['uf2'] = undefined;

  /**
   * {{{estabelecimento_update_obs_value}}}
   * @member {String} obs
   */
  exports.prototype['obs'] = undefined;

  /**
   * {{{estabelecimento_update_contato_value}}}
   * @member {String} contato
   */
  exports.prototype['contato'] = undefined;

  /**
   * {{{estabelecimento_update_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{estabelecimento_update_flag_arquivo_secr_fazenda_value}}}
   * @member {Integer} flagArquivoSecrFazenda
   */
  exports.prototype['flagArquivoSecrFazenda'] = undefined;

  /**
   * {{{estabelecimento_update_flag_cartao_digitado_value}}}
   * @member {Integer} flagCartaoDigitado
   */
  exports.prototype['flagCartaoDigitado'] = undefined;

  /**
   * {{{estabelecimento_update_inativo_value}}}
   * @member {Integer} inativo
   */
  exports.prototype['inativo'] = undefined;

  /**
   * {{{estabelecimento_update_id_moeda_value}}}
   * @member {Integer} idMoeda
   */
  exports.prototype['idMoeda'] = undefined;

  /**
   * {{{estabelecimento_update_id_pais_value}}}
   * @member {Integer} idPais
   */
  exports.prototype['idPais'] = undefined;

  /**
   * {{{estabelecimento_update_associado_s_p_c_brasil_value}}}
   * @member {Integer} associadoSPCBrasil
   */
  exports.prototype['associadoSPCBrasil'] = undefined;

  /**
   * {{{estabelecimento_update_mcc_value}}}
   * @member {Integer} mcc
   */
  exports.prototype['mcc'] = undefined;

  /**
   * {{{estabelecimento_update_id_tipo_estabelecimento_value}}}
   * @member {Integer} idTipoEstabelecimento
   */
  exports.prototype['idTipoEstabelecimento'] = undefined;

  /**
   * {{{estabelecimento_update_correspondencia_value}}}
   * @member {Integer} correspondencia
   */
  exports.prototype['correspondencia'] = undefined;

  /**
   * {{{estabelecimento_update_cargo_contato_value}}}
   * @member {String} cargoContato
   */
  exports.prototype['cargoContato'] = undefined;

  /**
   * {{{estabelecimento_update_tipo_pagamento_value}}}
   * @member {module:model/EstabelecimentoUpdate.TipoPagamentoEnum} tipoPagamento
   */
  exports.prototype['tipoPagamento'] = undefined;

  /**
   * {{{estabelecimento_update_consulta_value}}}
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO} consulta
   */
  exports.prototype['consulta'] = undefined;

  /**
   * {{{estabelecimento_update_consulta2_value}}}
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO} consulta2
   */
  exports.prototype['consulta2'] = undefined;

  /**
   * {{{estabelecimento_update_consulta3_value}}}
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO} consulta3
   */
  exports.prototype['consulta3'] = undefined;


  /**
   * Allowed values for the <code>tipoPagamento</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoPagamentoEnum = { 
    /**
     * value: CENTRALIZADO
     * @const
     */
    CENTRALIZADO: "CENTRALIZADO",
    
    /**
     * value: PV
     * @const
     */
    PV: "PV"
  };

  return exports;
}));
