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
    root.Pier.InscricaoApnPersistencia = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InscricaoApnPersistencia model module.
   * @module model/InscricaoApnPersistencia
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>InscricaoApnPersistencia</code>.
   * {{{inscricao_apn_persistencia_descricao}}}
   * @alias module:model/InscricaoApnPersistencia
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>InscricaoApnPersistencia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InscricaoApnPersistencia} obj Optional instance to populate.
   * @return {module:model/InscricaoApnPersistencia} The populated <code>InscricaoApnPersistencia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceToken')) {
        obj['deviceToken'] = ApiClient.convertToType(data['deviceToken'], 'String');
      }
      if (data.hasOwnProperty('idAplicacaoMobile')) {
        obj['idAplicacaoMobile'] = ApiClient.convertToType(data['idAplicacaoMobile'], 'Integer');
      }
      if (data.hasOwnProperty('idCartoes')) {
        obj['idCartoes'] = ApiClient.convertToType(data['idCartoes'], ['Integer']);
      }
    }
    return obj;
  }


  /**
   * {{{inscricao_apn_persistencia_device_token_descricao}}}
   * @member {String} deviceToken
   */
  exports.prototype['deviceToken'] = undefined;

  /**
   * {{{inscricao_apn_persistencia_id_aplicacao_mobile_descricao}}}
   * @member {Integer} idAplicacaoMobile
   */
  exports.prototype['idAplicacaoMobile'] = undefined;

  /**
   * {{{inscricao_apn_persistencia_id_cartoes_descricao}}}
   * @member {Array.<Integer>} idCartoes
   */
  exports.prototype['idCartoes'] = undefined;




  return exports;
}));
