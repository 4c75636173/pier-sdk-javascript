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
    root.Pier.StatusConta = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusConta model module.
   * @module model/StatusConta
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>StatusConta</code>.
   * Status Conta
   * @alias module:model/StatusConta
   * @class
   * @param flagAlteraLimite
   * @param id
   * @param nome
   */
  var exports = function(flagAlteraLimite, id, nome) {

    this['flagAlteraLimite'] = flagAlteraLimite;
    this['id'] = id;

    this['nome'] = nome;
  };

  /**
   * Constructs a <code>StatusConta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusConta} obj Optional instance to populate.
   * @return {module:model/StatusConta} The populated <code>StatusConta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagAlteraLimite')) {
        obj['flagAlteraLimite'] = ApiClient.convertToType(data['flagAlteraLimite'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('mensagemConsultaNegada')) {
        obj['mensagemConsultaNegada'] = ApiClient.convertToType(data['mensagemConsultaNegada'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
    }
    return obj;
  }


  /**
   * Par\u00C3\u00A2metro que define se o Status da Conta permite realizar a Altera\u00C3\u00A7\u00C3\u00A3o de Limites do Portador, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} flagAlteraLimite
   */
  exports.prototype['flagAlteraLimite'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status da Conta (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Apresenta o texto com o motivo que ser\u00C3\u00A1 apresentado na resposta as opera\u00C3\u00A7\u00C3\u00B5es de Listar e Consultar LimitesDisponibilidades.
   * @member {String} mensagemConsultaNegada
   */
  exports.prototype['mensagemConsultaNegada'] = undefined;

  /**
   * Nome atribu\u00C3\u00ADdo ao Status da Conta.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));