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
   * @version 2.46.4
   */

  /**
   * Constructs a new <code>CartaoImpressaoProvisorioResponse</code>.
   * Objeto cart\u00C3\u00A3o provis\u00C3\u00B3rio
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
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id) a qual o cart\u00C3\u00A3o gerado pertence.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) portadora do cart\u00C3\u00A3o gerado.
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id) que foi gerado.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Apresenta o nome do Portador do Cart\u00C3\u00A3o.
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * Apresenta a data de Validade do Cart\u00C3\u00A3o.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;




  return exports;
}));
