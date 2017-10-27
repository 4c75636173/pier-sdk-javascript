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
    root.Pier.RiscoFraudeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RiscoFraudeResponse model module.
   * @module model/RiscoFraudeResponse
   * @version 2.43.0
   */

  /**
   * Constructs a new <code>RiscoFraudeResponse</code>.
   * Par\u00C3\u00A2metros de resposta de risco de fraude
   * @alias module:model/RiscoFraudeResponse
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>RiscoFraudeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiscoFraudeResponse} obj Optional instance to populate.
   * @return {module:model/RiscoFraudeResponse} The populated <code>RiscoFraudeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoResolucao')) {
        obj['idTipoResolucao'] = ApiClient.convertToType(data['idTipoResolucao'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoResolucao')) {
        obj['descricaoTipoResolucao'] = ApiClient.convertToType(data['descricaoTipoResolucao'], 'String');
      }
      if (data.hasOwnProperty('flagAltoRisco')) {
        obj['flagAltoRisco'] = ApiClient.convertToType(data['flagAltoRisco'], 'Boolean');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacao')) {
        obj['idTransacao'] = ApiClient.convertToType(data['idTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('dataTransacao')) {
        obj['dataTransacao'] = ApiClient.convertToType(data['dataTransacao'], 'String');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de resolu\u00C3\u00A7\u00C3\u00A3o atribu\u00C3\u00ADdo ao registro
   * @member {Integer} idTipoResolucao
   */
  exports.prototype['idTipoResolucao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de resolu\u00C3\u00A7\u00C3\u00A3o atribu\u00C3\u00ADdo ao registro
   * @member {String} descricaoTipoResolucao
   */
  exports.prototype['descricaoTipoResolucao'] = undefined;

  /**
   * Quando ativa, indica que a transa\u00C3\u00A7\u00C3\u00A3o possui um alto risco de fraude e que todas as transa\u00C3\u00A7\u00C3\u00B5es seguintes a ela ser\u00C3\u00A3o negadas at\u00C3\u00A9 que todas as transa\u00C3\u00A7\u00C3\u00B5es classificadas com risco de fraude sejam analisadas
   * @member {Boolean} flagAltoRisco
   */
  exports.prototype['flagAltoRisco'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * Data em que a transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude foi realizada
   * @member {String} dataTransacao
   */
  exports.prototype['dataTransacao'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;




  return exports;
}));
