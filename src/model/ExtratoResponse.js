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
    root.Pier.ExtratoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExtratoResponse model module.
   * @module model/ExtratoResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExtratoResponse</code>.
   * @alias module:model/ExtratoResponse
   * @class
   */
  var exports = function() {





























  };

  /**
   * Constructs a <code>ExtratoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtratoResponse} obj Optional instance to populate.
   * @return {module:model/ExtratoResponse} The populated <code>ExtratoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cartao')) {
        obj['cartao'] = ApiClient.convertToType(data['cartao'], 'String');
      }
      if (data.hasOwnProperty('chip')) {
        obj['chip'] = ApiClient.convertToType(data['chip'], 'String');
      }
      if (data.hasOwnProperty('cidadeUFPais')) {
        obj['cidadeUFPais'] = ApiClient.convertToType(data['cidadeUFPais'], 'String');
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('codigoMoeda')) {
        obj['codigoMoeda'] = ApiClient.convertToType(data['codigoMoeda'], 'String');
      }
      if (data.hasOwnProperty('codigoMoedaDestino')) {
        obj['codigoMoedaDestino'] = ApiClient.convertToType(data['codigoMoedaDestino'], 'String');
      }
      if (data.hasOwnProperty('cotacaoDolar')) {
        obj['cotacaoDolar'] = ApiClient.convertToType(data['cotacaoDolar'], 'Number');
      }
      if (data.hasOwnProperty('credito')) {
        obj['credito'] = ApiClient.convertToType(data['credito'], 'Number');
      }
      if (data.hasOwnProperty('dataCompra')) {
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], 'String');
      }
      if (data.hasOwnProperty('dataCotacaoDolar')) {
        obj['dataCotacaoDolar'] = ApiClient.convertToType(data['dataCotacaoDolar'], 'Date');
      }
      if (data.hasOwnProperty('dataEntradaCompra')) {
        obj['dataEntradaCompra'] = ApiClient.convertToType(data['dataEntradaCompra'], 'String');
      }
      if (data.hasOwnProperty('dataTransacaoUTC')) {
        obj['dataTransacaoUTC'] = ApiClient.convertToType(data['dataTransacaoUTC'], 'String');
      }
      if (data.hasOwnProperty('debito')) {
        obj['debito'] = ApiClient.convertToType(data['debito'], 'Number');
      }
      if (data.hasOwnProperty('descricaoModoEntrada')) {
        obj['descricaoModoEntrada'] = ApiClient.convertToType(data['descricaoModoEntrada'], 'String');
      }
      if (data.hasOwnProperty('descricaoTransacao')) {
        obj['descricaoTransacao'] = ApiClient.convertToType(data['descricaoTransacao'], 'String');
      }
      if (data.hasOwnProperty('encargosFinanceiros')) {
        obj['encargosFinanceiros'] = ApiClient.convertToType(data['encargosFinanceiros'], 'Number');
      }
      if (data.hasOwnProperty('historico')) {
        obj['historico'] = ApiClient.convertToType(data['historico'], 'String');
      }
      if (data.hasOwnProperty('idEventoExterno')) {
        obj['idEventoExterno'] = ApiClient.convertToType(data['idEventoExterno'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoTransacao')) {
        obj['idTipoTransacao'] = ApiClient.convertToType(data['idTipoTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacao')) {
        obj['idTransacao'] = ApiClient.convertToType(data['idTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEstabVisa')) {
        obj['nomeEstabVisa'] = ApiClient.convertToType(data['nomeEstabVisa'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('origem')) {
        obj['origem'] = ApiClient.convertToType(data['origem'], 'String');
      }
      if (data.hasOwnProperty('taxaEmbarque')) {
        obj['taxaEmbarque'] = ApiClient.convertToType(data['taxaEmbarque'], 'Number');
      }
      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
      }
      if (data.hasOwnProperty('valorDolar')) {
        obj['valorDolar'] = ApiClient.convertToType(data['valorDolar'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {String} cartao
   */
  exports.prototype['cartao'] = undefined;

  /**
   * @member {String} chip
   */
  exports.prototype['chip'] = undefined;

  /**
   * @member {String} cidadeUFPais
   */
  exports.prototype['cidadeUFPais'] = undefined;

  /**
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * @member {String} codigoMoeda
   */
  exports.prototype['codigoMoeda'] = undefined;

  /**
   * @member {String} codigoMoedaDestino
   */
  exports.prototype['codigoMoedaDestino'] = undefined;

  /**
   * @member {Number} cotacaoDolar
   */
  exports.prototype['cotacaoDolar'] = undefined;

  /**
   * @member {Number} credito
   */
  exports.prototype['credito'] = undefined;

  /**
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * @member {Date} dataCotacaoDolar
   */
  exports.prototype['dataCotacaoDolar'] = undefined;

  /**
   * @member {String} dataEntradaCompra
   */
  exports.prototype['dataEntradaCompra'] = undefined;

  /**
   * @member {String} dataTransacaoUTC
   */
  exports.prototype['dataTransacaoUTC'] = undefined;

  /**
   * @member {Number} debito
   */
  exports.prototype['debito'] = undefined;

  /**
   * @member {String} descricaoModoEntrada
   */
  exports.prototype['descricaoModoEntrada'] = undefined;

  /**
   * @member {String} descricaoTransacao
   */
  exports.prototype['descricaoTransacao'] = undefined;

  /**
   * @member {Number} encargosFinanceiros
   */
  exports.prototype['encargosFinanceiros'] = undefined;

  /**
   * @member {String} historico
   */
  exports.prototype['historico'] = undefined;

  /**
   * @member {Integer} idEventoExterno
   */
  exports.prototype['idEventoExterno'] = undefined;

  /**
   * @member {Integer} idTipoTransacao
   */
  exports.prototype['idTipoTransacao'] = undefined;

  /**
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * @member {Integer} mcc
   */
  exports.prototype['mcc'] = undefined;

  /**
   * @member {String} nomeEstabVisa
   */
  exports.prototype['nomeEstabVisa'] = undefined;

  /**
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * @member {String} origem
   */
  exports.prototype['origem'] = undefined;

  /**
   * @member {Number} taxaEmbarque
   */
  exports.prototype['taxaEmbarque'] = undefined;

  /**
   * @member {String} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * @member {Number} valorDolar
   */
  exports.prototype['valorDolar'] = undefined;




  return exports;
}));
