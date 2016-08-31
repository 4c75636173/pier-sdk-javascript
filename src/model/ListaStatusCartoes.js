(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './StatusCartao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatusCartao'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaStatusCartoes = factory(root.Pier.ApiClient, root.Pier.StatusCartao);
  }
}(this, function(ApiClient, StatusCartao) {
  'use strict';

  /**
   * The ListaStatusCartoes model module.
   * @module model/ListaStatusCartoes
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaStatusCartoes</code>.
   * Lista de Status Cart\u00C3\u00B5es
   * @alias module:model/ListaStatusCartoes
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaStatusCartoes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaStatusCartoes} obj Optional instance to populate.
   * @return {module:model/ListaStatusCartoes} The populated <code>ListaStatusCartoes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('statusCartoes')) {
        obj['statusCartoes'] = ApiClient.convertToType(data['statusCartoes'], [StatusCartao]);
      }
    }
    return obj;
  }


  /**
   * Lista de status cart\u00C3\u00B5es
   * @member {Array.<module:model/StatusCartao>} statusCartoes
   */
  exports.prototype['statusCartoes'] = undefined;




  return exports;
}));
