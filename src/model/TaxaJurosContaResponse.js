(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaxaJurosContaListaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxaJurosContaListaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TaxaJurosContaResponse = factory(root.Pier.ApiClient, root.Pier.TaxaJurosContaListaResponse);
  }
}(this, function(ApiClient, TaxaJurosContaListaResponse) {
  'use strict';

  /**
   * The TaxaJurosContaResponse model module.
   * @module model/TaxaJurosContaResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TaxaJurosContaResponse</code>.
   * {{{taxa_juros_conta_response_description}}}
   * @alias module:model/TaxaJurosContaResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>TaxaJurosContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxaJurosContaResponse} obj Optional instance to populate.
   * @return {module:model/TaxaJurosContaResponse} The populated <code>TaxaJurosContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idTabelaJuros')) {
        obj['idTabelaJuros'] = ApiClient.convertToType(data['idTabelaJuros'], 'Integer');
      }
      if (data.hasOwnProperty('taxasJuros')) {
        obj['taxasJuros'] = ApiClient.convertToType(data['taxasJuros'], [TaxaJurosContaListaResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{taxa_juros_conta_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{taxa_juros_conta_response_id_tabela_juros_value}}}
   * @member {Integer} idTabelaJuros
   */
  exports.prototype['idTabelaJuros'] = undefined;

  /**
   * {{{taxa_juros_conta_response_taxas_juros_value}}}
   * @member {Array.<module:model/TaxaJurosContaListaResponse>} taxasJuros
   */
  exports.prototype['taxasJuros'] = undefined;




  return exports;
}));
