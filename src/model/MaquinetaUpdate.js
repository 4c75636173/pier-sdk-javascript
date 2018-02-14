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
    root.Pier.MaquinetaUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MaquinetaUpdate model module.
   * @module model/MaquinetaUpdate
   * @version 2.54.2
   */

  /**
   * Constructs a new <code>MaquinetaUpdate</code>.
   * Par\u00C3\u00A2metros de requisi\u00C3\u00A7\u00C3\u00A3o para alterar Maquineta
   * @alias module:model/MaquinetaUpdate
   * @class
   * @param idTerminal
   * @param idTipoMaquineta
   * @param valor
   * @param dataHoraImplantacao
   */
  var exports = function(idTerminal, idTipoMaquineta, valor, dataHoraImplantacao) {

    this['idTerminal'] = idTerminal;
    this['idTipoMaquineta'] = idTipoMaquineta;
    this['valor'] = valor;
    this['dataHoraImplantacao'] = dataHoraImplantacao;
  };

  /**
   * Constructs a <code>MaquinetaUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaquinetaUpdate} obj Optional instance to populate.
   * @return {module:model/MaquinetaUpdate} The populated <code>MaquinetaUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTerminal')) {
        obj['idTerminal'] = ApiClient.convertToType(data['idTerminal'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoMaquineta')) {
        obj['idTipoMaquineta'] = ApiClient.convertToType(data['idTipoMaquineta'], 'Integer');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('dataHoraImplantacao')) {
        obj['dataHoraImplantacao'] = ApiClient.convertToType(data['dataHoraImplantacao'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
   * @member {Integer} idTerminal
   */
  exports.prototype['idTerminal'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo Maquineta (id).
   * @member {Integer} idTipoMaquineta
   */
  exports.prototype['idTipoMaquineta'] = undefined;

  /**
   * Valor de Manuten\u00C3\u00A7\u00C3\u00A3o da Maquineta.
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * Data da implanta\u00C3\u00A7\u00C3\u00A3o da Maquineta.
   * @member {String} dataHoraImplantacao
   */
  exports.prototype['dataHoraImplantacao'] = undefined;




  return exports;
}));
