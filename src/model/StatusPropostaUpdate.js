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
    root.Pier.StatusPropostaUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusPropostaUpdate model module.
   * @module model/StatusPropostaUpdate
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>StatusPropostaUpdate</code>.
   * {{{status_proposta_update_request_description}}}
   * @alias module:model/StatusPropostaUpdate
   * @class
   * @param status
   */
  var exports = function(status) {

    this['status'] = status;
  };

  /**
   * Constructs a <code>StatusPropostaUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusPropostaUpdate} obj Optional instance to populate.
   * @return {module:model/StatusPropostaUpdate} The populated <code>StatusPropostaUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{status_proposta_update_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
