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
    root.Pier.FaturaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FaturaResponse model module.
   * @module model/FaturaResponse
   * @version 2.50.17
   */

  /**
   * Constructs a new <code>FaturaResponse</code>.
   * Fatura futura
   * @alias module:model/FaturaResponse
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>FaturaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaturaResponse} obj Optional instance to populate.
   * @return {module:model/FaturaResponse} The populated <code>FaturaResponse</code> instance.
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
      if (data.hasOwnProperty('saldoAnterior')) {
        obj['saldoAnterior'] = ApiClient.convertToType(data['saldoAnterior'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Situa\u00C3\u00A7\u00C3\u00A3o de Processamento da fatura.
   * @member {module:model/FaturaResponse.SituacaoProcessamentoEnum} situacaoProcessamento
   */
  exports.prototype['situacaoProcessamento'] = undefined;

  /**
   * Status de pagamento efetuado.
   * @member {Boolean} pagamentoEfetuado
   */
  exports.prototype['pagamentoEfetuado'] = undefined;

  /**
   * Data de vencimento da fatura.
   * @member {String} dataVencimentoFatura
   */
  exports.prototype['dataVencimentoFatura'] = undefined;

  /**
   * Data de vencimento real da fatura.
   * @member {String} dataVencimentoReal
   */
  exports.prototype['dataVencimentoReal'] = undefined;

  /**
   * Data de fechamento da fatura.
   * @member {String} dataFechamento
   */
  exports.prototype['dataFechamento'] = undefined;

  /**
   * Valor total da fatura.
   * @member {Number} valorTotal
   */
  exports.prototype['valorTotal'] = undefined;

  /**
   * Valor do pagamento m\u00C3\u00ADnimo.
   * @member {Number} valorPagamentoMinimo
   */
  exports.prototype['valorPagamentoMinimo'] = undefined;

  /**
   * Valor do saldo anterior.
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
