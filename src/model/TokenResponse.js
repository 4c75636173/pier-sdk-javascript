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
    root.Pier.TokenResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TokenResponse model module.
   * @module model/TokenResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TokenResponse</code>.
   * {{{token_response_description}}}
   * @alias module:model/TokenResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenResponse} obj Optional instance to populate.
   * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('base')) {
        obj['base'] = ApiClient.convertToType(data['base'], 'Integer');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('criadoPor')) {
        obj['criadoPor'] = ApiClient.convertToType(data['criadoPor'], 'String');
      }
      if (data.hasOwnProperty('dataCriacao')) {
        obj['dataCriacao'] = ApiClient.convertToType(data['dataCriacao'], 'String');
      }
      if (data.hasOwnProperty('alteradoPor')) {
        obj['alteradoPor'] = ApiClient.convertToType(data['alteradoPor'], 'String');
      }
      if (data.hasOwnProperty('dataModificacao')) {
        obj['dataModificacao'] = ApiClient.convertToType(data['dataModificacao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{token_dto_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{token_dto_base_value}}}
   * @member {Integer} base
   */
  exports.prototype['base'] = undefined;

  /**
   * {{{token_dto_owner_value}}}
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;

  /**
   * {{{token_dto_status_value}}}
   * @member {module:model/TokenResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{token_dto_criado_por_value}}}
   * @member {String} criadoPor
   */
  exports.prototype['criadoPor'] = undefined;

  /**
   * {{{token_dto_data_criacao_value}}}
   * @member {String} dataCriacao
   */
  exports.prototype['dataCriacao'] = undefined;

  /**
   * {{{token_dto_alterado_por_value}}}
   * @member {String} alteradoPor
   */
  exports.prototype['alteradoPor'] = undefined;

  /**
   * {{{token_dto_data_modificacao_value}}}
   * @member {String} dataModificacao
   */
  exports.prototype['dataModificacao'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: ACTIVE
     * @const
     */
    ACTIVE: "ACTIVE",
    
    /**
     * value: REVOKED
     * @const
     */
    REVOKED: "REVOKED",
    
    /**
     * value: DELETED
     * @const
     */
    DELETED: "DELETED"
  };

  return exports;
}));
