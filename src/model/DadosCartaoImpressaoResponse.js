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
    root.Pier.DadosCartaoImpressaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DadosCartaoImpressaoResponse model module.
   * @module model/DadosCartaoImpressaoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DadosCartaoImpressaoResponse</code>.
   * {{{dados_cartao_impressao_response_description}}}
   * @alias module:model/DadosCartaoImpressaoResponse
   * @class
   */
  var exports = function() {



















































  };

  /**
   * Constructs a <code>DadosCartaoImpressaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DadosCartaoImpressaoResponse} obj Optional instance to populate.
   * @return {module:model/DadosCartaoImpressaoResponse} The populated <code>DadosCartaoImpressaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idBandeira')) {
        obj['idBandeira'] = ApiClient.convertToType(data['idBandeira'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoCartao')) {
        obj['idTipoCartao'] = ApiClient.convertToType(data['idTipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('cvv2')) {
        obj['cvv2'] = ApiClient.convertToType(data['cvv2'], 'String');
      }
      if (data.hasOwnProperty('dataGeracao')) {
        obj['dataGeracao'] = ApiClient.convertToType(data['dataGeracao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('tipoPortador')) {
        obj['tipoPortador'] = ApiClient.convertToType(data['tipoPortador'], 'String');
      }
      if (data.hasOwnProperty('trilha1')) {
        obj['trilha1'] = ApiClient.convertToType(data['trilha1'], 'String');
      }
      if (data.hasOwnProperty('trilha2')) {
        obj['trilha2'] = ApiClient.convertToType(data['trilha2'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV1')) {
        obj['trilhaCVV1'] = ApiClient.convertToType(data['trilhaCVV1'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV2')) {
        obj['trilhaCVV2'] = ApiClient.convertToType(data['trilhaCVV2'], 'String');
      }
      if (data.hasOwnProperty('flagVirtual')) {
        obj['flagVirtual'] = ApiClient.convertToType(data['flagVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('nomeBandeira')) {
        obj['nomeBandeira'] = ApiClient.convertToType(data['nomeBandeira'], 'String');
      }
      if (data.hasOwnProperty('flagTitular')) {
        obj['flagTitular'] = ApiClient.convertToType(data['flagTitular'], 'Integer');
      }
      if (data.hasOwnProperty('sequencialCartao')) {
        obj['sequencialCartao'] = ApiClient.convertToType(data['sequencialCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idStatus')) {
        obj['idStatus'] = ApiClient.convertToType(data['idStatus'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusCartao')) {
        obj['descricaoStatusCartao'] = ApiClient.convertToType(data['descricaoStatusCartao'], 'String');
      }
      if (data.hasOwnProperty('dataStatus')) {
        obj['dataStatus'] = ApiClient.convertToType(data['dataStatus'], 'String');
      }
      if (data.hasOwnProperty('idEstagio')) {
        obj['idEstagio'] = ApiClient.convertToType(data['idEstagio'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoEstagio')) {
        obj['descricaoEstagio'] = ApiClient.convertToType(data['descricaoEstagio'], 'String');
      }
      if (data.hasOwnProperty('dataEstagio')) {
        obj['dataEstagio'] = ApiClient.convertToType(data['dataEstagio'], 'String');
      }
      if (data.hasOwnProperty('numeroBin')) {
        obj['numeroBin'] = ApiClient.convertToType(data['numeroBin'], 'String');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoProduto')) {
        obj['descricaoProduto'] = ApiClient.convertToType(data['descricaoProduto'], 'String');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusConta')) {
        obj['descricaoStatusConta'] = ApiClient.convertToType(data['descricaoStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('dataEmbossing')) {
        obj['dataEmbossing'] = ApiClient.convertToType(data['dataEmbossing'], 'String');
      }
      if (data.hasOwnProperty('codigoDesbloqueio')) {
        obj['codigoDesbloqueio'] = ApiClient.convertToType(data['codigoDesbloqueio'], 'String');
      }
      if (data.hasOwnProperty('nomePessoa')) {
        obj['nomePessoa'] = ApiClient.convertToType(data['nomePessoa'], 'String');
      }
      if (data.hasOwnProperty('tipoPessoa')) {
        obj['tipoPessoa'] = ApiClient.convertToType(data['tipoPessoa'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('idEndereco')) {
        obj['idEndereco'] = ApiClient.convertToType(data['idEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoEndereco')) {
        obj['idTipoEndereco'] = ApiClient.convertToType(data['idTipoEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoEndereco')) {
        obj['descricaoTipoEndereco'] = ApiClient.convertToType(data['descricaoTipoEndereco'], 'String');
      }
      if (data.hasOwnProperty('cep')) {
        obj['cep'] = ApiClient.convertToType(data['cep'], 'String');
      }
      if (data.hasOwnProperty('logradouro')) {
        obj['logradouro'] = ApiClient.convertToType(data['logradouro'], 'String');
      }
      if (data.hasOwnProperty('numeroEndereco')) {
        obj['numeroEndereco'] = ApiClient.convertToType(data['numeroEndereco'], 'String');
      }
      if (data.hasOwnProperty('complementoEndereco')) {
        obj['complementoEndereco'] = ApiClient.convertToType(data['complementoEndereco'], 'String');
      }
      if (data.hasOwnProperty('bairro')) {
        obj['bairro'] = ApiClient.convertToType(data['bairro'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
      if (data.hasOwnProperty('pais')) {
        obj['pais'] = ApiClient.convertToType(data['pais'], 'String');
      }
      if (data.hasOwnProperty('senhaCriptografada')) {
        obj['senhaCriptografada'] = ApiClient.convertToType(data['senhaCriptografada'], 'String');
      }
      if (data.hasOwnProperty('icvv')) {
        obj['icvv'] = ApiClient.convertToType(data['icvv'], 'String');
      }
      if (data.hasOwnProperty('idStatusImpressao')) {
        obj['idStatusImpressao'] = ApiClient.convertToType(data['idStatusImpressao'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{dados_cartao_impressao_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_bandeira_value}}}
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_tipo_cartao_value}}}
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_nome_plastico_value}}}
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_cvv2_value}}}
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_data_geracao_value}}}
   * @member {String} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_data_validade_value}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_tipo_portador_value}}}
   * @member {String} tipoPortador
   */
  exports.prototype['tipoPortador'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_trilha1_value}}}
   * @member {String} trilha1
   */
  exports.prototype['trilha1'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_trilha2_value}}}
   * @member {String} trilha2
   */
  exports.prototype['trilha2'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_trilha_c_v_v1_value}}}
   * @member {String} trilhaCVV1
   */
  exports.prototype['trilhaCVV1'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_trilha_c_v_v2_value}}}
   * @member {String} trilhaCVV2
   */
  exports.prototype['trilhaCVV2'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_flag_virtual_value}}}
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_nome_bandeira_value}}}
   * @member {String} nomeBandeira
   */
  exports.prototype['nomeBandeira'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_flag_titular_value}}}
   * @member {Integer} flagTitular
   */
  exports.prototype['flagTitular'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_sequencial_cartao_value}}}
   * @member {Integer} sequencialCartao
   */
  exports.prototype['sequencialCartao'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_status_value}}}
   * @member {Integer} idStatus
   */
  exports.prototype['idStatus'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_descricao_status_cartao_value}}}
   * @member {String} descricaoStatusCartao
   */
  exports.prototype['descricaoStatusCartao'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_data_status_value}}}
   * @member {String} dataStatus
   */
  exports.prototype['dataStatus'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_estagio_value}}}
   * @member {Integer} idEstagio
   */
  exports.prototype['idEstagio'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_descricao_estagio_value}}}
   * @member {String} descricaoEstagio
   */
  exports.prototype['descricaoEstagio'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_data_estagio_value}}}
   * @member {String} dataEstagio
   */
  exports.prototype['dataEstagio'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_numero_bin_value}}}
   * @member {String} numeroBin
   */
  exports.prototype['numeroBin'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_descricao_produto_value}}}
   * @member {String} descricaoProduto
   */
  exports.prototype['descricaoProduto'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_status_conta_value}}}
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_descricao_status_conta_value}}}
   * @member {Integer} descricaoStatusConta
   */
  exports.prototype['descricaoStatusConta'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_data_embossing_value}}}
   * @member {String} dataEmbossing
   */
  exports.prototype['dataEmbossing'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_codigo_desbloqueio_value}}}
   * @member {String} codigoDesbloqueio
   */
  exports.prototype['codigoDesbloqueio'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_nome_pessoa_value}}}
   * @member {String} nomePessoa
   */
  exports.prototype['nomePessoa'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_tipo_pessoa_value}}}
   * @member {String} tipoPessoa
   */
  exports.prototype['tipoPessoa'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_endereco_value}}}
   * @member {Integer} idEndereco
   */
  exports.prototype['idEndereco'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_tipo_endereco_value}}}
   * @member {Integer} idTipoEndereco
   */
  exports.prototype['idTipoEndereco'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_descricao_tipo_endereco_value}}}
   * @member {String} descricaoTipoEndereco
   */
  exports.prototype['descricaoTipoEndereco'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_cep_value}}}
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_logradouro_value}}}
   * @member {String} logradouro
   */
  exports.prototype['logradouro'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_numero_endereco_value}}}
   * @member {String} numeroEndereco
   */
  exports.prototype['numeroEndereco'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_complemento_endereco_value}}}
   * @member {String} complementoEndereco
   */
  exports.prototype['complementoEndereco'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_bairro_value}}}
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_cidade_value}}}
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_uf_value}}}
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_pais_value}}}
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_senha_criptografada_value}}}
   * @member {String} senhaCriptografada
   */
  exports.prototype['senhaCriptografada'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_icvv_value}}}
   * @member {String} icvv
   */
  exports.prototype['icvv'] = undefined;

  /**
   * {{{dados_cartao_impressao_response_id_status_impressao_value}}}
   * @member {Integer} idStatusImpressao
   */
  exports.prototype['idStatusImpressao'] = undefined;




  return exports;
}));
