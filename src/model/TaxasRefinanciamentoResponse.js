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
   * @version 2.24.0
   */

  /**
   * Constructs a new <code>TaxasRefinanciamentoResponse</code>.
   * Objeto de resposta para a valida\u00C3\u00A7\u00C3\u00A3o das Taxas de Refinanciamento
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
   * ID das taxas
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * ID da conta
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * ID do produto
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * ID do plano de contas
   * @member {Integer} idPlanoConta
   */
  exports.prototype['idPlanoConta'] = undefined;

  /**
   * ID do plano PCT
   * @member {Integer} idPlanoPct
   */
  exports.prototype['idPlanoPct'] = undefined;

  /**
   * ID do plano credito taxa
   * @member {Integer} idPlanoCreditoTaxa
   */
  exports.prototype['idPlanoCreditoTaxa'] = undefined;

  /**
   * Data de entrada
   * @member {String} dataEntrada
   */
  exports.prototype['dataEntrada'] = undefined;

  /**
   * Vencimento das taxas
   * @member {String} vencimento
   */
  exports.prototype['vencimento'] = undefined;

  /**
   * Recupera\u00C3\u00A7\u00C3\u00A3o de encargos financeiro
   * @member {Number} recuperacaoEncargosFinanceiros
   */
  exports.prototype['recuperacaoEncargosFinanceiros'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o da comiss\u00C3\u00A3o de garantia
   * @member {Number} comissaoGarantia
   */
  exports.prototype['comissaoGarantia'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do agenciamento
   * @member {Number} agenciamento
   */
  exports.prototype['agenciamento'] = undefined;

  /**
   * Taxa m\u00C3\u00A1xima do proximo per\u00C3\u00ADodo
   * @member {Number} taxaMaximaProximoPeriodo
   */
  exports.prototype['taxaMaximaProximoPeriodo'] = undefined;

  /**
   * Taxa de encargos do financiamento
   * @member {Number} taxaEncargosFinanciamento
   */
  exports.prototype['taxaEncargosFinanciamento'] = undefined;

  /**
   * Taxa m\u00C3\u00A1xima de saque
   * @member {Number} taxaMaximaSaque
   */
  exports.prototype['taxaMaximaSaque'] = undefined;

  /**
   * Taxa de saque
   * @member {Number} taxaSaque
   */
  exports.prototype['taxaSaque'] = undefined;

  /**
   * Taxa m\u00C3\u00A1xima de compras juros
   * @member {Number} taxaMaximaCompraJuros
   */
  exports.prototype['taxaMaximaCompraJuros'] = undefined;

  /**
   * Taxa de juros compra
   * @member {Number} taxaCompraJuros
   */
  exports.prototype['taxaCompraJuros'] = undefined;

  /**
   * Taxa de permanencia
   * @member {Number} taxaPermanencia
   */
  exports.prototype['taxaPermanencia'] = undefined;

  /**
   * Taxa de permanencia
   * @member {Number} taxaRefinanciamento
   */
  exports.prototype['taxaRefinanciamento'] = undefined;

  /**
   * Taxa de permanencia
   * @member {Number} taxaRecuperacaoRefinanciamento
   */
  exports.prototype['taxaRecuperacaoRefinanciamento'] = undefined;

  /**
   * Taxa Percelamento pagamento minimo
   * @member {Number} taxaPercCalcPagamentoMinimo
   */
  exports.prototype['taxaPercCalcPagamentoMinimo'] = undefined;

  /**
   * Plano de taxa padr\u00C3\u00A3o
   * @member {Integer} planoTaxaDefault
   */
  exports.prototype['planoTaxaDefault'] = undefined;




  return exports;
}));
