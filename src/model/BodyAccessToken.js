(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Body'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Body'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.BodyAccessToken = factory(root.Pier.ApiClient, root.Pier.Body);
  }
}(this, function(ApiClient, Body) {
  'use strict';

  /**
   * The BodyAccessToken model module.
   * @module model/BodyAccessToken
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>BodyAccessToken</code>.
   * @alias module:model/BodyAccessToken
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>BodyAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyAccessToken} obj Optional instance to populate.
   * @return {module:model/BodyAccessToken} The populated <code>BodyAccessToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = Body.constructFromObject(data['body']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Body} body
   */
  exports.prototype['body'] = undefined;




  return exports;
}));
