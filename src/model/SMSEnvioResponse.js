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
    root.Pier.SMSEnvioResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SMSEnvioResponse model module.
   * @module model/SMSEnvioResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>SMSEnvioResponse</code>.
   * {{{sms_envio_response_description}}}
   * @alias module:model/SMSEnvioResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>SMSEnvioResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMSEnvioResponse} obj Optional instance to populate.
   * @return {module:model/SMSEnvioResponse} The populated <code>SMSEnvioResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('celular')) {
        obj['celular'] = ApiClient.convertToType(data['celular'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('quantidadeTentativasEnvio')) {
        obj['quantidadeTentativasEnvio'] = ApiClient.convertToType(data['quantidadeTentativasEnvio'], 'Integer');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{sms_envio_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{sms_envio_response_status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{sms_envio_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{sms_envio_response_celular_value}}}
   * @member {String} celular
   */
  exports.prototype['celular'] = undefined;

  /**
   * {{{sms_envio_response_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * {{{sms_envio_response_quantidade_tentativas_envio_value}}}
   * @member {Integer} quantidadeTentativasEnvio
   */
  exports.prototype['quantidadeTentativasEnvio'] = undefined;

  /**
   * {{{s_m_s_envio_response_data_inclusao_value}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;




  return exports;
}));
