(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FaturaFechadaResponse', './TransacoesCorrentesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FaturaFechadaResponse'), require('./TransacoesCorrentesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DetalhesFaturaResponse = factory(root.Pier.ApiClient, root.Pier.FaturaFechadaResponse, root.Pier.TransacoesCorrentesResponse);
  }
}(this, function(ApiClient, FaturaFechadaResponse, TransacoesCorrentesResponse) {
  'use strict';

  /**
   * The DetalhesFaturaResponse model module.
   * @module model/DetalhesFaturaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>DetalhesFaturaResponse</code>.
   * {{{detalhes_fatura_response_description}}}
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
        obj['fatura'] = FaturaFechadaResponse.constructFromObject(data['fatura']);
      }
      if (data.hasOwnProperty('transacoes')) {
        obj['transacoes'] = ApiClient.convertToType(data['transacoes'], [TransacoesCorrentesResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{detalhes_fatura_response_fatura_value}}}
   * @member {module:model/FaturaFechadaResponse} fatura
   */
  exports.prototype['fatura'] = undefined;

  /**
   * {{{detalhes_fatura_response_transacoes_value}}}
   * @member {Array.<module:model/TransacoesCorrentesResponse>} transacoes
   */
  exports.prototype['transacoes'] = undefined;




  return exports;
}));
