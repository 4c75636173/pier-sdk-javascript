# Pier.DocumentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT19**](DocumentoApi.md#alterarUsingPUT19) | **PUT** /api/tipos-templates/{id} | Altera o tipo de template
[**atualizarUsingPUT2**](DocumentoApi.md#atualizarUsingPUT2) | **PUT** /api/templates-documentos/{id} | Atualizar templates dos documentos
[**consultarUsingGET14**](DocumentoApi.md#consultarUsingGET14) | **GET** /api/documentos/{id} | Consulta documentos
[**consultarUsingGET15**](DocumentoApi.md#consultarUsingGET15) | **GET** /api/templates-documentos/{id} | Consultar templates dos documentos
[**consultarUsingGET39**](DocumentoApi.md#consultarUsingGET39) | **GET** /api/tipos-templates/{id} | Consultar tipo de template
[**integrarUsingPOST1**](DocumentoApi.md#integrarUsingPOST1) | **POST** /api/documentos/integrar | Integra um arquivo a reposit\u00F3rios remotos.
[**listarUsingGET19**](DocumentoApi.md#listarUsingGET19) | **GET** /api/documentos | Lista documentos
[**listarUsingGET20**](DocumentoApi.md#listarUsingGET20) | **GET** /api/templates-documentos | Lista os templates dos documentos
[**listarUsingGET47**](DocumentoApi.md#listarUsingGET47) | **GET** /api/tipos-templates | Lista os tipos de templates
[**salvarUsingPOST10**](DocumentoApi.md#salvarUsingPOST10) | **POST** /api/documentos | Cadastra documentos
[**salvarUsingPOST11**](DocumentoApi.md#salvarUsingPOST11) | **POST** /api/templates-documentos | Cadastra os templates dos documentos
[**salvarUsingPOST26**](DocumentoApi.md#salvarUsingPOST26) | **POST** /api/tipos-templates | Cadastra os tipos de templates


<a name="alterarUsingPUT19"></a>
# **alterarUsingPUT19**
> TipoTemplateResponse alterarUsingPUT19(id, persist)

Altera o tipo de template

Esse recurso permite alterar os dados do tipo de template.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do tipo de template (id).

var persist = new Pier.TipoTemplateRequest(); // {TipoTemplateRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT19(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do tipo de template (id). | 
 **persist** | [**TipoTemplateRequest**](TipoTemplateRequest.md)| persist | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT2"></a>
# **atualizarUsingPUT2**
> DocumentoTemplateResponse atualizarUsingPUT2(id, persist)

Atualizar templates dos documentos

Esse recurso permite atualizar templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do documento template (id).

var persist = new Pier.DocumentoTemplatePersist(); // {DocumentoTemplatePersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT2(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do documento template (id). | 
 **persist** | [**DocumentoTemplatePersist**](DocumentoTemplatePersist.md)| persist | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET14"></a>
# **consultarUsingGET14**
> DocumentoDetalhadoResponse consultarUsingGET14(id)

Consulta documentos

Esse recurso permite consultar um documento espec\u00EDfico a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do documento (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET14(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do documento (id). | 

### Return type

[**DocumentoDetalhadoResponse**](DocumentoDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET15"></a>
# **consultarUsingGET15**
> DocumentoTemplateResponse consultarUsingGET15(id)

Consultar templates dos documentos

Esse recurso permite consultar templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do documento template (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET15(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do documento template (id). | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET39"></a>
# **consultarUsingGET39**
> TipoTemplateResponse consultarUsingGET39(id)

Consultar tipo de template

Esse recurso permite consultar um determinado tipo de template a partir do id recebido e do id do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do tipo de template (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET39(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do tipo de template (id). | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="integrarUsingPOST1"></a>
# **integrarUsingPOST1**
> DocumentoIntegracaoResponse integrarUsingPOST1(integrarDocumentoRequest)

Integra um arquivo a reposit\u00F3rios remotos.

Este recurso permite integrar um documento ao reposit\u00F3rio pre-configurado.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var integrarDocumentoRequest = new Pier.IntegrarDocumentoRequest(); // {IntegrarDocumentoRequest} integrarDocumentoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.integrarUsingPOST1(integrarDocumentoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrarDocumentoRequest** | [**IntegrarDocumentoRequest**](IntegrarDocumentoRequest.md)| integrarDocumentoRequest | 

### Return type

[**DocumentoIntegracaoResponse**](DocumentoIntegracaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET19"></a>
# **listarUsingGET19**
> PageDocumentoResponse listarUsingGET19(opts)

Lista documentos

Esse recurso permite listar documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idTemplateDocumento': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do template do documento.
  'nome': "nome_example", // {String} Nome do documento.
  'extensao': "extensao_example" // {String} Extensao do documento.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET19(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idTemplateDocumento** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do template do documento. | [optional] 
 **nome** | **String**| Nome do documento. | [optional] 
 **extensao** | **String**| Extensao do documento. | [optional] 

### Return type

[**PageDocumentoResponse**](PageDocumentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET20"></a>
# **listarUsingGET20**
> PageDocumentoTemplateResponse listarUsingGET20(opts)

Lista os templates dos documentos

Esse recurso permite listar os templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idTipoTemplate': 789 // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do tipo do template.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET20(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idTipoTemplate** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do tipo do template. | [optional] 

### Return type

[**PageDocumentoTemplateResponse**](PageDocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET47"></a>
# **listarUsingGET47**
> PageTipoTemplateResponse listarUsingGET47(opts)

Lista os tipos de templates

Esse recurso permite listar os tipos de templates associados ao emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET47(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTipoTemplateResponse**](PageTipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST10"></a>
# **salvarUsingPOST10**
> DocumentoDetalhadoResponse salvarUsingPOST10(persist)

Cadastra documentos

Esse recurso permite cadastrar documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var persist = new Pier.DocumentoParametrosRequest(); // {DocumentoParametrosRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST10(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoParametrosRequest**](DocumentoParametrosRequest.md)| persist | 

### Return type

[**DocumentoDetalhadoResponse**](DocumentoDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST11"></a>
# **salvarUsingPOST11**
> DocumentoTemplateResponse salvarUsingPOST11(persist)

Cadastra os templates dos documentos

Esse recurso permite cadastrar templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var persist = new Pier.DocumentoTemplatePersist(); // {DocumentoTemplatePersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST11(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoTemplatePersist**](DocumentoTemplatePersist.md)| persist | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST26"></a>
# **salvarUsingPOST26**
> TipoTemplateResponse salvarUsingPOST26(persist)

Cadastra os tipos de templates

Esse recurso permite cadastrar tipos de templates.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var persist = new Pier.TipoTemplateRequest(); // {TipoTemplateRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST26(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**TipoTemplateRequest**](TipoTemplateRequest.md)| persist | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

