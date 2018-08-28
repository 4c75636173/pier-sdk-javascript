(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ContaMultiAppResponse = factory(root.Pier.ApiClient, root.Pier.ContaResponse);
  }
}(this, function(ApiClient, ContaResponse) {
  'use strict';

  /**
   * The ContaMultiAppResponse model module.
   * @module model/ContaMultiAppResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ContaMultiAppResponse</code>.
   * {{{conta_multi_response_description}}}
   * @alias module:model/ContaMultiAppResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ContaMultiAppResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaMultiAppResponse} obj Optional instance to populate.
   * @return {module:model/ContaMultiAppResponse} The populated <code>ContaMultiAppResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('contas')) {
        obj['contas'] = ApiClient.convertToType(data['contas'], [ContaResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{conta_multi_response_contas_value}}}
   * @member {Array.<module:model/ContaResponse>} contas
   */
  exports.prototype['contas'] = undefined;




  return exports;
}));
