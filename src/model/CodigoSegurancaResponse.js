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
    root.Pier.CodigoSegurancaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CodigoSegurancaResponse model module.
   * @module model/CodigoSegurancaResponse
   * @version 2.38.1
   */

  /**
   * Constructs a new <code>CodigoSegurancaResponse</code>.
   * Objeto codigo seguranca
   * @alias module:model/CodigoSegurancaResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>CodigoSegurancaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CodigoSegurancaResponse} obj Optional instance to populate.
   * @return {module:model/CodigoSegurancaResponse} The populated <code>CodigoSegurancaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('modoEnvio')) {
        obj['modoEnvio'] = ApiClient.convertToType(data['modoEnvio'], 'String');
      }
      if (data.hasOwnProperty('contato')) {
        obj['contato'] = ApiClient.convertToType(data['contato'], 'String');
      }
      if (data.hasOwnProperty('ativo')) {
        obj['ativo'] = ApiClient.convertToType(data['ativo'], 'Boolean');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do c\u00C3\u00B3digo de seguranca (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Emissor (idEmissor).
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * Apresenta o Modo de Envio do C\u00C3\u00B3digo de Seguran\u00C3\u00A7a.
   * @member {String} modoEnvio
   */
  exports.prototype['modoEnvio'] = undefined;

  /**
   * Apresenta o contato do c\u00C3\u00B3digo de seguran\u00C3\u00A7a.
   * @member {String} contato
   */
  exports.prototype['contato'] = undefined;

  /**
   * Apresenta o status do c\u00C3\u00B3digo de seguran\u00C3\u00A7a.
   * @member {Boolean} ativo
   */
  exports.prototype['ativo'] = undefined;

  /**
   * Apresenta a data de validade do c\u00C3\u00B3digo de seguran\u00C3\u00A7a gerado.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;




  return exports;
}));
