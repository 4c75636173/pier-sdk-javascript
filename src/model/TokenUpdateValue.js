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
    root.Pier.TokenUpdateValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TokenUpdateValue model module.
   * @module model/TokenUpdateValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TokenUpdateValue</code>.
   * {{{token_update_description}}}
   * @alias module:model/TokenUpdateValue
   * @class
   * @param criadoPor
   */
  var exports = function(criadoPor) {



    this['criadoPor'] = criadoPor;


  };

  /**
   * Constructs a <code>TokenUpdateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenUpdateValue} obj Optional instance to populate.
   * @return {module:model/TokenUpdateValue} The populated <code>TokenUpdateValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('base')) {
        obj['base'] = ApiClient.convertToType(data['base'], 'Integer');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('criadoPor')) {
        obj['criadoPor'] = ApiClient.convertToType(data['criadoPor'], 'String');
      }
      if (data.hasOwnProperty('alteradoPor')) {
        obj['alteradoPor'] = ApiClient.convertToType(data['alteradoPor'], 'String');
      }
      if (data.hasOwnProperty('idAplicacao')) {
        obj['idAplicacao'] = ApiClient.convertToType(data['idAplicacao'], 'Integer');
      }
    }
    return obj;
  }


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

  /**
   * {{{token_dto_alterado_por_value}}}
   * @member {String} alteradoPor
   */
  exports.prototype['alteradoPor'] = undefined;

  /**
   * {{{token_dto_id_application_value}}}
   * @member {Integer} idAplicacao
   */
  exports.prototype['idAplicacao'] = undefined;




  return exports;
}));
