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
    root.Pier.ContaHistoricoPagamentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaHistoricoPagamentoResponse model module.
   * @module model/ContaHistoricoPagamentoResponse
   * @version 2.35.2
   */

  /**
   * Constructs a new <code>ContaHistoricoPagamentoResponse</code>.
   * Objeto ContaHistoricoPagamentoResponse
   * @alias module:model/ContaHistoricoPagamentoResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ContaHistoricoPagamentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaHistoricoPagamentoResponse} obj Optional instance to populate.
   * @return {module:model/ContaHistoricoPagamentoResponse} The populated <code>ContaHistoricoPagamentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Pagamento
   * @member {Integer} idPagamento
   */
  exports.prototype['idPagamento'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento onde o Pagamento foi realizado, quando este for o local de pagamento.
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria onde o Pagamento foi realizado, quando este for o local de pagamento
   * @member {Integer} idBanco
   */
  exports.prototype['idBanco'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Valor do Pagamento
   * @member {Number} valorPagamento
   */
  exports.prototype['valorPagamento'] = undefined;

  /**
   * Data e Hora da realiza\u00C3\u00A7\u00C3\u00A3o do Pagamento. Quando feito em Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria, o hor\u00C3\u00A1rio do pagamento \u00C3\u00A9 exibido com valor zero
   * @member {String} dataHoraPagamento
   */
  exports.prototype['dataHoraPagamento'] = undefined;

  /**
   * Data e Hora em que o registro do Pagamento foi cadastrado
   * @member {String} dataHoraEntradaPagamento
   */
  exports.prototype['dataHoraEntradaPagamento'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Pagamento
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
