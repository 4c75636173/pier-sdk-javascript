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
    root.Pier.CartaoEmbossingRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoEmbossingRequest model module.
   * @module model/CartaoEmbossingRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CartaoEmbossingRequest</code>.
   * {{{cartao_embossing_request_description}}}
   * @alias module:model/CartaoEmbossingRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CartaoEmbossingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoEmbossingRequest} obj Optional instance to populate.
   * @return {module:model/CartaoEmbossingRequest} The populated <code>CartaoEmbossingRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id_pessoa')) {
        obj['id_pessoa'] = ApiClient.convertToType(data['id_pessoa'], 'Integer');
      }
      if (data.hasOwnProperty('id_tipo_plastico')) {
        obj['id_tipo_plastico'] = ApiClient.convertToType(data['id_tipo_plastico'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{cartao_embossing_request_id_pessoa_value}}}
   * @member {Integer} id_pessoa
   */
  exports.prototype['id_pessoa'] = undefined;

  /**
   * {{{cartao_embossing_request_id_tipo_plastico_value}}}
   * @member {Integer} id_tipo_plastico
   */
  exports.prototype['id_tipo_plastico'] = undefined;




  return exports;
}));
