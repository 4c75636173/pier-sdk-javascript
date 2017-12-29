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
    root.Pier.DocumentoDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentoDetalheResponse model module.
   * @module model/DocumentoDetalheResponse
   * @version 2.50.5
   */

  /**
   * Constructs a new <code>DocumentoDetalheResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta para o detalhamento do documento
   * @alias module:model/DocumentoDetalheResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DocumentoDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoDetalheResponse} obj Optional instance to populate.
   * @return {module:model/DocumentoDetalheResponse} The populated <code>DocumentoDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('propriedade')) {
        obj['propriedade'] = ApiClient.convertToType(data['propriedade'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
    }
    return obj;
  }


  /**
   * ID de identifica\u00C3\u00A7\u00C3\u00A3o do detalhamento do documento.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Propriedade do detalhamento do documento.
   * @member {String} propriedade
   */
  exports.prototype['propriedade'] = undefined;

  /**
   * Conte\u00C3\u00BAdo do detalhamento do documento.
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;




  return exports;
}));
