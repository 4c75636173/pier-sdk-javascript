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
    root.Pier.DividaClienteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DividaClienteResponse model module.
   * @module model/DividaClienteResponse
   * @version 2.16.6
   */

  /**
   * Constructs a new <code>DividaClienteResponse</code>.
   * D\u00C3\u00ADvida do cliente
   * @alias module:model/DividaClienteResponse
   * @class
   */
  var exports = function() {


















  };

  /**
   * Constructs a <code>DividaClienteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DividaClienteResponse} obj Optional instance to populate.
   * @return {module:model/DividaClienteResponse} The populated <code>DividaClienteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('dataVencimentoFaturaAtraso')) {
        obj['dataVencimentoFaturaAtraso'] = ApiClient.convertToType(data['dataVencimentoFaturaAtraso'], 'String');
      }
      if (data.hasOwnProperty('quantidadeDiasAtraso')) {
        obj['quantidadeDiasAtraso'] = ApiClient.convertToType(data['quantidadeDiasAtraso'], 'Integer');
      }
      if (data.hasOwnProperty('dataVencimentoAcordo')) {
        obj['dataVencimentoAcordo'] = ApiClient.convertToType(data['dataVencimentoAcordo'], 'String');
      }
      if (data.hasOwnProperty('quantidadeDiasAtrasoCorrigido')) {
        obj['quantidadeDiasAtrasoCorrigido'] = ApiClient.convertToType(data['quantidadeDiasAtrasoCorrigido'], 'Integer');
      }
      if (data.hasOwnProperty('valorSaldoDevedor')) {
        obj['valorSaldoDevedor'] = ApiClient.convertToType(data['valorSaldoDevedor'], 'Number');
      }
      if (data.hasOwnProperty('taxaCorrecao')) {
        obj['taxaCorrecao'] = ApiClient.convertToType(data['taxaCorrecao'], 'Number');
      }
      if (data.hasOwnProperty('valorCorrecao')) {
        obj['valorCorrecao'] = ApiClient.convertToType(data['valorCorrecao'], 'Number');
      }
      if (data.hasOwnProperty('valorIOF')) {
        obj['valorIOF'] = ApiClient.convertToType(data['valorIOF'], 'Number');
      }
      if (data.hasOwnProperty('valorSaldoCorrigido')) {
        obj['valorSaldoCorrigido'] = ApiClient.convertToType(data['valorSaldoCorrigido'], 'Number');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusConta')) {
        obj['descricaoStatusConta'] = ApiClient.convertToType(data['descricaoStatusConta'], 'String');
      }
      if (data.hasOwnProperty('idStatusAcordo')) {
        obj['idStatusAcordo'] = ApiClient.convertToType(data['idStatusAcordo'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusAcordo')) {
        obj['descricaoStatusAcordo'] = ApiClient.convertToType(data['descricaoStatusAcordo'], 'String');
      }
      if (data.hasOwnProperty('idEscritorioCobranca')) {
        obj['idEscritorioCobranca'] = ApiClient.convertToType(data['idEscritorioCobranca'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEscritorioCobranca')) {
        obj['nomeEscritorioCobranca'] = ApiClient.convertToType(data['nomeEscritorioCobranca'], 'String');
      }
      if (data.hasOwnProperty('emailPessoaConta')) {
        obj['emailPessoaConta'] = ApiClient.convertToType(data['emailPessoaConta'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id)
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Data de vencimento da cobran\u00C3\u00A7a
   * @member {String} dataVencimentoFaturaAtraso
   */
  exports.prototype['dataVencimentoFaturaAtraso'] = undefined;

  /**
   * Quantidade de dias em atraso at\u00C3\u00A9 a data de vencimento da cobran\u00C3\u00A7a
   * @member {Integer} quantidadeDiasAtraso
   */
  exports.prototype['quantidadeDiasAtraso'] = undefined;

  /**
   * Data de vencimento do acordo
   * @member {String} dataVencimentoAcordo
   */
  exports.prototype['dataVencimentoAcordo'] = undefined;

  /**
   * Quantidade de dias em atraso at\u00C3\u00A9 a data de vencimento do acordo
   * @member {Integer} quantidadeDiasAtrasoCorrigido
   */
  exports.prototype['quantidadeDiasAtrasoCorrigido'] = undefined;

  /**
   * Valor do saldo devedor at\u00C3\u00A9 a data de vencimento da cobran\u00C3\u00A7a
   * @member {Number} valorSaldoDevedor
   */
  exports.prototype['valorSaldoDevedor'] = undefined;

  /**
   * Percentual de corre\u00C3\u00A7\u00C3\u00A3o
   * @member {Number} taxaCorrecao
   */
  exports.prototype['taxaCorrecao'] = undefined;

  /**
   * Valor da corre\u00C3\u00A7\u00C3\u00A3o
   * @member {Number} valorCorrecao
   */
  exports.prototype['valorCorrecao'] = undefined;

  /**
   * Valor do IOF devido
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * Valor do saldo devedor corrido da d\u00C3\u00ADvida at\u00C3\u00A9 a data de vencimento do acordo
   * @member {Number} valorSaldoCorrigido
   */
  exports.prototype['valorSaldoCorrigido'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status da conta (id)
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta
   * @member {String} descricaoStatusConta
   */
  exports.prototype['descricaoStatusConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status do acordo (id)
   * @member {Integer} idStatusAcordo
   */
  exports.prototype['idStatusAcordo'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status do acordo
   * @member {String} descricaoStatusAcordo
   */
  exports.prototype['descricaoStatusAcordo'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do escrit\u00C3\u00B3rio de cobran\u00C3\u00A7a
   * @member {Integer} idEscritorioCobranca
   */
  exports.prototype['idEscritorioCobranca'] = undefined;

  /**
   * Nome do escrit\u00C3\u00B3rio de cobran\u00C3\u00A7a
   * @member {String} nomeEscritorioCobranca
   */
  exports.prototype['nomeEscritorioCobranca'] = undefined;

  /**
   * Email do devedor
   * @member {String} emailPessoaConta
   */
  exports.prototype['emailPessoaConta'] = undefined;




  return exports;
}));
