(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Cartao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cartao'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaCartoes = factory(root.Pier.ApiClient, root.Pier.Cartao);
  }
}(this, function(ApiClient, Cartao) {
  'use strict';

  /**
   * The ListaCartoes model module.
   * @module model/ListaCartoes
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaCartoes</code>.
   * Lista de Cart\u00C3\u00B5es
   * @alias module:model/ListaCartoes
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaCartoes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaCartoes} obj Optional instance to populate.
   * @return {module:model/ListaCartoes} The populated <code>ListaCartoes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cartoes')) {
        obj['cartoes'] = ApiClient.convertToType(data['cartoes'], [Cartao]);
      }
    }
    return obj;
  }


  /**
   * Lista de cart\u00C3\u00B5es
   * @member {Array.<module:model/Cartao>} cartoes
   */
  exports.prototype['cartoes'] = undefined;




  return exports;
}));
