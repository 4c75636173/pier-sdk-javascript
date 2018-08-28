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
    root.Pier.TipoFaturamentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoFaturamentoResponse model module.
   * @module model/TipoFaturamentoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TipoFaturamentoResponse</code>.
   * {{{tipo_faturamento_response_description}}}
   * @alias module:model/TipoFaturamentoResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TipoFaturamentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoFaturamentoResponse} obj Optional instance to populate.
   * @return {module:model/TipoFaturamentoResponse} The populated <code>TipoFaturamentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
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
   * {{{tipo_faturamento_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_faturamento_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_faturamento_response_flag_apenas_demonstrativo_value}}}
   * @member {Boolean} flagApenasDemonstrativo
   */
  exports.prototype['flagApenasDemonstrativo'] = undefined;

  /**
   * {{{tipo_faturamento_response_id_convenio_value}}}
   * @member {Integer} idConvenio
   */
  exports.prototype['idConvenio'] = undefined;




  return exports;
}));
