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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>DocumentoDetalheResponse</code>.
   * {{{documento_detalhe_response_description}}}
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
   * {{{documento_detalhe_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{documento_detalhe_response_propriedade_value}}}
   * @member {String} propriedade
   */
  exports.prototype['propriedade'] = undefined;

  /**
   * {{{documento_detalhe_response_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;




  return exports;
}));
