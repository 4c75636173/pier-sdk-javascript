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
    root.Pier.ControleVencimentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ControleVencimentoResponse model module.
   * @module model/ControleVencimentoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ControleVencimentoResponse</code>.
   * {{{controle_vencimento_response_description}}}
   * @alias module:model/ControleVencimentoResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>ControleVencimentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ControleVencimentoResponse} obj Optional instance to populate.
   * @return {module:model/ControleVencimentoResponse} The populated <code>ControleVencimentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('dataPrevistaCorte')) {
        obj['dataPrevistaCorte'] = ApiClient.convertToType(data['dataPrevistaCorte'], 'String');
      }
      if (data.hasOwnProperty('dataHoraRealizacaoCorte')) {
        obj['dataHoraRealizacaoCorte'] = ApiClient.convertToType(data['dataHoraRealizacaoCorte'], 'String');
      }
      if (data.hasOwnProperty('dataPrevistaFaturamento')) {
        obj['dataPrevistaFaturamento'] = ApiClient.convertToType(data['dataPrevistaFaturamento'], 'String');
      }
      if (data.hasOwnProperty('dataHoraRealizacaoFaturamento')) {
        obj['dataHoraRealizacaoFaturamento'] = ApiClient.convertToType(data['dataHoraRealizacaoFaturamento'], 'String');
      }
      if (data.hasOwnProperty('dataRealVencimento')) {
        obj['dataRealVencimento'] = ApiClient.convertToType(data['dataRealVencimento'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{controle_vencimento_response_data_vencimento_value}}}
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * {{{controle_vencimento_response_data_prevista_corte_value}}}
   * @member {String} dataPrevistaCorte
   */
  exports.prototype['dataPrevistaCorte'] = undefined;

  /**
   * {{{controle_vencimento_response_data_hora_realizacao_corte_value}}}
   * @member {String} dataHoraRealizacaoCorte
   */
  exports.prototype['dataHoraRealizacaoCorte'] = undefined;

  /**
   * {{{controle_vencimento_response_data_prevista_faturamento_value}}}
   * @member {String} dataPrevistaFaturamento
   */
  exports.prototype['dataPrevistaFaturamento'] = undefined;

  /**
   * {{{controle_vencimento_response_data_hora_realizacao_faturamento_value}}}
   * @member {String} dataHoraRealizacaoFaturamento
   */
  exports.prototype['dataHoraRealizacaoFaturamento'] = undefined;

  /**
   * {{{controle_vencimento_response_data_real_vencimento_value}}}
   * @member {String} dataRealVencimento
   */
  exports.prototype['dataRealVencimento'] = undefined;




  return exports;
}));
