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
    root.Pier.ReferenciaComercialAprovadoPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReferenciaComercialAprovadoPersistValue model module.
   * @module model/ReferenciaComercialAprovadoPersistValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>ReferenciaComercialAprovadoPersistValue</code>.
   * {{{referencia_comercial_aprovado_persist_description}}}
   * @alias module:model/ReferenciaComercialAprovadoPersistValue
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ReferenciaComercialAprovadoPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReferenciaComercialAprovadoPersistValue} obj Optional instance to populate.
   * @return {module:model/ReferenciaComercialAprovadoPersistValue} The populated <code>ReferenciaComercialAprovadoPersistValue</code> instance.
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
   * {{{referencia_comercial_aprovado_persist_razao_social_value}}}
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_persist_nome_contrato_value}}}
   * @member {String} nomeContrato
   */
  exports.prototype['nomeContrato'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_persist_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_persist_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_persist_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));
