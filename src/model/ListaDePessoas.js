(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pessoa'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pessoa'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaDePessoas = factory(root.Pier.ApiClient, root.Pier.Pessoa);
  }
}(this, function(ApiClient, Pessoa) {
  'use strict';

  /**
   * The ListaDePessoas model module.
   * @module model/ListaDePessoas
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaDePessoas</code>.
   * Lista de Pessoas
   * @alias module:model/ListaDePessoas
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaDePessoas</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaDePessoas} obj Optional instance to populate.
   * @return {module:model/ListaDePessoas} The populated <code>ListaDePessoas</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('pessoas')) {
        obj['pessoas'] = ApiClient.convertToType(data['pessoas'], [Pessoa]);
      }
    }
    return obj;
  }


  /**
   * Lista de pessoas
   * @member {Array.<module:model/Pessoa>} pessoas
   */
  exports.prototype['pessoas'] = undefined;




  return exports;
}));
