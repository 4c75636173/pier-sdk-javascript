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
    root.Pier.CompraContestadaTransacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CompraContestadaTransacaoResponse model module.
   * @module model/CompraContestadaTransacaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CompraContestadaTransacaoResponse</code>.
   * {{{codigo_chargeback_response_description}}}
   * @alias module:model/CompraContestadaTransacaoResponse
   * @class
   */
  var exports = function() {


































  };

  /**
   * Constructs a <code>CompraContestadaTransacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompraContestadaTransacaoResponse} obj Optional instance to populate.
   * @return {module:model/CompraContestadaTransacaoResponse} The populated <code>CompraContestadaTransacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('agingCompras')) {
        obj['agingCompras'] = ApiClient.convertToType(data['agingCompras'], 'Integer');
      }
      if (data.hasOwnProperty('agingContestacao')) {
        obj['agingContestacao'] = ApiClient.convertToType(data['agingContestacao'], 'Integer');
      }
      if (data.hasOwnProperty('bandeira')) {
        obj['bandeira'] = ApiClient.convertToType(data['bandeira'], 'String');
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('codigoContestacao')) {
        obj['codigoContestacao'] = ApiClient.convertToType(data['codigoContestacao'], 'String');
      }
      if (data.hasOwnProperty('codigoEventoCompra')) {
        obj['codigoEventoCompra'] = ApiClient.convertToType(data['codigoEventoCompra'], 'String');
      }
      if (data.hasOwnProperty('codigoMoedaDestino')) {
        obj['codigoMoedaDestino'] = ApiClient.convertToType(data['codigoMoedaDestino'], 'String');
      }
      if (data.hasOwnProperty('data2Reapresentacao')) {
        obj['data2Reapresentacao'] = ApiClient.convertToType(data['data2Reapresentacao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracao')) {
        obj['dataAlteracao'] = ApiClient.convertToType(data['dataAlteracao'], 'Date');
      }
      if (data.hasOwnProperty('dataContestacao')) {
        obj['dataContestacao'] = ApiClient.convertToType(data['dataContestacao'], 'Date');
      }
      if (data.hasOwnProperty('dataEnvioCB')) {
        obj['dataEnvioCB'] = ApiClient.convertToType(data['dataEnvioCB'], 'String');
      }
      if (data.hasOwnProperty('dataTransacao')) {
        obj['dataTransacao'] = ApiClient.convertToType(data['dataTransacao'], 'Date');
      }
      if (data.hasOwnProperty('historico')) {
        obj['historico'] = ApiClient.convertToType(data['historico'], 'String');
      }
      if (data.hasOwnProperty('idCompraContestada')) {
        obj['idCompraContestada'] = ApiClient.convertToType(data['idCompraContestada'], 'Integer');
      }
      if (data.hasOwnProperty('internacional')) {
        obj['internacional'] = ApiClient.convertToType(data['internacional'], 'Integer');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'String');
      }
      if (data.hasOwnProperty('modoDeEntradaDescricao')) {
        obj['modoDeEntradaDescricao'] = ApiClient.convertToType(data['modoDeEntradaDescricao'], 'String');
      }
      if (data.hasOwnProperty('modoEntrada')) {
        obj['modoEntrada'] = ApiClient.convertToType(data['modoEntrada'], 'String');
      }
      if (data.hasOwnProperty('motivo2Reapresentacao')) {
        obj['motivo2Reapresentacao'] = ApiClient.convertToType(data['motivo2Reapresentacao'], 'String');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('numeroControle')) {
        obj['numeroControle'] = ApiClient.convertToType(data['numeroControle'], 'String');
      }
      if (data.hasOwnProperty('razaoCB')) {
        obj['razaoCB'] = ApiClient.convertToType(data['razaoCB'], 'String');
      }
      if (data.hasOwnProperty('referenceNumber')) {
        obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
      }
      if (data.hasOwnProperty('reporteBandeira')) {
        obj['reporteBandeira'] = ApiClient.convertToType(data['reporteBandeira'], 'String');
      }
      if (data.hasOwnProperty('responsavelAbertuda')) {
        obj['responsavelAbertuda'] = ApiClient.convertToType(data['responsavelAbertuda'], 'String');
      }
      if (data.hasOwnProperty('responsavelAlteracao')) {
        obj['responsavelAlteracao'] = ApiClient.convertToType(data['responsavelAlteracao'], 'String');
      }
      if (data.hasOwnProperty('statusContestacao')) {
        obj['statusContestacao'] = ApiClient.convertToType(data['statusContestacao'], 'String');
      }
      if (data.hasOwnProperty('texto2Reapresentacao')) {
        obj['texto2Reapresentacao'] = ApiClient.convertToType(data['texto2Reapresentacao'], 'String');
      }
      if (data.hasOwnProperty('tipoTransacao')) {
        obj['tipoTransacao'] = ApiClient.convertToType(data['tipoTransacao'], 'String');
      }
      if (data.hasOwnProperty('transacaoSegura')) {
        obj['transacaoSegura'] = ApiClient.convertToType(data['transacaoSegura'], 'String');
      }
      if (data.hasOwnProperty('valorCompra')) {
        obj['valorCompra'] = ApiClient.convertToType(data['valorCompra'], 'Number');
      }
      if (data.hasOwnProperty('valorContrato')) {
        obj['valorContrato'] = ApiClient.convertToType(data['valorContrato'], 'Number');
      }
      if (data.hasOwnProperty('valorDestino')) {
        obj['valorDestino'] = ApiClient.convertToType(data['valorDestino'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} agingCompras
   */
  exports.prototype['agingCompras'] = undefined;

  /**
   * @member {Integer} agingContestacao
   */
  exports.prototype['agingContestacao'] = undefined;

  /**
   * @member {String} bandeira
   */
  exports.prototype['bandeira'] = undefined;

  /**
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * @member {String} codigoContestacao
   */
  exports.prototype['codigoContestacao'] = undefined;

  /**
   * @member {String} codigoEventoCompra
   */
  exports.prototype['codigoEventoCompra'] = undefined;

  /**
   * @member {String} codigoMoedaDestino
   */
  exports.prototype['codigoMoedaDestino'] = undefined;

  /**
   * @member {String} data2Reapresentacao
   */
  exports.prototype['data2Reapresentacao'] = undefined;

  /**
   * @member {Date} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;

  /**
   * @member {Date} dataContestacao
   */
  exports.prototype['dataContestacao'] = undefined;

  /**
   * @member {String} dataEnvioCB
   */
  exports.prototype['dataEnvioCB'] = undefined;

  /**
   * @member {Date} dataTransacao
   */
  exports.prototype['dataTransacao'] = undefined;

  /**
   * @member {String} historico
   */
  exports.prototype['historico'] = undefined;

  /**
   * @member {Integer} idCompraContestada
   */
  exports.prototype['idCompraContestada'] = undefined;

  /**
   * @member {Integer} internacional
   */
  exports.prototype['internacional'] = undefined;

  /**
   * @member {String} mcc
   */
  exports.prototype['mcc'] = undefined;

  /**
   * @member {String} modoDeEntradaDescricao
   */
  exports.prototype['modoDeEntradaDescricao'] = undefined;

  /**
   * @member {String} modoEntrada
   */
  exports.prototype['modoEntrada'] = undefined;

  /**
   * @member {String} motivo2Reapresentacao
   */
  exports.prototype['motivo2Reapresentacao'] = undefined;

  /**
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * @member {String} numeroControle
   */
  exports.prototype['numeroControle'] = undefined;

  /**
   * @member {String} razaoCB
   */
  exports.prototype['razaoCB'] = undefined;

  /**
   * @member {String} referenceNumber
   */
  exports.prototype['referenceNumber'] = undefined;

  /**
   * @member {String} reporteBandeira
   */
  exports.prototype['reporteBandeira'] = undefined;

  /**
   * @member {String} responsavelAbertuda
   */
  exports.prototype['responsavelAbertuda'] = undefined;

  /**
   * @member {String} responsavelAlteracao
   */
  exports.prototype['responsavelAlteracao'] = undefined;

  /**
   * @member {String} statusContestacao
   */
  exports.prototype['statusContestacao'] = undefined;

  /**
   * @member {String} texto2Reapresentacao
   */
  exports.prototype['texto2Reapresentacao'] = undefined;

  /**
   * @member {String} tipoTransacao
   */
  exports.prototype['tipoTransacao'] = undefined;

  /**
   * @member {String} transacaoSegura
   */
  exports.prototype['transacaoSegura'] = undefined;

  /**
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * @member {Number} valorContrato
   */
  exports.prototype['valorContrato'] = undefined;

  /**
   * @member {Number} valorDestino
   */
  exports.prototype['valorDestino'] = undefined;




  return exports;
}));
