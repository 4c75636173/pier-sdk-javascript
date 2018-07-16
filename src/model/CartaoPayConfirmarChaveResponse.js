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
    root.Pier.CartaoPayConfirmarChaveResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoPayConfirmarChaveResponse model module.
   * @module model/CartaoPayConfirmarChaveResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>CartaoPayConfirmarChaveResponse</code>.
   * {{{cartao_pay_confirmar_chave_response_description}}}
   * @alias module:model/CartaoPayConfirmarChaveResponse
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>CartaoPayConfirmarChaveResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoPayConfirmarChaveResponse} obj Optional instance to populate.
   * @return {module:model/CartaoPayConfirmarChaveResponse} The populated <code>CartaoPayConfirmarChaveResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidadeCartao')) {
        obj['dataValidadeCartao'] = ApiClient.convertToType(data['dataValidadeCartao'], 'String');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('idEntidade')) {
        obj['idEntidade'] = ApiClient.convertToType(data['idEntidade'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEntidade')) {
        obj['nomeEntidade'] = ApiClient.convertToType(data['nomeEntidade'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('dataValidadeChaveCriptograma')) {
        obj['dataValidadeChaveCriptograma'] = ApiClient.convertToType(data['dataValidadeChaveCriptograma'], 'String');
      }
      if (data.hasOwnProperty('chaveCriptograma')) {
        obj['chaveCriptograma'] = ApiClient.convertToType(data['chaveCriptograma'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{cartao_pay_base_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{cartao_pay_base_response_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{cartao_pay_base_response_data_validade_cartao_value}}}
   * @member {String} dataValidadeCartao
   */
  exports.prototype['dataValidadeCartao'] = undefined;

  /**
   * {{{cartao_pay_base_response_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{cartao_pay_base_response_id_entidade_value}}}
   * @member {Integer} idEntidade
   */
  exports.prototype['idEntidade'] = undefined;

  /**
   * {{{cartao_pay_base_response_nome_entidade_value}}}
   * @member {String} nomeEntidade
   */
  exports.prototype['nomeEntidade'] = undefined;

  /**
   * {{{cartao_pay_base_response_status_value}}}
   * @member {module:model/CartaoPayConfirmarChaveResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{cartao_pay_response_data_validade_chave_criptograma_value}}}
   * @member {String} dataValidadeChaveCriptograma
   */
  exports.prototype['dataValidadeChaveCriptograma'] = undefined;

  /**
   * {{{cartao_pay_confirmar_chave_response_chave_criptograma_value}}}
   * @member {String} chaveCriptograma
   */
  exports.prototype['chaveCriptograma'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO",
    
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO",
    
    /**
     * value: BLOQUEADO
     * @const
     */
    BLOQUEADO: "BLOQUEADO"
  };

  return exports;
}));
