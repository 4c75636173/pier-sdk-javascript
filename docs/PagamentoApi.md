# Pier.PagamentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarPagamentosUsingGET1**](PagamentoApi.md#listarPagamentosUsingGET1) | **GET** /api/pagamentos | Lista hist\u00C3\u00B3rico de pagamentos


<a name="listarPagamentosUsingGET1"></a>
# **listarPagamentosUsingGET1**
> PageHistoricoPagamentoResponse listarPagamentosUsingGET1(opts)

Lista hist\u00C3\u00B3rico de pagamentos

Este recurso permite listar todos os Pagamentos realizados independente do seu Status de Processamento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PagamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta
  'idPagamento': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Pagamento
  'idEstabelecimento': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento onde o Pagamento foi realizado, quando este for o local de pagamento
  'idBanco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria onde o Pagamento foi realizado, quando este for o local de pagamento
  'idCartao': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o
  'dataHoraPagamento': "dataHoraPagamento_example", // {String} Data e Hora da realiza\u00C3\u00A7\u00C3\u00A3o do Pagamento. Quando feito em Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria, o hor\u00C3\u00A1rio do pagamento \u00C3\u00A9 exibido com valor zero
  'status': 789 // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Pagamento
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idConta** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta | [optional] 
 **idPagamento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Pagamento | [optional] 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento onde o Pagamento foi realizado, quando este for o local de pagamento | [optional] 
 **idBanco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria onde o Pagamento foi realizado, quando este for o local de pagamento | [optional] 
 **idCartao** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o | [optional] 
 **dataHoraPagamento** | **String**| Data e Hora da realiza\u00C3\u00A7\u00C3\u00A3o do Pagamento. Quando feito em Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria, o hor\u00C3\u00A1rio do pagamento \u00C3\u00A9 exibido com valor zero | [optional] 
 **status** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Pagamento | [optional] 

### Return type

[**PageHistoricoPagamentoResponse**](PageHistoricoPagamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

