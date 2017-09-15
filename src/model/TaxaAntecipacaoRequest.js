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
    root.Pier.TaxaAntecipacaoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxaAntecipacaoRequest model module.
   * @module model/TaxaAntecipacaoRequest
   * @version 2.32.0
   */

  /**
   * Constructs a new <code>TaxaAntecipacaoRequest</code>.
   * Objeto de Requisi\u00C3\u00A7\u00C3\u00A3o de Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o
   * @alias module:model/TaxaAntecipacaoRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TaxaAntecipacaoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxaAntecipacaoRequest} obj Optional instance to populate.
   * @return {module:model/TaxaAntecipacaoRequest} The populated <code>TaxaAntecipacaoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('tipoTransacao')) {
        obj['tipoTransacao'] = ApiClient.convertToType(data['tipoTransacao'], 'String');
      }
      if (data.hasOwnProperty('valorTaxa')) {
        obj['valorTaxa'] = ApiClient.convertToType(data['valorTaxa'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo que identifica se um par\u00C3\u00A2metro refere-se a uma transa\u00C3\u00A7\u00C3\u00A3o On-Us ou Off-Us.
   * @member {module:model/TaxaAntecipacaoRequest.TipoTransacaoEnum} tipoTransacao
   */
  exports.prototype['tipoTransacao'] = undefined;

  /**
   * Valor da Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o.
   * @member {Number} valorTaxa
   */
  exports.prototype['valorTaxa'] = undefined;


  /**
   * Allowed values for the <code>tipoTransacao</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoTransacaoEnum = { 
    /**
     * value: ON_US
     * @const
     */
    ON_US: "ON_US",
    
    /**
     * value: OFF_US
     * @const
     */
    OFF_US: "OFF_US"
  };

  return exports;
}));
