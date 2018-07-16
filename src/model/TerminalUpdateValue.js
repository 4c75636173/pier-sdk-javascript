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
    root.Pier.TerminalUpdateValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TerminalUpdateValue model module.
   * @module model/TerminalUpdateValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TerminalUpdateValue</code>.
   * {{{terminal_update_description}}}
   * @alias module:model/TerminalUpdateValue
   * @class
   * @param flagConsultaExtrato
   * @param flagTerminalVirtual
   */
  var exports = function(flagConsultaExtrato, flagTerminalVirtual) {

    this['flagConsultaExtrato'] = flagConsultaExtrato;
    this['flagTerminalVirtual'] = flagTerminalVirtual;
  };

  /**
   * Constructs a <code>TerminalUpdateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TerminalUpdateValue} obj Optional instance to populate.
   * @return {module:model/TerminalUpdateValue} The populated <code>TerminalUpdateValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagConsultaExtrato')) {
        obj['flagConsultaExtrato'] = ApiClient.convertToType(data['flagConsultaExtrato'], 'Boolean');
      }
      if (data.hasOwnProperty('flagTerminalVirtual')) {
        obj['flagTerminalVirtual'] = ApiClient.convertToType(data['flagTerminalVirtual'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{terminal_update_flag_consulta_extrato_value}}}
   * @member {Boolean} flagConsultaExtrato
   */
  exports.prototype['flagConsultaExtrato'] = undefined;

  /**
   * {{{terminal_update_flag_terminal_virtual_value}}}
   * @member {Boolean} flagTerminalVirtual
   */
  exports.prototype['flagTerminalVirtual'] = undefined;




  return exports;
}));
