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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CartaoEmbossingResponse</code>.
   * {{{cartao_embossing_response_description}}}
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
   * {{{cartao_embossing_response_flag_virtual_value}}}
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * {{{cartao_embossing_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{cartao_embossing_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{cartao_embossing_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{cartao_embossing_response_id_bandeira_value}}}
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * {{{cartao_embossing_response_id_tipo_cartao_value}}}
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * {{{cartao_embossing_response_data_geracao_value}}}
   * @member {String} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * {{{cartao_embossing_response_data_validade_value}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{cartao_embossing_response_nome_origem_comercial_value}}}
   * @member {String} nomeOrigemComercial
   */
  exports.prototype['nomeOrigemComercial'] = undefined;

  /**
   * {{{cartao_embossing_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;




  return exports;
}));
