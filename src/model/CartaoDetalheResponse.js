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
    root.Pier.CartaoDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoDetalheResponse model module.
   * @module model/CartaoDetalheResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CartaoDetalheResponse</code>.
   * {{{cartao_detalhe_response_description}}}
   * @alias module:model/CartaoDetalheResponse
   * @class
   */
  var exports = function() {

























  };

  /**
   * Constructs a <code>CartaoDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoDetalheResponse} obj Optional instance to populate.
   * @return {module:model/CartaoDetalheResponse} The populated <code>CartaoDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('flagTitular')) {
        obj['flagTitular'] = ApiClient.convertToType(data['flagTitular'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('sequencialCartao')) {
        obj['sequencialCartao'] = ApiClient.convertToType(data['sequencialCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idStatus')) {
        obj['idStatus'] = ApiClient.convertToType(data['idStatus'], 'Integer');
      }
      if (data.hasOwnProperty('dataStatus')) {
        obj['dataStatus'] = ApiClient.convertToType(data['dataStatus'], 'String');
      }
      if (data.hasOwnProperty('idEstagio')) {
        obj['idEstagio'] = ApiClient.convertToType(data['idEstagio'], 'Integer');
      }
      if (data.hasOwnProperty('dataEstagio')) {
        obj['dataEstagio'] = ApiClient.convertToType(data['dataEstagio'], 'String');
      }
      if (data.hasOwnProperty('numeroBin')) {
        obj['numeroBin'] = ApiClient.convertToType(data['numeroBin'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('numeroCartaoHash')) {
        obj['numeroCartaoHash'] = ApiClient.convertToType(data['numeroCartaoHash'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartaoCriptografado')) {
        obj['numeroCartaoCriptografado'] = ApiClient.convertToType(data['numeroCartaoCriptografado'], 'String');
      }
      if (data.hasOwnProperty('dataEmissao')) {
        obj['dataEmissao'] = ApiClient.convertToType(data['dataEmissao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('cartaoVirtual')) {
        obj['cartaoVirtual'] = ApiClient.convertToType(data['cartaoVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('impressaoAvulsa')) {
        obj['impressaoAvulsa'] = ApiClient.convertToType(data['impressaoAvulsa'], 'Integer');
      }
      if (data.hasOwnProperty('dataImpressao')) {
        obj['dataImpressao'] = ApiClient.convertToType(data['dataImpressao'], 'String');
      }
      if (data.hasOwnProperty('nomeArquivoImpressao')) {
        obj['nomeArquivoImpressao'] = ApiClient.convertToType(data['nomeArquivoImpressao'], 'String');
      }
      if (data.hasOwnProperty('descricaoTipoCartao')) {
        obj['descricaoTipoCartao'] = ApiClient.convertToType(data['descricaoTipoCartao'], 'String');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('tipoCartao')) {
        obj['tipoCartao'] = ApiClient.convertToType(data['tipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('codigoDesbloqueio')) {
        obj['codigoDesbloqueio'] = ApiClient.convertToType(data['codigoDesbloqueio'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{cartao_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{cartao_response_flag_titular_value}}}
   * @member {Integer} flagTitular
   */
  exports.prototype['flagTitular'] = undefined;

  /**
   * {{{cartao_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{cartao_response_sequencial_cartao_value}}}
   * @member {Integer} sequencialCartao
   */
  exports.prototype['sequencialCartao'] = undefined;

  /**
   * {{{cartao_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{cartao_response_id_status_value}}}
   * @member {Integer} idStatus
   */
  exports.prototype['idStatus'] = undefined;

  /**
   * {{{cartao_response_data_status_value}}}
   * @member {String} dataStatus
   */
  exports.prototype['dataStatus'] = undefined;

  /**
   * {{{cartao_response_id_estagio_value}}}
   * @member {Integer} idEstagio
   */
  exports.prototype['idEstagio'] = undefined;

  /**
   * {{{cartao_response_data_estagio_value}}}
   * @member {String} dataEstagio
   */
  exports.prototype['dataEstagio'] = undefined;

  /**
   * {{{cartao_response_numero_bin_value}}}
   * @member {Integer} numeroBin
   */
  exports.prototype['numeroBin'] = undefined;

  /**
   * {{{cartao_response_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{cartao_response_numero_cartao_hash_value}}}
   * @member {Integer} numeroCartaoHash
   */
  exports.prototype['numeroCartaoHash'] = undefined;

  /**
   * {{{cartao_response_numero_cartao_criptografado_value}}}
   * @member {String} numeroCartaoCriptografado
   */
  exports.prototype['numeroCartaoCriptografado'] = undefined;

  /**
   * {{{cartao_response_data_emissao_value}}}
   * @member {String} dataEmissao
   */
  exports.prototype['dataEmissao'] = undefined;

  /**
   * {{{cartao_response_data_validade_value}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{cartao_response_cartao_virtual_value}}}
   * @member {Integer} cartaoVirtual
   */
  exports.prototype['cartaoVirtual'] = undefined;

  /**
   * {{{cartao_response_impressao_avulsa_value}}}
   * @member {Integer} impressaoAvulsa
   */
  exports.prototype['impressaoAvulsa'] = undefined;

  /**
   * {{{cartao_response_data_impressao_value}}}
   * @member {String} dataImpressao
   */
  exports.prototype['dataImpressao'] = undefined;

  /**
   * {{{cartao_response_nome_arquivo_impressao_value}}}
   * @member {String} nomeArquivoImpressao
   */
  exports.prototype['nomeArquivoImpressao'] = undefined;

  /**
   * {{{cartao_detalhe_response_descricao_tipo_cartao_value}}}
   * @member {String} descricaoTipoCartao
   */
  exports.prototype['descricaoTipoCartao'] = undefined;

  /**
   * {{{cartao_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{cartao_response_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{cartao_detalhe_response_tipo_cartao_value}}}
   * @member {Integer} tipoCartao
   */
  exports.prototype['tipoCartao'] = undefined;

  /**
   * {{{cartao_response_codigo_desbloqueio_value}}}
   * @member {String} codigoDesbloqueio
   */
  exports.prototype['codigoDesbloqueio'] = undefined;




  return exports;
}));
