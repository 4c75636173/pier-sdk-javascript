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
    root.Pier.GradePendenteRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GradePendenteRequest model module.
   * @module model/GradePendenteRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>GradePendenteRequest</code>.
   * {{{grade_pendente_request_description}}}
   * @alias module:model/GradePendenteRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>GradePendenteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GradePendenteRequest} obj Optional instance to populate.
   * @return {module:model/GradePendenteRequest} The populated <code>GradePendenteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('dataBase')) {
        obj['dataBase'] = ApiClient.convertToType(data['dataBase'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{grade_pendente_request_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{grade_pendente_request_data_base_value}}}
   * @member {String} dataBase
   */
  exports.prototype['dataBase'] = undefined;




  return exports;
}));
