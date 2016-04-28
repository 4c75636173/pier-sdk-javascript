(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AuthToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthToken'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.Body = factory(root.Pier.ApiClient, root.Pier.AuthToken);
  }
}(this, function(ApiClient, AuthToken) {
  'use strict';

  /**
   * The Body model module.
   * @module model/Body
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Body</code>.
   * @alias module:model/Body
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body} obj Optional instance to populate.
   * @return {module:model/Body} The populated <code>Body</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('AuthToken')) {
        obj['AuthToken'] = AuthToken.constructFromObject(data['AuthToken']);
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {module:model/AuthToken} AuthToken
   */
  exports.prototype['AuthToken'] = undefined;

  /**
   * @member {module:model/Body.ActionEnum} action
   */
  exports.prototype['action'] = undefined;

  /**
   * @member {String} user
   */
  exports.prototype['user'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = { 
    /**
     * value: CREATED
     * @const
     */
    CREATED: "CREATED",
    
    /**
     * value: UPDATED
     * @const
     */
    UPDATED: "UPDATED",
    
    /**
     * value: DELETED
     * @const
     */
    DELETED: "DELETED"
  };

  return exports;
}));
