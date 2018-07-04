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
    root.Pier.OperacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OperacaoResponse model module.
   * @module model/OperacaoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>OperacaoResponse</code>.
   * {{{operacao_response_description}}}
   * @alias module:model/OperacaoResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>OperacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperacaoResponse} obj Optional instance to populate.
   * @return {module:model/OperacaoResponse} The populated <code>OperacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idOperacao')) {
        obj['idOperacao'] = ApiClient.convertToType(data['idOperacao'], 'Integer');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('codigoProcessamentoCancelamento')) {
        obj['codigoProcessamentoCancelamento'] = ApiClient.convertToType(data['codigoProcessamentoCancelamento'], 'String');
      }
      if (data.hasOwnProperty('nomeOperacao')) {
        obj['nomeOperacao'] = ApiClient.convertToType(data['nomeOperacao'], 'String');
      }
      if (data.hasOwnProperty('flagCobraJuros')) {
        obj['flagCobraJuros'] = ApiClient.convertToType(data['flagCobraJuros'], 'Boolean');
      }
      if (data.hasOwnProperty('flagCobraTarifa')) {
        obj['flagCobraTarifa'] = ApiClient.convertToType(data['flagCobraTarifa'], 'Boolean');
      }
      if (data.hasOwnProperty('carencia')) {
        obj['carencia'] = ApiClient.convertToType(data['carencia'], 'Integer');
      }
      if (data.hasOwnProperty('flagPermitirParcelamento')) {
        obj['flagPermitirParcelamento'] = ApiClient.convertToType(data['flagPermitirParcelamento'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{operacao_response_id_operacao_value}}}
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * {{{operacao_response_codigo_processamento_value}}}
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * {{{operacao_response_codigo_processamento_cancelamento_value}}}
   * @member {String} codigoProcessamentoCancelamento
   */
  exports.prototype['codigoProcessamentoCancelamento'] = undefined;

  /**
   * {{{operacao_response_nome_operacao_value}}}
   * @member {String} nomeOperacao
   */
  exports.prototype['nomeOperacao'] = undefined;

  /**
   * {{{operacao_response_flag_cobra_juros_value}}}
   * @member {Boolean} flagCobraJuros
   */
  exports.prototype['flagCobraJuros'] = undefined;

  /**
   * {{{operacao_response_flag_cobra_tarifa_value}}}
   * @member {Boolean} flagCobraTarifa
   */
  exports.prototype['flagCobraTarifa'] = undefined;

  /**
   * {{{operacao_response_carencia_value}}}
   * @member {Integer} carencia
   */
  exports.prototype['carencia'] = undefined;

  /**
   * {{{operacao_response_flag_permitir_parcelamento_value}}}
   * @member {Boolean} flagPermitirParcelamento
   */
  exports.prototype['flagPermitirParcelamento'] = undefined;




  return exports;
}));
