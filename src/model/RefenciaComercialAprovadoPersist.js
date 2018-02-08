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
    root.Pier.RefenciaComercialAprovadoPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RefenciaComercialAprovadoPersist model module.
   * @module model/RefenciaComercialAprovadoPersist
   * @version 2.54.0
   */

  /**
   * Constructs a new <code>RefenciaComercialAprovadoPersist</code>.
   * RefenciaAprovadoPersist
   * @alias module:model/RefenciaComercialAprovadoPersist
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>RefenciaComercialAprovadoPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefenciaComercialAprovadoPersist} obj Optional instance to populate.
   * @return {module:model/RefenciaComercialAprovadoPersist} The populated <code>RefenciaComercialAprovadoPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('razaoSocial')) {
        obj['razaoSocial'] = ApiClient.convertToType(data['razaoSocial'], 'String');
      }
      if (data.hasOwnProperty('nomeContrato')) {
        obj['nomeContrato'] = ApiClient.convertToType(data['nomeContrato'], 'String');
      }
      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }


  /**
   * Apresenta o nome completo da raz\u00C3\u00A3o social da refer\u00C3\u00AAncia comercial (nome empresarial)
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * Nome do respons\u00C3\u00A1vel pela refer\u00C3\u00AAncia comercial
   * @member {String} nomeContrato
   */
  exports.prototype['nomeContrato'] = undefined;

  /**
   * DDD do contato da refer\u00C3\u00AAncia comercial
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * N\u00C3\u00BAmero de contato da refer\u00C3\u00AAncia comercial
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * E-mail de contato da refer\u00C3\u00AAncia comercial
   * @member {String} email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));
