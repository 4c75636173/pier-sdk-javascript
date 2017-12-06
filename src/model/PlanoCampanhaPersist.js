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
    root.Pier.PlanoCampanhaPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlanoCampanhaPersist model module.
   * @module model/PlanoCampanhaPersist
   * @version 2.47.3
   */

  /**
   * Constructs a new <code>PlanoCampanhaPersist</code>.
   * PlanoCampanha
   * @alias module:model/PlanoCampanhaPersist
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>PlanoCampanhaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoCampanhaPersist} obj Optional instance to populate.
   * @return {module:model/PlanoCampanhaPersist} The populated <code>PlanoCampanhaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('parcelas')) {
        obj['parcelas'] = ApiClient.convertToType(data['parcelas'], 'Integer');
      }
      if (data.hasOwnProperty('taxa')) {
        obj['taxa'] = ApiClient.convertToType(data['taxa'], 'Number');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} parcelas
   */
  exports.prototype['parcelas'] = undefined;

  /**
   * @member {Number} taxa
   */
  exports.prototype['taxa'] = undefined;

  /**
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;




  return exports;
}));
