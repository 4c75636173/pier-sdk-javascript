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
    root.Pier.IntegracaoEmissorPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IntegracaoEmissorPersist model module.
   * @module model/IntegracaoEmissorPersist
   * @version 2.39.3
   */

  /**
   * Constructs a new <code>IntegracaoEmissorPersist</code>.
   * Representa a requisi\u00C3\u00A7\u00C3\u00A3o do recurso de incluir integra\u00C3\u00A7\u00C3\u00A3o emissor
   * @alias module:model/IntegracaoEmissorPersist
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>IntegracaoEmissorPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegracaoEmissorPersist} obj Optional instance to populate.
   * @return {module:model/IntegracaoEmissorPersist} The populated <code>IntegracaoEmissorPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('canalEntrada')) {
        obj['canalEntrada'] = ApiClient.convertToType(data['canalEntrada'], 'String');
      }
    }
    return obj;
  }


  /**
   * Canal de entrada onde deve ser informado o dispositivo usado na comunica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} canalEntrada
   */
  exports.prototype['canalEntrada'] = undefined;




  return exports;
}));
