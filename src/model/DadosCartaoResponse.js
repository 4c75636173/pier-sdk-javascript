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
    root.Pier.DadosCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DadosCartaoResponse model module.
   * @module model/DadosCartaoResponse
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>DadosCartaoResponse</code>.
   * Objeto Dados Cart\u00C3\u00A3o
   * @alias module:model/DadosCartaoResponse
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>DadosCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DadosCartaoResponse} obj Optional instance to populate.
   * @return {module:model/DadosCartaoResponse} The populated <code>DadosCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagVirtual')) {
        obj['flagVirtual'] = ApiClient.convertToType(data['flagVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('cvv2')) {
        obj['cvv2'] = ApiClient.convertToType(data['cvv2'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorente')) {
        obj['numeroContaCorente'] = ApiClient.convertToType(data['numeroContaCorente'], 'String');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'String');
      }
      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * N\u00C3\u00BAmero do cart\u00C3\u00A3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Data de validade.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * CVV2 do cart\u00C3\u00A3o.
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * Nome do portador.
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * Identificador da conta do portador.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Identificador da cart\u00C3\u00A3o do portador.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero da Ag\u00C3\u00AAncia a ser impresso no Cart\u00C3\u00A3o, quando aplic\u00C3\u00A1vel.
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero da Conta Corrente a ser impresso no Cart\u00C3\u00A3o, quando aplic\u00C3\u00A1vel.
   * @member {String} numeroContaCorente
   */
  exports.prototype['numeroContaCorente'] = undefined;

  /**
   * Status da conta do portador.
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta do portador.
   * @member {String} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * Status do cart\u00C3\u00A3o.
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status do cart\u00C3\u00A3o.
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;




  return exports;
}));
