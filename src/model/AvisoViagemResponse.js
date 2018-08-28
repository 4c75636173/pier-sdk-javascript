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
    root.Pier.AvisoViagemResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AvisoViagemResponse model module.
   * @module model/AvisoViagemResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AvisoViagemResponse</code>.
   * {{{aviso_viagem_response_description}}}
   * @alias module:model/AvisoViagemResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>AvisoViagemResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvisoViagemResponse} obj Optional instance to populate.
   * @return {module:model/AvisoViagemResponse} The populated <code>AvisoViagemResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('codigoPais')) {
        obj['codigoPais'] = ApiClient.convertToType(data['codigoPais'], 'String');
      }
      if (data.hasOwnProperty('dataInicio')) {
        obj['dataInicio'] = ApiClient.convertToType(data['dataInicio'], 'String');
      }
      if (data.hasOwnProperty('dataFim')) {
        obj['dataFim'] = ApiClient.convertToType(data['dataFim'], 'String');
      }
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{aviso_viagem_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{aviso_viagem_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{aviso_viagem_response_codigo_pais_value}}}
   * @member {String} codigoPais
   */
  exports.prototype['codigoPais'] = undefined;

  /**
   * {{{aviso_viagem_response_data_inicio_value}}}
   * @member {String} dataInicio
   */
  exports.prototype['dataInicio'] = undefined;

  /**
   * {{{aviso_viagem_response_data_fim_value}}}
   * @member {String} dataFim
   */
  exports.prototype['dataFim'] = undefined;

  /**
   * {{{aviso_viagem_response_flag_ativo_value}}}
   * @member {Integer} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
