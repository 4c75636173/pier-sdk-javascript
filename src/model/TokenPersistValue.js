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
    root.Pier.TokenPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TokenPersistValue model module.
   * @module model/TokenPersistValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>TokenPersistValue</code>.
   * {{{token_persist_description}}}
   * @alias module:model/TokenPersistValue
   * @class
   * @param token
   * @param base
   * @param owner
   * @param criadoPor
   */
  var exports = function(token, base, owner, criadoPor) {

    this['token'] = token;
    this['base'] = base;
    this['owner'] = owner;
    this['criadoPor'] = criadoPor;
  };

  /**
   * Constructs a <code>TokenPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenPersistValue} obj Optional instance to populate.
   * @return {module:model/TokenPersistValue} The populated <code>TokenPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('base')) {
        obj['base'] = ApiClient.convertToType(data['base'], 'Integer');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('criadoPor')) {
        obj['criadoPor'] = ApiClient.convertToType(data['criadoPor'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{token_dto_token_value}}}
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

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
   * {{{token_dto_criado_por_value}}}
   * @member {String} criadoPor
   */
  exports.prototype['criadoPor'] = undefined;




  return exports;
}));
