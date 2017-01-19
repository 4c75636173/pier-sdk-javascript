(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ModelDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelDate'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.Fatura = factory(root.Pier.ApiClient, root.Pier.ModelDate);
  }
}(this, function(ApiClient, ModelDate) {
  'use strict';

  /**
   * The Fatura model module.
   * @module model/Fatura
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Fatura</code>.
   * Objeto Fatura
   * @alias module:model/Fatura
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>Fatura</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fatura} obj Optional instance to populate.
   * @return {module:model/Fatura} The populated <code>Fatura</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], ModelDate);
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
   * Data de Vencimento da Fatura.
   * @member {module:model/ModelDate} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * Saldo da Fatura Anterior.
   * @member {Number} saldoFaturaAnterior
   */
  exports.prototype['saldoFaturaAnterior'] = undefined;

  /**
   * Saldo total da Multa lan\u00C3\u00A7ada na Fatura atual.
   * @member {Number} saldoMulta
   */
  exports.prototype['saldoMulta'] = undefined;

  /**
   * Saldo total das Compras lan\u00C3\u00A7adas na Fatura atual.
   * @member {Number} saldoCompras
   */
  exports.prototype['saldoCompras'] = undefined;

  /**
   * Saldo total dos Pagamentos lan\u00C3\u00A7ados na Fatura atual.
   * @member {Number} saldoPagamentos
   */
  exports.prototype['saldoPagamentos'] = undefined;

  /**
   * Saldo total das Tarifas lan\u00C3\u00A7adas na Fatura atual.
   * @member {Number} saldoTarifas
   */
  exports.prototype['saldoTarifas'] = undefined;

  /**
   * Saldo total dos D\u00C3\u00A9bitos lan\u00C3\u00A7ados na Fatura atual.
   * @member {Number} saldoDebitos
   */
  exports.prototype['saldoDebitos'] = undefined;

  /**
   * Saldo total dos Cr\u00C3\u00A9dito lan\u00C3\u00A7ados na Fatura atual.
   * @member {Number} saldoCreditos
   */
  exports.prototype['saldoCreditos'] = undefined;

  /**
   * Salto total devedor da Fatura atual.
   * @member {Number} saldoAtualFinal
   */
  exports.prototype['saldoAtualFinal'] = undefined;

  /**
   * Valor m\u00C3\u00ADnimo para Pagamento da Fatura.
   * @member {Number} valorMinimoFatura
   */
  exports.prototype['valorMinimoFatura'] = undefined;

  /**
   * Quando ativa, indica que fora emitida uma Fatura.
   * @member {Integer} flagEmiteFatura
   */
  exports.prototype['flagEmiteFatura'] = undefined;




  return exports;
}));
