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
    root.Pier.CompraResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CompraResponse model module.
   * @module model/CompraResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>CompraResponse</code>.
   * {{{compra_response_description}}}
   * @alias module:model/CompraResponse
   * @class
   */
  var exports = function() {
























  };

  /**
   * Constructs a <code>CompraResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompraResponse} obj Optional instance to populate.
   * @return {module:model/CompraResponse} The populated <code>CompraResponse</code> instance.
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
      if (data.hasOwnProperty('idCompra')) {
        obj['idCompra'] = ApiClient.convertToType(data['idCompra'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('dataCompra')) {
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], 'String');
      }
      if (data.hasOwnProperty('valorTotalCompra')) {
        obj['valorTotalCompra'] = ApiClient.convertToType(data['valorTotalCompra'], 'Number');
      }
      if (data.hasOwnProperty('valorParcela')) {
        obj['valorParcela'] = ApiClient.convertToType(data['valorParcela'], 'Number');
      }
      if (data.hasOwnProperty('primeiraParcela')) {
        obj['primeiraParcela'] = ApiClient.convertToType(data['primeiraParcela'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('numeroParcelasAntecipaveis')) {
        obj['numeroParcelasAntecipaveis'] = ApiClient.convertToType(data['numeroParcelasAntecipaveis'], 'Integer');
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
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoProduto')) {
        obj['descricaoProduto'] = ApiClient.convertToType(data['descricaoProduto'], 'String');
      }
      if (data.hasOwnProperty('cartao')) {
        obj['cartao'] = ApiClient.convertToType(data['cartao'], 'String');
      }
      if (data.hasOwnProperty('nomePortadorCartao')) {
        obj['nomePortadorCartao'] = ApiClient.convertToType(data['nomePortadorCartao'], 'String');
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
   * {{{compra_response_id_compra_value}}}
   * @member {Integer} idCompra
   */
  exports.prototype['idCompra'] = undefined;

  /**
   * {{{compra_response_status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{compra_response_data_compra_value}}}
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * {{{compra_response_valor_total_compra_value}}}
   * @member {Number} valorTotalCompra
   */
  exports.prototype['valorTotalCompra'] = undefined;

  /**
   * {{{compra_response_valor_parcela_value}}}
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * {{{compra_response_primeira_parcela_value}}}
   * @member {Number} primeiraParcela
   */
  exports.prototype['primeiraParcela'] = undefined;

  /**
   * {{{compra_response_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{compra_response_numero_parcelas_antecipaveis_value}}}
   * @member {Integer} numeroParcelasAntecipaveis
   */
  exports.prototype['numeroParcelasAntecipaveis'] = undefined;

  /**
   * {{{compra_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * {{{compra_response_tipo_origem_transacao_value}}}
   * @member {String} tipoOrigemTransacao
   */
  exports.prototype['tipoOrigemTransacao'] = undefined;

  /**
   * {{{compra_response_cidade_value}}}
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * {{{compra_response_pais_value}}}
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * {{{compra_response_latitude_value}}}
   * @member {String} latitude
   */
  exports.prototype['latitude'] = undefined;

  /**
   * {{{compra_response_longitude_value}}}
   * @member {String} longitude
   */
  exports.prototype['longitude'] = undefined;

  /**
   * {{{compra_response_id_grupo_m_c_c_value}}}
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * {{{compra_response_descricao_grupo_m_c_c_value}}}
   * @member {String} descricaoGrupoMCC
   */
  exports.prototype['descricaoGrupoMCC'] = undefined;

  /**
   * {{{compra_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{compra_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{compra_response_descricao_produto_value}}}
   * @member {String} descricaoProduto
   */
  exports.prototype['descricaoProduto'] = undefined;

  /**
   * {{{compra_response_cartao_value}}}
   * @member {String} cartao
   */
  exports.prototype['cartao'] = undefined;

  /**
   * {{{compra_response_nome_portador_cartao_value}}}
   * @member {String} nomePortadorCartao
   */
  exports.prototype['nomePortadorCartao'] = undefined;




  return exports;
}));
