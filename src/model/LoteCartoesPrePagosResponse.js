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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>LoteCartoesPrePagosResponse</code>.
   * {{{lote_cartoes_pre_pagos_response_description}}}
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
   * @param identificadorExterno
   */
  var exports = function(id, idOrigemComercial, idProduto, idTipoCartao, idImagem, idEndereco, quantidade, dataCadastro, usuarioCadastro, statusProcessamento, identificadorExterno) {

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
    this['identificadorExterno'] = identificadorExterno;
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
      if (data.hasOwnProperty('identificadorExterno')) {
        obj['identificadorExterno'] = ApiClient.convertToType(data['identificadorExterno'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{lote_cartoes_pre_pagos_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_id_tipo_cartao_value}}}
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_id_imagem_value}}}
   * @member {Integer} idImagem
   */
  exports.prototype['idImagem'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_id_endereco_value}}}
   * @member {Integer} idEndereco
   */
  exports.prototype['idEndereco'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_quantidade_value}}}
   * @member {Integer} quantidade
   */
  exports.prototype['quantidade'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_data_cadastro_value}}}
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_usuario_cadastro_value}}}
   * @member {String} usuarioCadastro
   */
  exports.prototype['usuarioCadastro'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_status_processamento_value}}}
   * @member {Integer} statusProcessamento
   */
  exports.prototype['statusProcessamento'] = undefined;

  /**
   * {{{lote_cartoes_pre_pagos_response_identificador_externo_value}}}
   * @member {String} identificadorExterno
   */
  exports.prototype['identificadorExterno'] = undefined;




  return exports;
}));
