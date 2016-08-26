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
    root.Pier.CartaoResponseOld = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoResponseOld model module.
   * @module model/CartaoResponseOld
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CartaoResponseOld</code>.
   * @alias module:model/CartaoResponseOld
   * @class
   */
  var exports = function() {
























  };

  /**
   * Constructs a <code>CartaoResponseOld</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoResponseOld} obj Optional instance to populate.
   * @return {module:model/CartaoResponseOld} The populated <code>CartaoResponseOld</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('bin')) {
        obj['bin'] = ApiClient.convertToType(data['bin'], 'Integer');
      }
      if (data.hasOwnProperty('codRetorno')) {
        obj['codRetorno'] = ApiClient.convertToType(data['codRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('codigoDesbloqueio')) {
        obj['codigoDesbloqueio'] = ApiClient.convertToType(data['codigoDesbloqueio'], 'String');
      }
      if (data.hasOwnProperty('criptografiaHSM')) {
        obj['criptografiaHSM'] = ApiClient.convertToType(data['criptografiaHSM'], 'String');
      }
      if (data.hasOwnProperty('dataEmissao')) {
        obj['dataEmissao'] = ApiClient.convertToType(data['dataEmissao'], 'Date');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'Date');
      }
      if (data.hasOwnProperty('dataVencimentoPadrao')) {
        obj['dataVencimentoPadrao'] = ApiClient.convertToType(data['dataVencimentoPadrao'], 'String');
      }
      if (data.hasOwnProperty('descricaoRetorno')) {
        obj['descricaoRetorno'] = ApiClient.convertToType(data['descricaoRetorno'], 'String');
      }
      if (data.hasOwnProperty('estagioCartao')) {
        obj['estagioCartao'] = ApiClient.convertToType(data['estagioCartao'], 'Integer');
      }
      if (data.hasOwnProperty('estagioData')) {
        obj['estagioData'] = ApiClient.convertToType(data['estagioData'], 'Date');
      }
      if (data.hasOwnProperty('flagReversao')) {
        obj['flagReversao'] = ApiClient.convertToType(data['flagReversao'], 'Boolean');
      }
      if (data.hasOwnProperty('flagSenha')) {
        obj['flagSenha'] = ApiClient.convertToType(data['flagSenha'], 'Boolean');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('idLog')) {
        obj['idLog'] = ApiClient.convertToType(data['idLog'], 'String');
      }
      if (data.hasOwnProperty('idPessoaFisica')) {
        obj['idPessoaFisica'] = ApiClient.convertToType(data['idPessoaFisica'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('numeroCartaoReal')) {
        obj['numeroCartaoReal'] = ApiClient.convertToType(data['numeroCartaoReal'], 'String');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('statusData')) {
        obj['statusData'] = ApiClient.convertToType(data['statusData'], 'Date');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} bin
   */
  exports.prototype['bin'] = undefined;

  /**
   * @member {Integer} codRetorno
   */
  exports.prototype['codRetorno'] = undefined;

  /**
   * @member {String} codigoDesbloqueio
   */
  exports.prototype['codigoDesbloqueio'] = undefined;

  /**
   * @member {String} criptografiaHSM
   */
  exports.prototype['criptografiaHSM'] = undefined;

  /**
   * @member {Date} dataEmissao
   */
  exports.prototype['dataEmissao'] = undefined;

  /**
   * @member {Date} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * @member {String} dataVencimentoPadrao
   */
  exports.prototype['dataVencimentoPadrao'] = undefined;

  /**
   * @member {String} descricaoRetorno
   */
  exports.prototype['descricaoRetorno'] = undefined;

  /**
   * @member {Integer} estagioCartao
   */
  exports.prototype['estagioCartao'] = undefined;

  /**
   * @member {Date} estagioData
   */
  exports.prototype['estagioData'] = undefined;

  /**
   * @member {Boolean} flagReversao
   */
  exports.prototype['flagReversao'] = undefined;

  /**
   * @member {Boolean} flagSenha
   */
  exports.prototype['flagSenha'] = undefined;

  /**
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * @member {String} idLog
   */
  exports.prototype['idLog'] = undefined;

  /**
   * @member {Integer} idPessoaFisica
   */
  exports.prototype['idPessoaFisica'] = undefined;

  /**
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * @member {String} numeroCartaoReal
   */
  exports.prototype['numeroCartaoReal'] = undefined;

  /**
   * @member {Integer} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;

  /**
   * @member {Date} statusData
   */
  exports.prototype['statusData'] = undefined;




  return exports;
}));
