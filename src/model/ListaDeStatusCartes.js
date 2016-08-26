(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './StatusCarto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatusCarto'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaDeStatusCartes = factory(root.Pier.ApiClient, root.Pier.StatusCarto);
  }
}(this, function(ApiClient, StatusCarto) {
  'use strict';

  /**
   * The ListaDeStatusCartes model module.
   * @module model/ListaDeStatusCartes
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaDeStatusCartes</code>.
   * Lista de Status Cart\u00C3\u00B5es
   * @alias module:model/ListaDeStatusCartes
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaDeStatusCartes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaDeStatusCartes} obj Optional instance to populate.
   * @return {module:model/ListaDeStatusCartes} The populated <code>ListaDeStatusCartes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('statusCartoes')) {
        obj['statusCartoes'] = ApiClient.convertToType(data['statusCartoes'], [StatusCarto]);
      }
    }
    return obj;
  }


  /**
   * Lista de status cart\u00C3\u00B5es
   * @member {Array.<module:model/StatusCarto>} statusCartoes
   */
  exports.prototype['statusCartoes'] = undefined;




  return exports;
}));
