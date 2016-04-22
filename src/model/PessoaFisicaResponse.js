// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PessoaFisicaResponse', ['jquery'],
    function($) {
      return PessoaFisicaResponse;
   });
}


var PessoaFisicaResponse = function PessoaFisicaResponse() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.bairro = null;
  
  /**
   * datatype: String
   **/
  self.cep = null;
  
  /**
   * datatype: String
   **/
  self.cidade = null;
  
  /**
   * datatype: String
   **/
  self.complementoLogradouro = null;
  
  /**
   * datatype: String
   **/
  self.cpf = null;
  
  /**
   * datatype: String
   **/
  self.dataEmissaoIdentidade = null;
  
  /**
   * datatype: String
   **/
  self.dataNascimento = null;
  
  /**
   * datatype: String
   **/
  self.dddcelular = null;
  
  /**
   * datatype: String
   **/
  self.dddtelefone = null;
  
  /**
   * datatype: String
   **/
  self.endereco = null;
  
  /**
   * datatype: Integer
   **/
  self.idPessoaFisica = null;
  
  /**
   * datatype: String
   **/
  self.identidade = null;
  
  /**
   * datatype: String
   **/
  self.nome = null;
  
  /**
   * datatype: String
   **/
  self.numeroCelular = null;
  
  /**
   * datatype: Integer
   **/
  self.numeroLogradouro = null;
  
  /**
   * datatype: String
   **/
  self.numeroTelefone = null;
  
  /**
   * datatype: String
   **/
  self.orgaoEmissor = null;
  
  /**
   * datatype: String
   **/
  self.sexo = null;
  
  /**
   * datatype: String
   **/
  self.uf = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.bairro = data.bairro;
    
    self.cep = data.cep;
    
    self.cidade = data.cidade;
    
    self.complementoLogradouro = data.complementoLogradouro;
    
    self.cpf = data.cpf;
    
    self.dataEmissaoIdentidade = data.dataEmissaoIdentidade;
    
    self.dataNascimento = data.dataNascimento;
    
    self.dddcelular = data.dddcelular;
    
    self.dddtelefone = data.dddtelefone;
    
    self.endereco = data.endereco;
    
    self.idPessoaFisica = data.idPessoaFisica;
    
    self.identidade = data.identidade;
    
    self.nome = data.nome;
    
    self.numeroCelular = data.numeroCelular;
    
    self.numeroLogradouro = data.numeroLogradouro;
    
    self.numeroTelefone = data.numeroTelefone;
    
    self.orgaoEmissor = data.orgaoEmissor;
    
    self.sexo = data.sexo;
    
    self.uf = data.uf;
    
  }

  
  /**
   * @return {String}
   **/
  self.getBairro = function() {
    return self.bairro;
  }

  /**
   * @param {String} bairro
   **/
  self.setBairro = function (bairro) {
    self.bairro = bairro;
  }
  
  /**
   * @return {String}
   **/
  self.getCep = function() {
    return self.cep;
  }

  /**
   * @param {String} cep
   **/
  self.setCep = function (cep) {
    self.cep = cep;
  }
  
  /**
   * @return {String}
   **/
  self.getCidade = function() {
    return self.cidade;
  }

  /**
   * @param {String} cidade
   **/
  self.setCidade = function (cidade) {
    self.cidade = cidade;
  }
  
  /**
   * @return {String}
   **/
  self.getComplementoLogradouro = function() {
    return self.complementoLogradouro;
  }

  /**
   * @param {String} complementoLogradouro
   **/
  self.setComplementoLogradouro = function (complementoLogradouro) {
    self.complementoLogradouro = complementoLogradouro;
  }
  
  /**
   * @return {String}
   **/
  self.getCpf = function() {
    return self.cpf;
  }

  /**
   * @param {String} cpf
   **/
  self.setCpf = function (cpf) {
    self.cpf = cpf;
  }
  
  /**
   * @return {String}
   **/
  self.getDataEmissaoIdentidade = function() {
    return self.dataEmissaoIdentidade;
  }

  /**
   * @param {String} dataEmissaoIdentidade
   **/
  self.setDataEmissaoIdentidade = function (dataEmissaoIdentidade) {
    self.dataEmissaoIdentidade = dataEmissaoIdentidade;
  }
  
  /**
   * @return {String}
   **/
  self.getDataNascimento = function() {
    return self.dataNascimento;
  }

  /**
   * @param {String} dataNascimento
   **/
  self.setDataNascimento = function (dataNascimento) {
    self.dataNascimento = dataNascimento;
  }
  
  /**
   * @return {String}
   **/
  self.getDddcelular = function() {
    return self.dddcelular;
  }

  /**
   * @param {String} dddcelular
   **/
  self.setDddcelular = function (dddcelular) {
    self.dddcelular = dddcelular;
  }
  
  /**
   * @return {String}
   **/
  self.getDddtelefone = function() {
    return self.dddtelefone;
  }

  /**
   * @param {String} dddtelefone
   **/
  self.setDddtelefone = function (dddtelefone) {
    self.dddtelefone = dddtelefone;
  }
  
  /**
   * @return {String}
   **/
  self.getEndereco = function() {
    return self.endereco;
  }

  /**
   * @param {String} endereco
   **/
  self.setEndereco = function (endereco) {
    self.endereco = endereco;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdPessoaFisica = function() {
    return self.idPessoaFisica;
  }

  /**
   * @param {Integer} idPessoaFisica
   **/
  self.setIdPessoaFisica = function (idPessoaFisica) {
    self.idPessoaFisica = idPessoaFisica;
  }
  
  /**
   * @return {String}
   **/
  self.getIdentidade = function() {
    return self.identidade;
  }

  /**
   * @param {String} identidade
   **/
  self.setIdentidade = function (identidade) {
    self.identidade = identidade;
  }
  
  /**
   * @return {String}
   **/
  self.getNome = function() {
    return self.nome;
  }

  /**
   * @param {String} nome
   **/
  self.setNome = function (nome) {
    self.nome = nome;
  }
  
  /**
   * @return {String}
   **/
  self.getNumeroCelular = function() {
    return self.numeroCelular;
  }

  /**
   * @param {String} numeroCelular
   **/
  self.setNumeroCelular = function (numeroCelular) {
    self.numeroCelular = numeroCelular;
  }
  
  /**
   * @return {Integer}
   **/
  self.getNumeroLogradouro = function() {
    return self.numeroLogradouro;
  }

  /**
   * @param {Integer} numeroLogradouro
   **/
  self.setNumeroLogradouro = function (numeroLogradouro) {
    self.numeroLogradouro = numeroLogradouro;
  }
  
  /**
   * @return {String}
   **/
  self.getNumeroTelefone = function() {
    return self.numeroTelefone;
  }

  /**
   * @param {String} numeroTelefone
   **/
  self.setNumeroTelefone = function (numeroTelefone) {
    self.numeroTelefone = numeroTelefone;
  }
  
  /**
   * @return {String}
   **/
  self.getOrgaoEmissor = function() {
    return self.orgaoEmissor;
  }

  /**
   * @param {String} orgaoEmissor
   **/
  self.setOrgaoEmissor = function (orgaoEmissor) {
    self.orgaoEmissor = orgaoEmissor;
  }
  
  /**
   * @return {String}
   **/
  self.getSexo = function() {
    return self.sexo;
  }

  /**
   * @param {String} sexo
   **/
  self.setSexo = function (sexo) {
    self.sexo = sexo;
  }
  
  /**
   * @return {String}
   **/
  self.getUf = function() {
    return self.uf;
  }

  /**
   * @param {String} uf
   **/
  self.setUf = function (uf) {
    self.uf = uf;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PessoaFisicaResponse;
}
