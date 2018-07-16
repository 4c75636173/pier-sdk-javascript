# Pier.GlobaltagpayApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarChaveUsingPOST**](GlobaltagpayApi.md#atualizarChaveUsingPOST) | **POST** /api/cartoes-tokenizados/{id}/atualizar-chave | {{{cartao_pay_resource_atualizar_chave}}}
[**atualizarUsingPUT**](GlobaltagpayApi.md#atualizarUsingPUT) | **PUT** /api/cartoes-tokenizados/{id} | {{{cartao_pay_resource_atualizar}}}
[**confirmaAtualizacaoChaveUsingPOST**](GlobaltagpayApi.md#confirmaAtualizacaoChaveUsingPOST) | **POST** /api/cartoes-tokenizados/{id}/confirmar-chave | {{{cartao_pay_resource_confirma_atualizacao_chave}}}
[**consultarUsingGET9**](GlobaltagpayApi.md#consultarUsingGET9) | **GET** /api/cartoes-tokenizados/{id} | {{{cartao_pay_resource_consultar}}}
[**listarCodigosRespostaUsingGET**](GlobaltagpayApi.md#listarCodigosRespostaUsingGET) | **GET** /api/codigos-resposta | {{{enum_pay_resource_listar_codigos_resposta}}}
[**listarModosEntradaUsingGET**](GlobaltagpayApi.md#listarModosEntradaUsingGET) | **GET** /api/modos-entrada | {{{enum_pay_resource_listar_modos_entrada}}}
[**listarOperacoesUsingGET**](GlobaltagpayApi.md#listarOperacoesUsingGET) | **GET** /api/operacoes | {{{enum_pay_resource_listar_operacoes}}}
[**listarTiposTerminaisUsingGET**](GlobaltagpayApi.md#listarTiposTerminaisUsingGET) | **GET** /api/tipos-terminais | {{{enum_pay_resource_listar_tipos_terminais}}}
[**listarTiposTransacoesUsingGET**](GlobaltagpayApi.md#listarTiposTransacoesUsingGET) | **GET** /api/tipos-transacoes | {{{enum_pay_resource_listar_tipos_transacoes}}}
[**listarUsingGET10**](GlobaltagpayApi.md#listarUsingGET10) | **GET** /api/cartoes-tokenizados | {{{cartao_pay_resource_listar}}}
[**salvarUsingPOST5**](GlobaltagpayApi.md#salvarUsingPOST5) | **POST** /api/cartoes-tokenizados | {{{cartao_pay_resource_salvar}}}


<a name="atualizarChaveUsingPOST"></a>
# **atualizarChaveUsingPOST**
> CartaoPayAtualizarChaveResponse atualizarChaveUsingPOST(deviceId, id)

{{{cartao_pay_resource_atualizar_chave}}}

{{{cartao_pay_resource_atualizar_chave_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var deviceId = "deviceId_example"; // {String} {{{cartao_pay_resource_atualizar_chave_param_device_id}}}

var id = 789; // {Integer} {{{cartao_pay_resource_atualizar_chave_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarChaveUsingPOST(deviceId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| {{{cartao_pay_resource_atualizar_chave_param_device_id}}} | 
 **id** | **Integer**| {{{cartao_pay_resource_atualizar_chave_param_id}}} | 

### Return type

[**CartaoPayAtualizarChaveResponse**](CartaoPayAtualizarChaveResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT"></a>
# **atualizarUsingPUT**
> CartaoPayResponse atualizarUsingPUT(deviceId, id, update)

{{{cartao_pay_resource_atualizar}}}

{{{cartao_pay_resource_atualizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var deviceId = "deviceId_example"; // {String} {{{cartao_pay_resource_atualizar_param_device_id}}}

var id = 789; // {Integer} {{{cartao_pay_resource_atualizar_param_id}}}

var update = new Pier.CartaoPayUpdate(); // {CartaoPayUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT(deviceId, id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| {{{cartao_pay_resource_atualizar_param_device_id}}} | 
 **id** | **Integer**| {{{cartao_pay_resource_atualizar_param_id}}} | 
 **update** | [**CartaoPayUpdate**](CartaoPayUpdate.md)| update | 

### Return type

[**CartaoPayResponse**](CartaoPayResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmaAtualizacaoChaveUsingPOST"></a>
# **confirmaAtualizacaoChaveUsingPOST**
> CartaoPayConfirmarChaveResponse confirmaAtualizacaoChaveUsingPOST(deviceId, id, update)

{{{cartao_pay_resource_confirma_atualizacao_chave}}}

{{{cartao_pay_resource_confirma_atualizacao_chave_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var deviceId = "deviceId_example"; // {String} {{{cartao_pay_resource_confirma_atualizacao_chave_param_device_id}}}

var id = 789; // {Integer} {{{cartao_pay_resource_confirma_atualizacao_chave_param_id}}}

var update = new Pier.CartaoPayKeyUpdate(); // {CartaoPayKeyUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.confirmaAtualizacaoChaveUsingPOST(deviceId, id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| {{{cartao_pay_resource_confirma_atualizacao_chave_param_device_id}}} | 
 **id** | **Integer**| {{{cartao_pay_resource_confirma_atualizacao_chave_param_id}}} | 
 **update** | [**CartaoPayKeyUpdate**](CartaoPayKeyUpdate.md)| update | 

### Return type

[**CartaoPayConfirmarChaveResponse**](CartaoPayConfirmarChaveResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET9"></a>
# **consultarUsingGET9**
> CartaoPayDetalheResponse consultarUsingGET9(deviceId, id)

{{{cartao_pay_resource_consultar}}}

{{{cartao_pay_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var deviceId = "deviceId_example"; // {String} {{{cartao_pay_resource_consultar_param_device_id}}}

var id = 789; // {Integer} {{{cartao_pay_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET9(deviceId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| {{{cartao_pay_resource_consultar_param_device_id}}} | 
 **id** | **Integer**| {{{cartao_pay_resource_consultar_param_id}}} | 

### Return type

[**CartaoPayDetalheResponse**](CartaoPayDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarCodigosRespostaUsingGET"></a>
# **listarCodigosRespostaUsingGET**
> [Object] listarCodigosRespostaUsingGET

{{{enum_pay_resource_listar_codigos_resposta}}}

{{{enum_pay_resource_listar_codigos_resposta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarCodigosRespostaUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarModosEntradaUsingGET"></a>
# **listarModosEntradaUsingGET**
> [Object] listarModosEntradaUsingGET

{{{enum_pay_resource_listar_modos_entrada}}}

{{{enum_pay_resource_listar_modos_entrada_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarModosEntradaUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarOperacoesUsingGET"></a>
# **listarOperacoesUsingGET**
> [Object] listarOperacoesUsingGET

{{{enum_pay_resource_listar_operacoes}}}

{{{enum_pay_resource_listar_operacoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarOperacoesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposTerminaisUsingGET"></a>
# **listarTiposTerminaisUsingGET**
> [Object] listarTiposTerminaisUsingGET

{{{enum_pay_resource_listar_tipos_terminais}}}

{{{enum_pay_resource_listar_tipos_terminais_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposTerminaisUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposTransacoesUsingGET"></a>
# **listarTiposTransacoesUsingGET**
> [Object] listarTiposTransacoesUsingGET

{{{enum_pay_resource_listar_tipos_transacoes}}}

{{{enum_pay_resource_listar_tipos_transacoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposTransacoesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET10"></a>
# **listarUsingGET10**
> PageCartaoPayResponse listarUsingGET10(opts)

{{{cartao_pay_resource_listar}}}

{{{cartao_pay_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var opts = { 
  'deviceId': "deviceId_example", // {String} {{{cartao_pay_resource_listar_param_device_id}}}
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'status': "status_example", // {String} {{{cartao_pay_request_status_value}}}
  'numeroCartao': "numeroCartao_example" // {String} {{{cartao_pay_request_numero_cartao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET10(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| {{{cartao_pay_resource_listar_param_device_id}}} | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **status** | **String**| {{{cartao_pay_request_status_value}}} | [optional] 
 **numeroCartao** | **String**| {{{cartao_pay_request_numero_cartao_value}}} | [optional] 

### Return type

[**PageCartaoPayResponse**](PageCartaoPayResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> CartaoPayCadastroResponse salvarUsingPOST5(deviceId, persist)

{{{cartao_pay_resource_salvar}}}

{{{cartao_pay_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpayApi()

var deviceId = "deviceId_example"; // {String} {{{cartao_pay_resource_salvar_param_device_id}}}

var persist = new Pier.CartaoPayPersist(); // {CartaoPayPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST5(deviceId, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| {{{cartao_pay_resource_salvar_param_device_id}}} | 
 **persist** | [**CartaoPayPersist**](CartaoPayPersist.md)| persist | 

### Return type

[**CartaoPayCadastroResponse**](CartaoPayCadastroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

