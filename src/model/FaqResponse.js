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
    root.Pier.FaqResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FaqResponse model module.
   * @module model/FaqResponse
   * @version 2.50.14
   */

  /**
   * Constructs a new <code>FaqResponse</code>.
   * Objeto FAQ
   * @alias module:model/FaqResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>FaqResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaqResponse} obj Optional instance to populate.
   * @return {module:model/FaqResponse} The populated <code>FaqResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('pergunta')) {
        obj['pergunta'] = ApiClient.convertToType(data['pergunta'], 'String');
      }
      if (data.hasOwnProperty('resposta')) {
        obj['resposta'] = ApiClient.convertToType(data['resposta'], 'String');
      }
      if (data.hasOwnProperty('relevancia')) {
        obj['relevancia'] = ApiClient.convertToType(data['relevancia'], 'Integer');
      }
      if (data.hasOwnProperty('plataforma')) {
        obj['plataforma'] = ApiClient.convertToType(data['plataforma'], 'String');
      }
      if (data.hasOwnProperty('categoria')) {
        obj['categoria'] = ApiClient.convertToType(data['categoria'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da FAQ (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Conte\u00C3\u00BAdo da pergunta.
   * @member {String} pergunta
   */
  exports.prototype['pergunta'] = undefined;

  /**
   * Conte\u00C3\u00BAdo da resposta.
   * @member {String} resposta
   */
  exports.prototype['resposta'] = undefined;

  /**
   * N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta.
   * @member {Integer} relevancia
   */
  exports.prototype['relevancia'] = undefined;

  /**
   * Plataforma em que a FAQ se encaixa.
   * @member {String} plataforma
   */
  exports.prototype['plataforma'] = undefined;

  /**
   * Categoria de assunto do qual a FAQ se trata.
   * @member {String} categoria
   */
  exports.prototype['categoria'] = undefined;

  /**
   * Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ.
   * @member {module:model/FaqResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO",
    
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO"
  };

  return exports;
}));
