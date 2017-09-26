# Pier.DocumentosApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salvarUsingPOST5**](DocumentosApi.md#salvarUsingPOST5) | **POST** /api/documentos | Cadastra documentos
[**salvarUsingPOST6**](DocumentosApi.md#salvarUsingPOST6) | **POST** /api/templates-documentos | Cadastra os templates dos documentos
[**salvarUsingPOST7**](DocumentosApi.md#salvarUsingPOST7) | **POST** /api/tipos-documentos | Cadastra os tipos de documentos


<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> DocumentoResponse salvarUsingPOST5(persist)

Cadastra documentos

Esse recurso permite cadastrar documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentosApi()

var persist = new Pier.DocumentoParametrosRequest(); // {DocumentoParametrosRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST5(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoParametrosRequest**](DocumentoParametrosRequest.md)| persist | 

### Return type

[**DocumentoResponse**](DocumentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST6"></a>
# **salvarUsingPOST6**
> DocumentoTemplateResponse salvarUsingPOST6(persist)

Cadastra os templates dos documentos

Esse recurso permite cadastrar templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentosApi()

var persist = new Pier.DocumentoTemplateRequest(); // {DocumentoTemplateRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST6(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoTemplateRequest**](DocumentoTemplateRequest.md)| persist | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST7"></a>
# **salvarUsingPOST7**
> DocumentoTipoResponse salvarUsingPOST7(persist)

Cadastra os tipos de documentos

Esse recurso permite cadastrar tipos de documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentosApi()

var persist = new Pier.DocumentoTipoRequest(); // {DocumentoTipoRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST7(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoTipoRequest**](DocumentoTipoRequest.md)| persist | 

### Return type

[**DocumentoTipoResponse**](DocumentoTipoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

