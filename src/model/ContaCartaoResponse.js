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
    root.Pier.ContaCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaCartaoResponse model module.
   * @module model/ContaCartaoResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContaCartaoResponse</code>.
   * @alias module:model/ContaCartaoResponse
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>ContaCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaCartaoResponse} obj Optional instance to populate.
   * @return {module:model/ContaCartaoResponse} The populated <code>ContaCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cnpjLoja')) {
        obj['cnpjLoja'] = ApiClient.convertToType(data['cnpjLoja'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('dataCadastroConta')) {
        obj['dataCadastroConta'] = ApiClient.convertToType(data['dataCadastroConta'], 'String');
      }
      if (data.hasOwnProperty('dataEmissaoIdentidade')) {
        obj['dataEmissaoIdentidade'] = ApiClient.convertToType(data['dataEmissaoIdentidade'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('dddCelular')) {
        obj['dddCelular'] = ApiClient.convertToType(data['dddCelular'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('numeroCelular')) {
        obj['numeroCelular'] = ApiClient.convertToType(data['numeroCelular'], 'String');
      }
      if (data.hasOwnProperty('numeroIdentidade')) {
        obj['numeroIdentidade'] = ApiClient.convertToType(data['numeroIdentidade'], 'String');
      }
      if (data.hasOwnProperty('orgaoIdentidade')) {
        obj['orgaoIdentidade'] = ApiClient.convertToType(data['orgaoIdentidade'], 'String');
      }
      if (data.hasOwnProperty('possuiCompraAprovada')) {
        obj['possuiCompraAprovada'] = ApiClient.convertToType(data['possuiCompraAprovada'], 'String');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'Integer');
      }
      if (data.hasOwnProperty('ufIdentidade')) {
        obj['ufIdentidade'] = ApiClient.convertToType(data['ufIdentidade'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} cnpjLoja
   */
  exports.prototype['cnpjLoja'] = undefined;

  /**
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * @member {String} dataCadastroConta
   */
  exports.prototype['dataCadastroConta'] = undefined;

  /**
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * @member {String} dddCelular
   */
  exports.prototype['dddCelular'] = undefined;

  /**
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * @member {String} numeroCelular
   */
  exports.prototype['numeroCelular'] = undefined;

  /**
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * @member {String} orgaoIdentidade
   */
  exports.prototype['orgaoIdentidade'] = undefined;

  /**
   * @member {String} possuiCompraAprovada
   */
  exports.prototype['possuiCompraAprovada'] = undefined;

  /**
   * @member {Integer} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * @member {String} ufIdentidade
   */
  exports.prototype['ufIdentidade'] = undefined;




  return exports;
}));
