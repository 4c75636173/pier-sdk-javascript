(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Produto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Produto'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ListaProdutos = factory(root.Pier.ApiClient, root.Pier.Produto);
  }
}(this, function(ApiClient, Produto) {
  'use strict';

  /**
   * The ListaProdutos model module.
   * @module model/ListaProdutos
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ListaProdutos</code>.
   * Lista de Produtos
   * @alias module:model/ListaProdutos
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ListaProdutos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListaProdutos} obj Optional instance to populate.
   * @return {module:model/ListaProdutos} The populated <code>ListaProdutos</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('produtos')) {
        obj['produtos'] = ApiClient.convertToType(data['produtos'], [Produto]);
      }
    }
    return obj;
  }


  /**
   * Lista de produtos
   * @member {Array.<module:model/Produto>} produtos
   */
  exports.prototype['produtos'] = undefined;




  return exports;
}));
