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
    root.Pier.TransferenciaDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaDetalheResponse model module.
   * @module model/TransferenciaDetalheResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TransferenciaDetalheResponse</code>.
   * {{{transferencia_detalhe_response_description}}}
   * @alias module:model/TransferenciaDetalheResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>TransferenciaDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaDetalheResponse} obj Optional instance to populate.
   * @return {module:model/TransferenciaDetalheResponse} The populated <code>TransferenciaDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('dataTransferencia')) {
        obj['dataTransferencia'] = ApiClient.convertToType(data['dataTransferencia'], 'String');
      }
      if (data.hasOwnProperty('idContaOrigem')) {
        obj['idContaOrigem'] = ApiClient.convertToType(data['idContaOrigem'], 'Integer');
      }
      if (data.hasOwnProperty('nomePessoaOrigem')) {
        obj['nomePessoaOrigem'] = ApiClient.convertToType(data['nomePessoaOrigem'], 'String');
      }
      if (data.hasOwnProperty('idContaDestino')) {
        obj['idContaDestino'] = ApiClient.convertToType(data['idContaDestino'], 'Integer');
      }
      if (data.hasOwnProperty('nomePessoaDestino')) {
        obj['nomePessoaDestino'] = ApiClient.convertToType(data['nomePessoaDestino'], 'String');
      }
      if (data.hasOwnProperty('valorTransferencia')) {
        obj['valorTransferencia'] = ApiClient.convertToType(data['valorTransferencia'], 'Number');
      }
      if (data.hasOwnProperty('valorTarifa')) {
        obj['valorTarifa'] = ApiClient.convertToType(data['valorTarifa'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{transferencia_detalhe_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{transferencia_detalhe_response_data_transferencia_value}}}
   * @member {String} dataTransferencia
   */
  exports.prototype['dataTransferencia'] = undefined;

  /**
   * {{{transferencia_detalhe_response_id_conta_origem_value}}}
   * @member {Integer} idContaOrigem
   */
  exports.prototype['idContaOrigem'] = undefined;

  /**
   * {{{transferencia_detalhe_response_nome_pessoa_origem_value}}}
   * @member {String} nomePessoaOrigem
   */
  exports.prototype['nomePessoaOrigem'] = undefined;

  /**
   * {{{transferencia_detalhe_response_id_conta_destino_value}}}
   * @member {Integer} idContaDestino
   */
  exports.prototype['idContaDestino'] = undefined;

  /**
   * {{{transferencia_detalhe_response_nome_pessoa_destino_value}}}
   * @member {String} nomePessoaDestino
   */
  exports.prototype['nomePessoaDestino'] = undefined;

  /**
   * {{{transferencia_detalhe_response_valor_transferencia_value}}}
   * @member {Number} valorTransferencia
   */
  exports.prototype['valorTransferencia'] = undefined;

  /**
   * {{{transferencia_detalhe_response_valor_tarifa_value}}}
   * @member {Number} valorTarifa
   */
  exports.prototype['valorTarifa'] = undefined;




  return exports;
}));
