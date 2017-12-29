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
   * @version 2.50.5
   */

  /**
   * Constructs a new <code>AntecipacaoSimuladaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso Antecipacao Simulada
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
   * C\u00C3\u00B3digo identificador da simula\u00C3\u00A7\u00C3\u00A3o de antecipa\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idAntecipacaoSimulada
   */
  exports.prototype['idAntecipacaoSimulada'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do evento compra.
   * @member {Integer} idCompra
   */
  exports.prototype['idCompra'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do tipo do evento compra.
   * @member {Integer} idTipoTransacao
   */
  exports.prototype['idTipoTransacao'] = undefined;

  /**
   * Quantidade de parcelas antecip\u00C3\u00A1veis.
   * @member {Integer} quantidadeParcelasAntecipaveis
   */
  exports.prototype['quantidadeParcelasAntecipaveis'] = undefined;

  /**
   * Valor da parcela.
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * Data e hora em que a simula\u00C3\u00A7\u00C3\u00A3o foi feita.
   * @member {String} dataHoraSimulacao
   */
  exports.prototype['dataHoraSimulacao'] = undefined;

  /**
   * Taxa de antecipa\u00C3\u00A7\u00C3\u00A3o aplicada (ao ano).
   * @member {Number} taxaAntecipacaoAno
   */
  exports.prototype['taxaAntecipacaoAno'] = undefined;

  /**
   * Estabelecimento onde foi realizada a transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da autoriza\u00C3\u00A7\u00C3\u00A3o da compra.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Data da compra.
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * Tipo de transa\u00C3\u00A7\u00C3\u00A3o da compra.
   * @member {String} tipoOrigemTransacao
   */
  exports.prototype['tipoOrigemTransacao'] = undefined;

  /**
   * Cidade onde a compra foi realizada.
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * Pa\u00C3\u00ADs onde a compra foi realizada.
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * Coordenada latitudinal da localiza\u00C3\u00A7\u00C3\u00A3o da compra.
   * @member {String} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * Coordenada longitudinal da localiza\u00C3\u00A7\u00C3\u00A3o da compra.
   * @member {String} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Grupo MCC da compra.
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Grupo MCC da compra.
   * @member {String} descricaoGrupoMCC
   */
  exports.prototype['descricaoGrupoMCC'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do produto da compra.
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do produto da compra.
   * @member {String} descricaoProduto
   */
  exports.prototype['descricaoProduto'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do estabelecimento da compra.
   * @member {String} descricaoEstabelecimento
   */
  exports.prototype['descricaoEstabelecimento'] = undefined;

  /**
   * Nome fantasia do estabelecimento da compra.
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;

  /**
   * Detalhes da simula\u00C3\u00A7\u00C3\u00A3o.
   * @member {Array.<module:model/AntecipacaoSimuladaDetalhesResponse>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
