# Pier.GlobaltagdebitorecorrenteApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aderirDebitoRecorrenteUsingPOST**](GlobaltagdebitorecorrenteApi.md#aderirDebitoRecorrenteUsingPOST) | **POST** /api/debitos-recorrentes | {{{conta_debito_recorrente_resource_aderir}}}
[**cancelarDebitoRecorrenteUsingPOST**](GlobaltagdebitorecorrenteApi.md#cancelarDebitoRecorrenteUsingPOST) | **POST** /api/debitos-recorrentes/{id}/cancelar | {{{conta_debito_recorrente_resource_cancelar}}}
[**listarUsingGET18**](GlobaltagdebitorecorrenteApi.md#listarUsingGET18) | **GET** /api/debitos-recorrentes | {{{conta_debito_recorrente_resource_listar}}}
[**listarUsingGET56**](GlobaltagdebitorecorrenteApi.md#listarUsingGET56) | **GET** /api/tipos-debitos-recorrentes | {{{tipo_debito_recorrente_resource_listar}}}


<a name="aderirDebitoRecorrenteUsingPOST"></a>
# **aderirDebitoRecorrenteUsingPOST**
> ContaDebitoRecorrenteResponse aderirDebitoRecorrenteUsingPOST(contaDebitoRecorrentePersist)

{{{conta_debito_recorrente_resource_aderir}}}

{{{conta_debito_recorrente_resource_aderir_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdebitorecorrenteApi()

var contaDebitoRecorrentePersist = new Pier.ContaDebitoRecorrentePersistValue(); // {ContaDebitoRecorrentePersistValue} contaDebitoRecorrentePersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.aderirDebitoRecorrenteUsingPOST(contaDebitoRecorrentePersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contaDebitoRecorrentePersist** | [**ContaDebitoRecorrentePersistValue**](ContaDebitoRecorrentePersistValue.md)| contaDebitoRecorrentePersist | 

### Return type

[**ContaDebitoRecorrenteResponse**](ContaDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarDebitoRecorrenteUsingPOST"></a>
# **cancelarDebitoRecorrenteUsingPOST**
> ContaDebitoRecorrenteResponse cancelarDebitoRecorrenteUsingPOST(id, contaDebitoRecorrentePersist)

{{{conta_debito_recorrente_resource_cancelar}}}

{{{conta_debito_recorrente_resource_cancelar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdebitorecorrenteApi()

var id = 789; // {Integer} {{{conta_debito_recorrente_resource_cancelar_param_id_debito_recorrente}}}

var contaDebitoRecorrentePersist = new Pier.ContaDebitoRecorrentePersistValue(); // {ContaDebitoRecorrentePersistValue} contaDebitoRecorrentePersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarDebitoRecorrenteUsingPOST(id, contaDebitoRecorrentePersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_debito_recorrente_resource_cancelar_param_id_debito_recorrente}}} | 
 **contaDebitoRecorrentePersist** | [**ContaDebitoRecorrentePersistValue**](ContaDebitoRecorrentePersistValue.md)| contaDebitoRecorrentePersist | 

### Return type

[**ContaDebitoRecorrenteResponse**](ContaDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET18"></a>
# **listarUsingGET18**
> PageContaDebitoRecorrenteResponse listarUsingGET18(idConta, opts)

{{{conta_debito_recorrente_resource_listar}}}

{{{conta_debito_recorrente_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdebitorecorrenteApi()

var idConta = 789; // {Integer} {{{conta_debito_recorrente_resource_listar_param_id_conta}}}

var opts = { 
  'idTipoDebitoRecorrente': 789, // {Integer} {{{conta_debito_recorrente_resource_listar_param_id_tipo_debito_recorrente}}}
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataHoraInicio': "dataHoraInicio_example", // {String} {{{conta_debito_recorrente_request_data_hora_inicio_value}}}
  'dataHoraFim': "dataHoraFim_example", // {String} {{{conta_debito_recorrente_request_data_hora_fim_value}}}
  'ativo': true, // {Boolean} {{{conta_debito_recorrente_request_ativo_value}}}
  'dataHoraUltimoPagamento': "dataHoraUltimoPagamento_example" // {String} {{{conta_debito_recorrente_request_data_hora_ultimo_pagamento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET18(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{conta_debito_recorrente_resource_listar_param_id_conta}}} | 
 **idTipoDebitoRecorrente** | **Integer**| {{{conta_debito_recorrente_resource_listar_param_id_tipo_debito_recorrente}}} | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataHoraInicio** | **String**| {{{conta_debito_recorrente_request_data_hora_inicio_value}}} | [optional] 
 **dataHoraFim** | **String**| {{{conta_debito_recorrente_request_data_hora_fim_value}}} | [optional] 
 **ativo** | **Boolean**| {{{conta_debito_recorrente_request_ativo_value}}} | [optional] 
 **dataHoraUltimoPagamento** | **String**| {{{conta_debito_recorrente_request_data_hora_ultimo_pagamento_value}}} | [optional] 

### Return type

[**PageContaDebitoRecorrenteResponse**](PageContaDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET56"></a>
# **listarUsingGET56**
> PageTipoDebitoRecorrenteResponse listarUsingGET56(opts)

{{{tipo_debito_recorrente_resource_listar}}}

{{{tipo_debito_recorrente_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdebitorecorrenteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{tipo_debito_recorrente_request_id_value}}}
  'descricao': "descricao_example", // {String} {{{tipo_debito_recorrente_request_descricao_value}}}
  'valor': 3.4, // {Number} {{{tipo_debito_recorrente_request_valor_value}}}
  'flagAtivo': true // {Boolean} {{{tipo_debito_recorrente_request_flag_ativo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET56(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{tipo_debito_recorrente_request_id_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_debito_recorrente_request_descricao_value}}} | [optional] 
 **valor** | [**Number**](.md)| {{{tipo_debito_recorrente_request_valor_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{tipo_debito_recorrente_request_flag_ativo_value}}} | [optional] 

### Return type

[**PageTipoDebitoRecorrenteResponse**](PageTipoDebitoRecorrenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

