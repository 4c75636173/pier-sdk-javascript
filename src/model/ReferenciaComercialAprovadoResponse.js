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
    root.Pier.ReferenciaComercialAprovadoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReferenciaComercialAprovadoResponse model module.
   * @module model/ReferenciaComercialAprovadoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ReferenciaComercialAprovadoResponse</code>.
   * {{{referencia_comercial_aprovado_response_description}}}
   * @alias module:model/ReferenciaComercialAprovadoResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ReferenciaComercialAprovadoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReferenciaComercialAprovadoResponse} obj Optional instance to populate.
   * @return {module:model/ReferenciaComercialAprovadoResponse} The populated <code>ReferenciaComercialAprovadoResponse</code> instance.
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
   * {{{referencia_comercial_aprovado_response_razao_social_value}}}
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_response_nome_contrato_value}}}
   * @member {String} nomeContrato
   */
  exports.prototype['nomeContrato'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_response_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_response_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{referencia_comercial_aprovado_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));
