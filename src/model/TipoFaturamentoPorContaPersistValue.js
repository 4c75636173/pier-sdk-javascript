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
    root.Pier.TipoFaturamentoPorContaPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoFaturamentoPorContaPersistValue model module.
   * @module model/TipoFaturamentoPorContaPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TipoFaturamentoPorContaPersistValue</code>.
   * {{{tipo_faturamento_por_conta_persist_description}}}
   * @alias module:model/TipoFaturamentoPorContaPersistValue
   * @class
   * @param idConta
   * @param idTipoFaturamento
   */
  var exports = function(idConta, idTipoFaturamento) {

    this['idConta'] = idConta;
    this['idTipoFaturamento'] = idTipoFaturamento;
  };

  /**
   * Constructs a <code>TipoFaturamentoPorContaPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoFaturamentoPorContaPersistValue} obj Optional instance to populate.
   * @return {module:model/TipoFaturamentoPorContaPersistValue} The populated <code>TipoFaturamentoPorContaPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoFaturamento')) {
        obj['idTipoFaturamento'] = ApiClient.convertToType(data['idTipoFaturamento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{tipo_faturamento_por_conta_persist_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{tipo_faturamento_por_conta_persist_id_tipo_faturamento_value}}}
   * @member {Integer} idTipoFaturamento
   */
  exports.prototype['idTipoFaturamento'] = undefined;




  return exports;
}));
