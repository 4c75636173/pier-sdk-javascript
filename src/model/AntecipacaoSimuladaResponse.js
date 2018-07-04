(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AntecipacaoSimuladaDetalhesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AntecipacaoSimuladaDetalhesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AntecipacaoSimuladaResponse = factory(root.Pier.ApiClient, root.Pier.AntecipacaoSimuladaDetalhesResponse);
  }
}(this, function(ApiClient, AntecipacaoSimuladaDetalhesResponse) {
  'use strict';

  /**
   * The AntecipacaoSimuladaResponse model module.
   * @module model/AntecipacaoSimuladaResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>AntecipacaoSimuladaResponse</code>.
   * {{{antecipacao_simulada_response_description}}}
   * @alias module:model/AntecipacaoSimuladaResponse
   * @class
   */
  var exports = function() {


























  };

  /**
   * Constructs a <code>AntecipacaoSimuladaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AntecipacaoSimuladaResponse} obj Optional instance to populate.
   * @return {module:model/AntecipacaoSimuladaResponse} The populated <code>AntecipacaoSimuladaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'Integer');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
      if (data.hasOwnProperty('idAntecipacaoSimulada')) {
        obj['idAntecipacaoSimulada'] = ApiClient.convertToType(data['idAntecipacaoSimulada'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCompra')) {
        obj['idCompra'] = ApiClient.convertToType(data['idCompra'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoTransacao')) {
        obj['idTipoTransacao'] = ApiClient.convertToType(data['idTipoTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeParcelasAntecipaveis')) {
        obj['quantidadeParcelasAntecipaveis'] = ApiClient.convertToType(data['quantidadeParcelasAntecipaveis'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcela')) {
        obj['valorParcela'] = ApiClient.convertToType(data['valorParcela'], 'Number');
      }
      if (data.hasOwnProperty('dataHoraSimulacao')) {
        obj['dataHoraSimulacao'] = ApiClient.convertToType(data['dataHoraSimulacao'], 'String');
      }
      if (data.hasOwnProperty('taxaAntecipacaoAno')) {
        obj['taxaAntecipacaoAno'] = ApiClient.convertToType(data['taxaAntecipacaoAno'], 'Number');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('dataCompra')) {
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], 'String');
      }
      if (data.hasOwnProperty('tipoOrigemTransacao')) {
        obj['tipoOrigemTransacao'] = ApiClient.convertToType(data['tipoOrigemTransacao'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('pais')) {
        obj['pais'] = ApiClient.convertToType(data['pais'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
      }
      if (data.hasOwnProperty('idGrupoMCC')) {
        obj['idGrupoMCC'] = ApiClient.convertToType(data['idGrupoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoGrupoMCC')) {
        obj['descricaoGrupoMCC'] = ApiClient.convertToType(data['descricaoGrupoMCC'], 'String');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoProduto')) {
        obj['descricaoProduto'] = ApiClient.convertToType(data['descricaoProduto'], 'String');
      }
      if (data.hasOwnProperty('descricaoEstabelecimento')) {
        obj['descricaoEstabelecimento'] = ApiClient.convertToType(data['descricaoEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasiaEstabelecimento')) {
        obj['nomeFantasiaEstabelecimento'] = ApiClient.convertToType(data['nomeFantasiaEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('detalhes')) {
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [AntecipacaoSimuladaDetalhesResponse]);
      }
    }
    return obj;
  }


  /**
   * @member {Integer} mcc
   */
  exports.prototype['mcc'] = undefined;

  /**
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * {{{antecipacao_simulada_response_id_antecipacao_simulada_value}}}
   * @member {Integer} idAntecipacaoSimulada
   */
  exports.prototype['idAntecipacaoSimulada'] = undefined;

  /**
   * {{{antecipacao_simulada_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{antecipacao_simulada_response_id_compra_value}}}
   * @member {Integer} idCompra
   */
  exports.prototype['idCompra'] = undefined;

  /**
   * {{{antecipacao_simulada_response_id_tipo_transacao_value}}}
   * @member {Integer} idTipoTransacao
   */
  exports.prototype['idTipoTransacao'] = undefined;

  /**
   * {{{antecipacao_simulada_response_quantidade_parcelas_antecipaveis_value}}}
   * @member {Integer} quantidadeParcelasAntecipaveis
   */
  exports.prototype['quantidadeParcelasAntecipaveis'] = undefined;

  /**
   * {{{antecipacao_simulada_response_valor_parcela_value}}}
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * {{{antecipacao_simulada_response_data_hora_simulacao_value}}}
   * @member {String} dataHoraSimulacao
   */
  exports.prototype['dataHoraSimulacao'] = undefined;

  /**
   * {{{antecipacao_simulada_response_taxa_antecipacao_ano_value}}}
   * @member {Number} taxaAntecipacaoAno
   */
  exports.prototype['taxaAntecipacaoAno'] = undefined;

  /**
   * {{{antecipacao_simulada_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * {{{antecipacao_simulada_response_status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{antecipacao_simulada_response_data_compra_value}}}
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * {{{antecipacao_simulada_response_tipo_origem_transacao_value}}}
   * @member {String} tipoOrigemTransacao
   */
  exports.prototype['tipoOrigemTransacao'] = undefined;

  /**
   * {{{antecipacao_simulada_response_cidade_value}}}
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * {{{antecipacao_simulada_response_pais_value}}}
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * {{{antecipacao_simulada_response_latitude_value}}}
   * @member {String} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * {{{antecipacao_simulada_response_longitude_value}}}
   * @member {String} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * {{{antecipacao_simulada_response_id_grupo_m_c_c_value}}}
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * {{{antecipacao_simulada_response_descricao_grupo_m_c_c_value}}}
   * @member {String} descricaoGrupoMCC
   */
  exports.prototype['descricaoGrupoMCC'] = undefined;

  /**
   * {{{antecipacao_simulada_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{antecipacao_simulada_response_descricao_produto_value}}}
   * @member {String} descricaoProduto
   */
  exports.prototype['descricaoProduto'] = undefined;

  /**
   * {{{antecipacao_simulada_response_descricao_estabelecimento_value}}}
   * @member {String} descricaoEstabelecimento
   */
  exports.prototype['descricaoEstabelecimento'] = undefined;

  /**
   * {{{antecipacao_simulada_response_nome_fantasia_estabelecimento_value}}}
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;

  /**
   * {{{antecipacao_simulada_response_detalhes_value}}}
   * @member {Array.<module:model/AntecipacaoSimuladaDetalhesResponse>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
