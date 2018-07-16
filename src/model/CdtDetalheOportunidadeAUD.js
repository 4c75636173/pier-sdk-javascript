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
    root.Pier.CdtDetalheOportunidadeAUD = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CdtDetalheOportunidadeAUD model module.
   * @module model/CdtDetalheOportunidadeAUD
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>CdtDetalheOportunidadeAUD</code>.
   * @alias module:model/CdtDetalheOportunidadeAUD
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>CdtDetalheOportunidadeAUD</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CdtDetalheOportunidadeAUD} obj Optional instance to populate.
   * @return {module:model/CdtDetalheOportunidadeAUD} The populated <code>CdtDetalheOportunidadeAUD</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idOportunidade')) {
        obj['idOportunidade'] = ApiClient.convertToType(data['idOportunidade'], 'Integer');
      }
      if (data.hasOwnProperty('nomeCampo')) {
        obj['nomeCampo'] = ApiClient.convertToType(data['nomeCampo'], 'String');
      }
      if (data.hasOwnProperty('rev')) {
        obj['rev'] = ApiClient.convertToType(data['rev'], 'Integer');
      }
      if (data.hasOwnProperty('revDate')) {
        obj['revDate'] = ApiClient.convertToType(data['revDate'], 'String');
      }
      if (data.hasOwnProperty('revOportunidade')) {
        obj['revOportunidade'] = ApiClient.convertToType(data['revOportunidade'], 'Integer');
      }
      if (data.hasOwnProperty('revType')) {
        obj['revType'] = ApiClient.convertToType(data['revType'], 'Integer');
      }
      if (data.hasOwnProperty('revUser')) {
        obj['revUser'] = ApiClient.convertToType(data['revUser'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} idOportunidade
   */
  exports.prototype['idOportunidade'] = undefined;

  /**
   * @member {String} nomeCampo
   */
  exports.prototype['nomeCampo'] = undefined;

  /**
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;

  /**
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;

  /**
   * @member {Integer} revOportunidade
   */
  exports.prototype['revOportunidade'] = undefined;

  /**
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * @member {String} revUser
   */
  exports.prototype['revUser'] = undefined;




  return exports;
}));
