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
    root.Pier.SensibilizarSaldoGlobalUpdateValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SensibilizarSaldoGlobalUpdateValue model module.
   * @module model/SensibilizarSaldoGlobalUpdateValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>SensibilizarSaldoGlobalUpdateValue</code>.
   * {{{sensibilizar_saldo_global_update_description}}}
   * @alias module:model/SensibilizarSaldoGlobalUpdateValue
   * @class
   * @param valor
   */
  var exports = function(valor) {

    this['valor'] = valor;
  };

  /**
   * Constructs a <code>SensibilizarSaldoGlobalUpdateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SensibilizarSaldoGlobalUpdateValue} obj Optional instance to populate.
   * @return {module:model/SensibilizarSaldoGlobalUpdateValue} The populated <code>SensibilizarSaldoGlobalUpdateValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{sensibilizar_saldo_global_update_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;




  return exports;
}));
