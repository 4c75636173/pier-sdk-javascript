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
    root.Pier.AcordoDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AcordoDetalheResponse model module.
   * @module model/AcordoDetalheResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>AcordoDetalheResponse</code>.
   * Objeto Acordo detalhado
   * @alias module:model/AcordoDetalheResponse
   * @class
   */
  var exports = function() {


















  };

  /**
   * Constructs a <code>AcordoDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcordoDetalheResponse} obj Optional instance to populate.
   * @return {module:model/AcordoDetalheResponse} The populated <code>AcordoDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('statusAcordo')) {
        obj['statusAcordo'] = ApiClient.convertToType(data['statusAcordo'], 'Integer');
      }
      if (data.hasOwnProperty('valorAcordo')) {
        obj['valorAcordo'] = ApiClient.convertToType(data['valorAcordo'], 'Number');
      }
      if (data.hasOwnProperty('dataAcordo')) {
        obj['dataAcordo'] = ApiClient.convertToType(data['dataAcordo'], 'String');
      }
      if (data.hasOwnProperty('quantidadeParcelas')) {
        obj['quantidadeParcelas'] = ApiClient.convertToType(data['quantidadeParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('saldoAtualFinal')) {
        obj['saldoAtualFinal'] = ApiClient.convertToType(data['saldoAtualFinal'], 'Number');
      }
      if (data.hasOwnProperty('diasEmAtraso')) {
        obj['diasEmAtraso'] = ApiClient.convertToType(data['diasEmAtraso'], 'Integer');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'Integer');
      }
      if (data.hasOwnProperty('assessoriaAtual')) {
        obj['assessoriaAtual'] = ApiClient.convertToType(data['assessoriaAtual'], 'String');
      }
      if (data.hasOwnProperty('totalPagamentos')) {
        obj['totalPagamentos'] = ApiClient.convertToType(data['totalPagamentos'], 'Number');
      }
      if (data.hasOwnProperty('dataVencimentoCobranca')) {
        obj['dataVencimentoCobranca'] = ApiClient.convertToType(data['dataVencimentoCobranca'], 'String');
      }
      if (data.hasOwnProperty('dataQuebraAcordo')) {
        obj['dataQuebraAcordo'] = ApiClient.convertToType(data['dataQuebraAcordo'], 'String');
      }
      if (data.hasOwnProperty('valorParcela1')) {
        obj['valorParcela1'] = ApiClient.convertToType(data['valorParcela1'], 'Number');
      }
      if (data.hasOwnProperty('valorParcelaN')) {
        obj['valorParcelaN'] = ApiClient.convertToType(data['valorParcelaN'], 'Number');
      }
      if (data.hasOwnProperty('parcelaPedida')) {
        obj['parcelaPedida'] = ApiClient.convertToType(data['parcelaPedida'], 'Integer');
      }
      if (data.hasOwnProperty('vencimentoParcelaPedida')) {
        obj['vencimentoParcelaPedida'] = ApiClient.convertToType(data['vencimentoParcelaPedida'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do acordo (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Status do acordo.
   * @member {Integer} statusAcordo
   */
  exports.prototype['statusAcordo'] = undefined;

  /**
   * Valor do Acordo.
   * @member {Number} valorAcordo
   */
  exports.prototype['valorAcordo'] = undefined;

  /**
   * Data e Hora do acordo.
   * @member {String} dataAcordo
   */
  exports.prototype['dataAcordo'] = undefined;

  /**
   * Quantidade de parcelas do acordo.
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * Saldo atual final.
   * @member {Number} saldoAtualFinal
   */
  exports.prototype['saldoAtualFinal'] = undefined;

  /**
   * Dias em atraso.
   * @member {Integer} diasEmAtraso
   */
  exports.prototype['diasEmAtraso'] = undefined;

  /**
   * Status da conta.
   * @member {Integer} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * Assessoria atual.
   * @member {String} assessoriaAtual
   */
  exports.prototype['assessoriaAtual'] = undefined;

  /**
   * Total de pagamentos.
   * @member {Number} totalPagamentos
   */
  exports.prototype['totalPagamentos'] = undefined;

  /**
   * Data do vencimento da cobran\u00E7a.
   * @member {String} dataVencimentoCobranca
   */
  exports.prototype['dataVencimentoCobranca'] = undefined;

  /**
   * Data da quebra do acordo.
   * @member {String} dataQuebraAcordo
   */
  exports.prototype['dataQuebraAcordo'] = undefined;

  /**
   * Valor da parcela 1.
   * @member {Number} valorParcela1
   */
  exports.prototype['valorParcela1'] = undefined;

  /**
   * Valor da parcela N.
   * @member {Number} valorParcelaN
   */
  exports.prototype['valorParcelaN'] = undefined;

  /**
   * Parcela pedida.
   * @member {Integer} parcelaPedida
   */
  exports.prototype['parcelaPedida'] = undefined;

  /**
   * Data de vencimento da parcela pedida.
   * @member {String} vencimentoParcelaPedida
   */
  exports.prototype['vencimentoParcelaPedida'] = undefined;




  return exports;
}));
