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
    root.Pier.CartaoImpressao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoImpressao model module.
   * @module model/CartaoImpressao
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>CartaoImpressao</code>.
   * Objeto Cart\u00C3\u00A3o para Impresso
   * @alias module:model/CartaoImpressao
   * @class
   */
  var exports = function() {
























  };

  /**
   * Constructs a <code>CartaoImpressao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoImpressao} obj Optional instance to populate.
   * @return {module:model/CartaoImpressao} The populated <code>CartaoImpressao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('centroCustoConta')) {
        obj['centroCustoConta'] = ApiClient.convertToType(data['centroCustoConta'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('cvv2')) {
        obj['cvv2'] = ApiClient.convertToType(data['cvv2'], 'String');
      }
      if (data.hasOwnProperty('dataGeracao')) {
        obj['dataGeracao'] = ApiClient.convertToType(data['dataGeracao'], 'Date');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'Date');
      }
      if (data.hasOwnProperty('idBandeira')) {
        obj['idBandeira'] = ApiClient.convertToType(data['idBandeira'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoCartao')) {
        obj['idTipoCartao'] = ApiClient.convertToType(data['idTipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEmpregador')) {
        obj['nomeEmpregador'] = ApiClient.convertToType(data['nomeEmpregador'], 'String');
      }
      if (data.hasOwnProperty('nomeEmpresa')) {
        obj['nomeEmpresa'] = ApiClient.convertToType(data['nomeEmpresa'], 'String');
      }
      if (data.hasOwnProperty('nomeEmpresaBeneficio')) {
        obj['nomeEmpresaBeneficio'] = ApiClient.convertToType(data['nomeEmpresaBeneficio'], 'String');
      }
      if (data.hasOwnProperty('nomeOrigemComercial')) {
        obj['nomeOrigemComercial'] = ApiClient.convertToType(data['nomeOrigemComercial'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('numeroContaCorente')) {
        obj['numeroContaCorente'] = ApiClient.convertToType(data['numeroContaCorente'], 'String');
      }
      if (data.hasOwnProperty('tipoPortador')) {
        obj['tipoPortador'] = ApiClient.convertToType(data['tipoPortador'], 'String');
      }
      if (data.hasOwnProperty('trilha1')) {
        obj['trilha1'] = ApiClient.convertToType(data['trilha1'], 'String');
      }
      if (data.hasOwnProperty('trilha2')) {
        obj['trilha2'] = ApiClient.convertToType(data['trilha2'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV1')) {
        obj['trilhaCVV1'] = ApiClient.convertToType(data['trilhaCVV1'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV2')) {
        obj['trilhaCVV2'] = ApiClient.convertToType(data['trilhaCVV2'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} centroCustoConta
   */
  exports.prototype['centroCustoConta'] = undefined;

  /**
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * @member {Date} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * @member {Date} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * @member {String} nomeEmpregador
   */
  exports.prototype['nomeEmpregador'] = undefined;

  /**
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;

  /**
   * @member {String} nomeEmpresaBeneficio
   */
  exports.prototype['nomeEmpresaBeneficio'] = undefined;

  /**
   * @member {String} nomeOrigemComercial
   */
  exports.prototype['nomeOrigemComercial'] = undefined;

  /**
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * @member {String} numeroContaCorente
   */
  exports.prototype['numeroContaCorente'] = undefined;

  /**
   * @member {String} tipoPortador
   */
  exports.prototype['tipoPortador'] = undefined;

  /**
   * @member {String} trilha1
   */
  exports.prototype['trilha1'] = undefined;

  /**
   * @member {String} trilha2
   */
  exports.prototype['trilha2'] = undefined;

  /**
   * @member {String} trilhaCVV1
   */
  exports.prototype['trilhaCVV1'] = undefined;

  /**
   * @member {String} trilhaCVV2
   */
  exports.prototype['trilhaCVV2'] = undefined;




  return exports;
}));
