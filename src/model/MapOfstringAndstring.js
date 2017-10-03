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
    root.Pier.MapOfstringAndstring = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MapOfstringAndstring model module.
   * @module model/MapOfstringAndstring
   * @version 2.38.1
   */

  /**
   * Constructs a new <code>MapOfstringAndstring</code>.
   * @alias module:model/MapOfstringAndstring
   * @class
   * @extends module:model/Object&lt;String, String&gt;
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>MapOfstringAndstring</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapOfstringAndstring} obj Optional instance to populate.
   * @return {module:model/MapOfstringAndstring} The populated <code>MapOfstringAndstring</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      Object&lt;String, String&gt;.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(Object&lt;String, String&gt;.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
