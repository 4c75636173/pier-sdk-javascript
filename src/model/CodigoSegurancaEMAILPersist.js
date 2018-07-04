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
    root.Pier.CodigoSegurancaEMAILPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CodigoSegurancaEMAILPersist model module.
   * @module model/CodigoSegurancaEMAILPersist
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>CodigoSegurancaEMAILPersist</code>.
   * {{{codigo_seguranca_e_m_a_i_l_persist_description}}}
   * @alias module:model/CodigoSegurancaEMAILPersist
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CodigoSegurancaEMAILPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CodigoSegurancaEMAILPersist} obj Optional instance to populate.
   * @return {module:model/CodigoSegurancaEMAILPersist} The populated <code>CodigoSegurancaEMAILPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('codigoSeguranca')) {
        obj['codigoSeguranca'] = ApiClient.convertToType(data['codigoSeguranca'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{codigo_seguranca_e_m_a_i_l_persist_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{codigo_seguranca_e_m_a_i_l_persist_codigo_seguranca_value}}}
   * @member {String} codigoSeguranca
   */
  exports.prototype['codigoSeguranca'] = undefined;




  return exports;
}));
