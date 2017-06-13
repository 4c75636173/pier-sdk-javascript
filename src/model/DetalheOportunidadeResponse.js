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
    root.Pier.DetalheOportunidadeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DetalheOportunidadeResponse model module.
   * @module model/DetalheOportunidadeResponse
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>DetalheOportunidadeResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do detalhe da resposta do recurso Oportunidades
   * @alias module:model/DetalheOportunidadeResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DetalheOportunidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalheOportunidadeResponse} obj Optional instance to populate.
   * @return {module:model/DetalheOportunidadeResponse} The populated <code>DetalheOportunidadeResponse</code> instance.
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
   * C\u00C3\u00B3digo identificador do detalhe
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do conte\u00C3\u00BAdo
   * @member {String} nomeCampo
   */
  exports.prototype['nomeCampo'] = undefined;

  /**
   * Conte\u00C3\u00BAdo do detalhe
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;




  return exports;
}));
