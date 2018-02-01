# Pier.DispositivoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarUsingPOST**](DispositivoApi.md#ativarUsingPOST) | **POST** /api/dispositivos/{id}/ativar-dispositivo | Ativa Dispositivo
[**desativarUsingPOST**](DispositivoApi.md#desativarUsingPOST) | **POST** /api/dispositivos/{id}/desativar-dispositivo | Desativa Dispositivo
[**listarUsingGET14**](DispositivoApi.md#listarUsingGET14) | **GET** /api/dispositivos | Lista os dispositivos cadastrados
[**salvarUsingPOST8**](DispositivoApi.md#salvarUsingPOST8) | **POST** /api/dispositivos | Cadastra Dispositivo


<a name="ativarUsingPOST"></a>
# **ativarUsingPOST**
> DispositivoResponse ativarUsingPOST(id)

Ativa Dispositivo

Esse recurso permite ativar dispositivo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id). | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarUsingPOST"></a>
# **desativarUsingPOST**
> DispositivoResponse desativarUsingPOST(id)

Desativa Dispositivo

Esse recurso permite desativar dispositivo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id). | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET14"></a>
# **listarUsingGET14**
> PageDispositivoResponse listarUsingGET14(opts)

Lista os dispositivos cadastrados

Este m\u00C3\u00A9todo permite que sejam listados os dispositivos existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'token': "token_example", // {String} Token do Dispositivo
  'idUsuario': 789, // {Integer} Identificador do Usu\u00C3\u00A1rio
  'idAplicacaoMobile': 789, // {Integer} Identificador da aplica\u00C3\u00A7\u00C3\u00A3o
  'dataCriacao': "dataCriacao_example", // {String} Apresenta a data e em que o registro foi criado.
  'dataDesativacao': "dataDesativacao_example" // {String} Apresenta a data e em que o registro foi desativado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET14(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **token** | **String**| Token do Dispositivo | [optional] 
 **idUsuario** | **Integer**| Identificador do Usu\u00C3\u00A1rio | [optional] 
 **idAplicacaoMobile** | **Integer**| Identificador da aplica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **dataCriacao** | **String**| Apresenta a data e em que o registro foi criado. | [optional] 
 **dataDesativacao** | **String**| Apresenta a data e em que o registro foi desativado. | [optional] 

### Return type

[**PageDispositivoResponse**](PageDispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST8"></a>
# **salvarUsingPOST8**
> DispositivoResponse salvarUsingPOST8(persist)

Cadastra Dispositivo

Esse recurso permite cadastrar dispositivos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivoApi()

var persist = new Pier.DispositivoPersist(); // {DispositivoPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST8(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DispositivoPersist**](DispositivoPersist.md)| persist | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

