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
    root.Pier.ChaveCriptografiaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChaveCriptografiaResponse model module.
   * @module model/ChaveCriptografiaResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ChaveCriptografiaResponse</code>.
   * {{{chave_criptografia_resposta_descricao}}}
   * @alias module:model/ChaveCriptografiaResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ChaveCriptografiaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChaveCriptografiaResponse} obj Optional instance to populate.
   * @return {module:model/ChaveCriptografiaResponse} The populated <code>ChaveCriptografiaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{chave_criptografia_resposta_texto_conteudo}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;




  return exports;
}));
