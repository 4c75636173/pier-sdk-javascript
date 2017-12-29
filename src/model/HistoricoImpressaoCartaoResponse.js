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
    root.Pier.HistoricoImpressaoCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoImpressaoCartaoResponse model module.
   * @module model/HistoricoImpressaoCartaoResponse
   * @version 2.50.5
   */

  /**
   * Constructs a new <code>HistoricoImpressaoCartaoResponse</code>.
   * Hist\u00C3\u00B3rico Impress\u00C3\u00A3o Cart\u00C3\u00A3o
   * @alias module:model/HistoricoImpressaoCartaoResponse
   * @class
   * @param id
   * @param idCartao
   * @param idStatusImpressaoCartao
   */
  var exports = function(id, idCartao, idStatusImpressaoCartao) {

    this['id'] = id;
    this['idCartao'] = idCartao;
    this['idStatusImpressaoCartao'] = idStatusImpressaoCartao;


  };

  /**
   * Constructs a <code>HistoricoImpressaoCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoImpressaoCartaoResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoImpressaoCartaoResponse} The populated <code>HistoricoImpressaoCartaoResponse</code> instance.
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
      if (data.hasOwnProperty('idStatusImpressaoCartao')) {
        obj['idStatusImpressaoCartao'] = ApiClient.convertToType(data['idStatusImpressaoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('mensagemHistorico')) {
        obj['mensagemHistorico'] = ApiClient.convertToType(data['mensagemHistorico'], 'String');
      }
      if (data.hasOwnProperty('dataHistorico')) {
        obj['dataHistorico'] = ApiClient.convertToType(data['dataHistorico'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Hist\u00C3\u00B3rico de Impress\u00C3\u00A3o Avulsa de Cart\u00C3\u00B5es (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
   * @member {Integer} idStatusImpressaoCartao
   */
  exports.prototype['idStatusImpressaoCartao'] = undefined;

  /**
   * Apresenta uma mensagem que descreve a etapa do processo de impress\u00C3\u00A3o do cart\u00C3\u00A3o que fora realizado.
   * @member {String} mensagemHistorico
   */
  exports.prototype['mensagemHistorico'] = undefined;

  /**
   * Apresenta a data que o registro de Hist\u00C3\u00B3rico de Impress\u00C3\u00A3o de um Cart\u00C3\u00A3o fora inserido.
   * @member {String} dataHistorico
   */
  exports.prototype['dataHistorico'] = undefined;




  return exports;
}));
