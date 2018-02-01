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
   * @version 2.51.0
   */

  /**
   * Constructs a new <code>MaquinetaResponse</code>.
   * Objeto de Resposta de Maquineta
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
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Maquineta.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do EStabelecimento.
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo Maquineta.
   * @member {Integer} idTipoMaquineta
   */
  exports.prototype['idTipoMaquineta'] = undefined;

  /**
   * Valor de manuten\u00C3\u00A7\u00C3\u00A3o da Maquineta.
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * Data de implanta\u00C3\u00A7\u00C3\u00A3o da Maquineta.
   * @member {String} dataHoraImplantacao
   */
  exports.prototype['dataHoraImplantacao'] = undefined;

  /**
   * Data de cadastramento da Maquineta.
   * @member {String} dataHoraCadastramento
   */
  exports.prototype['dataHoraCadastramento'] = undefined;

  /**
   * N\u00C3\u00BAmero do terminal vinculado a Maquineta.
   * @member {String} terminal
   */
  exports.prototype['terminal'] = undefined;

  /**
   * Usu\u00C3\u00A1rio da aplica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} usuarioApl
   */
  exports.prototype['usuarioApl'] = undefined;




  return exports;
}));
