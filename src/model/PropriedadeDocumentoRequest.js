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
    root.Pier.PropriedadeDocumentoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PropriedadeDocumentoRequest model module.
   * @module model/PropriedadeDocumentoRequest
   * @version 2.50.4
   */

  /**
   * Constructs a new <code>PropriedadeDocumentoRequest</code>.
   * Objeto que encapsula as propriedades do detalhamento do documento.
   * @alias module:model/PropriedadeDocumentoRequest
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>PropriedadeDocumentoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropriedadeDocumentoRequest} obj Optional instance to populate.
   * @return {module:model/PropriedadeDocumentoRequest} The populated <code>PropriedadeDocumentoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('chave')) {
        obj['chave'] = ApiClient.convertToType(data['chave'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'String');
      }
      if (data.hasOwnProperty('detalhesTipo')) {
        obj['detalhesTipo'] = ApiClient.convertToType(data['detalhesTipo'], 'String');
      }
      if (data.hasOwnProperty('flagIndice')) {
        obj['flagIndice'] = ApiClient.convertToType(data['flagIndice'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * Valor da propriedade do Documento.
   * @member {String} chave
   */
  exports.prototype['chave'] = undefined;

  /**
   * Valor da propriedade do Documento.
   * @member {String} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * Tipo da propriedade do Documento.
   * @member {module:model/PropriedadeDocumentoRequest.DetalhesTipoEnum} detalhesTipo
   */
  exports.prototype['detalhesTipo'] = undefined;

  /**
   * Atributo que indica se o par\u00C3\u00A2metro \u00C3\u00A9 um \u00C3\u00ADndice (default = false)
   * @member {Boolean} flagIndice
   */
  exports.prototype['flagIndice'] = undefined;


  /**
   * Allowed values for the <code>detalhesTipo</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DetalhesTipoEnum = { 
    /**
     * value: IMAGEM
     * @const
     */
    IMAGEM: "IMAGEM",
    
    /**
     * value: TEXTO
     * @const
     */
    TEXTO: "TEXTO",
    
    /**
     * value: NUMERO
     * @const
     */
    NUMERO: "NUMERO"
  };

  return exports;
}));
