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
    root.Pier.FaturaConsignadaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FaturaConsignadaResponse model module.
   * @module model/FaturaConsignadaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>FaturaConsignadaResponse</code>.
   * {{{fatura_consignada_response_description}}}
   * @alias module:model/FaturaConsignadaResponse
   * @class
   * @param totalServicos
   */
  var exports = function(totalServicos) {




























    this['totalServicos'] = totalServicos;
  };

  /**
   * Constructs a <code>FaturaConsignadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaturaConsignadaResponse} obj Optional instance to populate.
   * @return {module:model/FaturaConsignadaResponse} The populated <code>FaturaConsignadaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('flagEmiteFatura')) {
        obj['flagEmiteFatura'] = ApiClient.convertToType(data['flagEmiteFatura'], 'Integer');
      }
      if (data.hasOwnProperty('dataVencimentoFatura')) {
        obj['dataVencimentoFatura'] = ApiClient.convertToType(data['dataVencimentoFatura'], 'String');
      }
      if (data.hasOwnProperty('valorTotalFatura')) {
        obj['valorTotalFatura'] = ApiClient.convertToType(data['valorTotalFatura'], 'Number');
      }
      if (data.hasOwnProperty('valorFaturaAnterior')) {
        obj['valorFaturaAnterior'] = ApiClient.convertToType(data['valorFaturaAnterior'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoMinimo')) {
        obj['valorPagamentoMinimo'] = ApiClient.convertToType(data['valorPagamentoMinimo'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoConsignado')) {
        obj['valorPagamentoConsignado'] = ApiClient.convertToType(data['valorPagamentoConsignado'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoComplementar')) {
        obj['valorPagamentoComplementar'] = ApiClient.convertToType(data['valorPagamentoComplementar'], 'Number');
      }
      if (data.hasOwnProperty('totalComprasNacionais')) {
        obj['totalComprasNacionais'] = ApiClient.convertToType(data['totalComprasNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalComprasInternacionas')) {
        obj['totalComprasInternacionas'] = ApiClient.convertToType(data['totalComprasInternacionas'], 'Number');
      }
      if (data.hasOwnProperty('totalSaquesNacionais')) {
        obj['totalSaquesNacionais'] = ApiClient.convertToType(data['totalSaquesNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalSaquesInternacionais')) {
        obj['totalSaquesInternacionais'] = ApiClient.convertToType(data['totalSaquesInternacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosNacionais')) {
        obj['totalDebitosNacionais'] = ApiClient.convertToType(data['totalDebitosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosRecorrentes')) {
        obj['totalDebitosRecorrentes'] = ApiClient.convertToType(data['totalDebitosRecorrentes'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosInternacionais')) {
        obj['totalDebitosInternacionais'] = ApiClient.convertToType(data['totalDebitosInternacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosDiversosNacionais')) {
        obj['totalDebitosDiversosNacionais'] = ApiClient.convertToType(data['totalDebitosDiversosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosOpcionais')) {
        obj['totalDebitosOpcionais'] = ApiClient.convertToType(data['totalDebitosOpcionais'], 'Number');
      }
      if (data.hasOwnProperty('totalPagamentos')) {
        obj['totalPagamentos'] = ApiClient.convertToType(data['totalPagamentos'], 'Number');
      }
      if (data.hasOwnProperty('totalCreditosNacionais')) {
        obj['totalCreditosNacionais'] = ApiClient.convertToType(data['totalCreditosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalAjustes')) {
        obj['totalAjustes'] = ApiClient.convertToType(data['totalAjustes'], 'Number');
      }
      if (data.hasOwnProperty('totalTarifas')) {
        obj['totalTarifas'] = ApiClient.convertToType(data['totalTarifas'], 'Number');
      }
      if (data.hasOwnProperty('totalMulta')) {
        obj['totalMulta'] = ApiClient.convertToType(data['totalMulta'], 'Number');
      }
      if (data.hasOwnProperty('totalJuros')) {
        obj['totalJuros'] = ApiClient.convertToType(data['totalJuros'], 'Number');
      }
      if (data.hasOwnProperty('taxaRotativo')) {
        obj['taxaRotativo'] = ApiClient.convertToType(data['taxaRotativo'], 'Number');
      }
      if (data.hasOwnProperty('taxaSaque')) {
        obj['taxaSaque'] = ApiClient.convertToType(data['taxaSaque'], 'Number');
      }
      if (data.hasOwnProperty('taxaMaximaProximoPeriodo')) {
        obj['taxaMaximaProximoPeriodo'] = ApiClient.convertToType(data['taxaMaximaProximoPeriodo'], 'Number');
      }
      if (data.hasOwnProperty('totalServicos')) {
        obj['totalServicos'] = ApiClient.convertToType(data['totalServicos'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{fatura_consignada_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{fatura_consignada_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{fatura_consignada_response_flag_emite_fatura_value}}}
   * @member {Integer} flagEmiteFatura
   */
  exports.prototype['flagEmiteFatura'] = undefined;

  /**
   * {{{fatura_consignada_response_data_vencimento_fatura_value}}}
   * @member {String} dataVencimentoFatura
   */
  exports.prototype['dataVencimentoFatura'] = undefined;

  /**
   * {{{fatura_consignada_response_valor_total_fatura_value}}}
   * @member {Number} valorTotalFatura
   */
  exports.prototype['valorTotalFatura'] = undefined;

  /**
   * {{{fatura_consignada_response_valor_fatura_anterior_value}}}
   * @member {Number} valorFaturaAnterior
   */
  exports.prototype['valorFaturaAnterior'] = undefined;

  /**
   * {{{fatura_consignada_response_valor_pagamento_minimo_value}}}
   * @member {Number} valorPagamentoMinimo
   */
  exports.prototype['valorPagamentoMinimo'] = undefined;

  /**
   * {{{fatura_consignada_response_valor_pagamento_consignado_value}}}
   * @member {Number} valorPagamentoConsignado
   */
  exports.prototype['valorPagamentoConsignado'] = undefined;

  /**
   * {{{fatura_consignada_response_valor_pagamento_complementar_value}}}
   * @member {Number} valorPagamentoComplementar
   */
  exports.prototype['valorPagamentoComplementar'] = undefined;

  /**
   * {{{fatura_consignada_response_total_compras_nacionais_value}}}
   * @member {Number} totalComprasNacionais
   */
  exports.prototype['totalComprasNacionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_compras_internacionas_value}}}
   * @member {Number} totalComprasInternacionas
   */
  exports.prototype['totalComprasInternacionas'] = undefined;

  /**
   * {{{fatura_consignada_response_total_saques_nacionais_value}}}
   * @member {Number} totalSaquesNacionais
   */
  exports.prototype['totalSaquesNacionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_saques_internacionais_value}}}
   * @member {Number} totalSaquesInternacionais
   */
  exports.prototype['totalSaquesInternacionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_debitos_nacionais_value}}}
   * @member {Number} totalDebitosNacionais
   */
  exports.prototype['totalDebitosNacionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_debitos_recorrentes_value}}}
   * @member {Number} totalDebitosRecorrentes
   */
  exports.prototype['totalDebitosRecorrentes'] = undefined;

  /**
   * {{{fatura_consignada_response_total_debitos_internacionais_value}}}
   * @member {Number} totalDebitosInternacionais
   */
  exports.prototype['totalDebitosInternacionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_debitos_diversos_nacionais_value}}}
   * @member {Number} totalDebitosDiversosNacionais
   */
  exports.prototype['totalDebitosDiversosNacionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_debitos_opcionais_value}}}
   * @member {Number} totalDebitosOpcionais
   */
  exports.prototype['totalDebitosOpcionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_pagamentos_value}}}
   * @member {Number} totalPagamentos
   */
  exports.prototype['totalPagamentos'] = undefined;

  /**
   * {{{fatura_consignada_response_total_creditos_nacionais_value}}}
   * @member {Number} totalCreditosNacionais
   */
  exports.prototype['totalCreditosNacionais'] = undefined;

  /**
   * {{{fatura_consignada_response_total_ajustes_value}}}
   * @member {Number} totalAjustes
   */
  exports.prototype['totalAjustes'] = undefined;

  /**
   * {{{fatura_consignada_response_total_tarifas_value}}}
   * @member {Number} totalTarifas
   */
  exports.prototype['totalTarifas'] = undefined;

  /**
   * {{{fatura_consignada_response_total_multa_value}}}
   * @member {Number} totalMulta
   */
  exports.prototype['totalMulta'] = undefined;

  /**
   * {{{fatura_consignada_response_total_juros_value}}}
   * @member {Number} totalJuros
   */
  exports.prototype['totalJuros'] = undefined;

  /**
   * {{{fatura_consignada_response_taxa_rotativo_value}}}
   * @member {Number} taxaRotativo
   */
  exports.prototype['taxaRotativo'] = undefined;

  /**
   * {{{fatura_consignada_response_taxa_saque_value}}}
   * @member {Number} taxaSaque
   */
  exports.prototype['taxaSaque'] = undefined;

  /**
   * {{{fatura_consignada_response_taxa_maxima_proximo_periodo_value}}}
   * @member {Number} taxaMaximaProximoPeriodo
   */
  exports.prototype['taxaMaximaProximoPeriodo'] = undefined;

  /**
   * {{{fatura_consignada_response_total_servicos_value}}}
   * @member {Number} totalServicos
   */
  exports.prototype['totalServicos'] = undefined;




  return exports;
}));
