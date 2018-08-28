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
    root.Pier.TaxaJurosContaListaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxaJurosContaListaResponse model module.
   * @module model/TaxaJurosContaListaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TaxaJurosContaListaResponse</code>.
   * {{{taxa_juros_conta_lista_response_description}}}
   * @alias module:model/TaxaJurosContaListaResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TaxaJurosContaListaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxaJurosContaListaResponse} obj Optional instance to populate.
   * @return {module:model/TaxaJurosContaListaResponse} The populated <code>TaxaJurosContaListaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('plano')) {
        obj['plano'] = ApiClient.convertToType(data['plano'], 'Integer');
      }
      if (data.hasOwnProperty('taxa')) {
        obj['taxa'] = ApiClient.convertToType(data['taxa'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{taxa_juros_conta_lista_response_plano_value}}}
   * @member {Integer} plano
   */
  exports.prototype['plano'] = undefined;

  /**
   * {{{taxa_juros_conta_lista_response_taxa_value}}}
   * @member {Number} taxa
   */
  exports.prototype['taxa'] = undefined;




  return exports;
}));
