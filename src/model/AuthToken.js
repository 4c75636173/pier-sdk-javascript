(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ExtraInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExtraInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AuthToken = factory(root.Pier.ApiClient, root.Pier.ExtraInfo);
  }
}(this, function(ApiClient, ExtraInfo) {
  'use strict';

  /**
   * The AuthToken model module.
   * @module model/AuthToken
   * @version 2.33.0
   */

  /**
   * Constructs a new <code>AuthToken</code>.
   * @alias module:model/AuthToken
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>AuthToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthToken} obj Optional instance to populate.
   * @return {module:model/AuthToken} The populated <code>AuthToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('extraInfo')) {
        obj['extraInfo'] = ExtraInfo.constructFromObject(data['extraInfo']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;

  /**
   * @member {module:model/ExtraInfo} extraInfo
   */
  exports.prototype['extraInfo'] = undefined;

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;

  /**
   * @member {module:model/AuthToken.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: ACTIVE
     * @const
     */
    ACTIVE: "ACTIVE",
    
    /**
     * value: REVOKED
     * @const
     */
    REVOKED: "REVOKED",
    
    /**
     * value: DELETED
     * @const
     */
    DELETED: "DELETED"
  };

  return exports;
}));
