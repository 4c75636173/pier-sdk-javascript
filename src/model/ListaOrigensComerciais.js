(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './OrigemComercial'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrigemComercial'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaOrigensComerciais = factory(root.Pier.ApiClient, root.Pier.OrigemComercial);
  }
}(this, function(ApiClient, OrigemComercial) {
  'use strict';

  /**
   * The ListaOrigensComerciais model module.
   * @module model/ListaOrigensComerciais
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaOrigensComerciais</code>.
   * Lista de Origens Comerciais
   * @alias module:model/ListaOrigensComerciais
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaOrigensComerciais</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaOrigensComerciais} obj Optional instance to populate.
   * @return {module:model/ListaOrigensComerciais} The populated <code>ListaOrigensComerciais</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('origensComerciais')) {
        obj['origensComerciais'] = ApiClient.convertToType(data['origensComerciais'], [OrigemComercial]);
      }
    }
    return obj;
  }


  /**
   * Lista de origens comerciais
   * @member {Array.<module:model/OrigemComercial>} origensComerciais
   */
  exports.prototype['origensComerciais'] = undefined;




  return exports;
}));
