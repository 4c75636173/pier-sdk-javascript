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
    root.Pier.ProdutoOrigemResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProdutoOrigemResponse model module.
   * @module model/ProdutoOrigemResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ProdutoOrigemResponse</code>.
   * {{{produto_origem_response_description}}}
   * @alias module:model/ProdutoOrigemResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ProdutoOrigemResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProdutoOrigemResponse} obj Optional instance to populate.
   * @return {module:model/ProdutoOrigemResponse} The populated <code>ProdutoOrigemResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{produto_origem_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;




  return exports;
}));
