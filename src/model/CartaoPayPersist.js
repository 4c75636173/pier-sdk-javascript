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
    root.Pier.CartaoPayPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoPayPersist model module.
   * @module model/CartaoPayPersist
   * @version 2.50.4
   */

  /**
   * Constructs a new <code>CartaoPayPersist</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso atualizar cart\u00C3\u00A3o
   * @alias module:model/CartaoPayPersist
   * @class
   * @param numeroCartao
   * @param chavePublicaDevice
   */
  var exports = function(numeroCartao, chavePublicaDevice) {

    this['numeroCartao'] = numeroCartao;




    this['chavePublicaDevice'] = chavePublicaDevice;
  };

  /**
   * Constructs a <code>CartaoPayPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoPayPersist} obj Optional instance to populate.
   * @return {module:model/CartaoPayPersist} The populated <code>CartaoPayPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('cvv')) {
        obj['cvv'] = ApiClient.convertToType(data['cvv'], 'String');
      }
      if (data.hasOwnProperty('numeroReceitaFederal')) {
        obj['numeroReceitaFederal'] = ApiClient.convertToType(data['numeroReceitaFederal'], 'String');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('chavePublicaDevice')) {
        obj['chavePublicaDevice'] = ApiClient.convertToType(data['chavePublicaDevice'], 'String');
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero do cart\u00C3\u00A3o criptografado
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Data de validade do cart\u00C3\u00A3o
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * CVV do cart\u00C3\u00A3o criptografado
   * @member {String} cvv
   */
  exports.prototype['cvv'] = undefined;

  /**
   * CPF do portador do cart\u00C3\u00A3o criptografado
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * Nome impresso no cart\u00C3\u00A3o criptografado
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * Chave p\u00C3\u00BAblica do dispositivo criptografada
   * @member {String} chavePublicaDevice
   */
  exports.prototype['chavePublicaDevice'] = undefined;




  return exports;
}));
