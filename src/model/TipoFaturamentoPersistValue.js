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
    root.Pier.TipoFaturamentoPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoFaturamentoPersistValue model module.
   * @module model/TipoFaturamentoPersistValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>TipoFaturamentoPersistValue</code>.
   * {{{tipo_faturamento_persist_description}}}
   * @alias module:model/TipoFaturamentoPersistValue
   * @class
   * @param descricao
   * @param flagApenasDemonstrativo
   */
  var exports = function(descricao, flagApenasDemonstrativo) {

    this['descricao'] = descricao;
    this['flagApenasDemonstrativo'] = flagApenasDemonstrativo;

  };

  /**
   * Constructs a <code>TipoFaturamentoPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoFaturamentoPersistValue} obj Optional instance to populate.
   * @return {module:model/TipoFaturamentoPersistValue} The populated <code>TipoFaturamentoPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('flagApenasDemonstrativo')) {
        obj['flagApenasDemonstrativo'] = ApiClient.convertToType(data['flagApenasDemonstrativo'], 'Boolean');
      }
      if (data.hasOwnProperty('idConvenio')) {
        obj['idConvenio'] = ApiClient.convertToType(data['idConvenio'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{tipo_faturamento_persist_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_faturamento_persist_flag_apenas_demonstrativo_value}}}
   * @member {Boolean} flagApenasDemonstrativo
   */
  exports.prototype['flagApenasDemonstrativo'] = undefined;

  /**
   * {{{tipo_faturamento_persist_id_convenio_value}}}
   * @member {Integer} idConvenio
   */
  exports.prototype['idConvenio'] = undefined;




  return exports;
}));
