# Pier.PlataformasMobileApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT1**](PlataformasMobileApi.md#atualizarUsingPUT1) | **PUT** /api/plataformas-mobile/{id} | Atualiza Plataforma Mobile
[**listarUsingGET12**](PlataformasMobileApi.md#listarUsingGET12) | **GET** /api/plataformas-mobile | Lista as plataformas mobile cadastradas
[**salvarUsingPOST8**](PlataformasMobileApi.md#salvarUsingPOST8) | **POST** /api/plataformas-mobile | Cadastra Plataforma Mobile


<a name="atualizarUsingPUT1"></a>
# **atualizarUsingPUT1**
> PlataformaMobile atualizarUsingPUT1(id, update)

Atualiza Plataforma Mobile

Esse recurso permite atualizar plataforma mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PlataformasMobileApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).

var update = new Pier.PlataformaMobileUpdate(); // {PlataformaMobileUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT1(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id). | 
 **update** | [**PlataformaMobileUpdate**](PlataformaMobileUpdate.md)| update | 

### Return type

[**PlataformaMobile**](PlataformaMobile.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET12"></a>
# **listarUsingGET12**
> PagePlataformasMobile listarUsingGET12(opts)

Lista as plataformas mobile cadastradas

Este m\u00C3\u00A9todo permite que sejam listadas as plataformas mobile existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PlataformasMobileApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'nome': "nome_example" // {String} Nome da Plataforma Mobile
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET12(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **nome** | **String**| Nome da Plataforma Mobile | [optional] 

### Return type

[**PagePlataformasMobile**](PagePlataformasMobile.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST8"></a>
# **salvarUsingPOST8**
> PlataformaMobile salvarUsingPOST8(persist)

Cadastra Plataforma Mobile

Esse recurso permite cadastrar plataformas mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PlataformasMobileApi()

var persist = new Pier.PlataformaMobilePersist(); // {PlataformaMobilePersist} persist


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
 **persist** | [**PlataformaMobilePersist**](PlataformaMobilePersist.md)| persist | 

### Return type

[**PlataformaMobile**](PlataformaMobile.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

