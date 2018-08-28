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
    root.Pier.ChaveCriptografiaRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChaveCriptografiaRequest model module.
   * @module model/ChaveCriptografiaRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ChaveCriptografiaRequest</code>.
   * {{{chave_criptografia_requisicao_descricao}}}
   * @alias module:model/ChaveCriptografiaRequest
   * @class
   * @param idChave
   * @param conteudo
   */
  var exports = function(idChave, conteudo) {

    this['idChave'] = idChave;
    this['conteudo'] = conteudo;
  };

  /**
   * Constructs a <code>ChaveCriptografiaRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChaveCriptografiaRequest} obj Optional instance to populate.
   * @return {module:model/ChaveCriptografiaRequest} The populated <code>ChaveCriptografiaRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idChave')) {
        obj['idChave'] = ApiClient.convertToType(data['idChave'], 'Integer');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{chave_criptografia_requisicao_id_chave_valor}}}
   * @member {Integer} idChave
   */
  exports.prototype['idChave'] = undefined;

  /**
   * {{{chave_criptografia_requisicao_conteudo_valor}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;




  return exports;
}));
