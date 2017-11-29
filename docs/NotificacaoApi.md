# Pier.NotificacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarConfiguracaoUsingPUT**](NotificacaoApi.md#alterarConfiguracaoUsingPUT) | **PUT** /api/configuracoes-email/{id} | Altera configura\u00C3\u00A7\u00C3\u00B5es de E-mail
[**alterarTemplateNotificacaoUsingPUT**](NotificacaoApi.md#alterarTemplateNotificacaoUsingPUT) | **PUT** /api/templates-notificacoes/{id} | Alterar template de notifica\u00C3\u00A7\u00C3\u00A3o
[**atualizarSMSUsingPOST**](NotificacaoApi.md#atualizarSMSUsingPOST) | **POST** /api/notificacoes/sms/atualizar-status | Atualizar SMS
[**consultarConfiguracaoUsingGET**](NotificacaoApi.md#consultarConfiguracaoUsingGET) | **GET** /api/configuracoes-email/{id} | Consulta configura\u00C3\u00A7\u00C3\u00A3o de E-mail
[**consultarPorEmailUsingGET**](NotificacaoApi.md#consultarPorEmailUsingGET) | **GET** /api/codigos-seguranca-email/{id} | Consulta c\u00C3\u00B3digo de seguran\u00C3\u00A7a E-mail
[**consultarPorSMSUsingGET**](NotificacaoApi.md#consultarPorSMSUsingGET) | **GET** /api/codigos-seguranca-sms/{id} | Consulta c\u00C3\u00B3digo de seguran\u00C3\u00A7a SMS
[**consultarTemplateNotificacaoUsingGET**](NotificacaoApi.md#consultarTemplateNotificacaoUsingGET) | **GET** /api/templates-notificacoes/{id} | Consulta template de notifica\u00C3\u00A7\u00C3\u00A3o
[**gerarTokenEMAILUsingPOST**](NotificacaoApi.md#gerarTokenEMAILUsingPOST) | **POST** /api/notificacoes-email/gerar-codigo-seguranca | Gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a e enviar por e-mail
[**gerarTokenSMSUsingPOST**](NotificacaoApi.md#gerarTokenSMSUsingPOST) | **POST** /api/notificacoes-sms/gerar-codigo-seguranca | Gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a e enviar por sms
[**listarConfiguracaoUsingGET**](NotificacaoApi.md#listarConfiguracaoUsingGET) | **GET** /api/configuracoes-email | Lista configura\u00C3\u00A7\u00C3\u00B5es de E-mails
[**listarPorEmailUsingGET**](NotificacaoApi.md#listarPorEmailUsingGET) | **GET** /api/codigos-seguranca-email | Lista os c\u00C3\u00B3digos de seguran\u00C3\u00A7a E-Mail
[**listarPorSMSUsingGET**](NotificacaoApi.md#listarPorSMSUsingGET) | **GET** /api/codigos-seguranca-sms | Lista os c\u00C3\u00B3digos de seguran\u00C3\u00A7a SMS
[**listarPushUsingGET**](NotificacaoApi.md#listarPushUsingGET) | **GET** /api/notificacoes/push | Listar Push
[**listarSMSUsingGET**](NotificacaoApi.md#listarSMSUsingGET) | **GET** /api/notificacoes/sms | Listar SMS
[**listarTemplateNotificacaoUsingGET**](NotificacaoApi.md#listarTemplateNotificacaoUsingGET) | **GET** /api/templates-notificacoes | Lista templates de notifica\u00C3\u00A7\u00C3\u00B5es
[**listarTiposLayoutsUsingGET**](NotificacaoApi.md#listarTiposLayoutsUsingGET) | **GET** /api/tipos-layouts | Lista os tipos templates de notifica\u00C3\u00A7\u00C3\u00A3o
[**notificacaoEmailUsingPOST**](NotificacaoApi.md#notificacaoEmailUsingPOST) | **POST** /api/notificacoes-email | Enviar notifica\u00C3\u00A7\u00C3\u00A3o por email
[**responderSMSGetUsingGET**](NotificacaoApi.md#responderSMSGetUsingGET) | **GET** /api/notificacoes/sms/responder | Responder SMS
[**salvarConfiguracaoUsingPOST**](NotificacaoApi.md#salvarConfiguracaoUsingPOST) | **POST** /api/configuracoes-email | Salva configura\u00C3\u00A7\u00C3\u00B5es de E-mail
[**salvarPushFCMUsingPOST**](NotificacaoApi.md#salvarPushFCMUsingPOST) | **POST** /api/notificacoes/push/fcm | Enviar Push FCM
[**salvarPushGCMUsingPOST**](NotificacaoApi.md#salvarPushGCMUsingPOST) | **POST** /api/notificacoes/push/gcm | Enviar Push GCM
[**salvarPushUsingPOST**](NotificacaoApi.md#salvarPushUsingPOST) | **POST** /api/notificacoes/push/apns | Enviar Push APNS
[**salvarSMSUsingPOST**](NotificacaoApi.md#salvarSMSUsingPOST) | **POST** /api/notificacoes/sms | Enviar SMS
[**salvarTemplateNotificacaoUsingPOST**](NotificacaoApi.md#salvarTemplateNotificacaoUsingPOST) | **POST** /api/templates-notificacoes | Salva template de notifica\u00C3\u00A7\u00C3\u00A3o
[**validarTokenEMAILUsingPOST**](NotificacaoApi.md#validarTokenEMAILUsingPOST) | **POST** /api/notificacoes-email/validar-codigo-seguranca | Validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a enviado por e-mail
[**validarTokenSMSUsingPOST**](NotificacaoApi.md#validarTokenSMSUsingPOST) | **POST** /api/notificacoes-sms/validar-codigo-seguranca | Validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a enviado por sms


<a name="alterarConfiguracaoUsingPUT"></a>
# **alterarConfiguracaoUsingPUT**
> ConfiguracaoEmailResponse alterarConfiguracaoUsingPUT(id, persist)

Altera configura\u00C3\u00A7\u00C3\u00B5es de E-mail

Esse recurso permite salvar altera\u00C3\u00A7\u00C3\u00B5es de configura\u00C3\u00A7\u00C3\u00B5es de E-mail.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.

var persist = new Pier.ConfiguracaoEmailPersist(); // {ConfiguracaoEmailPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarConfiguracaoUsingPUT(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail. | 
 **persist** | [**ConfiguracaoEmailPersist**](ConfiguracaoEmailPersist.md)| persist | 

### Return type

[**ConfiguracaoEmailResponse**](ConfiguracaoEmailResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarTemplateNotificacaoUsingPUT"></a>
# **alterarTemplateNotificacaoUsingPUT**
> TemplateNotificacaoDetalheResponse alterarTemplateNotificacaoUsingPUT(id, conteudo, opts)

Alterar template de notifica\u00C3\u00A7\u00C3\u00A3o

Esse recurso permite salvar altera\u00C3\u00A7\u00C3\u00B5es de templates notifica\u00C3\u00A7\u00C3\u00B5es.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do layout de e-mail.

var conteudo = "conteudo_example"; // {String} Template HTML

var opts = { 
  'idConfiguracaoEmail': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da configra\u00C3\u00A7\u00C3\u00A3o de EMAIL.
  'tipoLayout': "tipoLayout_example", // {String} Tipo do layout.
  'tipoNotificacao': "tipoNotificacao_example", // {String} Tipo da notifica\u00C3\u00A7\u00C3\u00A3o.
  'remetente': "remetente_example", // {String} Remetente
  'assunto': "assunto_example", // {String} Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o.
  'templatePadrao': true // {Boolean} Template Padr\u00C3\u00A3o.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarTemplateNotificacaoUsingPUT(id, conteudo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do layout de e-mail. | 
 **conteudo** | **String**| Template HTML | 
 **idConfiguracaoEmail** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da configra\u00C3\u00A7\u00C3\u00A3o de EMAIL. | [optional] 
 **tipoLayout** | **String**| Tipo do layout. | [optional] 
 **tipoNotificacao** | **String**| Tipo da notifica\u00C3\u00A7\u00C3\u00A3o. | [optional] 
 **remetente** | **String**| Remetente | [optional] 
 **assunto** | **String**| Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o. | [optional] 
 **templatePadrao** | **Boolean**| Template Padr\u00C3\u00A3o. | [optional] 

### Return type

[**TemplateNotificacaoDetalheResponse**](TemplateNotificacaoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="atualizarSMSUsingPOST"></a>
# **atualizarSMSUsingPOST**
> NotificacaoSMSResponse atualizarSMSUsingPOST(opts)

Atualizar SMS

Esse recurso permite atualizar o status do SMS do emissor

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'nsu': "nsu_example", // {String} Seu n\u00C3\u00BAmero
  'status': "status_example", // {String} Status
  'data': "data_example", // {String} Data
  'textoStatus': "textoStatus_example", // {String} TextoStatus
  'operadora': "operadora_example" // {String} Operadora
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarSMSUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nsu** | **String**| Seu n\u00C3\u00BAmero | [optional] 
 **status** | **String**| Status | [optional] 
 **data** | **String**| Data | [optional] 
 **textoStatus** | **String**| TextoStatus | [optional] 
 **operadora** | **String**| Operadora | [optional] 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarConfiguracaoUsingGET"></a>
# **consultarConfiguracaoUsingGET**
> ConfiguracaoEmailResponse consultarConfiguracaoUsingGET(id)

Consulta configura\u00C3\u00A7\u00C3\u00A3o de E-mail

Esse recurso permite consultar uma configura\u00C3\u00A7\u00C3\u00A3o espec\u00C3\u00ADfica por id.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarConfiguracaoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail. | 

### Return type

[**ConfiguracaoEmailResponse**](ConfiguracaoEmailResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarPorEmailUsingGET"></a>
# **consultarPorEmailUsingGET**
> CodigoSegurancaResponse consultarPorEmailUsingGET(id)

Consulta c\u00C3\u00B3digo de seguran\u00C3\u00A7a E-mail

Esse recurso permite consultar um c\u00C3\u00B3digo de seguran\u00C3\u00A7a E-mail espec\u00C3\u00ADfico por id.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarPorEmailUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail. | 

### Return type

[**CodigoSegurancaResponse**](CodigoSegurancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarPorSMSUsingGET"></a>
# **consultarPorSMSUsingGET**
> CodigoSegurancaResponse consultarPorSMSUsingGET(id)

Consulta c\u00C3\u00B3digo de seguran\u00C3\u00A7a SMS

Esse recurso permite consultar um c\u00C3\u00B3digo de seguran\u00C3\u00A7a SMS espec\u00C3\u00ADfico por id.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarPorSMSUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail. | 

### Return type

[**CodigoSegurancaResponse**](CodigoSegurancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTemplateNotificacaoUsingGET"></a>
# **consultarTemplateNotificacaoUsingGET**
> TemplateNotificacaoDetalheResponse consultarTemplateNotificacaoUsingGET(id)

Consulta template de notifica\u00C3\u00A7\u00C3\u00A3o

Esse recurso permite consultar uma configura\u00C3\u00A7\u00C3\u00A3o espec\u00C3\u00ADfica por id.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do layout de e-mail.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTemplateNotificacaoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do layout de e-mail. | 

### Return type

[**TemplateNotificacaoDetalheResponse**](TemplateNotificacaoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarTokenEMAILUsingPOST"></a>
# **gerarTokenEMAILUsingPOST**
> &#39;String&#39; gerarTokenEMAILUsingPOST(email)

Gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a e enviar por e-mail

Esse recurso permite gerar e enviar c\u00C3\u00B3digos de seguran\u00C3\u00A7a por e-mail, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var email = "email_example"; // {String} email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarTokenEMAILUsingPOST(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| email | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarTokenSMSUsingPOST"></a>
# **gerarTokenSMSUsingPOST**
> &#39;String&#39; gerarTokenSMSUsingPOST(persist)

Gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a e enviar por sms

Esse recurso permite gerar e enviar c\u00C3\u00B3digos de seguran\u00C3\u00A7a por sms, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var persist = new Pier.CodigoSegurancaSMSPersist(); // {CodigoSegurancaSMSPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarTokenSMSUsingPOST(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**CodigoSegurancaSMSPersist**](CodigoSegurancaSMSPersist.md)| persist | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarConfiguracaoUsingGET"></a>
# **listarConfiguracaoUsingGET**
> PageConfiguracaoEmailResponse listarConfiguracaoUsingGET(opts)

Lista configura\u00C3\u00A7\u00C3\u00B5es de E-mails

Esse recurso permite listar as configura\u00C3\u00A7\u00C3\u00B5es de E-mails.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarConfiguracaoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageConfiguracaoEmailResponse**](PageConfiguracaoEmailResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPorEmailUsingGET"></a>
# **listarPorEmailUsingGET**
> PageCodigoSegurancaResponse listarPorEmailUsingGET(opts)

Lista os c\u00C3\u00B3digos de seguran\u00C3\u00A7a E-Mail

Esse recurso permite listar os codigos de seguran\u00C3\u00A7a por E-Mail.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarPorEmailUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCodigoSegurancaResponse**](PageCodigoSegurancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPorSMSUsingGET"></a>
# **listarPorSMSUsingGET**
> PageCodigoSegurancaResponse listarPorSMSUsingGET(opts)

Lista os c\u00C3\u00B3digos de seguran\u00C3\u00A7a SMS

Esse recurso permite listar os codigos de seguran\u00C3\u00A7a por SMS.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarPorSMSUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCodigoSegurancaResponse**](PageCodigoSegurancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPushUsingGET"></a>
# **listarPushUsingGET**
> PagePushResponse listarPushUsingGET(opts)

Listar Push

Esse recurso permite listar os Pushes do emissor

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataEnvio': "dataEnvio_example", // {String} Apresenta a data e em que o registro foi enviado para o dispositivo.
  'tipoEvento': "tipoEvento_example", // {String} Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
  'status': "status_example", // {String} Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
  'plataforma': "plataforma_example", // {String} Plataforma de Push notifications.
  'protocolo': "protocolo_example" // {String} N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarPushUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataEnvio** | **String**| Apresenta a data e em que o registro foi enviado para o dispositivo. | [optional] 
 **tipoEvento** | **String**| Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **status** | **String**| Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **plataforma** | **String**| Plataforma de Push notifications. | [optional] 
 **protocolo** | **String**| N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es | [optional] 

### Return type

[**PagePushResponse**](PagePushResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarSMSUsingGET"></a>
# **listarSMSUsingGET**
> PageSMSResponse listarSMSUsingGET(opts)

Listar SMS

Esse recurso permite listar os SMS do emissor

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataInclusao': "dataInclusao_example", // {String} Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado
  'tipoEvento': "tipoEvento_example", // {String} Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
  'status': "status_example", // {String} Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
  'operadora': "operadora_example", // {String} Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada.
  'protocolo': "protocolo_example", // {String} N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
  'nsu': 789 // {Integer} Apresenta o nsu da notifica\u00C3\u00A7\u00C3\u00A3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarSMSUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataInclusao** | **String**| Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado | [optional] 
 **tipoEvento** | **String**| Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **status** | **String**| Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **operadora** | **String**| Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada. | [optional] 
 **protocolo** | **String**| N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es | [optional] 
 **nsu** | **Integer**| Apresenta o nsu da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 

### Return type

[**PageSMSResponse**](PageSMSResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTemplateNotificacaoUsingGET"></a>
# **listarTemplateNotificacaoUsingGET**
> PageTemplateNotificacaoResponse listarTemplateNotificacaoUsingGET(opts)

Lista templates de notifica\u00C3\u00A7\u00C3\u00B5es

Esse recurso permite listar templates notifica\u00C3\u00A7\u00C3\u00B5es.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTemplateNotificacaoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTemplateNotificacaoResponse**](PageTemplateNotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposLayoutsUsingGET"></a>
# **listarTiposLayoutsUsingGET**
> [Object] listarTiposLayoutsUsingGET

Lista os tipos templates de notifica\u00C3\u00A7\u00C3\u00A3o

Esse recurso permite listar os tipos de templates dispon\u00C3\u00ADveis os par\u00C3\u00A2metros devem ser usados entre chaves. Ex: {{nomeParametro}} .

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposLayoutsUsingGET(callback);
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

<a name="notificacaoEmailUsingPOST"></a>
# **notificacaoEmailUsingPOST**
> Object notificacaoEmailUsingPOST(request)

Enviar notifica\u00C3\u00A7\u00C3\u00A3o por email

Esse recurso permite enviar uma mensagem de notifica\u00C3\u00A7\u00C3\u00A3o por email

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var request = new Pier.NotificacaoEmailRequest(); // {NotificacaoEmailRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.notificacaoEmailUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**NotificacaoEmailRequest**](NotificacaoEmailRequest.md)| request | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="responderSMSGetUsingGET"></a>
# **responderSMSGetUsingGET**
> NotificacaoSMSResponse responderSMSGetUsingGET(opts)

Responder SMS

Esse recurso permite atualizar a resposta do SMS, fornecida pedo usu\u00C3\u00A1rio

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var opts = { 
  'nsu': "nsu_example", // {String} Seu n\u00C3\u00BAmero
  'data': "data_example", // {String} Data
  'resposta': "resposta_example" // {String} TextoStatus
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.responderSMSGetUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nsu** | **String**| Seu n\u00C3\u00BAmero | [optional] 
 **data** | **String**| Data | [optional] 
 **resposta** | **String**| TextoStatus | [optional] 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarConfiguracaoUsingPOST"></a>
# **salvarConfiguracaoUsingPOST**
> ConfiguracaoEmailResponse salvarConfiguracaoUsingPOST(persist)

Salva configura\u00C3\u00A7\u00C3\u00B5es de E-mail

Esse recurso salvar configura\u00C3\u00A7\u00C3\u00B5es de E-mail.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var persist = new Pier.ConfiguracaoEmailPersist(); // {ConfiguracaoEmailPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarConfiguracaoUsingPOST(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**ConfiguracaoEmailPersist**](ConfiguracaoEmailPersist.md)| persist | 

### Return type

[**ConfiguracaoEmailResponse**](ConfiguracaoEmailResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushFCMUsingPOST"></a>
# **salvarPushFCMUsingPOST**
> NotificacaoResponse salvarPushFCMUsingPOST(pushPersists)

Enviar Push FCM

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma FCM (Firebase Cloud Messaging).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var pushPersists = [new Pier.PushFCMEGCM()]; // {[PushFCMEGCM]} pushPersists


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPushFCMUsingPOST(pushPersists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushPersists** | [**[PushFCMEGCM]**](PushFCMEGCM.md)| pushPersists | 

### Return type

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushGCMUsingPOST"></a>
# **salvarPushGCMUsingPOST**
> NotificacaoResponse salvarPushGCMUsingPOST(pushPersists)

Enviar Push GCM

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma GCM (Google Cloud Messaging).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var pushPersists = [new Pier.PushFCMEGCM()]; // {[PushFCMEGCM]} pushPersists


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPushGCMUsingPOST(pushPersists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushPersists** | [**[PushFCMEGCM]**](PushFCMEGCM.md)| pushPersists | 

### Return type

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushUsingPOST"></a>
# **salvarPushUsingPOST**
> NotificacaoResponse salvarPushUsingPOST(pushPersists)

Enviar Push APNS

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma APNS (Apple Push Notification Service).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var pushPersists = [new Pier.PushAPNS()]; // {[PushAPNS]} pushPersists


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPushUsingPOST(pushPersists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushPersists** | [**[PushAPNS]**](PushAPNS.md)| pushPersists | 

### Return type

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarSMSUsingPOST"></a>
# **salvarSMSUsingPOST**
> NotificacaoResponse salvarSMSUsingPOST(listaSMS)

Enviar SMS

Esse recurso permite enviar uma lista de SMS.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var listaSMS = [new Pier.NotificacaoSMSBody()]; // {[NotificacaoSMSBody]} listaSMS


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarSMSUsingPOST(listaSMS, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listaSMS** | [**[NotificacaoSMSBody]**](NotificacaoSMSBody.md)| listaSMS | 

### Return type

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarTemplateNotificacaoUsingPOST"></a>
# **salvarTemplateNotificacaoUsingPOST**
> TemplateNotificacaoDetalheResponse salvarTemplateNotificacaoUsingPOST(conteudo, opts)

Salva template de notifica\u00C3\u00A7\u00C3\u00A3o

Esse recurso salvar template notifica\u00C3\u00A7\u00C3\u00B5e.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var conteudo = "conteudo_example"; // {String} Template HTML

var opts = { 
  'idConfiguracaoEmail': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da configra\u00C3\u00A7\u00C3\u00A3o de EMAIL.
  'tipoLayout': "tipoLayout_example", // {String} Tipo do layout.
  'tipoNotificacao': "tipoNotificacao_example", // {String} Tipo da notifica\u00C3\u00A7\u00C3\u00A3o.
  'remetente': "remetente_example", // {String} Remetente
  'assunto': "assunto_example", // {String} Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o.
  'templatePadrao': true // {Boolean} Template Padr\u00C3\u00A3o.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarTemplateNotificacaoUsingPOST(conteudo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conteudo** | **String**| Template HTML | 
 **idConfiguracaoEmail** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da configra\u00C3\u00A7\u00C3\u00A3o de EMAIL. | [optional] 
 **tipoLayout** | **String**| Tipo do layout. | [optional] 
 **tipoNotificacao** | **String**| Tipo da notifica\u00C3\u00A7\u00C3\u00A3o. | [optional] 
 **remetente** | **String**| Remetente | [optional] 
 **assunto** | **String**| Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o. | [optional] 
 **templatePadrao** | **Boolean**| Template Padr\u00C3\u00A3o. | [optional] 

### Return type

[**TemplateNotificacaoDetalheResponse**](TemplateNotificacaoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="validarTokenEMAILUsingPOST"></a>
# **validarTokenEMAILUsingPOST**
> &#39;String&#39; validarTokenEMAILUsingPOST(request)

Validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a enviado por e-mail

Esse recurso permite validar os c\u00C3\u00B3digos de seguran\u00C3\u00A7a enviador por e-mail, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var request = new Pier.CodigoSegurancaEMAILPersist(); // {CodigoSegurancaEMAILPersist} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarTokenEMAILUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CodigoSegurancaEMAILPersist**](CodigoSegurancaEMAILPersist.md)| request | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarTokenSMSUsingPOST"></a>
# **validarTokenSMSUsingPOST**
> &#39;String&#39; validarTokenSMSUsingPOST(request)

Validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a enviado por sms

Esse recurso permite validar os c\u00C3\u00B3digos de seguran\u00C3\u00A7a enviador por sms, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacaoApi()

var request = new Pier.CodigoSegurancaSMSRequest(); // {CodigoSegurancaSMSRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarTokenSMSUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CodigoSegurancaSMSRequest**](CodigoSegurancaSMSRequest.md)| request | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json
