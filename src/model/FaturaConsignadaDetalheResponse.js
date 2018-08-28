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
    root.Pier.FaturaConsignadaDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FaturaConsignadaDetalheResponse model module.
   * @module model/FaturaConsignadaDetalheResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>FaturaConsignadaDetalheResponse</code>.
   * {{{fatura_consignada_detalhe_response_description}}}
   * @alias module:model/FaturaConsignadaDetalheResponse
   * @class
   * @param limiteGlobal
   * @param limiteCompra
   * @param limiteParcelado
   * @param limiteParcelas
   * @param limiteSaqueGlobal
   * @param limiteSaquePeriodo
   * @param limiteConsignado
   * @param limiteInternacionalCompra
   * @param limiteInternacionalParcelado
   * @param limiteInternacionalParcelas
   * @param limiteInternacionalSaqueGlobal
   * @param limiteInternacionalSaquePeriodo
   * @param saldoDisponivelGlobal
   * @param saldoDisponivelCompra
   * @param saldoDisponivelParcelado
   * @param saldoDisponivelParcelas
   * @param saldoDisponivelSaque
   * @param saldoPontosFidelidade
   * @param saldoDisponivelCompraInternacional
   * @param saldoDisponivelSaqueInternacional
   * @param totalServicos
   */
  var exports = function(limiteGlobal, limiteCompra, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo, limiteConsignado, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, saldoDisponivelGlobal, saldoDisponivelCompra, saldoDisponivelParcelado, saldoDisponivelParcelas, saldoDisponivelSaque, saldoPontosFidelidade, saldoDisponivelCompraInternacional, saldoDisponivelSaqueInternacional, totalServicos) {



    this['limiteGlobal'] = limiteGlobal;

    this['limiteCompra'] = limiteCompra;

    this['limiteParcelado'] = limiteParcelado;
    this['limiteParcelas'] = limiteParcelas;




    this['limiteSaqueGlobal'] = limiteSaqueGlobal;

    this['limiteSaquePeriodo'] = limiteSaquePeriodo;

    this['limiteConsignado'] = limiteConsignado;

    this['limiteInternacionalCompra'] = limiteInternacionalCompra;

    this['limiteInternacionalParcelado'] = limiteInternacionalParcelado;

    this['limiteInternacionalParcelas'] = limiteInternacionalParcelas;

    this['limiteInternacionalSaqueGlobal'] = limiteInternacionalSaqueGlobal;

    this['limiteInternacionalSaquePeriodo'] = limiteInternacionalSaquePeriodo;

    this['saldoDisponivelGlobal'] = saldoDisponivelGlobal;

    this['saldoDisponivelCompra'] = saldoDisponivelCompra;

    this['saldoDisponivelParcelado'] = saldoDisponivelParcelado;

    this['saldoDisponivelParcelas'] = saldoDisponivelParcelas;




    this['saldoDisponivelSaque'] = saldoDisponivelSaque;

    this['saldoPontosFidelidade'] = saldoPontosFidelidade;

    this['saldoDisponivelCompraInternacional'] = saldoDisponivelCompraInternacional;

    this['saldoDisponivelSaqueInternacional'] = saldoDisponivelSaqueInternacional;

    this['totalServicos'] = totalServicos;
  };

  /**
   * Constructs a <code>FaturaConsignadaDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaturaConsignadaDetalheResponse} obj Optional instance to populate.
   * @return {module:model/FaturaConsignadaDetalheResponse} The populated <code>FaturaConsignadaDetalheResponse</code> instance.
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
      if (data.hasOwnProperty('limiteGlobal')) {
        obj['limiteGlobal'] = ApiClient.convertToType(data['limiteGlobal'], 'Number');
      }
      if (data.hasOwnProperty('flagEmiteFatura')) {
        obj['flagEmiteFatura'] = ApiClient.convertToType(data['flagEmiteFatura'], 'Integer');
      }
      if (data.hasOwnProperty('limiteCompra')) {
        obj['limiteCompra'] = ApiClient.convertToType(data['limiteCompra'], 'Number');
      }
      if (data.hasOwnProperty('dataVencimentoFatura')) {
        obj['dataVencimentoFatura'] = ApiClient.convertToType(data['dataVencimentoFatura'], 'String');
      }
      if (data.hasOwnProperty('limiteParcelado')) {
        obj['limiteParcelado'] = ApiClient.convertToType(data['limiteParcelado'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelas')) {
        obj['limiteParcelas'] = ApiClient.convertToType(data['limiteParcelas'], 'Number');
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
      if (data.hasOwnProperty('limiteSaqueGlobal')) {
        obj['limiteSaqueGlobal'] = ApiClient.convertToType(data['limiteSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoComplementar')) {
        obj['valorPagamentoComplementar'] = ApiClient.convertToType(data['valorPagamentoComplementar'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaquePeriodo')) {
        obj['limiteSaquePeriodo'] = ApiClient.convertToType(data['limiteSaquePeriodo'], 'Number');
      }
      if (data.hasOwnProperty('totalComprasNacionais')) {
        obj['totalComprasNacionais'] = ApiClient.convertToType(data['totalComprasNacionais'], 'Number');
      }
      if (data.hasOwnProperty('limiteConsignado')) {
        obj['limiteConsignado'] = ApiClient.convertToType(data['limiteConsignado'], 'Number');
      }
      if (data.hasOwnProperty('totalComprasInternacionas')) {
        obj['totalComprasInternacionas'] = ApiClient.convertToType(data['totalComprasInternacionas'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalCompra')) {
        obj['limiteInternacionalCompra'] = ApiClient.convertToType(data['limiteInternacionalCompra'], 'Number');
      }
      if (data.hasOwnProperty('totalSaquesNacionais')) {
        obj['totalSaquesNacionais'] = ApiClient.convertToType(data['totalSaquesNacionais'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelado')) {
        obj['limiteInternacionalParcelado'] = ApiClient.convertToType(data['limiteInternacionalParcelado'], 'Number');
      }
      if (data.hasOwnProperty('totalSaquesInternacionais')) {
        obj['totalSaquesInternacionais'] = ApiClient.convertToType(data['totalSaquesInternacionais'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelas')) {
        obj['limiteInternacionalParcelas'] = ApiClient.convertToType(data['limiteInternacionalParcelas'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosNacionais')) {
        obj['totalDebitosNacionais'] = ApiClient.convertToType(data['totalDebitosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaqueGlobal')) {
        obj['limiteInternacionalSaqueGlobal'] = ApiClient.convertToType(data['limiteInternacionalSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosRecorrentes')) {
        obj['totalDebitosRecorrentes'] = ApiClient.convertToType(data['totalDebitosRecorrentes'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaquePeriodo')) {
        obj['limiteInternacionalSaquePeriodo'] = ApiClient.convertToType(data['limiteInternacionalSaquePeriodo'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosInternacionais')) {
        obj['totalDebitosInternacionais'] = ApiClient.convertToType(data['totalDebitosInternacionais'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelGlobal')) {
        obj['saldoDisponivelGlobal'] = ApiClient.convertToType(data['saldoDisponivelGlobal'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosDiversosNacionais')) {
        obj['totalDebitosDiversosNacionais'] = ApiClient.convertToType(data['totalDebitosDiversosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelCompra')) {
        obj['saldoDisponivelCompra'] = ApiClient.convertToType(data['saldoDisponivelCompra'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosOpcionais')) {
        obj['totalDebitosOpcionais'] = ApiClient.convertToType(data['totalDebitosOpcionais'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelado')) {
        obj['saldoDisponivelParcelado'] = ApiClient.convertToType(data['saldoDisponivelParcelado'], 'Number');
      }
      if (data.hasOwnProperty('totalPagamentos')) {
        obj['totalPagamentos'] = ApiClient.convertToType(data['totalPagamentos'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelas')) {
        obj['saldoDisponivelParcelas'] = ApiClient.convertToType(data['saldoDisponivelParcelas'], 'Number');
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
      if (data.hasOwnProperty('saldoDisponivelSaque')) {
        obj['saldoDisponivelSaque'] = ApiClient.convertToType(data['saldoDisponivelSaque'], 'Number');
      }
      if (data.hasOwnProperty('totalJuros')) {
        obj['totalJuros'] = ApiClient.convertToType(data['totalJuros'], 'Number');
      }
      if (data.hasOwnProperty('saldoPontosFidelidade')) {
        obj['saldoPontosFidelidade'] = ApiClient.convertToType(data['saldoPontosFidelidade'], 'Number');
      }
      if (data.hasOwnProperty('taxaRotativo')) {
        obj['taxaRotativo'] = ApiClient.convertToType(data['taxaRotativo'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelCompraInternacional')) {
        obj['saldoDisponivelCompraInternacional'] = ApiClient.convertToType(data['saldoDisponivelCompraInternacional'], 'Number');
      }
      if (data.hasOwnProperty('taxaSaque')) {
        obj['taxaSaque'] = ApiClient.convertToType(data['taxaSaque'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaqueInternacional')) {
        obj['saldoDisponivelSaqueInternacional'] = ApiClient.convertToType(data['saldoDisponivelSaqueInternacional'], 'Number');
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
   * {{{fatura_consignada_detalhe_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_global_value}}}
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_flag_emite_fatura_value}}}
   * @member {Integer} flagEmiteFatura
   */
  exports.prototype['flagEmiteFatura'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_compra_value}}}
   * @member {Number} limiteCompra
   */
  exports.prototype['limiteCompra'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_data_vencimento_fatura_value}}}
   * @member {String} dataVencimentoFatura
   */
  exports.prototype['dataVencimentoFatura'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_parcelado_value}}}
   * @member {Number} limiteParcelado
   */
  exports.prototype['limiteParcelado'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_parcelas_value}}}
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_valor_total_fatura_value}}}
   * @member {Number} valorTotalFatura
   */
  exports.prototype['valorTotalFatura'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_valor_fatura_anterior_value}}}
   * @member {Number} valorFaturaAnterior
   */
  exports.prototype['valorFaturaAnterior'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_valor_pagamento_minimo_value}}}
   * @member {Number} valorPagamentoMinimo
   */
  exports.prototype['valorPagamentoMinimo'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_valor_pagamento_consignado_value}}}
   * @member {Number} valorPagamentoConsignado
   */
  exports.prototype['valorPagamentoConsignado'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_saque_global_value}}}
   * @member {Number} limiteSaqueGlobal
   */
  exports.prototype['limiteSaqueGlobal'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_valor_pagamento_complementar_value}}}
   * @member {Number} valorPagamentoComplementar
   */
  exports.prototype['valorPagamentoComplementar'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_saque_periodo_value}}}
   * @member {Number} limiteSaquePeriodo
   */
  exports.prototype['limiteSaquePeriodo'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_compras_nacionais_value}}}
   * @member {Number} totalComprasNacionais
   */
  exports.prototype['totalComprasNacionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_consignado_value}}}
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_compras_internacionas_value}}}
   * @member {Number} totalComprasInternacionas
   */
  exports.prototype['totalComprasInternacionas'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_internacional_compra_value}}}
   * @member {Number} limiteInternacionalCompra
   */
  exports.prototype['limiteInternacionalCompra'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_saques_nacionais_value}}}
   * @member {Number} totalSaquesNacionais
   */
  exports.prototype['totalSaquesNacionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_internacional_parcelado_value}}}
   * @member {Number} limiteInternacionalParcelado
   */
  exports.prototype['limiteInternacionalParcelado'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_saques_internacionais_value}}}
   * @member {Number} totalSaquesInternacionais
   */
  exports.prototype['totalSaquesInternacionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_internacional_parcelas_value}}}
   * @member {Number} limiteInternacionalParcelas
   */
  exports.prototype['limiteInternacionalParcelas'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_debitos_nacionais_value}}}
   * @member {Number} totalDebitosNacionais
   */
  exports.prototype['totalDebitosNacionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_internacional_saque_global_value}}}
   * @member {Number} limiteInternacionalSaqueGlobal
   */
  exports.prototype['limiteInternacionalSaqueGlobal'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_debitos_recorrentes_value}}}
   * @member {Number} totalDebitosRecorrentes
   */
  exports.prototype['totalDebitosRecorrentes'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_limite_internacional_saque_periodo_value}}}
   * @member {Number} limiteInternacionalSaquePeriodo
   */
  exports.prototype['limiteInternacionalSaquePeriodo'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_debitos_internacionais_value}}}
   * @member {Number} totalDebitosInternacionais
   */
  exports.prototype['totalDebitosInternacionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_disponivel_global_value}}}
   * @member {Number} saldoDisponivelGlobal
   */
  exports.prototype['saldoDisponivelGlobal'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_debitos_diversos_nacionais_value}}}
   * @member {Number} totalDebitosDiversosNacionais
   */
  exports.prototype['totalDebitosDiversosNacionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_disponivel_compra_value}}}
   * @member {Number} saldoDisponivelCompra
   */
  exports.prototype['saldoDisponivelCompra'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_debitos_opcionais_value}}}
   * @member {Number} totalDebitosOpcionais
   */
  exports.prototype['totalDebitosOpcionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_disponivel_parcelado_value}}}
   * @member {Number} saldoDisponivelParcelado
   */
  exports.prototype['saldoDisponivelParcelado'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_pagamentos_value}}}
   * @member {Number} totalPagamentos
   */
  exports.prototype['totalPagamentos'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_disponivel_parcelas_value}}}
   * @member {Number} saldoDisponivelParcelas
   */
  exports.prototype['saldoDisponivelParcelas'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_creditos_nacionais_value}}}
   * @member {Number} totalCreditosNacionais
   */
  exports.prototype['totalCreditosNacionais'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_ajustes_value}}}
   * @member {Number} totalAjustes
   */
  exports.prototype['totalAjustes'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_tarifas_value}}}
   * @member {Number} totalTarifas
   */
  exports.prototype['totalTarifas'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_multa_value}}}
   * @member {Number} totalMulta
   */
  exports.prototype['totalMulta'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_disponivel_saque_value}}}
   * @member {Number} saldoDisponivelSaque
   */
  exports.prototype['saldoDisponivelSaque'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_juros_value}}}
   * @member {Number} totalJuros
   */
  exports.prototype['totalJuros'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_pontos_fidelidade_value}}}
   * @member {Number} saldoPontosFidelidade
   */
  exports.prototype['saldoPontosFidelidade'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_taxa_rotativo_value}}}
   * @member {Number} taxaRotativo
   */
  exports.prototype['taxaRotativo'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_disponivel_compra_internacional_value}}}
   * @member {Number} saldoDisponivelCompraInternacional
   */
  exports.prototype['saldoDisponivelCompraInternacional'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_taxa_saque_value}}}
   * @member {Number} taxaSaque
   */
  exports.prototype['taxaSaque'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_saldo_disponivel_saque_internacional_value}}}
   * @member {Number} saldoDisponivelSaqueInternacional
   */
  exports.prototype['saldoDisponivelSaqueInternacional'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_taxa_maxima_proximo_periodo_value}}}
   * @member {Number} taxaMaximaProximoPeriodo
   */
  exports.prototype['taxaMaximaProximoPeriodo'] = undefined;

  /**
   * {{{fatura_consignada_detalhe_response_total_servicos_value}}}
   * @member {Number} totalServicos
   */
  exports.prototype['totalServicos'] = undefined;




  return exports;
}));
