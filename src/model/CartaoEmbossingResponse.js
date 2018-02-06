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
    root.Pier.CartaoEmbossingResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoEmbossingResponse model module.
   * @module model/CartaoEmbossingResponse
   * @version 2.52.0
   */

  /**
   * Constructs a new <code>CartaoEmbossingResponse</code>.
   * Objeto Cart\u00C3\u00A3o para Impress\u00C3\u00A3o pela Gr\u00C3\u00A1fica
   * @alias module:model/CartaoEmbossingResponse
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>CartaoEmbossingResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoEmbossingResponse} obj Optional instance to populate.
   * @return {module:model/CartaoEmbossingResponse} The populated <code>CartaoEmbossingResponse</code> instance.
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
      if (data.hasOwnProperty('idBandeira')) {
        obj['idBandeira'] = ApiClient.convertToType(data['idBandeira'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoCartao')) {
        obj['idTipoCartao'] = ApiClient.convertToType(data['idTipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('dataGeracao')) {
        obj['dataGeracao'] = ApiClient.convertToType(data['dataGeracao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('nomeOrigemComercial')) {
        obj['nomeOrigemComercial'] = ApiClient.convertToType(data['nomeOrigemComercial'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
    }
    return obj;
  }


  /**
   * Apresenta o status que informa se o cart\u00C3\u00A3o \u00C3\u00A9 virtual 
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
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Bandeira (id) a qual o Cart\u00C3\u00A3o pertence, quando bandeirado.
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id) atribu\u00C3\u00ADdo ao Cart\u00C3\u00A3o.
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * Apresenta a data de emiss\u00C3\u00A3o do Cart\u00C3\u00A3o.
   * @member {String} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * Apresenta a data de Validade do Cart\u00C3\u00A3o.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * Apresenta o nome da Origem Comercial que realizou o cadastro do Titular da Conta a qual o Cart\u00C3\u00A3o pertence.
   * @member {String} nomeOrigemComercial
   */
  exports.prototype['nomeOrigemComercial'] = undefined;

  /**
   * Apresenta o CPF do Portador do Cart\u00C3\u00A3o.
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;




  return exports;
}));
