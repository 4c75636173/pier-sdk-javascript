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
    root.Pier.ParametroEmissorResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParametroEmissorResponse model module.
   * @module model/ParametroEmissorResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ParametroEmissorResponse</code>.
   * {{{parametro_emissor_resposta_descricao}}}
   * @alias module:model/ParametroEmissorResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ParametroEmissorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParametroEmissorResponse} obj Optional instance to populate.
   * @return {module:model/ParametroEmissorResponse} The populated <code>ParametroEmissorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codigo')) {
        obj['codigo'] = ApiClient.convertToType(data['codigo'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('tipo')) {
        obj['tipo'] = ApiClient.convertToType(data['tipo'], 'String');
      }
      if (data.hasOwnProperty('valorParametro')) {
        obj['valorParametro'] = ApiClient.convertToType(data['valorParametro'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{parametro_emissor_resposta_codigo_descricao}}}
   * @member {String} codigo
   */
  exports.prototype['codigo'] = undefined;

  /**
   * {{{parametro_emissor_resposta_data_validade_descricao}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{parametro_emissor_resposta_descricao_descricao}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{parametro_emissor_resposta_tipo_descricao}}}
   * @member {String} tipo
   */
  exports.prototype['tipo'] = undefined;

  /**
   * {{{parametro_emissor_resposta_valor_parametro_descricao}}}
   * @member {String} valorParametro
   */
  exports.prototype['valorParametro'] = undefined;




  return exports;
}));
