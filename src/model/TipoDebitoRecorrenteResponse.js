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
    root.Pier.TipoDebitoRecorrenteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoDebitoRecorrenteResponse model module.
   * @module model/TipoDebitoRecorrenteResponse
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>TipoDebitoRecorrenteResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de Tipo Debito Recorrente
   * @alias module:model/TipoDebitoRecorrenteResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TipoDebitoRecorrenteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoDebitoRecorrenteResponse} obj Optional instance to populate.
   * @return {module:model/TipoDebitoRecorrenteResponse} The populated <code>TipoDebitoRecorrenteResponse</code> instance.
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
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Valor do tipo de d\u00C3\u00A9bito recorrente.
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * Flag que identifica se o tipo d\u00C3\u00A9bito recorrente est\u00C3\u00A1 ativo.
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
