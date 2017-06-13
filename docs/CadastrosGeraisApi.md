# Pier.CadastrosGeraisApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT1**](CadastrosGeraisApi.md#alterarUsingPUT1) | **PUT** /api/enderecos | Atualiza os dados de um determinado Endere\u00C3\u00A7o
[**alterarUsingPUT4**](CadastrosGeraisApi.md#alterarUsingPUT4) | **PUT** /api/pessoas-detalhes/{id} | Atualiza os detalhes de uma determinada Pessoa
[**alterarUsingPUT5**](CadastrosGeraisApi.md#alterarUsingPUT5) | **PUT** /api/pessoas/{id} | Atualiza os dados de uma determinada Pessoa
[**alterarUsingPUT6**](CadastrosGeraisApi.md#alterarUsingPUT6) | **PUT** /api/telefones | Realiza a altera\u00C3\u00A7\u00C3\u00A3o de um determinado Telefone
[**ativarUsoExteriorUsingPOST**](CadastrosGeraisApi.md#ativarUsoExteriorUsingPOST) | **POST** /api/produtos/{id}/ativar-uso-exterior | Ativa o par\u00C3\u00A2metro uso exterior para o produto
[**configurarTaxaAntecipacaoUsingPOST**](CadastrosGeraisApi.md#configurarTaxaAntecipacaoUsingPOST) | **POST** /api/produtos/{id}/configurar-taxa-antecipacao | Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
[**consultarOrigemComercialUsingGET**](CadastrosGeraisApi.md#consultarOrigemComercialUsingGET) | **GET** /api/origens-comerciais/{id} | Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial
[**consultarTaxaAntecipacaoUsingGET**](CadastrosGeraisApi.md#consultarTaxaAntecipacaoUsingGET) | **GET** /api/produtos/{id}/consultar-taxa-antecipacao | Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
[**consultarUsingGET1**](CadastrosGeraisApi.md#consultarUsingGET1) | **GET** /api/bancos/{id} | Apresenta os dados de um determinado Banco
[**consultarUsingGET10**](CadastrosGeraisApi.md#consultarUsingGET10) | **GET** /api/pessoas/{id} | Apresenta os dados de uma determinada Pessoa
[**consultarUsingGET11**](CadastrosGeraisApi.md#consultarUsingGET11) | **GET** /api/produtos/{id} | Apresenta os dados de um determinado Produto
[**consultarUsingGET15**](CadastrosGeraisApi.md#consultarUsingGET15) | **GET** /api/telefones/{id} | Apresenta os dados de um determinado Telefone
[**consultarUsingGET17**](CadastrosGeraisApi.md#consultarUsingGET17) | **GET** /api/tipos-ajustes | Lista os tipos de ajustes do emissor 
[**consultarUsingGET18**](CadastrosGeraisApi.md#consultarUsingGET18) | **GET** /api/tipos-boletos | Lista os tipos de boletos do emissor 
[**consultarUsingGET19**](CadastrosGeraisApi.md#consultarUsingGET19) | **GET** /api/tipos-enderecos/{id} | Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
[**consultarUsingGET21**](CadastrosGeraisApi.md#consultarUsingGET21) | **GET** /api/tipos-telefones/{id} | Apresenta os dados de um determinado Tipo de Telefone
[**consultarUsingGET5**](CadastrosGeraisApi.md#consultarUsingGET5) | **GET** /api/enderecos/{id} | Apresenta os dados de um determinado Endere\u00C3\u00A7o
[**consultarUsingGET9**](CadastrosGeraisApi.md#consultarUsingGET9) | **GET** /api/pessoas-detalhes/{id} | Apresenta os detalhes de uma determinada Pessoa
[**desativarUsoExteriorUsingPOST**](CadastrosGeraisApi.md#desativarUsoExteriorUsingPOST) | **POST** /api/produtos/{id}/desativar-uso-exterior | Desativa o par\u00C3\u00A2metro uso exterior para o produto
[**listarContasPorPessoaUsingGET**](CadastrosGeraisApi.md#listarContasPorPessoaUsingGET) | **GET** /api/pessoas/listar-contas | Lista as contas da pessoa
[**listarEstadosCivisUsingGET**](CadastrosGeraisApi.md#listarEstadosCivisUsingGET) | **GET** /api/estados-civis | Lista os Estados C\u00C3\u00ADvis
[**listarHistoricoTelefonesUsingGET**](CadastrosGeraisApi.md#listarHistoricoTelefonesUsingGET) | **GET** /api/pessoas/{id}/historico-telefones | Listar altera\u00C3\u00A7\u00C3\u00B5es de telefones realizadas nos \u00C3\u00BAltimos 60 dias
[**listarNacionalidadesUsingGET**](CadastrosGeraisApi.md#listarNacionalidadesUsingGET) | **GET** /api/nacionalidades | Lista nacionalidades
[**listarNaturezasOcupacoesUsingGET**](CadastrosGeraisApi.md#listarNaturezasOcupacoesUsingGET) | **GET** /api/ocupacoes | Lista as Ocupa\u00C3\u00A7\u00C3\u00B5es
[**listarOrigensComerciaisUsingGET**](CadastrosGeraisApi.md#listarOrigensComerciaisUsingGET) | **GET** /api/origens-comerciais | Opera\u00C3\u00A7\u00C3\u00A3o utilizada para listar Origens Comerciais
[**listarProfissoesUsingGET**](CadastrosGeraisApi.md#listarProfissoesUsingGET) | **GET** /api/profissoes | Lista profiss\u00C3\u00B5es
[**listarUsingGET13**](CadastrosGeraisApi.md#listarUsingGET13) | **GET** /api/pessoas-detalhes | Lista os Detalhes das Pessoas cadastradas no Emissor
[**listarUsingGET14**](CadastrosGeraisApi.md#listarUsingGET14) | **GET** /api/pessoas | Lista as Pessoas cadastradas no Emissor
[**listarUsingGET16**](CadastrosGeraisApi.md#listarUsingGET16) | **GET** /api/portadores | Lista os Portadores existentes
[**listarUsingGET17**](CadastrosGeraisApi.md#listarUsingGET17) | **GET** /api/produtos | Lista os Produtos do Emissor
[**listarUsingGET2**](CadastrosGeraisApi.md#listarUsingGET2) | **GET** /api/bancos | Lista os Bancos cadastrados para o Emissor
[**listarUsingGET21**](CadastrosGeraisApi.md#listarUsingGET21) | **GET** /api/telefones | Lista os Telefones cadastrados no Emissor
[**listarUsingGET23**](CadastrosGeraisApi.md#listarUsingGET23) | **GET** /api/tipos-enderecos | Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 
[**listarUsingGET25**](CadastrosGeraisApi.md#listarUsingGET25) | **GET** /api/tipos-telefones | Lista os Tipos de Telefones
[**listarUsingGET8**](CadastrosGeraisApi.md#listarUsingGET8) | **GET** /api/enderecos | Lista os Endere\u00C3\u00A7os cadastrados para o Emissor
[**salvarPessoaFisicaAprovadaUsingPOST**](CadastrosGeraisApi.md#salvarPessoaFisicaAprovadaUsingPOST) | **POST** /api/clientes-pessoas-fisicas | Cadastro de Conta e Pessoa Fisica
[**salvarPessoaJuridicaAprovadaUsingPOST**](CadastrosGeraisApi.md#salvarPessoaJuridicaAprovadaUsingPOST) | **POST** /api/clientes-pessoas-juridicas | Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica
[**salvarUsingPOST10**](CadastrosGeraisApi.md#salvarUsingPOST10) | **POST** /api/telefones | Realiza o cadastro de um novo Telefone
[**salvarUsingPOST4**](CadastrosGeraisApi.md#salvarUsingPOST4) | **POST** /api/enderecos | Realiza o cadastro de um novo Endere\u00C3\u00A7o
[**salvarUsingPOST7**](CadastrosGeraisApi.md#salvarUsingPOST7) | **POST** /api/pessoas-detalhes | Salvar os detalhes de uma determinada Pessoa
[**salvarUsingPOST8**](CadastrosGeraisApi.md#salvarUsingPOST8) | **POST** /api/pessoas | Realiza o cadastro de um nova Pessoa


<a name="alterarUsingPUT1"></a>
# **alterarUsingPUT1**
> Endereco alterarUsingPUT1(id, opts)

Atualiza os dados de um determinado Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite que seja alterado na base do emissor um ou mais registros ligados a um determinado Endere\u00C3\u00A7o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} id

var opts = { 
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro '58800000'
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
  'bairro': "bairro_example", // {String} Apresenta nome do bairro
  'cidade': "cidade_example", // {String} Apresenta nome da cidade
  'uf': "uf_example", // {String} Apresenta sigla da Unidade Federativa
  'pais': "pais_example" // {String} Apresenta nome do Pais
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro &#39;58800000&#39; | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 

### Return type

[**Endereco**](Endereco.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT4"></a>
# **alterarUsingPUT4**
> PessoaDetalheResponse alterarUsingPUT4(id, opts)

Atualiza os detalhes de uma determinada Pessoa

Este m\u00C3\u00A9todo permite que seja alterado na base do emissor os detalhes de uma determinada Pessoa.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} ID da Pessoa

var opts = { 
  'nomeMae': "nomeMae_example", // {String} Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
  'idEstadoCivil': 789, // {Integer} Id Estado civil da pessoa fisica
  'profissao': "profissao_example", // {String} Profiss\u00C3\u00A3o da pessoa fisica
  'idNaturezaOcupacao': 789, // {Integer} Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
  'idNacionalidade': 789, // {Integer} Id Nacionalidade da pessoa fisica
  'numeroAgencia': 56, // {Integer} N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} N\u00C3\u00BAmero da conta corrente.
  'email': "email_example", // {String} Email da pessoa fisica
  'nomeEmpresa': "nomeEmpresa_example" // {String} Nome que deve ser impresso no cart\u00C3\u00A3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT4(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 
 **nomeMae** | **String**| Apresenta o nome da m\u00C3\u00A3e da pessoa fisica | [optional] 
 **idEstadoCivil** | **Integer**| Id Estado civil da pessoa fisica | [optional] 
 **profissao** | **String**| Profiss\u00C3\u00A3o da pessoa fisica | [optional] 
 **idNaturezaOcupacao** | **Integer**| Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica | [optional] 
 **idNacionalidade** | **Integer**| Id Nacionalidade da pessoa fisica | [optional] 
 **numeroAgencia** | **Integer**| N\u00C3\u00BAmero da ag\u00C3\u00AAncia. | [optional] 
 **numeroContaCorrente** | **String**| N\u00C3\u00BAmero da conta corrente. | [optional] 
 **email** | **String**| Email da pessoa fisica | [optional] 
 **nomeEmpresa** | **String**| Nome que deve ser impresso no cart\u00C3\u00A3o | [optional] 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT5"></a>
# **alterarUsingPUT5**
> Pessoa alterarUsingPUT5(id, nome, tipo, opts)

Atualiza os dados de uma determinada Pessoa

Este m\u00C3\u00A9todo permite que seja alterado na base do emissor um registro de determinada Pessoa.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} ID da Pessoa

var nome = "nome_example"; // {String} Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)'.

var tipo = "tipo_example"; // {String} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\"PF\": Pessoa F\u00C3\u00ADsica), (\"PJ\": Pessoa Jur\u00C3\u00ADdica).

var opts = { 
  'cpf': "cpf_example", // {String} N\u00C3\u00BAmero do CPF, quando PF.
  'cnpj': "cnpj_example", // {String} N\u00C3\u00BAmero do CNPJ, quando PJ.
  'dataNascimento': "dataNascimento_example", // {String} Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.
  'sexo': "sexo_example", // {String} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00C3\u00A3o Especificado).
  'numeroIdentidade': "numeroIdentidade_example", // {String} N\u00C3\u00BAmero da Identidade.
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} Org\u00C3\u00A3o expedidor do Identidade.
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} Sigla da Unidade Federativa de onde foi expedido a Identidade
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} Data emiss\u00C3\u00A3o da Identidade.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT5(id, nome, tipo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 
 **nome** | **String**| Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;. | 
 **tipo** | **String**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica). | 
 **cpf** | **String**| N\u00C3\u00BAmero do CPF, quando PF. | [optional] 
 **cnpj** | **String**| N\u00C3\u00BAmero do CNPJ, quando PJ. | [optional] 
 **dataNascimento** | **String**| Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd. | [optional] 
 **sexo** | **String**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado). | [optional] 
 **numeroIdentidade** | **String**| N\u00C3\u00BAmero da Identidade. | [optional] 
 **orgaoExpedidorIdentidade** | **String**| Org\u00C3\u00A3o expedidor do Identidade. | [optional] 
 **unidadeFederativaIdentidade** | **String**| Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
 **dataEmissaoIdentidade** | **String**| Data emiss\u00C3\u00A3o da Identidade. | [optional] 

### Return type

[**Pessoa**](Pessoa.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT6"></a>
# **alterarUsingPUT6**
> Telefone alterarUsingPUT6(id, opts)

Realiza a altera\u00C3\u00A7\u00C3\u00A3o de um determinado Telefone

Este m\u00C3\u00A9todo permite que seja alterado um determinado Telefone na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).

var opts = { 
  'idTipoTelefone': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
  'ddd': "ddd_example", // {String} C\u00C3\u00B3digo DDD do telefone (id).
  'telefone': "telefone_example", // {String} N\u00C3\u00BAmero do telefone.
  'ramal': "ramal_example" // {String} N\u00C3\u00BAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT6(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id). | 
 **idTipoTelefone** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id). | [optional] 
 **ddd** | **String**| C\u00C3\u00B3digo DDD do telefone (id). | [optional] 
 **telefone** | **String**| N\u00C3\u00BAmero do telefone. | [optional] 
 **ramal** | **String**| N\u00C3\u00BAmero do ramal. | [optional] 

### Return type

[**Telefone**](Telefone.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarUsoExteriorUsingPOST"></a>
# **ativarUsoExteriorUsingPOST**
> ProdutoDetalhesResponse ativarUsoExteriorUsingPOST(id)

Ativa o par\u00C3\u00A2metro uso exterior para o produto

Este m\u00C3\u00A9todo permite ativar o uso no exterior para o produto atrav\u00C3\u00A9s do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarUsoExteriorUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id) | 

### Return type

[**ProdutoDetalhesResponse**](ProdutoDetalhesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configurarTaxaAntecipacaoUsingPOST"></a>
# **configurarTaxaAntecipacaoUsingPOST**
> ParametroProdutoResponse configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest)

Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto

Este recurso permite configurar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} Id Produto

var taxaAntecipacaoRequest = new Pier.TaxaAntecipacaoRequest(); // {TaxaAntecipacaoRequest} taxaAntecipacaoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Produto | 
 **taxaAntecipacaoRequest** | [**TaxaAntecipacaoRequest**](TaxaAntecipacaoRequest.md)| taxaAntecipacaoRequest | 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarOrigemComercialUsingGET"></a>
# **consultarOrigemComercialUsingGET**
> OrigemComercial consultarOrigemComercialUsingGET(id)

Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial

Este m\u00C3\u00A9todo permite que sejam listados os registros de uma determinada Origem Comercial existente na base do emissor. Para isso, \u00C3\u00A9 preciso informar o seu respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} ID da Origem Comercial


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarOrigemComercialUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Origem Comercial | 

### Return type

[**OrigemComercial**](OrigemComercial.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTaxaAntecipacaoUsingGET"></a>
# **consultarTaxaAntecipacaoUsingGET**
> ParametroProdutoResponse consultarTaxaAntecipacaoUsingGET(id, tipoTransacao)

Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto

Este recurso permite consultar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} Id Produto

var tipoTransacao = "tipoTransacao_example"; // {String} Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON-US ou OFF-US)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTaxaAntecipacaoUsingGET(id, tipoTransacao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Produto | 
 **tipoTransacao** | **String**| Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON-US ou OFF-US) | 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET1"></a>
# **consultarUsingGET1**
> Banco consultarUsingGET1(id)

Apresenta os dados de um determinado Banco

Este m\u00C3\u00A9todo permite consultar um determinado Banco a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Banco (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Banco (id). | 

### Return type

[**Banco**](Banco.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET10"></a>
# **consultarUsingGET10**
> Pessoa consultarUsingGET10(id)

Apresenta os dados de uma determinada Pessoa

Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} ID da Pessoa


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET10(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 

### Return type

[**Pessoa**](Pessoa.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET11"></a>
# **consultarUsingGET11**
> ProdutoDetalhesResponse consultarUsingGET11(id)

Apresenta os dados de um determinado Produto

Este m\u00C3\u00A9todo permite consultar um determinado Produto a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET11(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id) | 

### Return type

[**ProdutoDetalhesResponse**](ProdutoDetalhesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET15"></a>
# **consultarUsingGET15**
> Telefone consultarUsingGET15(id)

Apresenta os dados de um determinado Telefone

Este m\u00C3\u00A9todo permite consultar um determinado Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET15(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id). | 

### Return type

[**Telefone**](Telefone.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET17"></a>
# **consultarUsingGET17**
> PageTipoAjuste consultarUsingGET17(opts)

Lista os tipos de ajustes do emissor 

Este recurso permite que sejam listados os tipos de ajustes existentes na base de dados do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo identificador do tipo de ajuste.
  'descricao': "descricao_example" // {String} Descri\u00C3\u00A7\u00C3\u00A3o do tipo de ajuste.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET17(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador do tipo de ajuste. | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo de ajuste. | [optional] 

### Return type

[**PageTipoAjuste**](PageTipoAjuste.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET18"></a>
# **consultarUsingGET18**
> PageTipoBoleto consultarUsingGET18(opts)

Lista os tipos de boletos do emissor 

Este recurso permite que sejam listados os tipos de boletos existentes na base de dados do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo identificador do tipo de boleto.
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do tipo de boleto.
  'banco': 789 // {Integer} C\u00C3\u00B3digo identificador do banco.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET18(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador do tipo de boleto. | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo de boleto. | [optional] 
 **banco** | **Integer**| C\u00C3\u00B3digo identificador do banco. | [optional] 

### Return type

[**PageTipoBoleto**](PageTipoBoleto.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET19"></a>
# **consultarUsingGET19**
> TipoEndereco consultarUsingGET19(id)

Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET19(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id) | 

### Return type

[**TipoEndereco**](TipoEndereco.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET21"></a>
# **consultarUsingGET21**
> TipoTelefone consultarUsingGET21(id)

Apresenta os dados de um determinado Tipo de Telefone

Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET21(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id) | 

### Return type

[**TipoTelefone**](TipoTelefone.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET5"></a>
# **consultarUsingGET5**
> Endereco consultarUsingGET5(id)

Apresenta os dados de um determinado Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite consultar um determinado Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET5(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id). | 

### Return type

[**Endereco**](Endereco.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET9"></a>
# **consultarUsingGET9**
> PessoaDetalheResponse consultarUsingGET9(id)

Apresenta os detalhes de uma determinada Pessoa

Este m\u00C3\u00A9todo permite a consulta dos detalhes de uma Pessoa existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} ID da Pessoa


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET9(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarUsoExteriorUsingPOST"></a>
# **desativarUsoExteriorUsingPOST**
> ProdutoDetalhesResponse desativarUsoExteriorUsingPOST(id)

Desativa o par\u00C3\u00A2metro uso exterior para o produto

Este m\u00C3\u00A9todo permite desativar o uso no exterior para o produto atrav\u00C3\u00A9s do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarUsoExteriorUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id) | 

### Return type

[**ProdutoDetalhesResponse**](ProdutoDetalhesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarContasPorPessoaUsingGET"></a>
# **listarContasPorPessoaUsingGET**
> PageContasDetalhe listarContasPorPessoaUsingGET(numeroReceitaFederal, opts)

Lista as contas da pessoa

Permite listar as contas de um pessoa a partir do seu numero na receita federal.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var numeroReceitaFederal = "numeroReceitaFederal_example"; // {String} N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do cliente na Receita Federal (CPF ou CNPJ)

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarContasPorPessoaUsingGET(numeroReceitaFederal, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroReceitaFederal** | **String**| N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do cliente na Receita Federal (CPF ou CNPJ) | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageContasDetalhe**](PageContasDetalhe.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarEstadosCivisUsingGET"></a>
# **listarEstadosCivisUsingGET**
> PageCampoCodificadoDescricao listarEstadosCivisUsingGET(opts)

Lista os Estados C\u00C3\u00ADvis

Este m\u00C3\u00A9todo permite que sejam listados os Estados C\u00C3\u00ADvis na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarEstadosCivisUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricao**](PageCampoCodificadoDescricao.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoTelefonesUsingGET"></a>
# **listarHistoricoTelefonesUsingGET**
> HistoricoTelefone listarHistoricoTelefonesUsingGET(id)

Listar altera\u00C3\u00A7\u00C3\u00B5es de telefones realizadas nos \u00C3\u00BAltimos 60 dias

Este m\u00C3\u00A9todo permite verificar quais os telefones de um determinado que cliente que sofreram altera\u00C3\u00A7\u00C3\u00A3o nos \u00C3\u00BAltimos 60 dias.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoTelefonesUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id). | 

### Return type

[**HistoricoTelefone**](HistoricoTelefone.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNacionalidadesUsingGET"></a>
# **listarNacionalidadesUsingGET**
> PageCampoCodificadoDescricao listarNacionalidadesUsingGET(opts)

Lista nacionalidades

Este m\u00C3\u00A9todo permite que sejam listados as nacionalidades na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarNacionalidadesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricao**](PageCampoCodificadoDescricao.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNaturezasOcupacoesUsingGET"></a>
# **listarNaturezasOcupacoesUsingGET**
> PageCampoCodificadoDescricao listarNaturezasOcupacoesUsingGET(opts)

Lista as Ocupa\u00C3\u00A7\u00C3\u00B5es

Este m\u00C3\u00A9todo permite que sejam listados as naturezas de opera\u00C3\u00A7\u00C3\u00B5es na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarNaturezasOcupacoesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricao**](PageCampoCodificadoDescricao.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarOrigensComerciaisUsingGET"></a>
# **listarOrigensComerciaisUsingGET**
> PageOrigensComerciais listarOrigensComerciaisUsingGET(opts)

Opera\u00C3\u00A7\u00C3\u00A3o utilizada para listar Origens Comerciais

Este m\u00C3\u00A9todo permite que sejam listadas as Origens Comerciais existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} Id da origem comercial
  'nome': "nome_example", // {String} Nome da origem comercial
  'status': 56 // {Integer} Status da origem comercial
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarOrigensComerciaisUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| Id da origem comercial | [optional] 
 **nome** | **String**| Nome da origem comercial | [optional] 
 **status** | **Integer**| Status da origem comercial | [optional] 

### Return type

[**PageOrigensComerciais**](PageOrigensComerciais.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarProfissoesUsingGET"></a>
# **listarProfissoesUsingGET**
> PageCampoCodificadoDescricao listarProfissoesUsingGET(opts)

Lista profiss\u00C3\u00B5es

Este m\u00C3\u00A9todo permite que sejam listados as profiss\u00C3\u00B5es na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarProfissoesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricao**](PageCampoCodificadoDescricao.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET13"></a>
# **listarUsingGET13**
> PessoaDetalheResponse listarUsingGET13(opts)

Lista os Detalhes das Pessoas cadastradas no Emissor

Este m\u00C3\u00A9todo permite que sejam listadas od detalhes das Pessoas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo identificador da pessoa
  'nomeMae': "nomeMae_example", // {String} Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
  'idEstadoCivil': 789, // {Integer} Id Estado civil da pessoa fisica
  'profissao': "profissao_example", // {String} Profiss\u00C3\u00A3o da pessoa fisica
  'idNaturezaOcupacao': 789, // {Integer} Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
  'idNacionalidade': 789, // {Integer} Id Nacionalidade da pessoa fisica
  'numeroAgencia': 56, // {Integer} N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} N\u00C3\u00BAmero da conta corrente.
  'email': "email_example", // {String} Email da pessoa fisica
  'nomeEmpresa': "nomeEmpresa_example" // {String} Nome que deve ser impresso no cart\u00C3\u00A3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET13(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo identificador da pessoa | [optional] 
 **nomeMae** | **String**| Apresenta o nome da m\u00C3\u00A3e da pessoa fisica | [optional] 
 **idEstadoCivil** | **Integer**| Id Estado civil da pessoa fisica | [optional] 
 **profissao** | **String**| Profiss\u00C3\u00A3o da pessoa fisica | [optional] 
 **idNaturezaOcupacao** | **Integer**| Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica | [optional] 
 **idNacionalidade** | **Integer**| Id Nacionalidade da pessoa fisica | [optional] 
 **numeroAgencia** | **Integer**| N\u00C3\u00BAmero da ag\u00C3\u00AAncia. | [optional] 
 **numeroContaCorrente** | **String**| N\u00C3\u00BAmero da conta corrente. | [optional] 
 **email** | **String**| Email da pessoa fisica | [optional] 
 **nomeEmpresa** | **String**| Nome que deve ser impresso no cart\u00C3\u00A3o | [optional] 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET14"></a>
# **listarUsingGET14**
> PagePessoas listarUsingGET14(opts)

Lista as Pessoas cadastradas no Emissor

Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
  'nome': "nome_example", // {String} Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)'.
  'tipo': "tipo_example", // {String} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\"PF\": Pessoa F\u00C3\u00ADsica), (\"PJ\": Pessoa Jur\u00C3\u00ADdica).
  'cpf': "cpf_example", // {String} N\u00C3\u00BAmero do CPF, quando PF.
  'cnpj': "cnpj_example", // {String} N\u00C3\u00BAmero do CNPJ, quando PJ.
  'dataNascimento': "dataNascimento_example", // {String} Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
  'sexo': "sexo_example", // {String} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00C3\u00A3o Especificado).
  'numeroIdentidade': "numeroIdentidade_example", // {String} N\u00C3\u00BAmero da Identidade
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} Org\u00C3\u00A3o expedidor do RG.
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} Sigla da Unidade Federativa de onde foi expedido a Identidade
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} Data emiss\u00C3\u00A3o da identidade no formato aaaa-MM-dd
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET14(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id). | [optional] 
 **nome** | **String**| Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;. | [optional] 
 **tipo** | **String**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica). | [optional] 
 **cpf** | **String**| N\u00C3\u00BAmero do CPF, quando PF. | [optional] 
 **cnpj** | **String**| N\u00C3\u00BAmero do CNPJ, quando PJ. | [optional] 
 **dataNascimento** | **String**| Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. | [optional] 
 **sexo** | **String**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado). | [optional] 
 **numeroIdentidade** | **String**| N\u00C3\u00BAmero da Identidade | [optional] 
 **orgaoExpedidorIdentidade** | **String**| Org\u00C3\u00A3o expedidor do RG. | [optional] 
 **unidadeFederativaIdentidade** | **String**| Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
 **dataEmissaoIdentidade** | **String**| Data emiss\u00C3\u00A3o da identidade no formato aaaa-MM-dd | [optional] 

### Return type

[**PagePessoas**](PagePessoas.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET16"></a>
# **listarUsingGET16**
> PagePortador listarUsingGET16(opts)

Lista os Portadores existentes

Este m\u00C3\u00A9todo permite que sejam listados os portadores cadastrados na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
  'idProduto': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
  'idParentesco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Parentesco (id)
  'tipoPortador': "tipoPortador_example", // {String} Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: ('T': Titular, 'A': Adicional).
  'nomeImpresso': "nomeImpresso_example", // {String} Apresenta o nome a ser impresso no cart\u00C3\u00A3o.
  'idTipoCartao': 789, // {Integer} Apresenta o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do cart\u00C3\u00A3o (id), que ser\u00C3\u00A1 utilizado para gerar os cart\u00C3\u00B5es deste portador, vinculados a sua respectiva conta atrav\u00C3\u00A9s do campo idConta.
  'flagAtivo': 56, // {Integer} Quanto ativa, indica que o cadastro do Portador est\u00C3\u00A1 ativo, em emissores que realizam este tipo de gest\u00C3\u00A3o.
  'dataCadastroPortador': "dataCadastroPortador_example", // {String} Apresenta a data em que o Portador fora cadastrado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
  'dataCancelamentoPortador': "dataCancelamentoPortador_example" // {String} Apresenta a data em que o Portador fora cancelado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET16(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idConta** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id). | [optional] 
 **idProduto** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id). | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id). | [optional] 
 **idParentesco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Parentesco (id) | [optional] 
 **tipoPortador** | **String**| Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional). | [optional] 
 **nomeImpresso** | **String**| Apresenta o nome a ser impresso no cart\u00C3\u00A3o. | [optional] 
 **idTipoCartao** | **Integer**| Apresenta o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do cart\u00C3\u00A3o (id), que ser\u00C3\u00A1 utilizado para gerar os cart\u00C3\u00B5es deste portador, vinculados a sua respectiva conta atrav\u00C3\u00A9s do campo idConta. | [optional] 
 **flagAtivo** | **Integer**| Quanto ativa, indica que o cadastro do Portador est\u00C3\u00A1 ativo, em emissores que realizam este tipo de gest\u00C3\u00A3o. | [optional] 
 **dataCadastroPortador** | **String**| Apresenta a data em que o Portador fora cadastrado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o. | [optional] 
 **dataCancelamentoPortador** | **String**| Apresenta a data em que o Portador fora cancelado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o. | [optional] 

### Return type

[**PagePortador**](PagePortador.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET17"></a>
# **listarUsingGET17**
> ListaProdutos listarUsingGET17(opts)

Lista os Produtos do Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Produtos existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'nome': "nome_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto.
  'status': 56, // {Integer} Representa o Status do Produto, onde: (\"0\": Inativo), (\"1\": Ativo).
  'idFantasiaBasica': 789 // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Fantasia B\u00C3\u00A1sica (id) a qual o produto pertence.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET17(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto. | [optional] 
 **status** | **Integer**| Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo). | [optional] 
 **idFantasiaBasica** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Fantasia B\u00C3\u00A1sica (id) a qual o produto pertence. | [optional] 

### Return type

[**ListaProdutos**](ListaProdutos.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET2"></a>
# **listarUsingGET2**
> PageBancos listarUsingGET2(opts)

Lista os Bancos cadastrados para o Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Bancos existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageBancos**](PageBancos.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET21"></a>
# **listarUsingGET21**
> PageTelefones listarUsingGET21(opts)

Lista os Telefones cadastrados no Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Telefones existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
  'idTipoTelefone': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence.
  'ddd': "ddd_example", // {String} C\u00C3\u00B3digo DDD do telefone (id).
  'telefone': "telefone_example", // {String} N\u00C3\u00BAmero do telefone.
  'ramal': "ramal_example", // {String} N\u00C3\u00BAmero do ramal.
  'status': 56 // {Integer} Apresenta o Status do Telefone, onde: '0': Inativo e '1': Ativo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET21(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id). | [optional] 
 **idTipoTelefone** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id). | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence. | [optional] 
 **ddd** | **String**| C\u00C3\u00B3digo DDD do telefone (id). | [optional] 
 **telefone** | **String**| N\u00C3\u00BAmero do telefone. | [optional] 
 **ramal** | **String**| N\u00C3\u00BAmero do ramal. | [optional] 
 **status** | **Integer**| Apresenta o Status do Telefone, onde: &#39;0&#39;: Inativo e &#39;1&#39;: Ativo | [optional] 

### Return type

[**PageTelefones**](PageTelefones.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET23"></a>
# **listarUsingGET23**
> PageTiposEndereco listarUsingGET23(opts)

Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 

Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Endere\u00C3\u00A7os existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
  'nome': "nome_example" // {String} Nome do Tipo do Endere\u00C3\u00A7o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET23(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id) | [optional] 
 **nome** | **String**| Nome do Tipo do Endere\u00C3\u00A7o | [optional] 

### Return type

[**PageTiposEndereco**](PageTiposEndereco.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET25"></a>
# **listarUsingGET25**
> PageTipoTelefones listarUsingGET25(opts)

Lista os Tipos de Telefones

Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Telefones existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
  'nome': "nome_example" // {String} Nome do Tipo do Telefone
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET25(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id). | [optional] 
 **nome** | **String**| Nome do Tipo do Telefone | [optional] 

### Return type

[**PageTipoTelefones**](PageTipoTelefones.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET8"></a>
# **listarUsingGET8**
> PageEnderecos listarUsingGET8(opts)

Lista os Endere\u00C3\u00A7os cadastrados para o Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Endere\u00C3\u00A7os existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP)
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
  'bairro': "bairro_example", // {String} Apresenta nome do bairro
  'cidade': "cidade_example", // {String} Apresenta nome da cidade
  'uf': "uf_example", // {String} Apresenta sigla da Unidade Federativa
  'pais': "pais_example", // {String} Apresenta nome do Pais
  'dataInclusao': "dataInclusao_example", // {String} Apresenta a data em que fora cadastrado o Endere\u00C3\u00A7o
  'dataUltimaAtualizacao': "dataUltimaAtualizacao_example" // {String} Data em que fora realizada a \u00C3\u00BAltima mudan\u00C3\u00A7a neste registro de endere\u00C3\u00A7o. Quando n\u00C3\u00A3o tiver ocorrido mudan\u00C3\u00A7a, conter\u00C3\u00A1 a mesma informa\u00C3\u00A7\u00C3\u00A3o que o campo dataInclusao
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET8(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id). | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 
 **dataInclusao** | **String**| Apresenta a data em que fora cadastrado o Endere\u00C3\u00A7o | [optional] 
 **dataUltimaAtualizacao** | **String**| Data em que fora realizada a \u00C3\u00BAltima mudan\u00C3\u00A7a neste registro de endere\u00C3\u00A7o. Quando n\u00C3\u00A3o tiver ocorrido mudan\u00C3\u00A7a, conter\u00C3\u00A1 a mesma informa\u00C3\u00A7\u00C3\u00A3o que o campo dataInclusao | [optional] 

### Return type

[**PageEnderecos**](PageEnderecos.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPessoaFisicaAprovadaUsingPOST"></a>
# **salvarPessoaFisicaAprovadaUsingPOST**
> PessoaFisicaAprovadaResponse salvarPessoaFisicaAprovadaUsingPOST(pessoaPersist)

Cadastro de Conta e Pessoa Fisica

Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa F\u00C3\u00ADsica, recebendo nesta opera\u00C3\u00A7\u00C3\u00A3o todos os dados cadastrais que se fazem necess\u00C3\u00A1rios para isso. Uma vez criado, poder\u00C3\u00A1 ser acionado o m\u00C3\u00A9todo de &#39;Gera\u00C3\u00A7\u00C3\u00A3o de Cart\u00C3\u00A3o&#39; para o cliente e seus adicionais.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var pessoaPersist = new Pier.PessoaFisicaAprovadaPersist(); // {PessoaFisicaAprovadaPersist} pessoaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPessoaFisicaAprovadaUsingPOST(pessoaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pessoaPersist** | [**PessoaFisicaAprovadaPersist**](PessoaFisicaAprovadaPersist.md)| pessoaPersist | 

### Return type

[**PessoaFisicaAprovadaResponse**](PessoaFisicaAprovadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPessoaJuridicaAprovadaUsingPOST"></a>
# **salvarPessoaJuridicaAprovadaUsingPOST**
> PessoaJuridicaAprovadaResponse salvarPessoaJuridicaAprovadaUsingPOST(pessoaPersist)

Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica

Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa Jur\u00C3\u00ADdica, recebendo nesta opera\u00C3\u00A7\u00C3\u00A3o todos os dados cadastrais que se fazem necess\u00C3\u00A1rios para isso, inclu\u00C3\u00ADndo o registro de cada um dos s\u00C3\u00B3cios. Uma vez criado, poder\u00C3\u00A1 ser acionado o m\u00C3\u00A9todo de &#39;Gera\u00C3\u00A7\u00C3\u00A3o de Cart\u00C3\u00A3o&#39; para o cliente e cada um dos s\u00C3\u00B3cios vinculados.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var pessoaPersist = new Pier.PessoaJuridicaAprovadaPersist(); // {PessoaJuridicaAprovadaPersist} pessoaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPessoaJuridicaAprovadaUsingPOST(pessoaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pessoaPersist** | [**PessoaJuridicaAprovadaPersist**](PessoaJuridicaAprovadaPersist.md)| pessoaPersist | 

### Return type

[**PessoaJuridicaAprovadaResponse**](PessoaJuridicaAprovadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST10"></a>
# **salvarUsingPOST10**
> Telefone salvarUsingPOST10(opts)

Realiza o cadastro de um novo Telefone

Este m\u00C3\u00A9todo permite que seja cadastrado um novo Telefone na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'idTipoTelefone': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence.
  'ddd': "ddd_example", // {String} C\u00C3\u00B3digo DDD do telefone (id).
  'telefone': "telefone_example", // {String} N\u00C3\u00BAmero do telefone.
  'ramal': "ramal_example" // {String} N\u00C3\u00BAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST10(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTipoTelefone** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id). | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence. | [optional] 
 **ddd** | **String**| C\u00C3\u00B3digo DDD do telefone (id). | [optional] 
 **telefone** | **String**| N\u00C3\u00BAmero do telefone. | [optional] 
 **ramal** | **String**| N\u00C3\u00BAmero do ramal. | [optional] 

### Return type

[**Telefone**](Telefone.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST4"></a>
# **salvarUsingPOST4**
> Endereco salvarUsingPOST4(opts)

Realiza o cadastro de um novo Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite que seja cadastrado um novo Endere\u00C3\u00A7o na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro '58800000'
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
  'bairro': "bairro_example", // {String} Apresenta nome do bairro
  'cidade': "cidade_example", // {String} Apresenta nome da cidade
  'uf': "uf_example", // {String} Apresenta sigla da Unidade Federativa
  'pais': "pais_example" // {String} Apresenta nome do Pais
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST4(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro &#39;58800000&#39; | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 

### Return type

[**Endereco**](Endereco.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST7"></a>
# **salvarUsingPOST7**
> PessoaDetalheResponse salvarUsingPOST7(opts)

Salvar os detalhes de uma determinada Pessoa

Este m\u00C3\u00A9todo permite que seja incluido na base do emissor os detalhes de uma determinada Pessoa.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var opts = { 
  'idPessoa': 789, // {Integer} Apresenta o c\u00C3\u00B3digo identificador da pessoa
  'nomeMae': "nomeMae_example", // {String} Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
  'idEstadoCivil': 789, // {Integer} Id Estado civil da pessoa fisica
  'profissao': "profissao_example", // {String} Profiss\u00C3\u00A3o da pessoa fisica
  'idNaturezaOcupacao': 789, // {Integer} Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
  'idNacionalidade': 789, // {Integer} Id Nacionalidade da pessoa fisica
  'numeroAgencia': 56, // {Integer} N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} N\u00C3\u00BAmero da conta corrente.
  'email': "email_example", // {String} Email da pessoa fisica
  'nomeEmpresa': "nomeEmpresa_example" // {String} Nome que deve ser impresso no cart\u00C3\u00A3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST7(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPessoa** | **Integer**| Apresenta o c\u00C3\u00B3digo identificador da pessoa | [optional] 
 **nomeMae** | **String**| Apresenta o nome da m\u00C3\u00A3e da pessoa fisica | [optional] 
 **idEstadoCivil** | **Integer**| Id Estado civil da pessoa fisica | [optional] 
 **profissao** | **String**| Profiss\u00C3\u00A3o da pessoa fisica | [optional] 
 **idNaturezaOcupacao** | **Integer**| Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica | [optional] 
 **idNacionalidade** | **Integer**| Id Nacionalidade da pessoa fisica | [optional] 
 **numeroAgencia** | **Integer**| N\u00C3\u00BAmero da ag\u00C3\u00AAncia. | [optional] 
 **numeroContaCorrente** | **String**| N\u00C3\u00BAmero da conta corrente. | [optional] 
 **email** | **String**| Email da pessoa fisica | [optional] 
 **nomeEmpresa** | **String**| Nome que deve ser impresso no cart\u00C3\u00A3o | [optional] 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST8"></a>
# **salvarUsingPOST8**
> Pessoa salvarUsingPOST8(nome, tipo, opts)

Realiza o cadastro de um nova Pessoa

Este m\u00C3\u00A9todo permite que seja cadastrado uma nova Pessoa na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastrosGeraisApi()

var nome = "nome_example"; // {String} Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)'.

var tipo = "tipo_example"; // {String} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\"PF\": Pessoa F\u00C3\u00ADsica), (\"PJ\": Pessoa Jur\u00C3\u00ADdica).

var opts = { 
  'cpf': "cpf_example", // {String} N\u00C3\u00BAmero do CPF, quando PF.
  'cnpj': "cnpj_example", // {String} N\u00C3\u00BAmero do CNPJ, quando PJ.
  'dataNascimento': "dataNascimento_example", // {String} Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.
  'sexo': "sexo_example", // {String} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00C3\u00A3o Especificado).
  'numeroIdentidade': "numeroIdentidade_example", // {String} N\u00C3\u00BAmero da Identidade.
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} Org\u00C3\u00A3o expedidor do Identidade.
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} Sigla da Unidade Federativa de onde foi expedido a Identidade
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} Data emiss\u00C3\u00A3o da Identidade.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST8(nome, tipo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nome** | **String**| Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;. | 
 **tipo** | **String**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica). | 
 **cpf** | **String**| N\u00C3\u00BAmero do CPF, quando PF. | [optional] 
 **cnpj** | **String**| N\u00C3\u00BAmero do CNPJ, quando PJ. | [optional] 
 **dataNascimento** | **String**| Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd. | [optional] 
 **sexo** | **String**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado). | [optional] 
 **numeroIdentidade** | **String**| N\u00C3\u00BAmero da Identidade. | [optional] 
 **orgaoExpedidorIdentidade** | **String**| Org\u00C3\u00A3o expedidor do Identidade. | [optional] 
 **unidadeFederativaIdentidade** | **String**| Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
 **dataEmissaoIdentidade** | **String**| Data emiss\u00C3\u00A3o da Identidade. | [optional] 

### Return type

[**Pessoa**](Pessoa.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

