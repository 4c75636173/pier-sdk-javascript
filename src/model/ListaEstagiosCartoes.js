(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './EstagioCartao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EstagioCartao'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaEstagiosCartoes = factory(root.Pier.ApiClient, root.Pier.EstagioCartao);
  }
}(this, function(ApiClient, EstagioCartao) {
  'use strict';

  /**
   * The ListaEstagiosCartoes model module.
   * @module model/ListaEstagiosCartoes
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaEstagiosCartoes</code>.
   * Lista de Est\u00C3\u00A1gios Cart\u00C3\u00B5es
   * @alias module:model/ListaEstagiosCartoes
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaEstagiosCartoes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaEstagiosCartoes} obj Optional instance to populate.
   * @return {module:model/ListaEstagiosCartoes} The populated <code>ListaEstagiosCartoes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('estagiosCartoes')) {
        obj['estagiosCartoes'] = ApiClient.convertToType(data['estagiosCartoes'], [EstagioCartao]);
      }
    }
    return obj;
  }


  /**
   * Lista de est\u00C3\u00A1gios cart\u00C3\u00B5es
   * @member {Array.<module:model/EstagioCartao>} estagiosCartoes
   */
  exports.prototype['estagiosCartoes'] = undefined;




  return exports;
}));
