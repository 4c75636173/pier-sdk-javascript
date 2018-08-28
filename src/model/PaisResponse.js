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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PaisResponse</code>.
   * {{{pais_response_description}}}
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
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{pais_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{pais_response_codigo_value}}}
   * @member {String} codigo
   */
  exports.prototype['codigo'] = undefined;

  /**
   * {{{pais_response_sigla_value}}}
   * @member {String} sigla
   */
  exports.prototype['sigla'] = undefined;

  /**
   * {{{pais_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{pais_response_continente_value}}}
   * @member {module:model/PaisResponse.ContinenteEnum} continente
   */
  exports.prototype['continente'] = undefined;

  /**
   * {{{pais_response_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;


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
     * value: ANTARTIDA
     * @const
     */
    ANTARTIDA: "ANTARTIDA",
    
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
