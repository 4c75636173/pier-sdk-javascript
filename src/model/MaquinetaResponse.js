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
    root.Pier.MaquinetaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MaquinetaResponse model module.
   * @module model/MaquinetaResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>MaquinetaResponse</code>.
   * {{{maquineta_response_description}}}
   * @alias module:model/MaquinetaResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>MaquinetaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaquinetaResponse} obj Optional instance to populate.
   * @return {module:model/MaquinetaResponse} The populated <code>MaquinetaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
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
      if (data.hasOwnProperty('dataHoraCadastramento')) {
        obj['dataHoraCadastramento'] = ApiClient.convertToType(data['dataHoraCadastramento'], 'String');
      }
      if (data.hasOwnProperty('terminal')) {
        obj['terminal'] = ApiClient.convertToType(data['terminal'], 'String');
      }
      if (data.hasOwnProperty('usuarioApl')) {
        obj['usuarioApl'] = ApiClient.convertToType(data['usuarioApl'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{maquineta_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{maquineta_response_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{maquineta_response_id_tipo_maquineta_value}}}
   * @member {Integer} idTipoMaquineta
   */
  exports.prototype['idTipoMaquineta'] = undefined;

  /**
   * {{{maquineta_response_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{maquineta_response_data_hora_implantacao_value}}}
   * @member {String} dataHoraImplantacao
   */
  exports.prototype['dataHoraImplantacao'] = undefined;

  /**
   * {{{maquineta_response_data_hora_cadastramento_value}}}
   * @member {String} dataHoraCadastramento
   */
  exports.prototype['dataHoraCadastramento'] = undefined;

  /**
   * {{{maquineta_response_terminal_value}}}
   * @member {String} terminal
   */
  exports.prototype['terminal'] = undefined;

  /**
   * {{{maquineta_response_usuario_apl_value}}}
   * @member {String} usuarioApl
   */
  exports.prototype['usuarioApl'] = undefined;




  return exports;
}));
