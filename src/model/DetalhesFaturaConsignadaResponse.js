(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FaturaConsignadaResponse', './TransacoesCorrentes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FaturaConsignadaResponse'), require('./TransacoesCorrentes'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DetalhesFaturaConsignadaResponse = factory(root.Pier.ApiClient, root.Pier.FaturaConsignadaResponse, root.Pier.TransacoesCorrentes);
  }
}(this, function(ApiClient, FaturaConsignadaResponse, TransacoesCorrentes) {
  'use strict';

  /**
   * The DetalhesFaturaConsignadaResponse model module.
   * @module model/DetalhesFaturaConsignadaResponse
   * @version 2.15.0
   */

  /**
   * Constructs a new <code>DetalhesFaturaConsignadaResponse</code>.
   * Objeto contendo os detalhes de uma fatura consignada
   * @alias module:model/DetalhesFaturaConsignadaResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DetalhesFaturaConsignadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalhesFaturaConsignadaResponse} obj Optional instance to populate.
   * @return {module:model/DetalhesFaturaConsignadaResponse} The populated <code>DetalhesFaturaConsignadaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('faturaConsignadaResponse')) {
        obj['faturaConsignadaResponse'] = FaturaConsignadaResponse.constructFromObject(data['faturaConsignadaResponse']);
      }
      if (data.hasOwnProperty('transacoes')) {
        obj['transacoes'] = ApiClient.convertToType(data['transacoes'], [TransacoesCorrentes]);
      }
    }
    return obj;
  }


  /**
   * Apresenta os detalhes da fatura
   * @member {module:model/FaturaConsignadaResponse} faturaConsignadaResponse
   */
  exports.prototype['faturaConsignadaResponse'] = undefined;

  /**
   * Apresenta as transa\u00C3\u00A7\u00C3\u00B5es relacionadas a fatura.
   * @member {Array.<module:model/TransacoesCorrentes>} transacoes
   */
  exports.prototype['transacoes'] = undefined;




  return exports;
}));
