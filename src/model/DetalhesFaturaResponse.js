(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FaturaResponse', './TransacoesCorrentes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FaturaResponse'), require('./TransacoesCorrentes'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DetalhesFaturaResponse = factory(root.Pier.ApiClient, root.Pier.FaturaResponse, root.Pier.TransacoesCorrentes);
  }
}(this, function(ApiClient, FaturaResponse, TransacoesCorrentes) {
  'use strict';

  /**
   * The DetalhesFaturaResponse model module.
   * @module model/DetalhesFaturaResponse
   * @version 2.15.5
   */

  /**
   * Constructs a new <code>DetalhesFaturaResponse</code>.
   * Objeto contendo os detalhes de uma fatura
   * @alias module:model/DetalhesFaturaResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DetalhesFaturaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalhesFaturaResponse} obj Optional instance to populate.
   * @return {module:model/DetalhesFaturaResponse} The populated <code>DetalhesFaturaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('fatura')) {
        obj['fatura'] = FaturaResponse.constructFromObject(data['fatura']);
      }
      if (data.hasOwnProperty('transacoes')) {
        obj['transacoes'] = ApiClient.convertToType(data['transacoes'], [TransacoesCorrentes]);
      }
    }
    return obj;
  }


  /**
   * Apresenta os detalhes da fatura
   * @member {module:model/FaturaResponse} fatura
   */
  exports.prototype['fatura'] = undefined;

  /**
   * Apresenta as transa\u00C3\u00A7\u00C3\u00B5es relacionadas a fatura.
   * @member {Array.<module:model/TransacoesCorrentes>} transacoes
   */
  exports.prototype['transacoes'] = undefined;




  return exports;
}));
