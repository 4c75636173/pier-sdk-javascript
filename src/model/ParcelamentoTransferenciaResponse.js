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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ParcelamentoTransferenciaResponse</code>.
   * {{{parcelamento_transferencia_response_description}}}
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
   * {{{parcelamento_transferencia_response_numero_parcela_value}}}
   * @member {Integer} numeroParcela
   */
  exports.prototype['numeroParcela'] = undefined;

  /**
   * {{{parcelamento_transferencia_response_valor_parcelas_value}}}
   * @member {Number} valorParcelas
   */
  exports.prototype['valorParcelas'] = undefined;

  /**
   * {{{parcelamento_transferencia_response_valor_total_value}}}
   * @member {Number} valorTotal
   */
  exports.prototype['valorTotal'] = undefined;

  /**
   * {{{parcelamento_transferencia_response_valor_t_a_c_value}}}
   * @member {Number} valorTAC
   */
  exports.prototype['valorTAC'] = undefined;

  /**
   * {{{parcelamento_transferencia_response_valor_i_o_f_value}}}
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * {{{parcelamento_transferencia_response_taxa_juros_value}}}
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * {{{parcelamento_transferencia_response_cet_anual_value}}}
   * @member {Number} cetAnual
   */
  exports.prototype['cetAnual'] = undefined;




  return exports;
}));
