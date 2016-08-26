(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CartaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaDeCartes = factory(root.Pier.ApiClient, root.Pier.CartaoResponse);
  }
}(this, function(ApiClient, CartaoResponse) {
  'use strict';

  /**
   * The ListaDeCartes model module.
   * @module model/ListaDeCartes
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaDeCartes</code>.
   * Lista de Cart\u00C3\u00B5es
   * @alias module:model/ListaDeCartes
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaDeCartes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaDeCartes} obj Optional instance to populate.
   * @return {module:model/ListaDeCartes} The populated <code>ListaDeCartes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cartoes')) {
        obj['cartoes'] = ApiClient.convertToType(data['cartoes'], [CartaoResponse]);
      }
    }
    return obj;
  }


  /**
   * Lista de cart\u00C3\u00B5es
   * @member {Array.<module:model/CartaoResponse>} cartoes
   */
  exports.prototype['cartoes'] = undefined;




  return exports;
}));
