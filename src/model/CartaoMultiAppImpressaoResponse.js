(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CartaoImpressaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartaoImpressaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoMultiAppImpressaoResponse = factory(root.Pier.ApiClient, root.Pier.CartaoImpressaoResponse);
  }
}(this, function(ApiClient, CartaoImpressaoResponse) {
  'use strict';

  /**
   * The CartaoMultiAppImpressaoResponse model module.
   * @module model/CartaoMultiAppImpressaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CartaoMultiAppImpressaoResponse</code>.
   * {{{cartao_impressao_multiapp_response_description}}}
   * @alias module:model/CartaoMultiAppImpressaoResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CartaoMultiAppImpressaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoMultiAppImpressaoResponse} obj Optional instance to populate.
   * @return {module:model/CartaoMultiAppImpressaoResponse} The populated <code>CartaoMultiAppImpressaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cartaoPai')) {
        obj['cartaoPai'] = CartaoImpressaoResponse.constructFromObject(data['cartaoPai']);
      }
      if (data.hasOwnProperty('cartao')) {
        obj['cartao'] = CartaoImpressaoResponse.constructFromObject(data['cartao']);
      }
    }
    return obj;
  }


  /**
   * {{{cartao_impressao_multiapp_response_cartao_pai_value}}}
   * @member {module:model/CartaoImpressaoResponse} cartaoPai
   */
  exports.prototype['cartaoPai'] = undefined;

  /**
   * {{{cartao_impressao_multiapp_response_cartao_filho_value}}}
   * @member {module:model/CartaoImpressaoResponse} cartao
   */
  exports.prototype['cartao'] = undefined;




  return exports;
}));
