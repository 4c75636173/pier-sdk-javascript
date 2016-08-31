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
    root.Pier.PageImplOfEstagioCartao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PageImplOfEstagioCartao model module.
   * @module model/PageImplOfEstagioCartao
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>PageImplOfEstagioCartao</code>.
   * @alias module:model/PageImplOfEstagioCartao
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>PageImplOfEstagioCartao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageImplOfEstagioCartao} obj Optional instance to populate.
   * @return {module:model/PageImplOfEstagioCartao} The populated <code>PageImplOfEstagioCartao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('totalElements')) {
        obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Integer');
      }
      if (data.hasOwnProperty('totalPages')) {
        obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;

  /**
   * @member {Integer} totalElements
   */
  exports.prototype['totalElements'] = undefined;

  /**
   * @member {Integer} totalPages
   */
  exports.prototype['totalPages'] = undefined;




  return exports;
}));
