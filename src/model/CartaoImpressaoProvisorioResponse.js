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
    root.Pier.CartaoImpressaoProvisorioResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoImpressaoProvisorioResponse model module.
   * @module model/CartaoImpressaoProvisorioResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CartaoImpressaoProvisorioResponse</code>.
   * {{{cartao_impressao_provisorio_response_description}}}
   * @alias module:model/CartaoImpressaoProvisorioResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>CartaoImpressaoProvisorioResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoImpressaoProvisorioResponse} obj Optional instance to populate.
   * @return {module:model/CartaoImpressaoProvisorioResponse} The populated <code>CartaoImpressaoProvisorioResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagVirtual')) {
        obj['flagVirtual'] = ApiClient.convertToType(data['flagVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * {{{cartao_impressao_provisorio_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{cartao_impressao_provisorio_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{cartao_impressao_provisorio_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{cartao_impressao_provisorio_response_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{cartao_impressao_provisorio_response_nome_plastico_value}}}
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * {{{cartao_impressao_provisorio_response_data_validade_value}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;




  return exports;
}));
