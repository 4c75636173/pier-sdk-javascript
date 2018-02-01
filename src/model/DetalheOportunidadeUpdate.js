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
    root.Pier.DetalheOportunidadeUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DetalheOportunidadeUpdate model module.
   * @module model/DetalheOportunidadeUpdate
   * @version 2.51.0
   */

  /**
   * Constructs a new <code>DetalheOportunidadeUpdate</code>.
   * Objeto DetalheOportunidade
   * @alias module:model/DetalheOportunidadeUpdate
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DetalheOportunidadeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalheOportunidadeUpdate} obj Optional instance to populate.
   * @return {module:model/DetalheOportunidadeUpdate} The populated <code>DetalheOportunidadeUpdate</code> instance.
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
