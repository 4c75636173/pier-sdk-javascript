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
    root.Pier.DetalheAjusteLoteUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DetalheAjusteLoteUpdate model module.
   * @module model/DetalheAjusteLoteUpdate
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>DetalheAjusteLoteUpdate</code>.
   * {{{arquivo_ajuste_lote_request_description}}}
   * @alias module:model/DetalheAjusteLoteUpdate
   * @class
   * @param status
   */
  var exports = function(status) {

    this['status'] = status;
  };

  /**
   * Constructs a <code>DetalheAjusteLoteUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalheAjusteLoteUpdate} obj Optional instance to populate.
   * @return {module:model/DetalheAjusteLoteUpdate} The populated <code>DetalheAjusteLoteUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{detalhe_ajuste_lote_update_name_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
