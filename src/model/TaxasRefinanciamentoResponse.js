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
    root.Pier.TaxasRefinanciamentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxasRefinanciamentoResponse model module.
   * @module model/TaxasRefinanciamentoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TaxasRefinanciamentoResponse</code>.
   * {{{taxas_refinanciamento_response_description}}}
   * @alias module:model/TaxasRefinanciamentoResponse
   * @class
   */
  var exports = function() {























  };

  /**
   * Constructs a <code>TaxasRefinanciamentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxasRefinanciamentoResponse} obj Optional instance to populate.
   * @return {module:model/TaxasRefinanciamentoResponse} The populated <code>TaxasRefinanciamentoResponse</code> instance.
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
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idPlanoConta')) {
        obj['idPlanoConta'] = ApiClient.convertToType(data['idPlanoConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPlanoPct')) {
        obj['idPlanoPct'] = ApiClient.convertToType(data['idPlanoPct'], 'Integer');
      }
      if (data.hasOwnProperty('idPlanoCreditoTaxa')) {
        obj['idPlanoCreditoTaxa'] = ApiClient.convertToType(data['idPlanoCreditoTaxa'], 'Integer');
      }
      if (data.hasOwnProperty('dataEntrada')) {
        obj['dataEntrada'] = ApiClient.convertToType(data['dataEntrada'], 'String');
      }
      if (data.hasOwnProperty('vencimento')) {
        obj['vencimento'] = ApiClient.convertToType(data['vencimento'], 'String');
      }
      if (data.hasOwnProperty('recuperacaoEncargosFinanceiros')) {
        obj['recuperacaoEncargosFinanceiros'] = ApiClient.convertToType(data['recuperacaoEncargosFinanceiros'], 'Number');
      }
      if (data.hasOwnProperty('comissaoGarantia')) {
        obj['comissaoGarantia'] = ApiClient.convertToType(data['comissaoGarantia'], 'Number');
      }
      if (data.hasOwnProperty('agenciamento')) {
        obj['agenciamento'] = ApiClient.convertToType(data['agenciamento'], 'Number');
      }
      if (data.hasOwnProperty('taxaMaximaProximoPeriodo')) {
        obj['taxaMaximaProximoPeriodo'] = ApiClient.convertToType(data['taxaMaximaProximoPeriodo'], 'Number');
      }
      if (data.hasOwnProperty('taxaEncargosFinanciamento')) {
        obj['taxaEncargosFinanciamento'] = ApiClient.convertToType(data['taxaEncargosFinanciamento'], 'Number');
      }
      if (data.hasOwnProperty('taxaMaximaSaque')) {
        obj['taxaMaximaSaque'] = ApiClient.convertToType(data['taxaMaximaSaque'], 'Number');
      }
      if (data.hasOwnProperty('taxaSaque')) {
        obj['taxaSaque'] = ApiClient.convertToType(data['taxaSaque'], 'Number');
      }
      if (data.hasOwnProperty('taxaMaximaCompraJuros')) {
        obj['taxaMaximaCompraJuros'] = ApiClient.convertToType(data['taxaMaximaCompraJuros'], 'Number');
      }
      if (data.hasOwnProperty('taxaCompraJuros')) {
        obj['taxaCompraJuros'] = ApiClient.convertToType(data['taxaCompraJuros'], 'Number');
      }
      if (data.hasOwnProperty('taxaPermanencia')) {
        obj['taxaPermanencia'] = ApiClient.convertToType(data['taxaPermanencia'], 'Number');
      }
      if (data.hasOwnProperty('taxaRefinanciamento')) {
        obj['taxaRefinanciamento'] = ApiClient.convertToType(data['taxaRefinanciamento'], 'Number');
      }
      if (data.hasOwnProperty('taxaRecuperacaoRefinanciamento')) {
        obj['taxaRecuperacaoRefinanciamento'] = ApiClient.convertToType(data['taxaRecuperacaoRefinanciamento'], 'Number');
      }
      if (data.hasOwnProperty('taxaPercCalcPagamentoMinimo')) {
        obj['taxaPercCalcPagamentoMinimo'] = ApiClient.convertToType(data['taxaPercCalcPagamentoMinimo'], 'Number');
      }
      if (data.hasOwnProperty('planoTaxaDefault')) {
        obj['planoTaxaDefault'] = ApiClient.convertToType(data['planoTaxaDefault'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{taxas_refinanciamento_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_id_plano_conta_value}}}
   * @member {Integer} idPlanoConta
   */
  exports.prototype['idPlanoConta'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_id_plano_pct_value}}}
   * @member {Integer} idPlanoPct
   */
  exports.prototype['idPlanoPct'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_id_plano_credito_taxa_value}}}
   * @member {Integer} idPlanoCreditoTaxa
   */
  exports.prototype['idPlanoCreditoTaxa'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_data_entrada_value}}}
   * @member {String} dataEntrada
   */
  exports.prototype['dataEntrada'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_vencimento_value}}}
   * @member {String} vencimento
   */
  exports.prototype['vencimento'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_recuperacao_encargos_financeiros_value}}}
   * @member {Number} recuperacaoEncargosFinanceiros
   */
  exports.prototype['recuperacaoEncargosFinanceiros'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_comissao_garantia_value}}}
   * @member {Number} comissaoGarantia
   */
  exports.prototype['comissaoGarantia'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_agenciamento_value}}}
   * @member {Number} agenciamento
   */
  exports.prototype['agenciamento'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_maxima_proximo_periodo_value}}}
   * @member {Number} taxaMaximaProximoPeriodo
   */
  exports.prototype['taxaMaximaProximoPeriodo'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_encargos_financiamento_value}}}
   * @member {Number} taxaEncargosFinanciamento
   */
  exports.prototype['taxaEncargosFinanciamento'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_maxima_saque_value}}}
   * @member {Number} taxaMaximaSaque
   */
  exports.prototype['taxaMaximaSaque'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_saque_value}}}
   * @member {Number} taxaSaque
   */
  exports.prototype['taxaSaque'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_maxima_compra_juros_value}}}
   * @member {Number} taxaMaximaCompraJuros
   */
  exports.prototype['taxaMaximaCompraJuros'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_compra_juros_value}}}
   * @member {Number} taxaCompraJuros
   */
  exports.prototype['taxaCompraJuros'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_permanencia_value}}}
   * @member {Number} taxaPermanencia
   */
  exports.prototype['taxaPermanencia'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_refinanciamento_value}}}
   * @member {Number} taxaRefinanciamento
   */
  exports.prototype['taxaRefinanciamento'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_recuperacao_refinanciamento_value}}}
   * @member {Number} taxaRecuperacaoRefinanciamento
   */
  exports.prototype['taxaRecuperacaoRefinanciamento'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_taxa_perc_calc_pagamento_minimo_value}}}
   * @member {Number} taxaPercCalcPagamentoMinimo
   */
  exports.prototype['taxaPercCalcPagamentoMinimo'] = undefined;

  /**
   * {{{taxas_refinanciamento_response_plano_taxa_default_value}}}
   * @member {Integer} planoTaxaDefault
   */
  exports.prototype['planoTaxaDefault'] = undefined;




  return exports;
}));
