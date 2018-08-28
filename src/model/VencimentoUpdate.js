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
    root.Pier.VencimentoUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VencimentoUpdate model module.
   * @module model/VencimentoUpdate
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>VencimentoUpdate</code>.
   * {{{vencimento_update_description}}}
   * @alias module:model/VencimentoUpdate
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>VencimentoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VencimentoUpdate} obj Optional instance to populate.
   * @return {module:model/VencimentoUpdate} The populated <code>VencimentoUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataPrevistaCorte')) {
        obj['dataPrevistaCorte'] = ApiClient.convertToType(data['dataPrevistaCorte'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{vencimento_update_data_prevista_corte_value}}}
   * @member {String} dataPrevistaCorte
   */
  exports.prototype['dataPrevistaCorte'] = undefined;




  return exports;
}));
