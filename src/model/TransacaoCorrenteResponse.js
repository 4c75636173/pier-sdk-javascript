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
    root.Pier.TransacaoCorrenteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoCorrenteResponse model module.
   * @module model/TransacaoCorrenteResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TransacaoCorrenteResponse</code>.
   * {{{transacao_corrente_response_description}}}
   * @alias module:model/TransacaoCorrenteResponse
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>TransacaoCorrenteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoCorrenteResponse} obj Optional instance to populate.
   * @return {module:model/TransacaoCorrenteResponse} The populated <code>TransacaoCorrenteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ultimaParcelaLancada')) {
        obj['ultimaParcelaLancada'] = ApiClient.convertToType(data['ultimaParcelaLancada'], 'Integer');
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
        obj['dataEvento'] = ApiClient.convertToType(data['dataEvento'], 'String');
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
      if (data.hasOwnProperty('tipoTransacao')) {
        obj['tipoTransacao'] = ApiClient.convertToType(data['tipoTransacao'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} ultimaParcelaLancada
   */
  exports.prototype['ultimaParcelaLancada'] = undefined;

  /**
   * {{{transacao_corrente_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{transacao_corrente_response_id_tipo_registro_value}}}
   * @member {Integer} idTipoRegistro
   */
  exports.prototype['idTipoRegistro'] = undefined;

  /**
   * {{{transacao_corrente_response_ordem_value}}}
   * @member {Integer} ordem
   */
  exports.prototype['ordem'] = undefined;

  /**
   * {{{transacao_corrente_response_id_transacao_value}}}
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * {{{transacao_corrente_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{transacao_corrente_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{transacao_corrente_response_descricao_status_value}}}
   * @member {String} descricaoStatus
   */
  exports.prototype['descricaoStatus'] = undefined;

  /**
   * {{{transacao_corrente_response_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{transacao_corrente_response_valor_dolar_value}}}
   * @member {Number} valorDolar
   */
  exports.prototype['valorDolar'] = undefined;

  /**
   * {{{transacao_corrente_response_quantidade_parcelas_value}}}
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * {{{transacao_corrente_response_valor_parcela_value}}}
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * {{{transacao_corrente_response_data_evento_value}}}
   * @member {String} dataEvento
   */
  exports.prototype['dataEvento'] = undefined;

  /**
   * {{{transacao_corrente_response_estabelecimento_value}}}
   * @member {String} estabelecimento
   */
  exports.prototype['estabelecimento'] = undefined;

  /**
   * {{{transacao_corrente_response_flag_credito_value}}}
   * @member {Integer} flagCredito
   */
  exports.prototype['flagCredito'] = undefined;

  /**
   * {{{transacao_corrente_response_tipo_estabelecimento_value}}}
   * @member {String} tipoEstabelecimento
   */
  exports.prototype['tipoEstabelecimento'] = undefined;

  /**
   * {{{transacao_corrente_response_id_grupo_m_c_c_value}}}
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * {{{transacao_corrente_response_flag_solicitou_contestacao_value}}}
   * @member {Integer} flagSolicitouContestacao
   */
  exports.prototype['flagSolicitouContestacao'] = undefined;

  /**
   * {{{transacao_corrente_response_tipo_transacao_value}}}
   * @member {Integer} tipoTransacao
   */
  exports.prototype['tipoTransacao'] = undefined;




  return exports;
}));
