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
    root.Pier.ArquivoParametroResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ArquivoParametroResponse model module.
   * @module model/ArquivoParametroResponse
   * @version 2.50.14
   */

  /**
   * Constructs a new <code>ArquivoParametroResponse</code>.
   * Objeto Response de par\u00C3\u00A2metros do arquivo.
   * @alias module:model/ArquivoParametroResponse
   * @class
   * @param nomeCampo
   * @param conteudo
   */
  var exports = function(nomeCampo, conteudo) {


    this['nomeCampo'] = nomeCampo;
    this['conteudo'] = conteudo;
  };

  /**
   * Constructs a <code>ArquivoParametroResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArquivoParametroResponse} obj Optional instance to populate.
   * @return {module:model/ArquivoParametroResponse} The populated <code>ArquivoParametroResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nomeCampo')) {
        obj['nomeCampo'] = ApiClient.convertToType(data['nomeCampo'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do detalhe do arquivo.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome que identifica o detalhe do arquivo
   * @member {String} nomeCampo
   */
  exports.prototype['nomeCampo'] = undefined;

  /**
   * Conte\u00C3\u00BAdo do nomeCampo
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;




  return exports;
}));
