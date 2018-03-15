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
    root.Pier.AcordoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AcordoResponse model module.
   * @module model/AcordoResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>AcordoResponse</code>.
   * Objeto Acordo
   * @alias module:model/AcordoResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>AcordoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcordoResponse} obj Optional instance to populate.
   * @return {module:model/AcordoResponse} The populated <code>AcordoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('statusAcordo')) {
        obj['statusAcordo'] = ApiClient.convertToType(data['statusAcordo'], 'Integer');
      }
      if (data.hasOwnProperty('valorAcordo')) {
        obj['valorAcordo'] = ApiClient.convertToType(data['valorAcordo'], 'Number');
      }
      if (data.hasOwnProperty('dataAcordo')) {
        obj['dataAcordo'] = ApiClient.convertToType(data['dataAcordo'], 'String');
      }
      if (data.hasOwnProperty('quantidadeParcelas')) {
        obj['quantidadeParcelas'] = ApiClient.convertToType(data['quantidadeParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('saldoAtualFinal')) {
        obj['saldoAtualFinal'] = ApiClient.convertToType(data['saldoAtualFinal'], 'Number');
      }
      if (data.hasOwnProperty('diasEmAtraso')) {
        obj['diasEmAtraso'] = ApiClient.convertToType(data['diasEmAtraso'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do acordo (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Status do acordo.
   * @member {Integer} statusAcordo
   */
  exports.prototype['statusAcordo'] = undefined;

  /**
   * Valor do Acordo.
   * @member {Number} valorAcordo
   */
  exports.prototype['valorAcordo'] = undefined;

  /**
   * Data e Hora do acordo.
   * @member {String} dataAcordo
   */
  exports.prototype['dataAcordo'] = undefined;

  /**
   * Quantidade de parcelas do acordo.
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * Saldo atual final.
   * @member {Number} saldoAtualFinal
   */
  exports.prototype['saldoAtualFinal'] = undefined;

  /**
   * Dias em atraso.
   * @member {Integer} diasEmAtraso
   */
  exports.prototype['diasEmAtraso'] = undefined;




  return exports;
}));
