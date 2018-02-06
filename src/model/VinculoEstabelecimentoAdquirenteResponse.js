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
    root.Pier.VinculoEstabelecimentoAdquirenteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VinculoEstabelecimentoAdquirenteResponse model module.
   * @module model/VinculoEstabelecimentoAdquirenteResponse
   * @version 2.52.0
   */

  /**
   * Constructs a new <code>VinculoEstabelecimentoAdquirenteResponse</code>.
   * Objeto de resposta do VinculoEstabelecimentoAdquirente
   * @alias module:model/VinculoEstabelecimentoAdquirenteResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>VinculoEstabelecimentoAdquirenteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VinculoEstabelecimentoAdquirenteResponse} obj Optional instance to populate.
   * @return {module:model/VinculoEstabelecimentoAdquirenteResponse} The populated <code>VinculoEstabelecimentoAdquirenteResponse</code> instance.
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
      if (data.hasOwnProperty('idAdquirente')) {
        obj['idAdquirente'] = ApiClient.convertToType(data['idAdquirente'], 'Integer');
      }
      if (data.hasOwnProperty('codigoEstabelecimentoAdquirente')) {
        obj['codigoEstabelecimentoAdquirente'] = ApiClient.convertToType(data['codigoEstabelecimentoAdquirente'], 'String');
      }
      if (data.hasOwnProperty('dataHoraCadastro')) {
        obj['dataHoraCadastro'] = ApiClient.convertToType(data['dataHoraCadastro'], 'String');
      }
      if (data.hasOwnProperty('mensagem')) {
        obj['mensagem'] = ApiClient.convertToType(data['mensagem'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do VinculoEstabelecimentoAdquirente (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id).
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Adquirente (id).
   * @member {Integer} idAdquirente
   */
  exports.prototype['idAdquirente'] = undefined;

  /**
   * C\u00C3\u00B3digo do v\u00C3\u00ADnculo entre o estabelecimento e o adquirente.
   * @member {String} codigoEstabelecimentoAdquirente
   */
  exports.prototype['codigoEstabelecimentoAdquirente'] = undefined;

  /**
   * Data de cadastro do v\u00C3\u00ADnculo.
   * @member {String} dataHoraCadastro
   */
  exports.prototype['dataHoraCadastro'] = undefined;

  /**
   * Data de cadastro do v\u00C3\u00ADnculo.
   * @member {String} mensagem
   */
  exports.prototype['mensagem'] = undefined;

  /**
   * Data de cadastro do v\u00C3\u00ADnculo.
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
