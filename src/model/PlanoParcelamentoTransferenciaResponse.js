(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ParcelamentoTransferenciaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ParcelamentoTransferenciaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PlanoParcelamentoTransferenciaResponse = factory(root.Pier.ApiClient, root.Pier.ParcelamentoTransferenciaResponse);
  }
}(this, function(ApiClient, ParcelamentoTransferenciaResponse) {
  'use strict';

  /**
   * The PlanoParcelamentoTransferenciaResponse model module.
   * @module model/PlanoParcelamentoTransferenciaResponse
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>PlanoParcelamentoTransferenciaResponse</code>.
   * Parcelamento para Transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para contas banc\u00C3\u00A1rias
   * @alias module:model/PlanoParcelamentoTransferenciaResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>PlanoParcelamentoTransferenciaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoParcelamentoTransferenciaResponse} obj Optional instance to populate.
   * @return {module:model/PlanoParcelamentoTransferenciaResponse} The populated <code>PlanoParcelamentoTransferenciaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codigoEspecial')) {
        obj['codigoEspecial'] = ApiClient.convertToType(data['codigoEspecial'], 'Integer');
      }
      if (data.hasOwnProperty('vencimentoPrimeiraParcela')) {
        obj['vencimentoPrimeiraParcela'] = ApiClient.convertToType(data['vencimentoPrimeiraParcela'], 'String');
      }
      if (data.hasOwnProperty('flagJuros')) {
        obj['flagJuros'] = ApiClient.convertToType(data['flagJuros'], 'Integer');
      }
      if (data.hasOwnProperty('numeroMesesCarencia')) {
        obj['numeroMesesCarencia'] = ApiClient.convertToType(data['numeroMesesCarencia'], 'Integer');
      }
      if (data.hasOwnProperty('parcelas')) {
        obj['parcelas'] = ApiClient.convertToType(data['parcelas'], [ParcelamentoTransferenciaResponse]);
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de processamento da transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} codigoEspecial
   */
  exports.prototype['codigoEspecial'] = undefined;

  /**
   * Data de vencimento da primeira parcela.
   * @member {String} vencimentoPrimeiraParcela
   */
  exports.prototype['vencimentoPrimeiraParcela'] = undefined;

  /**
   * Flag indicativa para juros.
   * @member {Integer} flagJuros
   */
  exports.prototype['flagJuros'] = undefined;

  /**
   * N\u00C3\u00BAmero de meses para car\u00C3\u00AAncia.
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;

  /**
   * Lista com os planos de parcelamento.
   * @member {Array.<module:model/ParcelamentoTransferenciaResponse>} parcelas
   */
  exports.prototype['parcelas'] = undefined;




  return exports;
}));
