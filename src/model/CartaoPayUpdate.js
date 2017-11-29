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
    root.Pier.CartaoPayUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoPayUpdate model module.
   * @module model/CartaoPayUpdate
   * @version 2.46.4
   */

  /**
   * Constructs a new <code>CartaoPayUpdate</code>.
   * Represneta\u00C3\u00A7\u00C3\u00A3o do recurso atualizar cart\u00C3\u00A3o
   * @alias module:model/CartaoPayUpdate
   * @class
   * @param status
   */
  var exports = function(status) {

    this['status'] = status;
  };

  /**
   * Constructs a <code>CartaoPayUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoPayUpdate} obj Optional instance to populate.
   * @return {module:model/CartaoPayUpdate} The populated <code>CartaoPayUpdate</code> instance.
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
   * Status do cart\u00C3\u00A3o
   * @member {module:model/CartaoPayUpdate.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO",
    
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO",
    
    /**
     * value: BLOQUEADO
     * @const
     */
    BLOQUEADO: "BLOQUEADO"
  };

  return exports;
}));
