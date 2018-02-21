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
    root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlanoParcelamentoTransferenciaCreditoContaBancariaRequest model module.
   * @module model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>PlanoParcelamentoTransferenciaCreditoContaBancariaRequest</code>.
   * Transfer\u00C3\u00AAncia cr\u00C3\u00A9dito conta banc\u00C3\u00A1ria request
   * @alias module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest
   * @class
   * @param idCartao
   * @param valorTransacao
   * @param numeroMesesCarencia
   */
  var exports = function(idCartao, valorTransacao, numeroMesesCarencia) {

    this['idCartao'] = idCartao;
    this['valorTransacao'] = valorTransacao;
    this['numeroMesesCarencia'] = numeroMesesCarencia;
  };

  /**
   * Constructs a <code>PlanoParcelamentoTransferenciaCreditoContaBancariaRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} obj Optional instance to populate.
   * @return {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} The populated <code>PlanoParcelamentoTransferenciaCreditoContaBancariaRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('numeroMesesCarencia')) {
        obj['numeroMesesCarencia'] = ApiClient.convertToType(data['numeroMesesCarencia'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o com duas casas decimais para os centavos.
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * Representa o N\u00C3\u00BAmero de Meses concedido como car\u00C3\u00AAncia.
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;




  return exports;
}));
