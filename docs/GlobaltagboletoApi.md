# Pier.GlobaltagboletoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET34**](GlobaltagboletoApi.md#consultarUsingGET34) | **GET** /api/boletos/{id} | {{{boleto_resource_consultar}}}
[**enviarBoletoEmailUsingPOST**](GlobaltagboletoApi.md#enviarBoletoEmailUsingPOST) | **POST** /api/boletos/{id}/enviar-email | {{{boleto_resource_enviar_boleto_email}}}
[**gerarBoletoUsingPOST**](GlobaltagboletoApi.md#gerarBoletoUsingPOST) | **POST** /api/boletos | {{{boleto_resource_gerar_boleto}}}
[**listarUsingGET45**](GlobaltagboletoApi.md#listarUsingGET45) | **GET** /api/boletos | {{{boleto_resource_listar}}}
[**registrarBoletoUsingPOST**](GlobaltagboletoApi.md#registrarBoletoUsingPOST) | **POST** /api/boletos/{id}/registrar | {{{registro_cobranca_resource_registrar_boleto}}}
[**visualizarBoletoUsingGET**](GlobaltagboletoApi.md#visualizarBoletoUsingGET) | **GET** /api/boletos/{id}/arquivo.pdf | {{{boleto_resource_visualizar_boleto}}}


<a name="consultarUsingGET34"></a>
# **consultarUsingGET34**
> BoletoResponse consultarUsingGET34(id)

{{{boleto_resource_consultar}}}

{{{boleto_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagboletoApi()

var id = 789; // {Integer} {{{boleto_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET34(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{boleto_resource_consultar_param_id}}} | 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="enviarBoletoEmailUsingPOST"></a>
# **enviarBoletoEmailUsingPOST**
> Object enviarBoletoEmailUsingPOST(id, request)

{{{boleto_resource_enviar_boleto_email}}}

{{{boleto_resource_enviar_boleto_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagboletoApi()

var id = 789; // {Integer} {{{boleto_resource_enviar_boleto_param_id}}}

var request = new Pier.BoletoEmailRequest(); // {BoletoEmailRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.enviarBoletoEmailUsingPOST(id, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{boleto_resource_enviar_boleto_param_id}}} | 
 **request** | [**BoletoEmailRequest**](BoletoEmailRequest.md)| request | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarBoletoUsingPOST"></a>
# **gerarBoletoUsingPOST**
> BoletoResponse gerarBoletoUsingPOST(boletoRequest)

{{{boleto_resource_gerar_boleto}}}

{{{boleto_resource_gerar_boleto_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagboletoApi()

var boletoRequest = new Pier.BoletoRequest(); // {BoletoRequest} boletoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarBoletoUsingPOST(boletoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boletoRequest** | [**BoletoRequest**](BoletoRequest.md)| boletoRequest | 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET45"></a>
# **listarUsingGET45**
> PageBoletoListarResponse listarUsingGET45(opts)

{{{boleto_resource_listar}}}

{{{boleto_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagboletoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idConta': 789, // {Integer} {{{boleto_listar_request_id_conta_value}}}
  'dataVencimento': "dataVencimento_example", // {String} {{{boleto_listar_request_data_vencimento_value}}}
  'valorBoleto': 3.4, // {Number} {{{boleto_listar_request_valor_value}}}
  'idTipoBoleto': 789 // {Integer} {{{boleto_listar_request_id_tipo_boleto_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET45(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idConta** | **Integer**| {{{boleto_listar_request_id_conta_value}}} | [optional] 
 **dataVencimento** | **String**| {{{boleto_listar_request_data_vencimento_value}}} | [optional] 
 **valorBoleto** | [**Number**](.md)| {{{boleto_listar_request_valor_value}}} | [optional] 
 **idTipoBoleto** | **Integer**| {{{boleto_listar_request_id_tipo_boleto_value}}} | [optional] 

### Return type

[**PageBoletoListarResponse**](PageBoletoListarResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrarBoletoUsingPOST"></a>
# **registrarBoletoUsingPOST**
> BoletoResponse registrarBoletoUsingPOST(id)

{{{registro_cobranca_resource_registrar_boleto}}}

{{{registro_cobranca_resource_registrar_boleto_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagboletoApi()

var id = 789; // {Integer} {{{registro_cobranca_resource_registrar_boleto_param_id_boleto}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.registrarBoletoUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{registro_cobranca_resource_registrar_boleto_param_id_boleto}}} | 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="visualizarBoletoUsingGET"></a>
# **visualizarBoletoUsingGET**
> Object visualizarBoletoUsingGET(id)

{{{boleto_resource_visualizar_boleto}}}

{{{boleto_resource_visualizar_boleto_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagboletoApi()

var id = 789; // {Integer} {{{boleto_resource_visualizar_boleto_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.visualizarBoletoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{boleto_resource_visualizar_boleto_param_id}}} | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf

