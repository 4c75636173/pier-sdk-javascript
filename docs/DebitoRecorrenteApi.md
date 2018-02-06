# Pier.DebitoRecorrenteApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarUsingGET13**](DebitoRecorrenteApi.md#listarUsingGET13) | **GET** /api/debitos-recorrentes | Lista os d\u00C3\u00A9bitos recorrentes de uma Conta
[**listarUsingGET39**](DebitoRecorrenteApi.md#listarUsingGET39) | **GET** /api/tipos-debitos-recorrentes | Listar Tipos Debitos Recorrentes


<a name="listarUsingGET13"></a>
# **listarUsingGET13**
> PageTipoDebitoRecorrenteResponse listarUsingGET13(idConta, opts)

Lista os d\u00C3\u00A9bitos recorrentes de uma Conta

A entidade D\u00C3\u00A9bito Recorrente trata dos registros contratados por um determinado cliente (idConta) onde a cobran\u00C3\u00A7a dele se d\u00C3\u00A1 de forma cont\u00C3\u00ADnua, consistindo em uma \u00E2\u0080\u009Cassinatura\u00E2\u0080\u009D ou pagamento de mensalidades. Isso significa que, enquanto o servi\u00C3\u00A7o continuar a ser prestado, o cliente dever\u00C3\u00A1 continuar realizando os pagamentos. A determina\u00C3\u00A7\u00C3\u00A3o de quanto tempo essa rela\u00C3\u00A7\u00C3\u00A3o ir\u00C3\u00A1 durar \u00C3\u00A9 feita em contrato. Na maioria das vezes, existe um per\u00C3\u00ADodo m\u00C3\u00ADnimo e, caso o servi\u00C3\u00A7o seja cancelado ou o pagamento n\u00C3\u00A3o seja realizado, o status do D\u00C3\u00A9bito Recorrente ter\u00C3\u00A1 a FlagAtivo com valor false. Assim, este m\u00C3\u00A9todo lista todas as opera\u00C3\u00A7\u00C3\u00B5es de D\u00C3\u00A9bitos Recorrentes que um determinado idConta j\u00C3\u00A1 contratou, esteja ele ativo ou n\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DebitoRecorrenteApi()

var idConta = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id)

var opts = { 
  'idTipoDebitoRecorrente': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente (id)
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataHoraInicio': "dataHoraInicio_example", // {String} Data inicio do d\u00C3\u00A9bito recorrente.
  'dataHoraFim': "dataHoraFim_example", // {String} Data fim do d\u00C3\u00A9bito recorrente.
  'ativo': true, // {Boolean} Identifica se o d\u00C3\u00A9bito recorrente est\u00C3\u00A1 ativo.
  'dataHoraUltimoPagamento': "dataHoraUltimoPagamento_example" // {String} Data do \u00C3\u00BAltimo pagamento efetuado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET13(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id) | 
 **idTipoDebitoRecorrente** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente (id) | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataHoraInicio** | **String**| Data inicio do d\u00C3\u00A9bito recorrente. | [optional] 
 **dataHoraFim** | **String**| Data fim do d\u00C3\u00A9bito recorrente. | [optional] 
 **ativo** | **Boolean**| Identifica se o d\u00C3\u00A9bito recorrente est\u00C3\u00A1 ativo. | [optional] 
 **dataHoraUltimoPagamento** | **String**| Data do \u00C3\u00BAltimo pagamento efetuado. | [optional] 

### Return type

[**PageTipoDebitoRecorrenteResponse**](PageTipoDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET39"></a>
# **listarUsingGET39**
> PageTipoDebitoRecorrenteResponse listarUsingGET39(opts)

Listar Tipos Debitos Recorrentes

Para os emissores que utilizam a entidade Debitos Recorrentes precisam previamente solicitar a Conductor o cadastro de quais Tipos eles poder\u00C3\u00A3o comercializar. Por isso, este recurso tem como objetivo apresentar todos os Tipos de D\u00C3\u00A9bitos Recorrentes que est\u00C3\u00A3o cadastrados para um determinado Emissor, independente do status dele.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DebitoRecorrenteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente (id).
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente.
  'valor': 3.4, // {Number} Valor do tipo de d\u00C3\u00A9bito recorrente.
  'flagAtivo': true // {Boolean} Flag que identifica se o tipo d\u00C3\u00A9bito recorrente est\u00C3\u00A1 ativo.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET39(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente (id). | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente. | [optional] 
 **valor** | [**Number**](.md)| Valor do tipo de d\u00C3\u00A9bito recorrente. | [optional] 
 **flagAtivo** | **Boolean**| Flag que identifica se o tipo d\u00C3\u00A9bito recorrente est\u00C3\u00A1 ativo. | [optional] 

### Return type

[**PageTipoDebitoRecorrenteResponse**](PageTipoDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

