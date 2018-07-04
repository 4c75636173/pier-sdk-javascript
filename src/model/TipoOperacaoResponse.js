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
    root.Pier.TipoOperacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoOperacaoResponse model module.
   * @module model/TipoOperacaoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>TipoOperacaoResponse</code>.
   * {{{tipo_operacao_response_description}}}
   * @alias module:model/TipoOperacaoResponse
   * @class
   * @param id
   * @param tipoOperacao
   * @param nome
   * @param descricao
   * @param valorMinimo
   * @param valorMaximo
   * @param idProduto
   * @param idEstabelecimento
   * @param planoMaximo
   * @param planoMinimo
   */
  var exports = function(id, tipoOperacao, nome, descricao, valorMinimo, valorMaximo, idProduto, idEstabelecimento, planoMaximo, planoMinimo) {

    this['id'] = id;
    this['tipoOperacao'] = tipoOperacao;
    this['nome'] = nome;
    this['descricao'] = descricao;


    this['valorMinimo'] = valorMinimo;
    this['valorMaximo'] = valorMaximo;


    this['idProduto'] = idProduto;
    this['idEstabelecimento'] = idEstabelecimento;


    this['planoMaximo'] = planoMaximo;
    this['planoMinimo'] = planoMinimo;
  };

  /**
   * Constructs a <code>TipoOperacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoOperacaoResponse} obj Optional instance to populate.
   * @return {module:model/TipoOperacaoResponse} The populated <code>TipoOperacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('tipoOperacao')) {
        obj['tipoOperacao'] = ApiClient.convertToType(data['tipoOperacao'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('excedentePermitido')) {
        obj['excedentePermitido'] = ApiClient.convertToType(data['excedentePermitido'], 'Number');
      }
      if (data.hasOwnProperty('tipoExcedentePermitido')) {
        obj['tipoExcedentePermitido'] = ApiClient.convertToType(data['tipoExcedentePermitido'], 'String');
      }
      if (data.hasOwnProperty('valorMinimo')) {
        obj['valorMinimo'] = ApiClient.convertToType(data['valorMinimo'], 'Number');
      }
      if (data.hasOwnProperty('valorMaximo')) {
        obj['valorMaximo'] = ApiClient.convertToType(data['valorMaximo'], 'Number');
      }
      if (data.hasOwnProperty('valorTAC')) {
        obj['valorTAC'] = ApiClient.convertToType(data['valorTAC'], 'Number');
      }
      if (data.hasOwnProperty('flagTiraTac')) {
        obj['flagTiraTac'] = ApiClient.convertToType(data['flagTiraTac'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('tarifa')) {
        obj['tarifa'] = ApiClient.convertToType(data['tarifa'], 'Number');
      }
      if (data.hasOwnProperty('remuneracaoEmissor')) {
        obj['remuneracaoEmissor'] = ApiClient.convertToType(data['remuneracaoEmissor'], 'Number');
      }
      if (data.hasOwnProperty('planoMaximo')) {
        obj['planoMaximo'] = ApiClient.convertToType(data['planoMaximo'], 'Integer');
      }
      if (data.hasOwnProperty('planoMinimo')) {
        obj['planoMinimo'] = ApiClient.convertToType(data['planoMinimo'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{tipo_operacao_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_operacao_response_tipo_operacao_value}}}
   * @member {String} tipoOperacao
   */
  exports.prototype['tipoOperacao'] = undefined;

  /**
   * {{{tipo_operacao_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{tipo_operacao_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_operacao_response_excedente_permitido_value}}}
   * @member {Number} excedentePermitido
   */
  exports.prototype['excedentePermitido'] = undefined;

  /**
   * {{{tipo_operacao_response_tipo_excedente_permitido_value}}}
   * @member {String} tipoExcedentePermitido
   */
  exports.prototype['tipoExcedentePermitido'] = undefined;

  /**
   * {{{tipo_operacao_response_valor_minimo_value}}}
   * @member {Number} valorMinimo
   */
  exports.prototype['valorMinimo'] = undefined;

  /**
   * {{{tipo_operacao_response_valor_maximo_value}}}
   * @member {Number} valorMaximo
   */
  exports.prototype['valorMaximo'] = undefined;

  /**
   * {{{tipo_operacao_response_valor_t_a_c_value}}}
   * @member {Number} valorTAC
   */
  exports.prototype['valorTAC'] = undefined;

  /**
   * {{{tipo_operacao_response_flag_tira_tac_value}}}
   * @member {Integer} flagTiraTac
   */
  exports.prototype['flagTiraTac'] = undefined;

  /**
   * {{{tipo_operacao_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{tipo_operacao_response_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{tipo_operacao_response_tarifa_value}}}
   * @member {Number} tarifa
   */
  exports.prototype['tarifa'] = undefined;

  /**
   * {{{tipo_operacao_response_remuneracao_emissor_value}}}
   * @member {Number} remuneracaoEmissor
   */
  exports.prototype['remuneracaoEmissor'] = undefined;

  /**
   * {{{tipo_operacao_response_plano_maximo_value}}}
   * @member {Integer} planoMaximo
   */
  exports.prototype['planoMaximo'] = undefined;

  /**
   * {{{tipo_operacao_response_plano_minimo_value}}}
   * @member {Integer} planoMinimo
   */
  exports.prototype['planoMinimo'] = undefined;




  return exports;
}));
