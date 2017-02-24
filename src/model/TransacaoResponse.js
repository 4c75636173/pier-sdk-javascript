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
    root.Pier.TransacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoResponse model module.
   * @module model/TransacaoResponse
   * @version 2.8.0
   */

  /**
   * Constructs a new <code>TransacaoResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso transacao
   * @alias module:model/TransacaoResponse
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>TransacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoResponse} obj Optional instance to populate.
   * @return {module:model/TransacaoResponse} The populated <code>TransacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ultimaParcelaLancada')) {
        obj['ultimaParcelaLancada'] = ApiClient.convertToType(data['ultimaParcelaLancada'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoRegistro')) {
        obj['idTipoRegistro'] = ApiClient.convertToType(data['idTipoRegistro'], 'Integer');
      }
      if (data.hasOwnProperty('ordem')) {
        obj['ordem'] = ApiClient.convertToType(data['ordem'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacao')) {
        obj['idTransacao'] = ApiClient.convertToType(data['idTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatus')) {
        obj['descricaoStatus'] = ApiClient.convertToType(data['descricaoStatus'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('valorDolar')) {
        obj['valorDolar'] = ApiClient.convertToType(data['valorDolar'], 'Number');
      }
      if (data.hasOwnProperty('quantidadeParcelas')) {
        obj['quantidadeParcelas'] = ApiClient.convertToType(data['quantidadeParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcela')) {
        obj['valorParcela'] = ApiClient.convertToType(data['valorParcela'], 'Number');
      }
      if (data.hasOwnProperty('dataEvento')) {
        obj['dataEvento'] = ApiClient.convertToType(data['dataEvento'], 'Date');
      }
      if (data.hasOwnProperty('estabelecimento')) {
        obj['estabelecimento'] = ApiClient.convertToType(data['estabelecimento'], 'String');
      }
      if (data.hasOwnProperty('flagCredito')) {
        obj['flagCredito'] = ApiClient.convertToType(data['flagCredito'], 'Integer');
      }
      if (data.hasOwnProperty('tipoEstabelecimento')) {
        obj['tipoEstabelecimento'] = ApiClient.convertToType(data['tipoEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('idGrupoMCC')) {
        obj['idGrupoMCC'] = ApiClient.convertToType(data['idGrupoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('flagSolicitouContestacao')) {
        obj['flagSolicitouContestacao'] = ApiClient.convertToType(data['flagSolicitouContestacao'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} ultimaParcelaLancada
   */
  exports.prototype['ultimaParcelaLancada'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transacao (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de transacao (id).
   * @member {Integer} idTipoRegistro
   */
  exports.prototype['idTipoRegistro'] = undefined;

  /**
   * Representa\u00C3\u00A7\u00C3\u00A3o da ordena\u00C3\u00A7\u00C3\u00A3o da transacao (id).
   * @member {Integer} ordem
   */
  exports.prototype['ordem'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transacao (id).
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} descricaoStatus
   */
  exports.prototype['descricaoStatus'] = undefined;

  /**
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * @member {Number} valorDolar
   */
  exports.prototype['valorDolar'] = undefined;

  /**
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * @member {Date} dataEvento
   */
  exports.prototype['dataEvento'] = undefined;

  /**
   * @member {String} estabelecimento
   */
  exports.prototype['estabelecimento'] = undefined;

  /**
   * @member {Integer} flagCredito
   */
  exports.prototype['flagCredito'] = undefined;

  /**
   * @member {String} tipoEstabelecimento
   */
  exports.prototype['tipoEstabelecimento'] = undefined;

  /**
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * @member {Integer} flagSolicitouContestacao
   */
  exports.prototype['flagSolicitouContestacao'] = undefined;




  return exports;
}));
