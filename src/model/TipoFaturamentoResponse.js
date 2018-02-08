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
   * @version 2.54.0
   */

  /**
   * Constructs a new <code>TipoFaturamentoResponse</code>.
   * Objeto Faturamento
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
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Desci\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Flag que representa que o faturamento ser\u00C3\u00A1 apenas demonstrativo.
   * @member {Boolean} flagApenasDemonstrativo
   */
  exports.prototype['flagApenasDemonstrativo'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do conv\u00C3\u00AAnio relacionado ao tipo de faturamento.
   * @member {Integer} idConvenio
   */
  exports.prototype['idConvenio'] = undefined;




  return exports;
}));
