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
    root.Pier.ArquivoDetalhesPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ArquivoDetalhesPersist model module.
   * @module model/ArquivoDetalhesPersist
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>ArquivoDetalhesPersist</code>.
   * Objeto ArquivoParametros para persist\u00C3\u00AAncia de dados.
   * @alias module:model/ArquivoDetalhesPersist
   * @class
   * @param nomeCampo
   * @param conteudo
   */
  var exports = function(nomeCampo, conteudo) {

    this['nomeCampo'] = nomeCampo;
    this['conteudo'] = conteudo;
  };

  /**
   * Constructs a <code>ArquivoDetalhesPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArquivoDetalhesPersist} obj Optional instance to populate.
   * @return {module:model/ArquivoDetalhesPersist} The populated <code>ArquivoDetalhesPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
