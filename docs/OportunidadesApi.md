# Pier.OportunidadesApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarStatusUsingPUT**](OportunidadesApi.md#alterarStatusUsingPUT) | **PUT** /api/tipos-oportunidades/{id}/status/{idStatus} | Altera o status do tipo oportunidade
[**alterarUsingPUT3**](OportunidadesApi.md#alterarUsingPUT3) | **PUT** /api/oportunidades/{id} | Altera as oportunidades
[**alterarUsingPUT7**](OportunidadesApi.md#alterarUsingPUT7) | **PUT** /api/tipos-oportunidades/{id} | Altera os tipos oportunidades
[**consultarStatusUsingGET**](OportunidadesApi.md#consultarStatusUsingGET) | **GET** /api/tipos-oportunidades/{id}/status/{idStatus} | Apresenta dados de um determinado status do tipo oportunidade
[**consultarUsingGET17**](OportunidadesApi.md#consultarUsingGET17) | **GET** /api/tipos-oportunidades/{id} | Apresenta dados de um determinado tipo oportunidade
[**consultarUsingGET7**](OportunidadesApi.md#consultarUsingGET7) | **GET** /api/oportunidades/{id} | Apresenta dados de uma determinada oportunidade
[**listarAuditoriasStatusUsingGET**](OportunidadesApi.md#listarAuditoriasStatusUsingGET) | **GET** /api/auditorias-status-oportunidades | Lista as auditorias dos status oportunidades
[**listarAuditoriasUsingGET**](OportunidadesApi.md#listarAuditoriasUsingGET) | **GET** /api/auditorias-oportunidades | Lista as auditorias das oportunidades
[**listarAuditoriasUsingGET1**](OportunidadesApi.md#listarAuditoriasUsingGET1) | **GET** /api/auditorias-tipos-oportunidades | Lista as auditorias dos tipos oportunidades
[**listarStatusUsingGET**](OportunidadesApi.md#listarStatusUsingGET) | **GET** /api/tipos-oportunidades/{id}/status | Lista os status do tipo oportunidades
[**listarUsingGET19**](OportunidadesApi.md#listarUsingGET19) | **GET** /api/tipos-oportunidades | Lista os tipos oportunidades
[**listarUsingGET9**](OportunidadesApi.md#listarUsingGET9) | **GET** /api/oportunidades | Lista as oportunidades
[**salvarStatusUsingPOST**](OportunidadesApi.md#salvarStatusUsingPOST) | **POST** /api/tipos-oportunidades/{id}/status | Cadastra status para o tipo oportunidade
[**salvarUsingPOST10**](OportunidadesApi.md#salvarUsingPOST10) | **POST** /api/tipos-oportunidades | Cadastra tipos oportunidades
[**salvarUsingPOST5**](OportunidadesApi.md#salvarUsingPOST5) | **POST** /api/oportunidades | Cadastra as oportunidade


<a name="alterarStatusUsingPUT"></a>
# **alterarStatusUsingPUT**
> StatusOportunidadeResponse alterarStatusUsingPUT(id, idStatus, persist)

Altera o status do tipo oportunidade

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o do status do tipo oportunidade.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).

var idStatus = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status do tipo oportunidade (id).

var persist = new Pier.StatusOportunidade(); // {StatusOportunidade} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarStatusUsingPUT(id, idStatus, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id). | 
 **idStatus** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status do tipo oportunidade (id). | 
 **persist** | [**StatusOportunidade**](StatusOportunidade.md)| persist | 

### Return type

[**StatusOportunidadeResponse**](StatusOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT3"></a>
# **alterarUsingPUT3**
> OportunidadeResponse alterarUsingPUT3(id, update)

Altera as oportunidades

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o das oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id).

var update = new Pier.OportunidadeUpdate(); // {OportunidadeUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT3(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id). | 
 **update** | [**OportunidadeUpdate**](OportunidadeUpdate.md)| update | 

### Return type

[**OportunidadeResponse**](OportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT7"></a>
# **alterarUsingPUT7**
> TipoOportunidadeResponse alterarUsingPUT7(id, persist)

Altera os tipos oportunidades

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos tipos oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).

var persist = new Pier.TipoOportunidade(); // {TipoOportunidade} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT7(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id). | 
 **persist** | [**TipoOportunidade**](TipoOportunidade.md)| persist | 

### Return type

[**TipoOportunidadeResponse**](TipoOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarStatusUsingGET"></a>
# **consultarStatusUsingGET**
> StatusOportunidadeResponse consultarStatusUsingGET(id, idStatus)

Apresenta dados de um determinado status do tipo oportunidade

Este recurso permite consultar dados de um determinado status do tipo oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (idStatus).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).

var idStatus = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status (idStatus).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarStatusUsingGET(id, idStatus, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id). | 
 **idStatus** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status (idStatus). | 

### Return type

[**StatusOportunidadeResponse**](StatusOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET17"></a>
# **consultarUsingGET17**
> TipoOportunidadeResponse consultarUsingGET17(id)

Apresenta dados de um determinado tipo oportunidade

Este recurso permite consultar dados de um determinado tipo oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET17(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id). | 

### Return type

[**TipoOportunidadeResponse**](TipoOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET7"></a>
# **consultarUsingGET7**
> OportunidadeResponse consultarUsingGET7(id)

Apresenta dados de uma determinada oportunidade

Este recurso permite consultar dados de uma determinada oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET7(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id). | 

### Return type

[**OportunidadeResponse**](OportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarAuditoriasStatusUsingGET"></a>
# **listarAuditoriasStatusUsingGET**
> PageStatusOprtunidadesAUD listarAuditoriasStatusUsingGET(opts)

Lista as auditorias dos status oportunidades

Este recurso permite listar os status oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'revType': 789, // {Integer} C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
  'revDate': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
  'id': 789, // {Integer} C\u00C3\u00B3digo identificador do status oportunidade
  'idTipoOportunidade': 789, // {Integer} C\u00C3\u00B3digo identificador do tipo oportunidade
  'nome': "nome_example", // {String} Nome do status oportunidade
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade
  'flagAtivo': true, // {Boolean} Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo
  'revUser': new Date("2013-10-20T19:20:30+01:00") // {Date} Usu\u00C3\u00A1rio da auditoria
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarAuditoriasStatusUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **revType** | **Integer**| C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades | [optional] 
 **revDate** | **Date**| Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador do status oportunidade | [optional] 
 **idTipoOportunidade** | **Integer**| C\u00C3\u00B3digo identificador do tipo oportunidade | [optional] 
 **nome** | **String**| Nome do status oportunidade | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade | [optional] 
 **flagAtivo** | **Boolean**| Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo | [optional] 
 **revUser** | **Date**| Usu\u00C3\u00A1rio da auditoria | [optional] 

### Return type

[**PageStatusOprtunidadesAUD**](PageStatusOprtunidadesAUD.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarAuditoriasUsingGET"></a>
# **listarAuditoriasUsingGET**
> PageOprtunidadeAUD listarAuditoriasUsingGET(opts)

Lista as auditorias das oportunidades

Este recurso permite listar as auditorias das oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'idStatusOportunidade': 789, // {Integer} C\u00C3\u00B3digo identificador do status oportunidade
  'dataCadastro': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data do cadastro da oportunidade
  'dataAtualizacao': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade
  'dataInicioVigencia': new Date("2013-10-20T19:20:30+01:00"), // {Date} In\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
  'datatFimVigencia': new Date("2013-10-20T19:20:30+01:00"), // {Date} Fim da vig\u00C3\u00AAncia da oportunidade
  'flagAtivo': true, // {Boolean} Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa
  'revDate': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data da auditoria
  'revType': new Date("2013-10-20T19:20:30+01:00"), // {Date} Tipo da auditoria
  'revUser': new Date("2013-10-20T19:20:30+01:00") // {Date} Usu\u00C3\u00A1rio da auditoria
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarAuditoriasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **idStatusOportunidade** | **Integer**| C\u00C3\u00B3digo identificador do status oportunidade | [optional] 
 **dataCadastro** | **Date**| Data do cadastro da oportunidade | [optional] 
 **dataAtualizacao** | **Date**| Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade | [optional] 
 **numeroReceitaFederal** | **String**| N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade | [optional] 
 **dataInicioVigencia** | **Date**| In\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade | [optional] 
 **datatFimVigencia** | **Date**| Fim da vig\u00C3\u00AAncia da oportunidade | [optional] 
 **flagAtivo** | **Boolean**| Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa | [optional] 
 **revDate** | **Date**| Data da auditoria | [optional] 
 **revType** | **Date**| Tipo da auditoria | [optional] 
 **revUser** | **Date**| Usu\u00C3\u00A1rio da auditoria | [optional] 

### Return type

[**PageOprtunidadeAUD**](PageOprtunidadeAUD.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarAuditoriasUsingGET1"></a>
# **listarAuditoriasUsingGET1**
> PageTipoOprtunidadesAUD listarAuditoriasUsingGET1(opts)

Lista as auditorias dos tipos oportunidades

Este recurso permite listar os tipos oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'revType': 789, // {Integer} C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
  'revDate': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
  'id': 789, // {Integer} C\u00C3\u00B3digo identificador do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o
  'flagAtivo': true, // {Boolean} Atributo que representa se o tipo oportunidade est\u00C3\u00A1 ativo
  'revUser': new Date("2013-10-20T19:20:30+01:00") // {Date} Usu\u00C3\u00A1rio da auditoria
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarAuditoriasUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **revType** | **Integer**| C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades | [optional] 
 **revDate** | **Date**| Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **flagAtivo** | **Boolean**| Atributo que representa se o tipo oportunidade est\u00C3\u00A1 ativo | [optional] 
 **revUser** | **Date**| Usu\u00C3\u00A1rio da auditoria | [optional] 

### Return type

[**PageTipoOprtunidadesAUD**](PageTipoOprtunidadesAUD.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarStatusUsingGET"></a>
# **listarStatusUsingGET**
> PageStatusOprtunidades listarStatusUsingGET(id, opts)

Lista os status do tipo oportunidades

Este recurso permite listar os status do tipo oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'nome': "nome_example", // {String} Nome do status oportunidade
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade
  'flagAtivo': true // {Boolean} Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarStatusUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id). | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **nome** | **String**| Nome do status oportunidade | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade | [optional] 
 **flagAtivo** | **Boolean**| Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo | [optional] 

### Return type

[**PageStatusOprtunidades**](PageStatusOprtunidades.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET19"></a>
# **listarUsingGET19**
> PageTipoOprtunidades listarUsingGET19(opts)

Lista os tipos oportunidades

Este recurso permite listar os tipos oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade
  'flagAtivo': true // {Boolean} Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o tipo oportunidade est\u00C3\u00A1 ativo
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
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade | [optional] 
 **flagAtivo** | **Boolean**| Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o tipo oportunidade est\u00C3\u00A1 ativo | [optional] 

### Return type

[**PageTipoOprtunidades**](PageTipoOprtunidades.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET9"></a>
# **listarUsingGET9**
> PageOprtunidadesResponse listarUsingGET9(opts)

Lista as oportunidades

Este recurso permite listar as oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'idStatusOportunidade': 789, // {Integer} C\u00C3\u00B3digo identificador do status oportunidade
  'dataCadastro': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data do cadastro da oportunidade
  'dataAtualizacao': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade
  'dataInicioVigencia': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data de in\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
  'dataFimVigencia': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data do fim da vig\u00C3\u00AAncia da oportunidade
  'flagAtivo': true // {Boolean} Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET9(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **idStatusOportunidade** | **Integer**| C\u00C3\u00B3digo identificador do status oportunidade | [optional] 
 **dataCadastro** | **Date**| Data do cadastro da oportunidade | [optional] 
 **dataAtualizacao** | **Date**| Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade | [optional] 
 **numeroReceitaFederal** | **String**| N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade | [optional] 
 **dataInicioVigencia** | **Date**| Data de in\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade | [optional] 
 **dataFimVigencia** | **Date**| Data do fim da vig\u00C3\u00AAncia da oportunidade | [optional] 
 **flagAtivo** | **Boolean**| Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa | [optional] 

### Return type

[**PageOprtunidadesResponse**](PageOprtunidadesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarStatusUsingPOST"></a>
# **salvarStatusUsingPOST**
> StatusOportunidadeResponse salvarStatusUsingPOST(id, persist)

Cadastra status para o tipo oportunidade

Esse recurso permite cadastrar status para o tipo oportunidade.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).

var persist = new Pier.StatusOportunidade(); // {StatusOportunidade} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarStatusUsingPOST(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id). | 
 **persist** | [**StatusOportunidade**](StatusOportunidade.md)| persist | 

### Return type

[**StatusOportunidadeResponse**](StatusOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST10"></a>
# **salvarUsingPOST10**
> TipoOportunidadeResponse salvarUsingPOST10(persist)

Cadastra tipos oportunidades

Esse recurso permite cadastrar tipos oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var persist = new Pier.TipoOportunidade(); // {TipoOportunidade} persist


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
 **persist** | [**TipoOportunidade**](TipoOportunidade.md)| persist | 

### Return type

[**TipoOportunidadeResponse**](TipoOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> OportunidadeResponse salvarUsingPOST5(persist)

Cadastra as oportunidade

Esse recurso permite cadastrar oportunidades.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.OportunidadesApi()

var persist = new Pier.OportunidadePersist(); // {OportunidadePersist} persist


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
 **persist** | [**OportunidadePersist**](OportunidadePersist.md)| persist | 

### Return type

[**OportunidadeResponse**](OportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

