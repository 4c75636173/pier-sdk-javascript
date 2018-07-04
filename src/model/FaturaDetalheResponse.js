(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LancamentoFaturaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LancamentoFaturaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.FaturaDetalheResponse = factory(root.Pier.ApiClient, root.Pier.LancamentoFaturaResponse);
  }
}(this, function(ApiClient, LancamentoFaturaResponse) {
  'use strict';

  /**
   * The FaturaDetalheResponse model module.
   * @module model/FaturaDetalheResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>FaturaDetalheResponse</code>.
   * {{{fatura_detalhe_response_description}}}
   * @alias module:model/FaturaDetalheResponse
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>FaturaDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaturaDetalheResponse} obj Optional instance to populate.
   * @return {module:model/FaturaDetalheResponse} The populated <code>FaturaDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('situacaoProcessamento')) {
        obj['situacaoProcessamento'] = ApiClient.convertToType(data['situacaoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('pagamentoEfetuado')) {
        obj['pagamentoEfetuado'] = ApiClient.convertToType(data['pagamentoEfetuado'], 'Boolean');
      }
      if (data.hasOwnProperty('dataVencimentoFatura')) {
        obj['dataVencimentoFatura'] = ApiClient.convertToType(data['dataVencimentoFatura'], 'String');
      }
      if (data.hasOwnProperty('dataVencimentoReal')) {
        obj['dataVencimentoReal'] = ApiClient.convertToType(data['dataVencimentoReal'], 'String');
      }
      if (data.hasOwnProperty('dataFechamento')) {
        obj['dataFechamento'] = ApiClient.convertToType(data['dataFechamento'], 'String');
      }
      if (data.hasOwnProperty('valorTotal')) {
        obj['valorTotal'] = ApiClient.convertToType(data['valorTotal'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoMinimo')) {
        obj['valorPagamentoMinimo'] = ApiClient.convertToType(data['valorPagamentoMinimo'], 'Number');
      }
      if (data.hasOwnProperty('lancamentosFaturaResponse')) {
        obj['lancamentosFaturaResponse'] = ApiClient.convertToType(data['lancamentosFaturaResponse'], [LancamentoFaturaResponse]);
      }
      if (data.hasOwnProperty('saldoAnterior')) {
        obj['saldoAnterior'] = ApiClient.convertToType(data['saldoAnterior'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{fatura_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{fatura_response_situacao_processamento_value}}}
   * @member {module:model/FaturaDetalheResponse.SituacaoProcessamentoEnum} situacaoProcessamento
   */
  exports.prototype['situacaoProcessamento'] = undefined;

  /**
   * {{{fatura_response_pagamento_efetuado_value}}}
   * @member {Boolean} pagamentoEfetuado
   */
  exports.prototype['pagamentoEfetuado'] = undefined;

  /**
   * {{{fatura_response_data_vencimento_fatura_value}}}
   * @member {String} dataVencimentoFatura
   */
  exports.prototype['dataVencimentoFatura'] = undefined;

  /**
   * {{{fatura_response_data_vencimento_real_value}}}
   * @member {String} dataVencimentoReal
   */
  exports.prototype['dataVencimentoReal'] = undefined;

  /**
   * {{{fatura_response_data_fechamento_value}}}
   * @member {String} dataFechamento
   */
  exports.prototype['dataFechamento'] = undefined;

  /**
   * {{{fatura_response_valor_total_value}}}
   * @member {Number} valorTotal
   */
  exports.prototype['valorTotal'] = undefined;

  /**
   * {{{fatura_response_valor_pagamento_minimo_value}}}
   * @member {Number} valorPagamentoMinimo
   */
  exports.prototype['valorPagamentoMinimo'] = undefined;

  /**
   * {{{fatura_detalhe_response_lancamentos_fatura_response_value}}}
   * @member {Array.<module:model/LancamentoFaturaResponse>} lancamentosFaturaResponse
   */
  exports.prototype['lancamentosFaturaResponse'] = undefined;

  /**
   * {{{fatura_response_saldo_anterior_value}}}
   * @member {Number} saldoAnterior
   */
  exports.prototype['saldoAnterior'] = undefined;


  /**
   * Allowed values for the <code>situacaoProcessamento</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SituacaoProcessamentoEnum = { 
    /**
     * value: ABERTA
     * @const
     */
    ABERTA: "ABERTA",
    
    /**
     * value: FECHADA
     * @const
     */
    FECHADA: "FECHADA",
    
    /**
     * value: TODAS
     * @const
     */
    TODAS: "TODAS"
  };

  return exports;
}));
