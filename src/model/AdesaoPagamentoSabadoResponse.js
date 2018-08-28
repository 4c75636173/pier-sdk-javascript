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
    root.Pier.AdesaoPagamentoSabadoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AdesaoPagamentoSabadoResponse model module.
   * @module model/AdesaoPagamentoSabadoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AdesaoPagamentoSabadoResponse</code>.
   * {{{adesao_pagamento_sabado_resposta_descricao}}}
   * @alias module:model/AdesaoPagamentoSabadoResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>AdesaoPagamentoSabadoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdesaoPagamentoSabadoResponse} obj Optional instance to populate.
   * @return {module:model/AdesaoPagamentoSabadoResponse} The populated <code>AdesaoPagamentoSabadoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataCadastro')) {
        obj['dataCadastro'] = ApiClient.convertToType(data['dataCadastro'], 'String');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{adesao_pagamento_sabado_resposta_data_cadastro_descricao}}}
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * {{{adesao_pagamento_sabado_resposta_data_vencimento_descricao}}}
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * {{{adesao_pagamento_sabado_resposta_id_descricao}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{adesao_pagamento_sabado_resposta_id_conta_descricao}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;




  return exports;
}));
