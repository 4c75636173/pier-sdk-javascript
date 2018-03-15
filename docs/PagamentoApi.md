# Pier.PagamentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET**](PagamentoApi.md#consultarUsingGET) | **GET** /api/acordos/{id} | Consulta os dados de um determinado acordo
[**listarPagamentosUsingGET1**](PagamentoApi.md#listarPagamentosUsingGET1) | **GET** /api/pagamentos | Lista hist\u00F3rico de pagamentos
[**listarUsingGET**](PagamentoApi.md#listarUsingGET) | **GET** /api/acordos | Lista os acordos existentes na base


<a name="consultarUsingGET"></a>
# **consultarUsingGET**
> AcordoDetalheResponse consultarUsingGET(id)

Consulta os dados de um determinado acordo

Este m\u00E9todo permite consultar dados de um determinado acordo a partir de seu codigo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PagamentoApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do acordo (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do acordo (id). | 

### Return type

[**AcordoDetalheResponse**](AcordoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPagamentosUsingGET1"></a>
# **listarPagamentosUsingGET1**
> PageHistoricoPagamentoResponse listarPagamentosUsingGET1(opts)

Lista hist\u00F3rico de pagamentos

Este recurso permite listar todos os Pagamentos realizados independente do seu Status de Processamento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PagamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idConta': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Conta
  'idPagamento': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Pagamento
  'idEstabelecimento': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Estabelecimento onde o Pagamento foi realizado, quando este for o local de pagamento
  'idBanco': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Institui\u00E7\u00E3o Banc\u00E1ria onde o Pagamento foi realizado, quando este for o local de pagamento
  'idCartao': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Cart\u00E3o
  'dataHoraPagamento': "dataHoraPagamento_example", // {String} Data e Hora da realiza\u00E7\u00E3o do Pagamento. Quando feito em Institui\u00E7\u00E3o Banc\u00E1ria, o hor\u00E1rio do pagamento \u00E9 exibido com valor zero
  'status': 789 // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Status do Pagamento
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarPagamentosUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idConta** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Conta | [optional] 
 **idPagamento** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Pagamento | [optional] 
 **idEstabelecimento** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Estabelecimento onde o Pagamento foi realizado, quando este for o local de pagamento | [optional] 
 **idBanco** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Institui\u00E7\u00E3o Banc\u00E1ria onde o Pagamento foi realizado, quando este for o local de pagamento | [optional] 
 **idCartao** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Cart\u00E3o | [optional] 
 **dataHoraPagamento** | **String**| Data e Hora da realiza\u00E7\u00E3o do Pagamento. Quando feito em Institui\u00E7\u00E3o Banc\u00E1ria, o hor\u00E1rio do pagamento \u00E9 exibido com valor zero | [optional] 
 **status** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Status do Pagamento | [optional] 

### Return type

[**PageHistoricoPagamentoResponse**](PageHistoricoPagamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET"></a>
# **listarUsingGET**
> PageAcordoResponse listarUsingGET(opts)

Lista os acordos existentes na base

Este m\u00E9todo permite que sejam listados todos os acordos existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PagamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idConta': 789, // {Integer} C\u00F3digo Identificador da conta na base (id)
  'statusAcordo': 789, // {Integer} Status do acordo na base
  'dataAcordo': "dataAcordo_example", // {String} Data do acordo
  'quantidadeParcelas': 56 // {Integer} Quantidade de parcelas
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idConta** | **Integer**| C\u00F3digo Identificador da conta na base (id) | [optional] 
 **statusAcordo** | **Integer**| Status do acordo na base | [optional] 
 **dataAcordo** | **String**| Data do acordo | [optional] 
 **quantidadeParcelas** | **Integer**| Quantidade de parcelas | [optional] 

### Return type

[**PageAcordoResponse**](PageAcordoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

