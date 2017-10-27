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
    root.Pier.PaisResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PaisResponse model module.
   * @module model/PaisResponse
   * @version 2.43.0
   */

  /**
   * Constructs a new <code>PaisResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso pa\u00C3\u00ADses
   * @alias module:model/PaisResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>PaisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaisResponse} obj Optional instance to populate.
   * @return {module:model/PaisResponse} The populated <code>PaisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('codigo')) {
        obj['codigo'] = ApiClient.convertToType(data['codigo'], 'String');
      }
      if (data.hasOwnProperty('sigla')) {
        obj['sigla'] = ApiClient.convertToType(data['sigla'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('continente')) {
        obj['continente'] = ApiClient.convertToType(data['continente'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador \u00C3\u00BAnico do pa\u00C3\u00ADs na base
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do pa\u00C3\u00ADs
   * @member {String} codigo
   */
  exports.prototype['codigo'] = undefined;

  /**
   * Sigla do pa\u00C3\u00ADs
   * @member {String} sigla
   */
  exports.prototype['sigla'] = undefined;

  /**
   * Nome do pa\u00C3\u00ADs
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Continente no qual o pa\u00C3\u00ADs faz parte
   * @member {module:model/PaisResponse.ContinenteEnum} continente
   */
  exports.prototype['continente'] = undefined;


  /**
   * Allowed values for the <code>continente</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContinenteEnum = { 
    /**
     * value: AFRICA
     * @const
     */
    AFRICA: "AFRICA",
    
    /**
     * value: AMERICA_LATINA
     * @const
     */
    AMERICA_LATINA: "AMERICA_LATINA",
    
    /**
     * value: AMERICA_NORTE
     * @const
     */
    AMERICA_NORTE: "AMERICA_NORTE",
    
    /**
     * value: ASIA
     * @const
     */
    ASIA: "ASIA",
    
    /**
     * value: EUROPA
     * @const
     */
    EUROPA: "EUROPA",
    
    /**
     * value: OCEANIA
     * @const
     */
    OCEANIA: "OCEANIA"
  };

  return exports;
}));
