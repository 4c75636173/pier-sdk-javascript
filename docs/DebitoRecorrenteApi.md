# Pier.DebitoRecorrenteApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarUsingGET16**](DebitoRecorrenteApi.md#listarUsingGET16) | **GET** /api/debitos-recorrentes | Lista os d\u00E9bitos recorrentes de uma Conta
[**listarUsingGET43**](DebitoRecorrenteApi.md#listarUsingGET43) | **GET** /api/tipos-debitos-recorrentes | Listar Tipos Debitos Recorrentes


<a name="listarUsingGET16"></a>
# **listarUsingGET16**
> PageTipoDebitoRecorrenteResponse listarUsingGET16(idConta, opts)

Lista os d\u00E9bitos recorrentes de uma Conta

A entidade D\u00E9bito Recorrente trata dos registros contratados por um determinado cliente (idConta) onde a cobran\u00E7a dele se d\u00E1 de forma cont\u00EDnua, consistindo em uma \u201Cassinatura\u201D ou pagamento de mensalidades. Isso significa que, enquanto o servi\u00E7o continuar a ser prestado, o cliente dever\u00E1 continuar realizando os pagamentos. A determina\u00E7\u00E3o de quanto tempo essa rela\u00E7\u00E3o ir\u00E1 durar \u00E9 feita em contrato. Na maioria das vezes, existe um per\u00EDodo m\u00EDnimo e, caso o servi\u00E7o seja cancelado ou o pagamento n\u00E3o seja realizado, o status do D\u00E9bito Recorrente ter\u00E1 a FlagAtivo com valor false. Assim, este m\u00E9todo lista todas as opera\u00E7\u00F5es de D\u00E9bitos Recorrentes que um determinado idConta j\u00E1 contratou, esteja ele ativo ou n\u00E3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DebitoRecorrenteApi()

var idConta = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da Conta (id)

var opts = { 
  'idTipoDebitoRecorrente': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do tipo de d\u00E9bito recorrente (id)
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'dataHoraInicio': "dataHoraInicio_example", // {String} Data inicio do d\u00E9bito recorrente.
  'dataHoraFim': "dataHoraFim_example", // {String} Data fim do d\u00E9bito recorrente.
  'ativo': true, // {Boolean} Identifica se o d\u00E9bito recorrente est\u00E1 ativo.
  'dataHoraUltimoPagamento': "dataHoraUltimoPagamento_example" // {String} Data do \u00FAltimo pagamento efetuado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET16(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da Conta (id) | 
 **idTipoDebitoRecorrente** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do tipo de d\u00E9bito recorrente (id) | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **dataHoraInicio** | **String**| Data inicio do d\u00E9bito recorrente. | [optional] 
 **dataHoraFim** | **String**| Data fim do d\u00E9bito recorrente. | [optional] 
 **ativo** | **Boolean**| Identifica se o d\u00E9bito recorrente est\u00E1 ativo. | [optional] 
 **dataHoraUltimoPagamento** | **String**| Data do \u00FAltimo pagamento efetuado. | [optional] 

### Return type

[**PageTipoDebitoRecorrenteResponse**](PageTipoDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET43"></a>
# **listarUsingGET43**
> PageTipoDebitoRecorrenteResponse listarUsingGET43(opts)

Listar Tipos Debitos Recorrentes

Para os emissores que utilizam a entidade Debitos Recorrentes precisam previamente solicitar a Conductor o cadastro de quais Tipos eles poder\u00E3o comercializar. Por isso, este recurso tem como objetivo apresentar todos os Tipos de D\u00E9bitos Recorrentes que est\u00E3o cadastrados para um determinado Emissor, independente do status dele.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DebitoRecorrenteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do tipo de d\u00E9bito recorrente (id).
  'descricao': "descricao_example", // {String} Descri\u00E7\u00E3o do tipo de d\u00E9bito recorrente.
  'valor': 3.4, // {Number} Valor do tipo de d\u00E9bito recorrente.
  'flagAtivo': true // {Boolean} Flag que identifica se o tipo d\u00E9bito recorrente est\u00E1 ativo.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET43(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do tipo de d\u00E9bito recorrente (id). | [optional] 
 **descricao** | **String**| Descri\u00E7\u00E3o do tipo de d\u00E9bito recorrente. | [optional] 
 **valor** | [**Number**](.md)| Valor do tipo de d\u00E9bito recorrente. | [optional] 
 **flagAtivo** | **Boolean**| Flag que identifica se o tipo d\u00E9bito recorrente est\u00E1 ativo. | [optional] 

### Return type

[**PageTipoDebitoRecorrenteResponse**](PageTipoDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

