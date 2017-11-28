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
   * @version 2.46.3
   */

  /**
   * Constructs a new <code>CompraResponse</code>.
   * Objeto de Compra
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
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da compra.
   * @member {Integer} idCompra
   */
  exports.prototype['idCompra'] = undefined;

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
   * Valor total da compra.
   * @member {Number} valorTotalCompra
   */
  exports.prototype['valorTotalCompra'] = undefined;

  /**
   * Valor da parcela da compra.
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * Valor da primeira parcela da compra.
   * @member {Number} primeiraParcela
   */
  exports.prototype['primeiraParcela'] = undefined;

  /**
   * N\u00C3\u00BAmero de parcelas da compra.
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * N\u00C3\u00BAmero de parcelas antecip\u00C3\u00A1veis da compra.
   * @member {Integer} numeroParcelasAntecipaveis
   */
  exports.prototype['numeroParcelasAntecipaveis'] = undefined;

  /**
   * Nome do estabelecimento da compra.
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

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
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta da compra.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

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
   * N\u00C3\u00BAmero do cart\u00C3\u00A3o da compra.
   * @member {String} cartao
   */
  exports.prototype['cartao'] = undefined;

  /**
   * Nome do portador do cart\u00C3\u00A3o da compra.
   * @member {String} nomePortadorCartao
   */
  exports.prototype['nomePortadorCartao'] = undefined;




  return exports;
}));
