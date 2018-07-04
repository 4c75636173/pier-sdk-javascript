# Pier.GlobaltagavisoviagemApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET6**](GlobaltagavisoviagemApi.md#consultarUsingGET6) | **GET** /api/avisos-viagens/{id} | {{{aviso_viagem_resource_consultar}}}
[**desabilitarUsingPOST**](GlobaltagavisoviagemApi.md#desabilitarUsingPOST) | **POST** /api/avisos-viagens/{id}/desabilitar | {{{aviso_viagem_resource_desabilitar}}}
[**habilitarUsingPOST**](GlobaltagavisoviagemApi.md#habilitarUsingPOST) | **POST** /api/avisos-viagens/{id}/habilitar | {{{aviso_viagem_resource_habilitar}}}
[**listarUsingGET8**](GlobaltagavisoviagemApi.md#listarUsingGET8) | **GET** /api/avisos-viagens | {{{aviso_viagem_resource_listar}}}
[**salvarUsingPOST3**](GlobaltagavisoviagemApi.md#salvarUsingPOST3) | **POST** /api/avisos-viagens | {{{aviso_viagem_resource_salvar}}}


<a name="consultarUsingGET6"></a>
# **consultarUsingGET6**
> AvisoViagemResponse consultarUsingGET6(id)

{{{aviso_viagem_resource_consultar}}}

{{{aviso_viagem_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagavisoviagemApi()

var id = 789; // {Integer} {{{aviso_viagem_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET6(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{aviso_viagem_resource_consultar_param_id}}} | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desabilitarUsingPOST"></a>
# **desabilitarUsingPOST**
> AvisoViagemResponse desabilitarUsingPOST(id)

{{{aviso_viagem_resource_desabilitar}}}

{{{aviso_viagem_resource_desabilitar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagavisoviagemApi()

var id = 789; // {Integer} {{{aviso_viagem_resource_desabilitar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desabilitarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{aviso_viagem_resource_desabilitar_param_id}}} | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="habilitarUsingPOST"></a>
# **habilitarUsingPOST**
> AvisoViagemResponse habilitarUsingPOST(id)

{{{aviso_viagem_resource_habilitar}}}

{{{aviso_viagem_resource_habilitar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagavisoviagemApi()

var id = 789; // {Integer} {{{aviso_viagem_resource_habilitar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.habilitarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{aviso_viagem_resource_habilitar_param_id}}} | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET8"></a>
# **listarUsingGET8**
> PageAvisoViagemResponse listarUsingGET8(opts)

{{{aviso_viagem_resource_listar}}}

{{{aviso_viagem_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagavisoviagemApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idCartao': 789, // {Integer} {{{aviso_viagem_request_id_cartao_value}}}
  'codigoPais': "codigoPais_example", // {String} {{{aviso_viagem_request_codigo_pais_value}}}
  'dataInicio': "dataInicio_example", // {String} {{{aviso_viagem_request_data_inicio_value}}}
  'dataFim': "dataFim_example", // {String} {{{aviso_viagem_request_data_fim_value}}}
  'flagAtivo': 56 // {Integer} {{{aviso_viagem_request_flag_ativo_value}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idCartao** | **Integer**| {{{aviso_viagem_request_id_cartao_value}}} | [optional] 
 **codigoPais** | **String**| {{{aviso_viagem_request_codigo_pais_value}}} | [optional] 
 **dataInicio** | **String**| {{{aviso_viagem_request_data_inicio_value}}} | [optional] 
 **dataFim** | **String**| {{{aviso_viagem_request_data_fim_value}}} | [optional] 
 **flagAtivo** | **Integer**| {{{aviso_viagem_request_flag_ativo_value}}} | [optional] 

### Return type

[**PageAvisoViagemResponse**](PageAvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST3"></a>
# **salvarUsingPOST3**
> AvisoViagemResponse salvarUsingPOST3(idCartao, codigoPais, dataInicio, dataFim)

{{{aviso_viagem_resource_salvar}}}

{{{aviso_viagem_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagavisoviagemApi()

var idCartao = 789; // {Integer} {{{aviso_viagem_persist_id_cartao_value}}}

var codigoPais = "codigoPais_example"; // {String} {{{aviso_viagem_persist_codigo_pais_value}}}

var dataInicio = "dataInicio_example"; // {String} {{{aviso_viagem_persist_data_inicio_value}}}

var dataFim = "dataFim_example"; // {String} {{{aviso_viagem_persist_data_fim_value}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST3(idCartao, codigoPais, dataInicio, dataFim, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| {{{aviso_viagem_persist_id_cartao_value}}} | 
 **codigoPais** | **String**| {{{aviso_viagem_persist_codigo_pais_value}}} | 
 **dataInicio** | **String**| {{{aviso_viagem_persist_data_inicio_value}}} | 
 **dataFim** | **String**| {{{aviso_viagem_persist_data_fim_value}}} | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

