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
    root.Pier.LoteCartoesPrePagosResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoteCartoesPrePagosResponse model module.
   * @module model/LoteCartoesPrePagosResponse
   * @version 2.49.5
   */

  /**
   * Constructs a new <code>LoteCartoesPrePagosResponse</code>.
   * Lote Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pagos
   * @alias module:model/LoteCartoesPrePagosResponse
   * @class
   * @param id
   * @param idOrigemComercial
   * @param idProduto
   * @param idTipoCartao
   * @param idImagem
   * @param idEndereco
   * @param quantidade
   * @param dataCadastro
   * @param usuarioCadastro
   * @param statusProcessamento
   */
  var exports = function(id, idOrigemComercial, idProduto, idTipoCartao, idImagem, idEndereco, quantidade, dataCadastro, usuarioCadastro, statusProcessamento) {

    this['id'] = id;
    this['idOrigemComercial'] = idOrigemComercial;
    this['idProduto'] = idProduto;
    this['idTipoCartao'] = idTipoCartao;
    this['idImagem'] = idImagem;
    this['idEndereco'] = idEndereco;
    this['quantidade'] = quantidade;
    this['dataCadastro'] = dataCadastro;
    this['usuarioCadastro'] = usuarioCadastro;
    this['statusProcessamento'] = statusProcessamento;
  };

  /**
   * Constructs a <code>LoteCartoesPrePagosResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoteCartoesPrePagosResponse} obj Optional instance to populate.
   * @return {module:model/LoteCartoesPrePagosResponse} The populated <code>LoteCartoesPrePagosResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoCartao')) {
        obj['idTipoCartao'] = ApiClient.convertToType(data['idTipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idImagem')) {
        obj['idImagem'] = ApiClient.convertToType(data['idImagem'], 'Integer');
      }
      if (data.hasOwnProperty('idEndereco')) {
        obj['idEndereco'] = ApiClient.convertToType(data['idEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('quantidade')) {
        obj['quantidade'] = ApiClient.convertToType(data['quantidade'], 'Integer');
      }
      if (data.hasOwnProperty('dataCadastro')) {
        obj['dataCadastro'] = ApiClient.convertToType(data['dataCadastro'], 'String');
      }
      if (data.hasOwnProperty('usuarioCadastro')) {
        obj['usuarioCadastro'] = ApiClient.convertToType(data['usuarioCadastro'], 'String');
      }
      if (data.hasOwnProperty('statusProcessamento')) {
        obj['statusProcessamento'] = ApiClient.convertToType(data['statusProcessamento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do lote de cart\u00C3\u00B5es pr\u00C3\u00A9-pagos (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da origem comercial.
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do Produto.
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do tipo do cart\u00C3\u00A3o.
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da Imagem do cart\u00C3\u00A3o.
   * @member {Integer} idImagem
   */
  exports.prototype['idImagem'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o.
   * @member {Integer} idEndereco
   */
  exports.prototype['idEndereco'] = undefined;

  /**
   * N\u00C3\u00BAmero de cart\u00C3\u00B5es existentes no Lote.
   * @member {Integer} quantidade
   */
  exports.prototype['quantidade'] = undefined;

  /**
   * Data de cadastro do lote de cart\u00C3\u00B5es pr\u00C3\u00A9-pagos.
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * Nome do usu\u00C3\u00A1rio que criou o lote.
   * @member {String} usuarioCadastro
   */
  exports.prototype['usuarioCadastro'] = undefined;

  /**
   * Indica o status de processamento do lote.
   * @member {Integer} statusProcessamento
   */
  exports.prototype['statusProcessamento'] = undefined;




  return exports;
}));
