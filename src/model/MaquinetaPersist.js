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
    root.Pier.MaquinetaPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MaquinetaPersist model module.
   * @module model/MaquinetaPersist
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>MaquinetaPersist</code>.
   * {{{maquineta_persist_description}}}
   * @alias module:model/MaquinetaPersist
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
   * Constructs a <code>MaquinetaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaquinetaPersist} obj Optional instance to populate.
   * @return {module:model/MaquinetaPersist} The populated <code>MaquinetaPersist</code> instance.
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
   * {{{maquineta_persist_id_terminal_value}}}
   * @member {Integer} idTerminal
   */
  exports.prototype['idTerminal'] = undefined;

  /**
   * {{{maquineta_persist_id_tipo_maquineta_value}}}
   * @member {Integer} idTipoMaquineta
   */
  exports.prototype['idTipoMaquineta'] = undefined;

  /**
   * {{{maquineta_persist_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{maquineta_persist_data_hora_implantacao_value}}}
   * @member {String} dataHoraImplantacao
   */
  exports.prototype['dataHoraImplantacao'] = undefined;




  return exports;
}));
