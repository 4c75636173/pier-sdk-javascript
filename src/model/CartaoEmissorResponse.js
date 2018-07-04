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
    root.Pier.CartaoEmissorResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoEmissorResponse model module.
   * @module model/CartaoEmissorResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>CartaoEmissorResponse</code>.
   * {{{cartao_emissor_resposta_descricao}}}
   * @alias module:model/CartaoEmissorResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>CartaoEmissorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoEmissorResponse} obj Optional instance to populate.
   * @return {module:model/CartaoEmissorResponse} The populated <code>CartaoEmissorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{cartao_emissor_resposta_id_descricao}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));
