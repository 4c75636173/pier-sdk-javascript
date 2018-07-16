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
    root.Pier.LimiteDisponibilidadeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LimiteDisponibilidadeResponse model module.
   * @module model/LimiteDisponibilidadeResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>LimiteDisponibilidadeResponse</code>.
   * {{{limite_disponibilidade_response_description}}}
   * @alias module:model/LimiteDisponibilidadeResponse
   * @class
   */
  var exports = function() {























  };

  /**
   * Constructs a <code>LimiteDisponibilidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LimiteDisponibilidadeResponse} obj Optional instance to populate.
   * @return {module:model/LimiteDisponibilidadeResponse} The populated <code>LimiteDisponibilidadeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('limiteGlobal')) {
        obj['limiteGlobal'] = ApiClient.convertToType(data['limiteGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteCompra')) {
        obj['limiteCompra'] = ApiClient.convertToType(data['limiteCompra'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelado')) {
        obj['limiteParcelado'] = ApiClient.convertToType(data['limiteParcelado'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelas')) {
        obj['limiteParcelas'] = ApiClient.convertToType(data['limiteParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaqueGlobal')) {
        obj['limiteSaqueGlobal'] = ApiClient.convertToType(data['limiteSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaquePeriodo')) {
        obj['limiteSaquePeriodo'] = ApiClient.convertToType(data['limiteSaquePeriodo'], 'Number');
      }
      if (data.hasOwnProperty('limiteConsignado')) {
        obj['limiteConsignado'] = ApiClient.convertToType(data['limiteConsignado'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalCompra')) {
        obj['limiteInternacionalCompra'] = ApiClient.convertToType(data['limiteInternacionalCompra'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelado')) {
        obj['limiteInternacionalParcelado'] = ApiClient.convertToType(data['limiteInternacionalParcelado'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelas')) {
        obj['limiteInternacionalParcelas'] = ApiClient.convertToType(data['limiteInternacionalParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaqueGlobal')) {
        obj['limiteInternacionalSaqueGlobal'] = ApiClient.convertToType(data['limiteInternacionalSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaquePeriodo')) {
        obj['limiteInternacionalSaquePeriodo'] = ApiClient.convertToType(data['limiteInternacionalSaquePeriodo'], 'Number');
      }
      if (data.hasOwnProperty('limiteMaximo')) {
        obj['limiteMaximo'] = ApiClient.convertToType(data['limiteMaximo'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelGlobal')) {
        obj['saldoDisponivelGlobal'] = ApiClient.convertToType(data['saldoDisponivelGlobal'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelCompra')) {
        obj['saldoDisponivelCompra'] = ApiClient.convertToType(data['saldoDisponivelCompra'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelado')) {
        obj['saldoDisponivelParcelado'] = ApiClient.convertToType(data['saldoDisponivelParcelado'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelas')) {
        obj['saldoDisponivelParcelas'] = ApiClient.convertToType(data['saldoDisponivelParcelas'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaque')) {
        obj['saldoDisponivelSaque'] = ApiClient.convertToType(data['saldoDisponivelSaque'], 'Number');
      }
      if (data.hasOwnProperty('saldoPontosFidelidade')) {
        obj['saldoPontosFidelidade'] = ApiClient.convertToType(data['saldoPontosFidelidade'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelCompraInternacional')) {
        obj['saldoDisponivelCompraInternacional'] = ApiClient.convertToType(data['saldoDisponivelCompraInternacional'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaqueInternacional')) {
        obj['saldoDisponivelSaqueInternacional'] = ApiClient.convertToType(data['saldoDisponivelSaqueInternacional'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{limite_disponibilidade_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_global_value}}}
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_compra_value}}}
   * @member {Number} limiteCompra
   */
  exports.prototype['limiteCompra'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_parcelado_value}}}
   * @member {Number} limiteParcelado
   */
  exports.prototype['limiteParcelado'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_parcelas_value}}}
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_saque_global_value}}}
   * @member {Number} limiteSaqueGlobal
   */
  exports.prototype['limiteSaqueGlobal'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_saque_periodo_value}}}
   * @member {Number} limiteSaquePeriodo
   */
  exports.prototype['limiteSaquePeriodo'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_consignado_value}}}
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_internacional_compra_value}}}
   * @member {Number} limiteInternacionalCompra
   */
  exports.prototype['limiteInternacionalCompra'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_internacional_parcelado_value}}}
   * @member {Number} limiteInternacionalParcelado
   */
  exports.prototype['limiteInternacionalParcelado'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_internacional_parcelas_value}}}
   * @member {Number} limiteInternacionalParcelas
   */
  exports.prototype['limiteInternacionalParcelas'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_internacional_saque_global_value}}}
   * @member {Number} limiteInternacionalSaqueGlobal
   */
  exports.prototype['limiteInternacionalSaqueGlobal'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_internacional_saque_periodo_value}}}
   * @member {Number} limiteInternacionalSaquePeriodo
   */
  exports.prototype['limiteInternacionalSaquePeriodo'] = undefined;

  /**
   * {{{limite_disponibilidade_response_limite_maximo_value}}}
   * @member {Number} limiteMaximo
   */
  exports.prototype['limiteMaximo'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_disponivel_global_value}}}
   * @member {Number} saldoDisponivelGlobal
   */
  exports.prototype['saldoDisponivelGlobal'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_disponivel_compra_value}}}
   * @member {Number} saldoDisponivelCompra
   */
  exports.prototype['saldoDisponivelCompra'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_disponivel_parcelado_value}}}
   * @member {Number} saldoDisponivelParcelado
   */
  exports.prototype['saldoDisponivelParcelado'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_disponivel_parcelas_value}}}
   * @member {Number} saldoDisponivelParcelas
   */
  exports.prototype['saldoDisponivelParcelas'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_disponivel_saque_value}}}
   * @member {Number} saldoDisponivelSaque
   */
  exports.prototype['saldoDisponivelSaque'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_pontos_fidelidade_value}}}
   * @member {Number} saldoPontosFidelidade
   */
  exports.prototype['saldoPontosFidelidade'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_disponivel_compra_internacional_value}}}
   * @member {Number} saldoDisponivelCompraInternacional
   */
  exports.prototype['saldoDisponivelCompraInternacional'] = undefined;

  /**
   * {{{limite_disponibilidade_response_saldo_disponivel_saque_internacional_value}}}
   * @member {Number} saldoDisponivelSaqueInternacional
   */
  exports.prototype['saldoDisponivelSaqueInternacional'] = undefined;




  return exports;
}));
