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
    root.Pier.ConsultarSaldoLimitesResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConsultarSaldoLimitesResponse model module.
   * @module model/ConsultarSaldoLimitesResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ConsultarSaldoLimitesResponse</code>.
   * @alias module:model/ConsultarSaldoLimitesResponse
   * @class
   */
  var exports = function() {

















  };

  /**
   * Constructs a <code>ConsultarSaldoLimitesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultarSaldoLimitesResponse} obj Optional instance to populate.
   * @return {module:model/ConsultarSaldoLimitesResponse} The populated <code>ConsultarSaldoLimitesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codRetorno')) {
        obj['codRetorno'] = ApiClient.convertToType(data['codRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('codigoRetorno')) {
        obj['codigoRetorno'] = ApiClient.convertToType(data['codigoRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoRetorno')) {
        obj['descricaoRetorno'] = ApiClient.convertToType(data['descricaoRetorno'], 'String');
      }
      if (data.hasOwnProperty('disponibCompraNac')) {
        obj['disponibCompraNac'] = ApiClient.convertToType(data['disponibCompraNac'], 'Number');
      }
      if (data.hasOwnProperty('disponibGlobalCredito')) {
        obj['disponibGlobalCredito'] = ApiClient.convertToType(data['disponibGlobalCredito'], 'Number');
      }
      if (data.hasOwnProperty('disponibParceladoNac')) {
        obj['disponibParceladoNac'] = ApiClient.convertToType(data['disponibParceladoNac'], 'Number');
      }
      if (data.hasOwnProperty('disponibParcelasNac')) {
        obj['disponibParcelasNac'] = ApiClient.convertToType(data['disponibParcelasNac'], 'Number');
      }
      if (data.hasOwnProperty('disponibSaqueNacGlobal')) {
        obj['disponibSaqueNacGlobal'] = ApiClient.convertToType(data['disponibSaqueNacGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteCompraNac')) {
        obj['limiteCompraNac'] = ApiClient.convertToType(data['limiteCompraNac'], 'Number');
      }
      if (data.hasOwnProperty('limiteGlobalCredito')) {
        obj['limiteGlobalCredito'] = ApiClient.convertToType(data['limiteGlobalCredito'], 'Number');
      }
      if (data.hasOwnProperty('limiteParceladoNac')) {
        obj['limiteParceladoNac'] = ApiClient.convertToType(data['limiteParceladoNac'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelasNac')) {
        obj['limiteParcelasNac'] = ApiClient.convertToType(data['limiteParcelasNac'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaqueNacGlobal')) {
        obj['limiteSaqueNacGlobal'] = ApiClient.convertToType(data['limiteSaqueNacGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaqueNacPeriodo')) {
        obj['limiteSaqueNacPeriodo'] = ApiClient.convertToType(data['limiteSaqueNacPeriodo'], 'Number');
      }
      if (data.hasOwnProperty('rendaComprovada')) {
        obj['rendaComprovada'] = ApiClient.convertToType(data['rendaComprovada'], 'Number');
      }
      if (data.hasOwnProperty('solicitacaoPendente')) {
        obj['solicitacaoPendente'] = ApiClient.convertToType(data['solicitacaoPendente'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} codRetorno
   */
  exports.prototype['codRetorno'] = undefined;

  /**
   * @member {Integer} codigoRetorno
   */
  exports.prototype['codigoRetorno'] = undefined;

  /**
   * @member {String} descricaoRetorno
   */
  exports.prototype['descricaoRetorno'] = undefined;

  /**
   * @member {Number} disponibCompraNac
   */
  exports.prototype['disponibCompraNac'] = undefined;

  /**
   * @member {Number} disponibGlobalCredito
   */
  exports.prototype['disponibGlobalCredito'] = undefined;

  /**
   * @member {Number} disponibParceladoNac
   */
  exports.prototype['disponibParceladoNac'] = undefined;

  /**
   * @member {Number} disponibParcelasNac
   */
  exports.prototype['disponibParcelasNac'] = undefined;

  /**
   * @member {Number} disponibSaqueNacGlobal
   */
  exports.prototype['disponibSaqueNacGlobal'] = undefined;

  /**
   * @member {Number} limiteCompraNac
   */
  exports.prototype['limiteCompraNac'] = undefined;

  /**
   * @member {Number} limiteGlobalCredito
   */
  exports.prototype['limiteGlobalCredito'] = undefined;

  /**
   * @member {Number} limiteParceladoNac
   */
  exports.prototype['limiteParceladoNac'] = undefined;

  /**
   * @member {Number} limiteParcelasNac
   */
  exports.prototype['limiteParcelasNac'] = undefined;

  /**
   * @member {Number} limiteSaqueNacGlobal
   */
  exports.prototype['limiteSaqueNacGlobal'] = undefined;

  /**
   * @member {Number} limiteSaqueNacPeriodo
   */
  exports.prototype['limiteSaqueNacPeriodo'] = undefined;

  /**
   * @member {Number} rendaComprovada
   */
  exports.prototype['rendaComprovada'] = undefined;

  /**
   * @member {Boolean} solicitacaoPendente
   */
  exports.prototype['solicitacaoPendente'] = undefined;




  return exports;
}));
