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
    root.Pier.HistoricoAtrasoFaturaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoAtrasoFaturaResponse model module.
   * @module model/HistoricoAtrasoFaturaResponse
   * @version 2.33.0
   */

  /**
   * Constructs a new <code>HistoricoAtrasoFaturaResponse</code>.
   * Hist\u00C3\u00B3rico Pagamento Fatura Atraso
   * @alias module:model/HistoricoAtrasoFaturaResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>HistoricoAtrasoFaturaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoAtrasoFaturaResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoAtrasoFaturaResponse} The populated <code>HistoricoAtrasoFaturaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('diasPagamentoAposVencimento')) {
        obj['diasPagamentoAposVencimento'] = ApiClient.convertToType(data['diasPagamentoAposVencimento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Data vencimento fatura.
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * Quantidade de dias em atraso.
   * @member {Integer} diasPagamentoAposVencimento
   */
  exports.prototype['diasPagamentoAposVencimento'] = undefined;




  return exports;
}));
