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
    root.Pier.HistoricoPagamentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoPagamentoResponse model module.
   * @module model/HistoricoPagamentoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>HistoricoPagamentoResponse</code>.
   * {{{historico_pagamento_response_description}}}
   * @alias module:model/HistoricoPagamentoResponse
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>HistoricoPagamentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoPagamentoResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoPagamentoResponse} The populated <code>HistoricoPagamentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPagamento')) {
        obj['idPagamento'] = ApiClient.convertToType(data['idPagamento'], 'Integer');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idBanco')) {
        obj['idBanco'] = ApiClient.convertToType(data['idBanco'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('valorPagamento')) {
        obj['valorPagamento'] = ApiClient.convertToType(data['valorPagamento'], 'Number');
      }
      if (data.hasOwnProperty('dataHoraPagamento')) {
        obj['dataHoraPagamento'] = ApiClient.convertToType(data['dataHoraPagamento'], 'String');
      }
      if (data.hasOwnProperty('dataHoraEntradaPagamento')) {
        obj['dataHoraEntradaPagamento'] = ApiClient.convertToType(data['dataHoraEntradaPagamento'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{historico_pagamento_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{historico_pagamento_response_id_pagamento_value}}}
   * @member {Integer} idPagamento
   */
  exports.prototype['idPagamento'] = undefined;

  /**
   * {{{historico_pagamento_response_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{historico_pagamento_response_id_banco_value}}}
   * @member {Integer} idBanco
   */
  exports.prototype['idBanco'] = undefined;

  /**
   * {{{historico_pagamento_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{historico_pagamento_response_valor_pagamento_value}}}
   * @member {Number} valorPagamento
   */
  exports.prototype['valorPagamento'] = undefined;

  /**
   * {{{historico_pagamento_response_data_hora_pagamento_value}}}
   * @member {String} dataHoraPagamento
   */
  exports.prototype['dataHoraPagamento'] = undefined;

  /**
   * {{{historico_pagamento_response_data_hora_entrada_pagamento_value}}}
   * @member {String} dataHoraEntradaPagamento
   */
  exports.prototype['dataHoraEntradaPagamento'] = undefined;

  /**
   * {{{historico_pagamento_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
