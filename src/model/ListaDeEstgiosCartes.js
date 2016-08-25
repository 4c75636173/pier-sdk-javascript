(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './EstgioCarto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EstgioCarto'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaDeEstgiosCartes = factory(root.Pier.ApiClient, root.Pier.EstgioCarto);
  }
}(this, function(ApiClient, EstgioCarto) {
  'use strict';

  /**
   * The ListaDeEstgiosCartes model module.
   * @module model/ListaDeEstgiosCartes
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaDeEstgiosCartes</code>.
   * Lista de Est\u00C3\u00A1gios Cart\u00C3\u00B5es
   * @alias module:model/ListaDeEstgiosCartes
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaDeEstgiosCartes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaDeEstgiosCartes} obj Optional instance to populate.
   * @return {module:model/ListaDeEstgiosCartes} The populated <code>ListaDeEstgiosCartes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('estagiosCartoes')) {
        obj['estagiosCartoes'] = ApiClient.convertToType(data['estagiosCartoes'], [EstgioCarto]);
      }
    }
    return obj;
  }


  /**
   * Lista de est\u00C3\u00A1gios cart\u00C3\u00B5es
   * @member {Array.<module:model/EstgioCarto>} estagiosCartoes
   */
  exports.prototype['estagiosCartoes'] = undefined;




  return exports;
}));
