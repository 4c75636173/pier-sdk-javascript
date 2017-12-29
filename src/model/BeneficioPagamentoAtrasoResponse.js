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
    root.Pier.BeneficioPagamentoAtrasoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BeneficioPagamentoAtrasoResponse model module.
   * @module model/BeneficioPagamentoAtrasoResponse
   * @version 2.50.5
   */

  /**
   * Constructs a new <code>BeneficioPagamentoAtrasoResponse</code>.
   * @alias module:model/BeneficioPagamentoAtrasoResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>BeneficioPagamentoAtrasoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BeneficioPagamentoAtrasoResponse} obj Optional instance to populate.
   * @return {module:model/BeneficioPagamentoAtrasoResponse} The populated <code>BeneficioPagamentoAtrasoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataBeneficio')) {
        obj['dataBeneficio'] = ApiClient.convertToType(data['dataBeneficio'], 'String');
      }
    }
    return obj;
  }


  /**
   * Data m\u00C3\u00A1xima para pagamento da fatura em atraso para receber o benef\u00C3\u00ADcio de isen\u00C3\u00A7\u00C3\u00A3o total no pagamento de multa, encargos, mora e IOF.
   * @member {String} dataBeneficio
   */
  exports.prototype['dataBeneficio'] = undefined;




  return exports;
}));
