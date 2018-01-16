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
    root.Pier.ParcelamentoTransferenciaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParcelamentoTransferenciaResponse model module.
   * @module model/ParcelamentoTransferenciaResponse
   * @version 2.50.11
   */

  /**
   * Constructs a new <code>ParcelamentoTransferenciaResponse</code>.
   * Detalhe do plano de parcelamento para Transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para contas banc\u00C3\u00A1rias
   * @alias module:model/ParcelamentoTransferenciaResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>ParcelamentoTransferenciaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelamentoTransferenciaResponse} obj Optional instance to populate.
   * @return {module:model/ParcelamentoTransferenciaResponse} The populated <code>ParcelamentoTransferenciaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroParcela')) {
        obj['numeroParcela'] = ApiClient.convertToType(data['numeroParcela'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcelas')) {
        obj['valorParcelas'] = ApiClient.convertToType(data['valorParcelas'], 'Number');
      }
      if (data.hasOwnProperty('valorTotal')) {
        obj['valorTotal'] = ApiClient.convertToType(data['valorTotal'], 'Number');
      }
      if (data.hasOwnProperty('valorTAC')) {
        obj['valorTAC'] = ApiClient.convertToType(data['valorTAC'], 'Number');
      }
      if (data.hasOwnProperty('valorIOF')) {
        obj['valorIOF'] = ApiClient.convertToType(data['valorIOF'], 'Number');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
      if (data.hasOwnProperty('cetAnual')) {
        obj['cetAnual'] = ApiClient.convertToType(data['cetAnual'], 'Number');
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero de parcelas dispon\u00C3\u00ADveis.
   * @member {Integer} numeroParcela
   */
  exports.prototype['numeroParcela'] = undefined;

  /**
   * Valor das demais parcelas.
   * @member {Number} valorParcelas
   */
  exports.prototype['valorParcelas'] = undefined;

  /**
   * Valor total do financiamento.
   * @member {Number} valorTotal
   */
  exports.prototype['valorTotal'] = undefined;

  /**
   * Valor da tarifa de contrata\u00C3\u00A7\u00C3\u00A3o.
   * @member {Number} valorTAC
   */
  exports.prototype['valorTAC'] = undefined;

  /**
   * IOF
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * Valor da taxa de juros.
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * CET anual.
   * @member {Number} cetAnual
   */
  exports.prototype['cetAnual'] = undefined;




  return exports;
}));
