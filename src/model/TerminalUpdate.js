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
    root.Pier.TerminalUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TerminalUpdate model module.
   * @module model/TerminalUpdate
   * @version 2.51.0
   */

  /**
   * Constructs a new <code>TerminalUpdate</code>.
   * TerminalUpdate
   * @alias module:model/TerminalUpdate
   * @class
   * @param flagConsultaExtrato
   * @param flagTerminalVirtual
   */
  var exports = function(flagConsultaExtrato, flagTerminalVirtual) {

    this['flagConsultaExtrato'] = flagConsultaExtrato;
    this['flagTerminalVirtual'] = flagTerminalVirtual;
  };

  /**
   * Constructs a <code>TerminalUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TerminalUpdate} obj Optional instance to populate.
   * @return {module:model/TerminalUpdate} The populated <code>TerminalUpdate</code> instance.
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
   * Flag indicando se o terminal permite consultar extrato, sendo: (true: Sim), (false: N\u00C3\u00A3o)).
   * @member {Boolean} flagConsultaExtrato
   */
  exports.prototype['flagConsultaExtrato'] = undefined;

  /**
   * Flag indicando se o terminal \u00C3\u00A9 f\u00C3\u00ADsico ou virtual, sendo: (true: Sim), (false: N\u00C3\u00A3o)).
   * @member {Boolean} flagTerminalVirtual
   */
  exports.prototype['flagTerminalVirtual'] = undefined;




  return exports;
}));
