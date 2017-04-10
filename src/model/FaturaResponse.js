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
   * @version 2.12.0
   */

  /**
   * Constructs a new <code>FaturaResponse</code>.
   * Fatura
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

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'Date');
      }
      if (data.hasOwnProperty('saldoFaturaAnterior')) {
        obj['saldoFaturaAnterior'] = ApiClient.convertToType(data['saldoFaturaAnterior'], 'Number');
      }
      if (data.hasOwnProperty('saldoMulta')) {
        obj['saldoMulta'] = ApiClient.convertToType(data['saldoMulta'], 'Number');
      }
      if (data.hasOwnProperty('saldoCompras')) {
        obj['saldoCompras'] = ApiClient.convertToType(data['saldoCompras'], 'Number');
      }
      if (data.hasOwnProperty('saldoPagamentos')) {
        obj['saldoPagamentos'] = ApiClient.convertToType(data['saldoPagamentos'], 'Number');
      }
      if (data.hasOwnProperty('saldoTarifas')) {
        obj['saldoTarifas'] = ApiClient.convertToType(data['saldoTarifas'], 'Number');
      }
      if (data.hasOwnProperty('saldoDebitos')) {
        obj['saldoDebitos'] = ApiClient.convertToType(data['saldoDebitos'], 'Number');
      }
      if (data.hasOwnProperty('saldoCreditos')) {
        obj['saldoCreditos'] = ApiClient.convertToType(data['saldoCreditos'], 'Number');
      }
      if (data.hasOwnProperty('saldoAtualFinal')) {
        obj['saldoAtualFinal'] = ApiClient.convertToType(data['saldoAtualFinal'], 'Number');
      }
      if (data.hasOwnProperty('valorMinimoFatura')) {
        obj['valorMinimoFatura'] = ApiClient.convertToType(data['valorMinimoFatura'], 'Number');
      }
      if (data.hasOwnProperty('flagEmiteFatura')) {
        obj['flagEmiteFatura'] = ApiClient.convertToType(data['flagEmiteFatura'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador da fatura.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do produto.
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * Data de vencimento da fatura.
   * @member {Date} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * Saldo da fatura anterior.
   * @member {Number} saldoFaturaAnterior
   */
  exports.prototype['saldoFaturaAnterior'] = undefined;

  /**
   * Saldo total da Multa lan\u00C3\u00A7ada na Fatura atual.
   * @member {Number} saldoMulta
   */
  exports.prototype['saldoMulta'] = undefined;

  /**
   * Saldo total das compras lan\u00C3\u00A7adas na fatura atual.
   * @member {Number} saldoCompras
   */
  exports.prototype['saldoCompras'] = undefined;

  /**
   * Saldo total dos pagamentos lan\u00C3\u00A7ados na fatura atual.
   * @member {Number} saldoPagamentos
   */
  exports.prototype['saldoPagamentos'] = undefined;

  /**
   * Saldo total das tarifas lan\u00C3\u00A7adas na fatura atual.
   * @member {Number} saldoTarifas
   */
  exports.prototype['saldoTarifas'] = undefined;

  /**
   * Saldo total dos d\u00C3\u00A9bitos lan\u00C3\u00A7ados na fatura atual.
   * @member {Number} saldoDebitos
   */
  exports.prototype['saldoDebitos'] = undefined;

  /**
   * Saldo total dos cr\u00C3\u00A9dito lan\u00C3\u00A7ados na fatura atual.
   * @member {Number} saldoCreditos
   */
  exports.prototype['saldoCreditos'] = undefined;

  /**
   * Salto total devedor da fatura atual.
   * @member {Number} saldoAtualFinal
   */
  exports.prototype['saldoAtualFinal'] = undefined;

  /**
   * Valor m\u00C3\u00ADnimo para pagamento da fatura.
   * @member {Number} valorMinimoFatura
   */
  exports.prototype['valorMinimoFatura'] = undefined;

  /**
   * Quando ativa, indica que fora emitida uma fatura.
   * @member {Integer} flagEmiteFatura
   */
  exports.prototype['flagEmiteFatura'] = undefined;




  return exports;
}));
