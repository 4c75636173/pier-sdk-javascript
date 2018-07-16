# Pier.GlobaltagpagamentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET**](GlobaltagpagamentoApi.md#consultarUsingGET) | **GET** /api/acordos/{id} | {{{acordo_resource_consultar}}}
[**listarPagamentosUsingGET1**](GlobaltagpagamentoApi.md#listarPagamentosUsingGET1) | **GET** /api/pagamentos | {{{pagamento_resource_listar_pagamentos}}}
[**listarUsingGET**](GlobaltagpagamentoApi.md#listarUsingGET) | **GET** /api/acordos | {{{acordo_resource_listar}}}


<a name="consultarUsingGET"></a>
# **consultarUsingGET**
> AcordoDetalheResponse consultarUsingGET(id)

{{{acordo_resource_consultar}}}

{{{acordo_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpagamentoApi()

var id = 789; // {Integer} {{{acordo_resource_consultar_param_id}}}


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
 **id** | **Integer**| {{{acordo_resource_consultar_param_id}}} | 

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

{{{pagamento_resource_listar_pagamentos}}}

{{{pagamento_resource_listar_pagamentos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpagamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idConta': 789, // {Integer} {{{historico_pagamento_request_id_conta_value}}}
  'idPagamento': 789, // {Integer} {{{historico_pagamento_request_id_pagamento_value}}}
  'idEstabelecimento': 789, // {Integer} {{{historico_pagamento_request_id_estabelecimento_value}}}
  'idBanco': 789, // {Integer} {{{historico_pagamento_request_id_banco_value}}}
  'idCartao': 789, // {Integer} {{{historico_pagamento_request_id_cartao_value}}}
  'dataHoraPagamento': "dataHoraPagamento_example", // {String} {{{historico_pagamento_request_data_hora_pagamento_value}}}
  'status': 789 // {Integer} {{{historico_pagamento_request_status_value}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idConta** | **Integer**| {{{historico_pagamento_request_id_conta_value}}} | [optional] 
 **idPagamento** | **Integer**| {{{historico_pagamento_request_id_pagamento_value}}} | [optional] 
 **idEstabelecimento** | **Integer**| {{{historico_pagamento_request_id_estabelecimento_value}}} | [optional] 
 **idBanco** | **Integer**| {{{historico_pagamento_request_id_banco_value}}} | [optional] 
 **idCartao** | **Integer**| {{{historico_pagamento_request_id_cartao_value}}} | [optional] 
 **dataHoraPagamento** | **String**| {{{historico_pagamento_request_data_hora_pagamento_value}}} | [optional] 
 **status** | **Integer**| {{{historico_pagamento_request_status_value}}} | [optional] 

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

{{{acordo_resource_listar}}}

{{{acordo_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpagamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idConta': 789, // {Integer} {{{acordo_request_id_conta_value}}}
  'statusAcordo': 789, // {Integer} {{{acordo_request_status_acordo_value}}}
  'dataAcordo': "dataAcordo_example", // {String} {{{acordo_request_data_acordo_value}}}
  'quantidadeParcelas': 56 // {Integer} {{{acordo_request_quantidade_parcelas_value}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idConta** | **Integer**| {{{acordo_request_id_conta_value}}} | [optional] 
 **statusAcordo** | **Integer**| {{{acordo_request_status_acordo_value}}} | [optional] 
 **dataAcordo** | **String**| {{{acordo_request_data_acordo_value}}} | [optional] 
 **quantidadeParcelas** | **Integer**| {{{acordo_request_quantidade_parcelas_value}}} | [optional] 

### Return type

[**PageAcordoResponse**](PageAcordoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

