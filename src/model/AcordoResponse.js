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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>AcordoResponse</code>.
   * {{{acordo_response_description}}}
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
   * {{{acordo_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{acordo_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{acordo_response_status_acordo_value}}}
   * @member {Integer} statusAcordo
   */
  exports.prototype['statusAcordo'] = undefined;

  /**
   * {{{acordo_response_valor_acordo_value}}}
   * @member {Number} valorAcordo
   */
  exports.prototype['valorAcordo'] = undefined;

  /**
   * {{{acordo_response_data_acordo_value}}}
   * @member {String} dataAcordo
   */
  exports.prototype['dataAcordo'] = undefined;

  /**
   * {{{acordo_response_quantidade_parcelas_value}}}
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * {{{acordo_response_saldo_atual_final_value}}}
   * @member {Number} saldoAtualFinal
   */
  exports.prototype['saldoAtualFinal'] = undefined;

  /**
   * {{{acordo_response_dias_em_atraso_value}}}
   * @member {Integer} diasEmAtraso
   */
  exports.prototype['diasEmAtraso'] = undefined;




  return exports;
}));
