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
    root.Pier.AjusteFinanceiroResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AjusteFinanceiroResponse model module.
   * @module model/AjusteFinanceiroResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>AjusteFinanceiroResponse</code>.
   * @alias module:model/AjusteFinanceiroResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>AjusteFinanceiroResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AjusteFinanceiroResponse} obj Optional instance to populate.
   * @return {module:model/AjusteFinanceiroResponse} The populated <code>AjusteFinanceiroResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoAjuste')) {
        obj['idTipoAjuste'] = ApiClient.convertToType(data['idTipoAjuste'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('dataAjuste')) {
        obj['dataAjuste'] = ApiClient.convertToType(data['dataAjuste'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('identificadorExterno')) {
        obj['identificadorExterno'] = ApiClient.convertToType(data['identificadorExterno'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do ajuste (id)
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do tipo do ajuste
   * @member {Integer} idTipoAjuste
   */
  exports.prototype['idTipoAjuste'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o da conta (idConta)
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Data do ajuste
   * @member {String} dataAjuste
   */
  exports.prototype['dataAjuste'] = undefined;

  /**
   * Valor do ajuste
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * Descri\u00E7\u00E3o do status da autoriza\u00E7\u00E3o da compra.
   * @member {String} identificadorExterno
   */
  exports.prototype['identificadorExterno'] = undefined;

  /**
   * Status do ajuste.
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
