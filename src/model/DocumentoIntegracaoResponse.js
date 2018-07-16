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
    root.Pier.DocumentoIntegracaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentoIntegracaoResponse model module.
   * @module model/DocumentoIntegracaoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DocumentoIntegracaoResponse</code>.
   * {{{documento_integracao_response_description}}}
   * @alias module:model/DocumentoIntegracaoResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DocumentoIntegracaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoIntegracaoResponse} obj Optional instance to populate.
   * @return {module:model/DocumentoIntegracaoResponse} The populated <code>DocumentoIntegracaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTemplate')) {
        obj['idTemplate'] = ApiClient.convertToType(data['idTemplate'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{documento_integracao_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{documento_integracao_response_id_template_value}}}
   * @member {Integer} idTemplate
   */
  exports.prototype['idTemplate'] = undefined;

  /**
   * {{{documento_integracao_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
