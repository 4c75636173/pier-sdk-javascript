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
    root.Pier.AntecipacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AntecipacaoResponse model module.
   * @module model/AntecipacaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AntecipacaoResponse</code>.
   * {{{antecipacao_response_description}}}
   * @alias module:model/AntecipacaoResponse
   * @class
   */
  var exports = function() {


























  };

  /**
   * Constructs a <code>AntecipacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AntecipacaoResponse} obj Optional instance to populate.
   * @return {module:model/AntecipacaoResponse} The populated <code>AntecipacaoResponse</code> instance.
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
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCompra')) {
        obj['idCompra'] = ApiClient.convertToType(data['idCompra'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeParcelasTotal')) {
        obj['quantidadeParcelasTotal'] = ApiClient.convertToType(data['quantidadeParcelasTotal'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeParcelasAntecipadas')) {
        obj['quantidadeParcelasAntecipadas'] = ApiClient.convertToType(data['quantidadeParcelasAntecipadas'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcela')) {
        obj['valorParcela'] = ApiClient.convertToType(data['valorParcela'], 'Number');
      }
      if (data.hasOwnProperty('valorDescontoTotal')) {
        obj['valorDescontoTotal'] = ApiClient.convertToType(data['valorDescontoTotal'], 'Number');
      }
      if (data.hasOwnProperty('valorTotalComDesconto')) {
        obj['valorTotalComDesconto'] = ApiClient.convertToType(data['valorTotalComDesconto'], 'Number');
      }
      if (data.hasOwnProperty('taxaDesconto')) {
        obj['taxaDesconto'] = ApiClient.convertToType(data['taxaDesconto'], 'Number');
      }
      if (data.hasOwnProperty('dataCompra')) {
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
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
   * {{{antecipacao_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{antecipacao_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{antecipacao_response_id_compra_value}}}
   * @member {Integer} idCompra
   */
  exports.prototype['idCompra'] = undefined;

  /**
   * {{{antecipacao_response_quantidade_parcelas_total_value}}}
   * @member {Integer} quantidadeParcelasTotal
   */
  exports.prototype['quantidadeParcelasTotal'] = undefined;

  /**
   * {{{antecipacao_response_quantidade_parcelas_antecipadas_value}}}
   * @member {Integer} quantidadeParcelasAntecipadas
   */
  exports.prototype['quantidadeParcelasAntecipadas'] = undefined;

  /**
   * {{{antecipacao_response_valor_parcela_value}}}
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * {{{antecipacao_response_valor_desconto_total_value}}}
   * @member {Number} valorDescontoTotal
   */
  exports.prototype['valorDescontoTotal'] = undefined;

  /**
   * {{{antecipacao_response_valor_total_com_desconto_value}}}
   * @member {Number} valorTotalComDesconto
   */
  exports.prototype['valorTotalComDesconto'] = undefined;

  /**
   * {{{antecipacao_response_taxa_desconto_value}}}
   * @member {Number} taxaDesconto
   */
  exports.prototype['taxaDesconto'] = undefined;

  /**
   * {{{antecipacao_response_data_compra_value}}}
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * {{{antecipacao_response_status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{antecipacao_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * {{{antecipacao_response_tipo_origem_transacao_value}}}
   * @member {String} tipoOrigemTransacao
   */
  exports.prototype['tipoOrigemTransacao'] = undefined;

  /**
   * {{{antecipacao_response_cidade_value}}}
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * {{{antecipacao_response_pais_value}}}
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * {{{antecipacao_response_latitude_value}}}
   * @member {String} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * {{{antecipacao_response_longitude_value}}}
   * @member {String} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * {{{antecipacao_response_id_grupo_m_c_c_value}}}
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * {{{antecipacao_response_descricao_grupo_m_c_c_value}}}
   * @member {String} descricaoGrupoMCC
   */
  exports.prototype['descricaoGrupoMCC'] = undefined;

  /**
   * {{{antecipacao_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{antecipacao_response_descricao_produto_value}}}
   * @member {String} descricaoProduto
   */
  exports.prototype['descricaoProduto'] = undefined;

  /**
   * {{{antecipacao_response_descricao_estabelecimento_value}}}
   * @member {String} descricaoEstabelecimento
   */
  exports.prototype['descricaoEstabelecimento'] = undefined;

  /**
   * {{{antecipacao_response_nome_fantasia_estabelecimento_value}}}
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;




  return exports;
}));
