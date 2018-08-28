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
    root.Pier.ContestarCompraRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContestarCompraRequest model module.
   * @module model/ContestarCompraRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ContestarCompraRequest</code>.
   * {{{contestar_compra_request_description}}}
   * @alias module:model/ContestarCompraRequest
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ContestarCompraRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContestarCompraRequest} obj Optional instance to populate.
   * @return {module:model/ContestarCompraRequest} The populated <code>ContestarCompraRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codigoChargebackId')) {
        obj['codigoChargebackId'] = ApiClient.convertToType(data['codigoChargebackId'], 'Integer');
      }
      if (data.hasOwnProperty('compras')) {
        obj['compras'] = ApiClient.convertToType(data['compras'], ['Integer']);
      }
      if (data.hasOwnProperty('enviarDocumentos')) {
        obj['enviarDocumentos'] = ApiClient.convertToType(data['enviarDocumentos'], 'Boolean');
      }
      if (data.hasOwnProperty('mensagem')) {
        obj['mensagem'] = ApiClient.convertToType(data['mensagem'], 'String');
      }
      if (data.hasOwnProperty('mensagemCSLight')) {
        obj['mensagemCSLight'] = ApiClient.convertToType(data['mensagemCSLight'], 'String');
      }
      if (data.hasOwnProperty('mensagemChargeback')) {
        obj['mensagemChargeback'] = ApiClient.convertToType(data['mensagemChargeback'], 'String');
      }
      if (data.hasOwnProperty('statusId')) {
        obj['statusId'] = ApiClient.convertToType(data['statusId'], 'Integer');
      }
      if (data.hasOwnProperty('tipoContestacaoId')) {
        obj['tipoContestacaoId'] = ApiClient.convertToType(data['tipoContestacaoId'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} codigoChargebackId
   */
  exports.prototype['codigoChargebackId'] = undefined;

  /**
   * @member {Array.<Integer>} compras
   */
  exports.prototype['compras'] = undefined;

  /**
   * @member {Boolean} enviarDocumentos
   */
  exports.prototype['enviarDocumentos'] = undefined;

  /**
   * @member {String} mensagem
   */
  exports.prototype['mensagem'] = undefined;

  /**
   * @member {String} mensagemCSLight
   */
  exports.prototype['mensagemCSLight'] = undefined;

  /**
   * @member {String} mensagemChargeback
   */
  exports.prototype['mensagemChargeback'] = undefined;

  /**
   * @member {Integer} statusId
   */
  exports.prototype['statusId'] = undefined;

  /**
   * @member {Integer} tipoContestacaoId
   */
  exports.prototype['tipoContestacaoId'] = undefined;




  return exports;
}));
