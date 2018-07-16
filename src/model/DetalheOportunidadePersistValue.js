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
    root.Pier.DetalheOportunidadePersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DetalheOportunidadePersistValue model module.
   * @module model/DetalheOportunidadePersistValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DetalheOportunidadePersistValue</code>.
   * {{{detalhe_oportunidade_persist_description}}}
   * @alias module:model/DetalheOportunidadePersistValue
   * @class
   * @param nomeCampo
   * @param conteudo
   */
  var exports = function(nomeCampo, conteudo) {

    this['nomeCampo'] = nomeCampo;
    this['conteudo'] = conteudo;
  };

  /**
   * Constructs a <code>DetalheOportunidadePersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalheOportunidadePersistValue} obj Optional instance to populate.
   * @return {module:model/DetalheOportunidadePersistValue} The populated <code>DetalheOportunidadePersistValue</code> instance.
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
   * {{{detalhe_oportunidade_persist_nome_campo_value}}}
   * @member {String} nomeCampo
   */
  exports.prototype['nomeCampo'] = undefined;

  /**
   * {{{detalhe_oportunidade_persist_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;




  return exports;
}));
