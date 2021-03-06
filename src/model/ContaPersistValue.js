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
    root.Pier.ContaPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaPersistValue model module.
   * @module model/ContaPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ContaPersistValue</code>.
   * {{{conta_persist_description}}}
   * @alias module:model/ContaPersistValue
   * @class
   * @param idPessoa
   * @param idOrigemComercial
   * @param idProduto
   * @param diaVencimento
   * @param valorRenda
   * @param valorPontuacao
   * @param idEnderecoCorrespondencia
   * @param limiteGlobal
   * @param limiteMaximo
   * @param limiteParcelas
   * @param limiteConsignado
   * @param flagFaturaPorEmail
   */
  var exports = function(idPessoa, idOrigemComercial, idProduto, diaVencimento, valorRenda, valorPontuacao, idEnderecoCorrespondencia, limiteGlobal, limiteMaximo, limiteParcelas, limiteConsignado, flagFaturaPorEmail) {

    this['idPessoa'] = idPessoa;
    this['idOrigemComercial'] = idOrigemComercial;
    this['idProduto'] = idProduto;
    this['diaVencimento'] = diaVencimento;
    this['valorRenda'] = valorRenda;

    this['valorPontuacao'] = valorPontuacao;
    this['idEnderecoCorrespondencia'] = idEnderecoCorrespondencia;
    this['limiteGlobal'] = limiteGlobal;
    this['limiteMaximo'] = limiteMaximo;
    this['limiteParcelas'] = limiteParcelas;
    this['limiteConsignado'] = limiteConsignado;
    this['flagFaturaPorEmail'] = flagFaturaPorEmail;
  };

  /**
   * Constructs a <code>ContaPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaPersistValue} obj Optional instance to populate.
   * @return {module:model/ContaPersistValue} The populated <code>ContaPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('diaVencimento')) {
        obj['diaVencimento'] = ApiClient.convertToType(data['diaVencimento'], 'Integer');
      }
      if (data.hasOwnProperty('valorRenda')) {
        obj['valorRenda'] = ApiClient.convertToType(data['valorRenda'], 'Number');
      }
      if (data.hasOwnProperty('canalEntrada')) {
        obj['canalEntrada'] = ApiClient.convertToType(data['canalEntrada'], 'String');
      }
      if (data.hasOwnProperty('valorPontuacao')) {
        obj['valorPontuacao'] = ApiClient.convertToType(data['valorPontuacao'], 'Integer');
      }
      if (data.hasOwnProperty('idEnderecoCorrespondencia')) {
        obj['idEnderecoCorrespondencia'] = ApiClient.convertToType(data['idEnderecoCorrespondencia'], 'Integer');
      }
      if (data.hasOwnProperty('limiteGlobal')) {
        obj['limiteGlobal'] = ApiClient.convertToType(data['limiteGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteMaximo')) {
        obj['limiteMaximo'] = ApiClient.convertToType(data['limiteMaximo'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelas')) {
        obj['limiteParcelas'] = ApiClient.convertToType(data['limiteParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteConsignado')) {
        obj['limiteConsignado'] = ApiClient.convertToType(data['limiteConsignado'], 'Number');
      }
      if (data.hasOwnProperty('flagFaturaPorEmail')) {
        obj['flagFaturaPorEmail'] = ApiClient.convertToType(data['flagFaturaPorEmail'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{conta_persist_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{conta_persist_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{conta_persist_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{conta_persist_dia_vencimento_value}}}
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * {{{conta_persist_valor_renda_value}}}
   * @member {Number} valorRenda
   */
  exports.prototype['valorRenda'] = undefined;

  /**
   * {{{conta_persist_canal_entrada_value}}}
   * @member {String} canalEntrada
   */
  exports.prototype['canalEntrada'] = undefined;

  /**
   * {{{conta_persist_valor_pontuacao_value}}}
   * @member {Integer} valorPontuacao
   */
  exports.prototype['valorPontuacao'] = undefined;

  /**
   * {{{conta_persist_id_endereco_correspondencia_value}}}
   * @member {Integer} idEnderecoCorrespondencia
   */
  exports.prototype['idEnderecoCorrespondencia'] = undefined;

  /**
   * {{{conta_persist_limite_global_value}}}
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * {{{conta_persist_limite_maximo_value}}}
   * @member {Number} limiteMaximo
   */
  exports.prototype['limiteMaximo'] = undefined;

  /**
   * {{{conta_persist_limite_parcelas_value}}}
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * {{{conta_persist_limite_consignado_value}}}
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;

  /**
   * {{{conta_persist_flag_fatura_por_email_value}}}
   * @member {Integer} flagFaturaPorEmail
   */
  exports.prototype['flagFaturaPorEmail'] = undefined;




  return exports;
}));
