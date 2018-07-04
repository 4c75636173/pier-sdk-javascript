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
    root.Pier.DetalheOperacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DetalheOperacaoResponse model module.
   * @module model/DetalheOperacaoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>DetalheOperacaoResponse</code>.
   * {{{detalhe_operacao_response_description}}}
   * @alias module:model/DetalheOperacaoResponse
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>DetalheOperacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalheOperacaoResponse} obj Optional instance to populate.
   * @return {module:model/DetalheOperacaoResponse} The populated <code>DetalheOperacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idOperacao')) {
        obj['idOperacao'] = ApiClient.convertToType(data['idOperacao'], 'Integer');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('codigoProcessamentoCancelamento')) {
        obj['codigoProcessamentoCancelamento'] = ApiClient.convertToType(data['codigoProcessamentoCancelamento'], 'String');
      }
      if (data.hasOwnProperty('nomeOperacao')) {
        obj['nomeOperacao'] = ApiClient.convertToType(data['nomeOperacao'], 'String');
      }
      if (data.hasOwnProperty('descricaoOperacao')) {
        obj['descricaoOperacao'] = ApiClient.convertToType(data['descricaoOperacao'], 'String');
      }
      if (data.hasOwnProperty('planoMinimo')) {
        obj['planoMinimo'] = ApiClient.convertToType(data['planoMinimo'], 'Integer');
      }
      if (data.hasOwnProperty('planoMaximo')) {
        obj['planoMaximo'] = ApiClient.convertToType(data['planoMaximo'], 'Integer');
      }
      if (data.hasOwnProperty('valorMinimo')) {
        obj['valorMinimo'] = ApiClient.convertToType(data['valorMinimo'], 'Number');
      }
      if (data.hasOwnProperty('valorMaximo')) {
        obj['valorMaximo'] = ApiClient.convertToType(data['valorMaximo'], 'Number');
      }
      if (data.hasOwnProperty('flagCobraJuros')) {
        obj['flagCobraJuros'] = ApiClient.convertToType(data['flagCobraJuros'], 'Boolean');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
      if (data.hasOwnProperty('flagCobraTarifa')) {
        obj['flagCobraTarifa'] = ApiClient.convertToType(data['flagCobraTarifa'], 'Boolean');
      }
      if (data.hasOwnProperty('taxaTarifa')) {
        obj['taxaTarifa'] = ApiClient.convertToType(data['taxaTarifa'], 'Number');
      }
      if (data.hasOwnProperty('valorTac')) {
        obj['valorTac'] = ApiClient.convertToType(data['valorTac'], 'Number');
      }
      if (data.hasOwnProperty('percentualTac')) {
        obj['percentualTac'] = ApiClient.convertToType(data['percentualTac'], 'Number');
      }
      if (data.hasOwnProperty('valorOperacao')) {
        obj['valorOperacao'] = ApiClient.convertToType(data['valorOperacao'], 'Number');
      }
      if (data.hasOwnProperty('carencia')) {
        obj['carencia'] = ApiClient.convertToType(data['carencia'], 'Integer');
      }
      if (data.hasOwnProperty('excedentePermitido')) {
        obj['excedentePermitido'] = ApiClient.convertToType(data['excedentePermitido'], 'Number');
      }
      if (data.hasOwnProperty('flagPermitirParcelamento')) {
        obj['flagPermitirParcelamento'] = ApiClient.convertToType(data['flagPermitirParcelamento'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{detalhe_operacao_response_id_operacao_value}}}
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * {{{detalhe_operacao_response_codigo_processamento_value}}}
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * {{{detalhe_operacao_response_codigo_processamento_cancelamento_value}}}
   * @member {String} codigoProcessamentoCancelamento
   */
  exports.prototype['codigoProcessamentoCancelamento'] = undefined;

  /**
   * {{{detalhe_operacao_response_nome_operacao_value}}}
   * @member {String} nomeOperacao
   */
  exports.prototype['nomeOperacao'] = undefined;

  /**
   * {{{detalhe_operacao_response_descricao_operacao_value}}}
   * @member {String} descricaoOperacao
   */
  exports.prototype['descricaoOperacao'] = undefined;

  /**
   * {{{detalhe_operacao_response_plano_minimo_value}}}
   * @member {Integer} planoMinimo
   */
  exports.prototype['planoMinimo'] = undefined;

  /**
   * {{{detalhe_operacao_response_plano_maximo_value}}}
   * @member {Integer} planoMaximo
   */
  exports.prototype['planoMaximo'] = undefined;

  /**
   * {{{detalhe_operacao_response_valor_minimo_value}}}
   * @member {Number} valorMinimo
   */
  exports.prototype['valorMinimo'] = undefined;

  /**
   * {{{detalhe_operacao_response_valor_maximo_value}}}
   * @member {Number} valorMaximo
   */
  exports.prototype['valorMaximo'] = undefined;

  /**
   * {{{detalhe_operacao_response_flag_cobra_juros_value}}}
   * @member {Boolean} flagCobraJuros
   */
  exports.prototype['flagCobraJuros'] = undefined;

  /**
   * {{{detalhe_operacao_response_taxa_juros_value}}}
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * {{{detalhe_operacao_response_flag_cobra_tarifa_value}}}
   * @member {Boolean} flagCobraTarifa
   */
  exports.prototype['flagCobraTarifa'] = undefined;

  /**
   * {{{detalhe_operacao_response_taxa_tarifa_value}}}
   * @member {Number} taxaTarifa
   */
  exports.prototype['taxaTarifa'] = undefined;

  /**
   * {{{detalhe_operacao_response_valor_tac_value}}}
   * @member {Number} valorTac
   */
  exports.prototype['valorTac'] = undefined;

  /**
   * {{{detalhe_operacao_response_percentual_tac_value}}}
   * @member {Number} percentualTac
   */
  exports.prototype['percentualTac'] = undefined;

  /**
   * {{{detalhe_operacao_response_valor_operacao_value}}}
   * @member {Number} valorOperacao
   */
  exports.prototype['valorOperacao'] = undefined;

  /**
   * {{{detalhe_operacao_response_carencia_value}}}
   * @member {Integer} carencia
   */
  exports.prototype['carencia'] = undefined;

  /**
   * {{{detalhe_operacao_response_excedente_permitido_value}}}
   * @member {Number} excedentePermitido
   */
  exports.prototype['excedentePermitido'] = undefined;

  /**
   * {{{detalhe_operacao_response_flag_permitir_parcelamento_value}}}
   * @member {Boolean} flagPermitirParcelamento
   */
  exports.prototype['flagPermitirParcelamento'] = undefined;




  return exports;
}));
