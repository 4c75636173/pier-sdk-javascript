# Pier.CadastroGeralApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarUsoExteriorUsingPOST**](CadastroGeralApi.md#ativarUsoExteriorUsingPOST) | **POST** /api/produtos/{id}/ativar-uso-exterior | Ativa o par\u00C3\u00A2metro uso exterior para o produto
[**configurarTaxaAntecipacaoUsingPOST**](CadastroGeralApi.md#configurarTaxaAntecipacaoUsingPOST) | **POST** /api/produtos/{id}/configurar-taxa-antecipacao | Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
[**consultarOrigemComercialUsingGET**](CadastroGeralApi.md#consultarOrigemComercialUsingGET) | **GET** /api/origens-comerciais/{id} | Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial
[**consultarTaxaAntecipacaoUsingGET**](CadastroGeralApi.md#consultarTaxaAntecipacaoUsingGET) | **GET** /api/produtos/{id}/consultar-taxa-antecipacao | Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
[**consultarUsingGET14**](CadastroGeralApi.md#consultarUsingGET14) | **GET** /api/produtos/{id} | Apresenta os dados de um determinado Produto
[**consultarUsingGET2**](CadastroGeralApi.md#consultarUsingGET2) | **GET** /api/atendimento-clientes/{id} | Apresenta os dados de um determinado Atendimento
[**consultarUsingGET20**](CadastroGeralApi.md#consultarUsingGET20) | **GET** /api/tipos-ajustes | Lista os tipos de ajustes do emissor 
[**consultarUsingGET21**](CadastroGeralApi.md#consultarUsingGET21) | **GET** /api/tipos-boletos | Lista os tipos de boletos do emissor 
[**consultarUsingGET22**](CadastroGeralApi.md#consultarUsingGET22) | **GET** /api/tipos-enderecos/{id} | Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
[**consultarUsingGET23**](CadastroGeralApi.md#consultarUsingGET23) | **GET** /api/tipos-operacoes | Apresenta dados de um determinado tipo de opera\u00C3\u00A7\u00C3\u00A3o
[**consultarUsingGET25**](CadastroGeralApi.md#consultarUsingGET25) | **GET** /api/tipos-telefones/{id} | Apresenta os dados de um determinado Tipo de Telefone
[**consultarUsingGET3**](CadastroGeralApi.md#consultarUsingGET3) | **GET** /api/bancos/{id} | Apresenta os dados de um determinado Banco
[**desativarUsoExteriorUsingPOST**](CadastroGeralApi.md#desativarUsoExteriorUsingPOST) | **POST** /api/produtos/{id}/desativar-uso-exterior | Desativa o par\u00C3\u00A2metro uso exterior para o produto
[**listarContasPorPessoaUsingGET**](CadastroGeralApi.md#listarContasPorPessoaUsingGET) | **GET** /api/pessoas/listar-contas | Lista as contas da pessoa
[**listarEstadosCivisUsingGET**](CadastroGeralApi.md#listarEstadosCivisUsingGET) | **GET** /api/estados-civis | Lista os Estados C\u00C3\u00ADvis
[**listarFantasiasBasicasUsingGET**](CadastroGeralApi.md#listarFantasiasBasicasUsingGET) | **GET** /api/fantasias-basicas | Listar Fantasias B\u00C3\u00A1sicas
[**listarHistoricoTelefonesUsingGET**](CadastroGeralApi.md#listarHistoricoTelefonesUsingGET) | **GET** /api/pessoas/{id}/historico-telefones | Listar altera\u00C3\u00A7\u00C3\u00B5es de telefones realizadas nos \u00C3\u00BAltimos 60 dias
[**listarNacionalidadesUsingGET**](CadastroGeralApi.md#listarNacionalidadesUsingGET) | **GET** /api/nacionalidades | Lista nacionalidades
[**listarNaturezasOcupacoesUsingGET**](CadastroGeralApi.md#listarNaturezasOcupacoesUsingGET) | **GET** /api/ocupacoes | Lista as Ocupa\u00C3\u00A7\u00C3\u00B5es
[**listarOrigensComerciaisUsingGET**](CadastroGeralApi.md#listarOrigensComerciaisUsingGET) | **GET** /api/origens-comerciais | Opera\u00C3\u00A7\u00C3\u00A3o utilizada para listar Origens Comerciais
[**listarParentescosUsingGET**](CadastroGeralApi.md#listarParentescosUsingGET) | **GET** /api/parentescos | Lista os Parentescos
[**listarProfissoesUsingGET**](CadastroGeralApi.md#listarProfissoesUsingGET) | **GET** /api/profissoes | Lista profiss\u00C3\u00B5es
[**listarUsingGET19**](CadastroGeralApi.md#listarUsingGET19) | **GET** /api/portadores | Lista os Portadores existentes
[**listarUsingGET2**](CadastroGeralApi.md#listarUsingGET2) | **GET** /api/atendimento-clientes | Lista todos os atendimentos
[**listarUsingGET20**](CadastroGeralApi.md#listarUsingGET20) | **GET** /api/produtos | Lista os Produtos do Emissor
[**listarUsingGET21**](CadastroGeralApi.md#listarUsingGET21) | **GET** /api/promotores | Lista promotores cadastrados na base do emissor
[**listarUsingGET27**](CadastroGeralApi.md#listarUsingGET27) | **GET** /api/tipos-enderecos | Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 
[**listarUsingGET29**](CadastroGeralApi.md#listarUsingGET29) | **GET** /api/tipos-telefones | Lista os Tipos de Telefones
[**listarUsingGET3**](CadastroGeralApi.md#listarUsingGET3) | **GET** /api/bancos | Lista os Bancos cadastrados para o Emissor
[**listarUsingGET34**](CadastroGeralApi.md#listarUsingGET34) | **GET** /api/vencimentos | Listar Vencimentos
[**salvarUsingPOST2**](CadastroGeralApi.md#salvarUsingPOST2) | **POST** /api/atendimento-clientes | Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta


<a name="ativarUsoExteriorUsingPOST"></a>
# **ativarUsoExteriorUsingPOST**
> ProdutoDetalhesResponse ativarUsoExteriorUsingPOST(id)

Ativa o par\u00C3\u00A2metro uso exterior para o produto

Este m\u00C3\u00A9todo permite ativar o uso no exterior para o produto atrav\u00C3\u00A9s do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

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

var apiInstance = new Pier.CadastroGeralApi()

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
> OrigemComercialResponse consultarOrigemComercialUsingGET(id)

Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial

Este m\u00C3\u00A9todo permite que sejam listados os registros de uma determinada Origem Comercial existente na base do emissor. Para isso, \u00C3\u00A9 preciso informar o seu respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

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

[**OrigemComercialResponse**](OrigemComercialResponse.md)

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

var apiInstance = new Pier.CadastroGeralApi()

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

<a name="consultarUsingGET14"></a>
# **consultarUsingGET14**
> ProdutoDetalhesResponse consultarUsingGET14(id)

Apresenta os dados de um determinado Produto

Este m\u00C3\u00A9todo permite consultar um determinado Produto a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET14(id, callback);
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

<a name="consultarUsingGET2"></a>
# **consultarUsingGET2**
> AtendimentoClienteResponse consultarUsingGET2(id)

Apresenta os dados de um determinado Atendimento

Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Atendimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (idAtendimento).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do atendimento cliente (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET2(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do atendimento cliente (id). | 

### Return type

[**AtendimentoClienteResponse**](AtendimentoClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET20"></a>
# **consultarUsingGET20**
> PageTipoAjusteResponse consultarUsingGET20(opts)

Lista os tipos de ajustes do emissor 

Este recurso permite que sejam listados os tipos de ajustes existentes na base de dados do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.consultarUsingGET20(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador do tipo de ajuste. | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo de ajuste. | [optional] 

### Return type

[**PageTipoAjusteResponse**](PageTipoAjusteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET21"></a>
# **consultarUsingGET21**
> PageTipoBoletoResponse consultarUsingGET21(opts)

Lista os tipos de boletos do emissor 

Este recurso permite que sejam listados os tipos de boletos existentes na base de dados do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.consultarUsingGET21(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador do tipo de boleto. | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo de boleto. | [optional] 
 **banco** | **Integer**| C\u00C3\u00B3digo identificador do banco. | [optional] 

### Return type

[**PageTipoBoletoResponse**](PageTipoBoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET22"></a>
# **consultarUsingGET22**
> TipoEnderecoResponse consultarUsingGET22(id)

Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET22(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id) | 

### Return type

[**TipoEnderecoResponse**](TipoEnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET23"></a>
# **consultarUsingGET23**
> TipoOperacaoResponse consultarUsingGET23(idCartao, idEstabelecimento, codigoProcessamento)

Apresenta dados de um determinado tipo de opera\u00C3\u00A7\u00C3\u00A3o

Este recurso permite consultar dados de um determinado tipo opera\u00C3\u00A7\u00C3\u00A3o a partir do idCartao, idEstabelecimento e codigoProcessamento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var idCartao = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cartao (idCartao).

var idEstabelecimento = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (idEstabelecimento).

var codigoProcessamento = "codigoProcessamento_example"; // {String} C\u00C3\u00B3digo de processamento da opera\u00C3\u00A7\u00C3\u00A3o.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET23(idCartao, idEstabelecimento, codigoProcessamento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cartao (idCartao). | 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (idEstabelecimento). | 
 **codigoProcessamento** | **String**| C\u00C3\u00B3digo de processamento da opera\u00C3\u00A7\u00C3\u00A3o. | 

### Return type

[**TipoOperacaoResponse**](TipoOperacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET25"></a>
# **consultarUsingGET25**
> TipoTelefoneResponse consultarUsingGET25(id)

Apresenta os dados de um determinado Tipo de Telefone

Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET25(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id) | 

### Return type

[**TipoTelefoneResponse**](TipoTelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET3"></a>
# **consultarUsingGET3**
> BancoResponse consultarUsingGET3(id)

Apresenta os dados de um determinado Banco

Este m\u00C3\u00A9todo permite consultar um determinado Banco a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Banco (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET3(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Banco (id). | 

### Return type

[**BancoResponse**](BancoResponse.md)

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

var apiInstance = new Pier.CadastroGeralApi()

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
> PageContaDetalheResponse listarContasPorPessoaUsingGET(numeroReceitaFederal, opts)

Lista as contas da pessoa

Permite listar as contas de um pessoa a partir do seu numero na receita federal.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var numeroReceitaFederal = "numeroReceitaFederal_example"; // {String} N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do cliente na Receita Federal (CPF ou CNPJ)

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageContaDetalheResponse**](PageContaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarEstadosCivisUsingGET"></a>
# **listarEstadosCivisUsingGET**
> PageCampoCodificadoDescricaoResponse listarEstadosCivisUsingGET(opts)

Lista os Estados C\u00C3\u00ADvis

Este m\u00C3\u00A9todo permite que sejam listados os Estados C\u00C3\u00ADvis na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFantasiasBasicasUsingGET"></a>
# **listarFantasiasBasicasUsingGET**
> PageFantasiaBasicaResponse listarFantasiasBasicasUsingGET(opts)

Listar Fantasias B\u00C3\u00A1sicas

Lista as fantasia b\u00C3\u00A1sicas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarFantasiasBasicasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageFantasiaBasicaResponse**](PageFantasiaBasicaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoTelefonesUsingGET"></a>
# **listarHistoricoTelefonesUsingGET**
> HistoricoTelefoneResponse listarHistoricoTelefonesUsingGET(id)

Listar altera\u00C3\u00A7\u00C3\u00B5es de telefones realizadas nos \u00C3\u00BAltimos 60 dias

Este m\u00C3\u00A9todo permite verificar quais os telefones de um determinado que cliente que sofreram altera\u00C3\u00A7\u00C3\u00A3o nos \u00C3\u00BAltimos 60 dias.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

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

[**HistoricoTelefoneResponse**](HistoricoTelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNacionalidadesUsingGET"></a>
# **listarNacionalidadesUsingGET**
> PageCampoCodificadoDescricaoResponse listarNacionalidadesUsingGET(opts)

Lista nacionalidades

Este m\u00C3\u00A9todo permite que sejam listados as nacionalidades na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNaturezasOcupacoesUsingGET"></a>
# **listarNaturezasOcupacoesUsingGET**
> PageCampoCodificadoDescricaoResponse listarNaturezasOcupacoesUsingGET(opts)

Lista as Ocupa\u00C3\u00A7\u00C3\u00B5es

Este m\u00C3\u00A9todo permite que sejam listados as naturezas de opera\u00C3\u00A7\u00C3\u00B5es na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarOrigensComerciaisUsingGET"></a>
# **listarOrigensComerciaisUsingGET**
> PageOrigemComercialResponse listarOrigensComerciaisUsingGET(opts)

Opera\u00C3\u00A7\u00C3\u00A3o utilizada para listar Origens Comerciais

Este m\u00C3\u00A9todo permite que sejam listadas as Origens Comerciais existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} Id da origem comercial
  'nome': "nome_example", // {String} Nome da origem comercial
  'status': 56, // {Integer} Status da origem comercial
  'idEstabelecimento': 789, // {Integer} C\u00C3\u00B3digo identificador do estabelecimento
  'idProduto': 789 // {Integer} C\u00C3\u00B3digo identificador do produto
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| Id da origem comercial | [optional] 
 **nome** | **String**| Nome da origem comercial | [optional] 
 **status** | **Integer**| Status da origem comercial | [optional] 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo identificador do estabelecimento | [optional] 
 **idProduto** | **Integer**| C\u00C3\u00B3digo identificador do produto | [optional] 

### Return type

[**PageOrigemComercialResponse**](PageOrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarParentescosUsingGET"></a>
# **listarParentescosUsingGET**
> PageCampoCodificadoDescricaoResponse listarParentescosUsingGET(opts)

Lista os Parentescos

Este m\u00C3\u00A9todo permite que sejam listados parentescos na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarParentescosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarProfissoesUsingGET"></a>
# **listarProfissoesUsingGET**
> PageCampoCodificadoDescricaoResponse listarProfissoesUsingGET(opts)

Lista profiss\u00C3\u00B5es

Este m\u00C3\u00A9todo permite que sejam listados as profiss\u00C3\u00B5es na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET19"></a>
# **listarUsingGET19**
> PagePortadorResponse listarUsingGET19(opts)

Lista os Portadores existentes

Este m\u00C3\u00A9todo permite que sejam listados os portadores cadastrados na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarUsingGET19(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
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

[**PagePortadorResponse**](PagePortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET2"></a>
# **listarUsingGET2**
> PageAtendimentoClienteResponse listarUsingGET2(opts)

Lista todos os atendimentos

Este m\u00C3\u00A9todo permite que sejam listados todos os Registro de Atendimento, independente do Tipo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idTipoAtendimento': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo de Atendimento (id)
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
  'nomeAtendente': "nomeAtendente_example", // {String} Apresenta o nome do Atendente que registrou o Atendimento.
  'dataAtendimento': "dataAtendimento_example" // {String} Apresenta a data em que o Atendimento foi realizado.
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idTipoAtendimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo de Atendimento (id) | [optional] 
 **idConta** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id). | [optional] 
 **nomeAtendente** | **String**| Apresenta o nome do Atendente que registrou o Atendimento. | [optional] 
 **dataAtendimento** | **String**| Apresenta a data em que o Atendimento foi realizado. | [optional] 

### Return type

[**PageAtendimentoClienteResponse**](PageAtendimentoClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET20"></a>
# **listarUsingGET20**
> PageProdutoResponse listarUsingGET20(opts)

Lista os Produtos do Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Produtos existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarUsingGET20(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto. | [optional] 
 **status** | **Integer**| Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo). | [optional] 
 **idFantasiaBasica** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Fantasia B\u00C3\u00A1sica (id) a qual o produto pertence. | [optional] 

### Return type

[**PageProdutoResponse**](PageProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET21"></a>
# **listarUsingGET21**
> PagePromotorResponse listarUsingGET21(opts)

Lista promotores cadastrados na base do emissor

Este m\u00C3\u00A9todo permite que sejam listados os cadastros de Promoteres existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do promotor (id)
  'nome': "nome_example", // {String} Nome do Promotor
  'dataCadastro': "dataCadastro_example", // {String} Data da Inclus\u00C3\u00A3o.
  'idEstabelecimento': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento
  'idUsuario': 789 // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do usu\u00C3\u00A1rio
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do promotor (id) | [optional] 
 **nome** | **String**| Nome do Promotor | [optional] 
 **dataCadastro** | **String**| Data da Inclus\u00C3\u00A3o. | [optional] 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento | [optional] 
 **idUsuario** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do usu\u00C3\u00A1rio | [optional] 

### Return type

[**PagePromotorResponse**](PagePromotorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET27"></a>
# **listarUsingGET27**
> PageTipoEnderecoResponse listarUsingGET27(opts)

Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 

Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Endere\u00C3\u00A7os existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarUsingGET27(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id) | [optional] 
 **nome** | **String**| Nome do Tipo do Endere\u00C3\u00A7o | [optional] 

### Return type

[**PageTipoEnderecoResponse**](PageTipoEnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET29"></a>
# **listarUsingGET29**
> PageTipoTelefoneResponse listarUsingGET29(opts)

Lista os Tipos de Telefones

Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Telefones existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarUsingGET29(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id). | [optional] 
 **nome** | **String**| Nome do Tipo do Telefone | [optional] 

### Return type

[**PageTipoTelefoneResponse**](PageTipoTelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET3"></a>
# **listarUsingGET3**
> PageBancoResponse listarUsingGET3(opts)

Lista os Bancos cadastrados para o Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Bancos existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarUsingGET3(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageBancoResponse**](PageBancoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET34"></a>
# **listarUsingGET34**
> PageControleVencimentoResponse listarUsingGET34(opts)

Listar Vencimentos

Este recurso permite que sejam listados os Vencimentos do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataVencimento': "dataVencimento_example" // {String} Indica a data de vencimento das faturas
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET34(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataVencimento** | **String**| Indica a data de vencimento das faturas | [optional] 

### Return type

[**PageControleVencimentoResponse**](PageControleVencimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST2"></a>
# **salvarUsingPOST2**
> AtendimentoClienteResponse salvarUsingPOST2(opts)

Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroGeralApi()

var opts = { 
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o Atendimento est\u00C3\u00A1 associado
  'conteudoAtendimento': "conteudoAtendimento_example", // {String} Apresenta as informa\u00C3\u00A7\u00C3\u00B5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00C3\u00A7\u00C3\u00B5es relacionadas ao Atendimento.
  'detalhesAtendimento': "detalhesAtendimento_example", // {String} Apresenta os detalhes lan\u00C3\u00A7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento.
  'nomeAtendente': "nomeAtendente_example", // {String} Apresenta o nome do Atendente que registrou o Atendimento.
  'dataAtendimento': "dataAtendimento_example", // {String} Apresenta a data e hora em que o Atendimento foi realizado no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'dataAgendamento': "dataAgendamento_example", // {String} Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data e hora para processamento ou a data e hora para retorno do Atendimento no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'dataHoraInicioAtendimento': "dataHoraInicioAtendimento_example", // {String} Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'dataHoraFimAtendimento': "dataHoraFimAtendimento_example", // {String} Apresenta a data e hora em que o Atendimento foi finalizado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'flagFilaFraude': 56 // {Integer} Flag fila fraude
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o Atendimento est\u00C3\u00A1 associado | [optional] 
 **conteudoAtendimento** | **String**| Apresenta as informa\u00C3\u00A7\u00C3\u00B5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00C3\u00A7\u00C3\u00B5es relacionadas ao Atendimento. | [optional] 
 **detalhesAtendimento** | **String**| Apresenta os detalhes lan\u00C3\u00A7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento. | [optional] 
 **nomeAtendente** | **String**| Apresenta o nome do Atendente que registrou o Atendimento. | [optional] 
 **dataAtendimento** | **String**| Apresenta a data e hora em que o Atendimento foi realizado no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **dataAgendamento** | **String**| Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data e hora para processamento ou a data e hora para retorno do Atendimento no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **dataHoraInicioAtendimento** | **String**| Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **dataHoraFimAtendimento** | **String**| Apresenta a data e hora em que o Atendimento foi finalizado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **flagFilaFraude** | **Integer**| Flag fila fraude | [optional] 

### Return type

[**AtendimentoClienteResponse**](AtendimentoClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

