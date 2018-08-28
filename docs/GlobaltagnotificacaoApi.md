# Pier.GlobaltagnotificacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarConfiguracaoUsingPUT**](GlobaltagnotificacaoApi.md#alterarConfiguracaoUsingPUT) | **PUT** /api/configuracoes-email/{id} | {{{email_resource_alterar_configuracao}}}
[**alterarTemplateNotificacaoUsingPUT**](GlobaltagnotificacaoApi.md#alterarTemplateNotificacaoUsingPUT) | **PUT** /api/templates-notificacoes/{id} | {{{notificacao_resource_alterar_template_notificacao}}}
[**atualizarSMSUsingPOST**](GlobaltagnotificacaoApi.md#atualizarSMSUsingPOST) | **POST** /api/notificacoes/sms/atualizar-status | {{{notificacao_resource_atualizar_s_m_s}}}
[**consultarConfiguracaoUsingGET**](GlobaltagnotificacaoApi.md#consultarConfiguracaoUsingGET) | **GET** /api/configuracoes-email/{id} | {{{email_resource_consultar_configuracao}}}
[**consultarPorEmailUsingGET**](GlobaltagnotificacaoApi.md#consultarPorEmailUsingGET) | **GET** /api/codigos-seguranca-email/{id} | {{{codigo_seguranca_resource_consultar_por_email}}}
[**consultarPorSMSUsingGET**](GlobaltagnotificacaoApi.md#consultarPorSMSUsingGET) | **GET** /api/codigos-seguranca-sms/{id} | {{{codigo_seguranca_resource_consultar_por_s_m_s}}}
[**consultarTemplateNotificacaoUsingGET**](GlobaltagnotificacaoApi.md#consultarTemplateNotificacaoUsingGET) | **GET** /api/templates-notificacoes/{id} | {{{notificacao_resource_consultar_template_notificacao}}}
[**enviarOTPUsingPOST**](GlobaltagnotificacaoApi.md#enviarOTPUsingPOST) | **POST** /api/notificacoes/3d-secure | {{{notificacao_resource_3d_secure}}}
[**gerarTokenEMAILUsingPOST**](GlobaltagnotificacaoApi.md#gerarTokenEMAILUsingPOST) | **POST** /api/notificacoes-email/gerar-codigo-seguranca | {{{codigo_seguranca_resource_gerar_token_e_m_a_i_l}}}
[**gerarTokenSMSUsingPOST**](GlobaltagnotificacaoApi.md#gerarTokenSMSUsingPOST) | **POST** /api/notificacoes-sms/gerar-codigo-seguranca | {{{codigo_seguranca_resource_gerar_token_s_m_s}}}
[**listarConfiguracaoUsingGET**](GlobaltagnotificacaoApi.md#listarConfiguracaoUsingGET) | **GET** /api/configuracoes-email | {{{email_resource_listar_configuracao}}}
[**listarPorEmailUsingGET**](GlobaltagnotificacaoApi.md#listarPorEmailUsingGET) | **GET** /api/codigos-seguranca-email | {{{codigo_seguranca_resource_listar_por_email}}}
[**listarPorSMSUsingGET**](GlobaltagnotificacaoApi.md#listarPorSMSUsingGET) | **GET** /api/codigos-seguranca-sms | {{{codigo_seguranca_resource_listar_por_s_m_s}}}
[**listarPushUsingGET**](GlobaltagnotificacaoApi.md#listarPushUsingGET) | **GET** /api/notificacoes/push | {{{notificacao_resource_listar_push}}}
[**listarSMSUsingGET**](GlobaltagnotificacaoApi.md#listarSMSUsingGET) | **GET** /api/notificacoes/sms | {{{notificacao_resource_listar_s_m_s}}}
[**listarTemplateNotificacaoUsingGET**](GlobaltagnotificacaoApi.md#listarTemplateNotificacaoUsingGET) | **GET** /api/templates-notificacoes | {{{notificacao_resource_listar_template_notificacao}}}
[**listarTiposLayoutsUsingGET**](GlobaltagnotificacaoApi.md#listarTiposLayoutsUsingGET) | **GET** /api/tipos-layouts | {{{enum_resource_listar_tipos_layouts}}}
[**notificacaoEmailUsingPOST**](GlobaltagnotificacaoApi.md#notificacaoEmailUsingPOST) | **POST** /api/notificacoes-email | {{{notificacao_resource_notificacao_email}}}
[**reenviarTokenSMSUsingPOST**](GlobaltagnotificacaoApi.md#reenviarTokenSMSUsingPOST) | **POST** /api/notificacoes-sms/reenviar-codigo-seguranca | {{{codigo_seguranca_resource_reenviar_token_s_m_s}}}
[**responderSMSGetUsingGET**](GlobaltagnotificacaoApi.md#responderSMSGetUsingGET) | **GET** /api/notificacoes/sms/responder | {{{notificacao_resource_responder_s_m_s_get}}}
[**salvarConfiguracaoUsingPOST**](GlobaltagnotificacaoApi.md#salvarConfiguracaoUsingPOST) | **POST** /api/configuracoes-email | {{{email_resource_salvar_configuracao}}}
[**salvarPushFCMUsingPOST**](GlobaltagnotificacaoApi.md#salvarPushFCMUsingPOST) | **POST** /api/notificacoes/push/fcm | {{{notificacao_resource_salvar_push_f_c_m}}}
[**salvarPushGCMUsingPOST**](GlobaltagnotificacaoApi.md#salvarPushGCMUsingPOST) | **POST** /api/notificacoes/push/gcm | {{{notificacao_resource_salvar_push_g_c_m}}}
[**salvarPushUsingPOST**](GlobaltagnotificacaoApi.md#salvarPushUsingPOST) | **POST** /api/notificacoes/push/apns | {{{notificacao_resource_salvar_push}}}
[**salvarSMSUsingPOST**](GlobaltagnotificacaoApi.md#salvarSMSUsingPOST) | **POST** /api/notificacoes/sms | {{{notificacao_resource_salvar_s_m_s}}}
[**salvarTemplateNotificacaoUsingPOST**](GlobaltagnotificacaoApi.md#salvarTemplateNotificacaoUsingPOST) | **POST** /api/templates-notificacoes | {{{notificacao_resource_salvar_template_notificacao}}}
[**validarTokenEMAILUsingPOST**](GlobaltagnotificacaoApi.md#validarTokenEMAILUsingPOST) | **POST** /api/notificacoes-email/validar-codigo-seguranca | {{{codigo_seguranca_resource_validar_token_e_m_a_i_l}}}
[**validarTokenSMSUsingPOST**](GlobaltagnotificacaoApi.md#validarTokenSMSUsingPOST) | **POST** /api/notificacoes-sms/validar-codigo-seguranca | {{{codigo_seguranca_resource_validar_token_s_m_s}}}


<a name="alterarConfiguracaoUsingPUT"></a>
# **alterarConfiguracaoUsingPUT**
> ConfiguracaoEmailResponse alterarConfiguracaoUsingPUT(id, persist)

{{{email_resource_alterar_configuracao}}}

{{{email_resource_alterar_configuracao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var id = 789; // {Integer} {{{email_resource_alterar_configuracao_param_id}}}

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
 **id** | **Integer**| {{{email_resource_alterar_configuracao_param_id}}} | 
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

{{{notificacao_resource_alterar_template_notificacao}}}

{{{notificacao_resource_alterar_template_notificacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var id = 789; // {Integer} {{{notificacao_resource_alterar_template_notificacao_param_id}}}

var conteudo = "conteudo_example"; // {String} {{{notificacao_resource_alterar_template_notificacao_param_conteudo}}}

var opts = { 
  'idConfiguracaoEmail': 789, // {Integer} {{{template_notificacao_persist_id_configuracao_email_value}}}
  'tipoLayout': "tipoLayout_example", // {String} {{{template_notificacao_persist_tipo_layout_value}}}
  'tipoNotificacao': "tipoNotificacao_example", // {String} {{{template_notificacao_persist_tipo_notificacao_value}}}
  'remetente': "remetente_example", // {String} {{{template_notificacao_persist_remetente_value}}}
  'assunto': "assunto_example", // {String} {{{template_notificacao_persist_assunto_value}}}
  'templatePadrao': true // {Boolean} {{{template_notificacao_persist_template_padrao_value}}}
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
 **id** | **Integer**| {{{notificacao_resource_alterar_template_notificacao_param_id}}} | 
 **conteudo** | **String**| {{{notificacao_resource_alterar_template_notificacao_param_conteudo}}} | 
 **idConfiguracaoEmail** | **Integer**| {{{template_notificacao_persist_id_configuracao_email_value}}} | [optional] 
 **tipoLayout** | **String**| {{{template_notificacao_persist_tipo_layout_value}}} | [optional] 
 **tipoNotificacao** | **String**| {{{template_notificacao_persist_tipo_notificacao_value}}} | [optional] 
 **remetente** | **String**| {{{template_notificacao_persist_remetente_value}}} | [optional] 
 **assunto** | **String**| {{{template_notificacao_persist_assunto_value}}} | [optional] 
 **templatePadrao** | **Boolean**| {{{template_notificacao_persist_template_padrao_value}}} | [optional] 

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

{{{notificacao_resource_atualizar_s_m_s}}}

{{{notificacao_resource_atualizar_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'nsu': "nsu_example", // {String} {{{notificacao_resource_atualizar_s_m_s_param_nsu}}}
  'status': "status_example", // {String} {{{notificacao_resource_atualizar_s_m_s_param_status}}}
  'data': "data_example", // {String} {{{notificacao_resource_atualizar_s_m_s_param_data}}}
  'textoStatus': "textoStatus_example", // {String} {{{notificacao_resource_atualizar_s_m_s_param_texto_status}}}
  'operadora': "operadora_example" // {String} {{{notificacao_resource_atualizar_s_m_s_param_operadora}}}
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
 **nsu** | **String**| {{{notificacao_resource_atualizar_s_m_s_param_nsu}}} | [optional] 
 **status** | **String**| {{{notificacao_resource_atualizar_s_m_s_param_status}}} | [optional] 
 **data** | **String**| {{{notificacao_resource_atualizar_s_m_s_param_data}}} | [optional] 
 **textoStatus** | **String**| {{{notificacao_resource_atualizar_s_m_s_param_texto_status}}} | [optional] 
 **operadora** | **String**| {{{notificacao_resource_atualizar_s_m_s_param_operadora}}} | [optional] 

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

{{{email_resource_consultar_configuracao}}}

{{{email_resource_consultar_configuracao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var id = 789; // {Integer} {{{email_resource_consultar_configuracao_param_id}}}


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
 **id** | **Integer**| {{{email_resource_consultar_configuracao_param_id}}} | 

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

{{{codigo_seguranca_resource_consultar_por_email}}}

{{{codigo_seguranca_resource_consultar_por_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var id = 789; // {Integer} {{{codigo_seguranca_resource_consultar_por_email_param_id}}}


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
 **id** | **Integer**| {{{codigo_seguranca_resource_consultar_por_email_param_id}}} | 

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

{{{codigo_seguranca_resource_consultar_por_s_m_s}}}

{{{codigo_seguranca_resource_consultar_por_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var id = 789; // {Integer} {{{codigo_seguranca_resource_consultar_por_s_m_s_param_id}}}


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
 **id** | **Integer**| {{{codigo_seguranca_resource_consultar_por_s_m_s_param_id}}} | 

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

{{{notificacao_resource_consultar_template_notificacao}}}

{{{notificacao_resource_consultar_template_notificacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var id = 789; // {Integer} {{{notificacao_resource_consultar_template_notificacao_param_id}}}


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
 **id** | **Integer**| {{{notificacao_resource_consultar_template_notificacao_param_id}}} | 

### Return type

[**TemplateNotificacaoDetalheResponse**](TemplateNotificacaoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="enviarOTPUsingPOST"></a>
# **enviarOTPUsingPOST**
> Object enviarOTPUsingPOST(secure3dRequest)

{{{notificacao_resource_3d_secure}}}

{{{notificacao_resource_3d_secure_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var secure3dRequest = new Pier.Secure3dRequest(); // {Secure3dRequest} secure3dRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.enviarOTPUsingPOST(secure3dRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secure3dRequest** | [**Secure3dRequest**](Secure3dRequest.md)| secure3dRequest | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarTokenEMAILUsingPOST"></a>
# **gerarTokenEMAILUsingPOST**
> &#39;String&#39; gerarTokenEMAILUsingPOST(email)

{{{codigo_seguranca_resource_gerar_token_e_m_a_i_l}}}

{{{codigo_seguranca_resource_gerar_token_e_m_a_i_l_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

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

{{{codigo_seguranca_resource_gerar_token_s_m_s}}}

{{{codigo_seguranca_resource_gerar_token_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

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

{{{email_resource_listar_configuracao}}}

{{{email_resource_listar_configuracao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

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

{{{codigo_seguranca_resource_listar_por_email}}}

{{{codigo_seguranca_resource_listar_por_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

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

{{{codigo_seguranca_resource_listar_por_s_m_s}}}

{{{codigo_seguranca_resource_listar_por_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

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

{{{notificacao_resource_listar_push}}}

{{{notificacao_resource_listar_push_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataEnvio': "dataEnvio_example", // {String} {{{notificacao_push_request_data_envio_value}}}
  'tipoEvento': "tipoEvento_example", // {String} {{{notificacao_push_request_tipo_evento_value}}}
  'status': "status_example", // {String} {{{notificacao_push_request_status_value}}}
  'plataforma': "plataforma_example", // {String} {{{notificacao_push_request_plataforma_value}}}
  'protocolo': "protocolo_example" // {String} {{{notificacao_push_request_protocolo_value}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataEnvio** | **String**| {{{notificacao_push_request_data_envio_value}}} | [optional] 
 **tipoEvento** | **String**| {{{notificacao_push_request_tipo_evento_value}}} | [optional] 
 **status** | **String**| {{{notificacao_push_request_status_value}}} | [optional] 
 **plataforma** | **String**| {{{notificacao_push_request_plataforma_value}}} | [optional] 
 **protocolo** | **String**| {{{notificacao_push_request_protocolo_value}}} | [optional] 

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

{{{notificacao_resource_listar_s_m_s}}}

{{{notificacao_resource_listar_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataInclusao': "dataInclusao_example", // {String} {{{notificacao_s_m_s_request_data_inclusao_value}}}
  'tipoEvento': "tipoEvento_example", // {String} {{{notificacao_s_m_s_request_tipo_evento_value}}}
  'status': "status_example", // {String} {{{notificacao_s_m_s_request_status_value}}}
  'operadora': "operadora_example", // {String} {{{notificacao_s_m_s_request_operadora_value}}}
  'protocolo': "protocolo_example", // {String} {{{notificacao_s_m_s_request_protocolo_value}}}
  'nsu': 789 // {Integer} {{{notificacao_s_m_s_request_nsu_value}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataInclusao** | **String**| {{{notificacao_s_m_s_request_data_inclusao_value}}} | [optional] 
 **tipoEvento** | **String**| {{{notificacao_s_m_s_request_tipo_evento_value}}} | [optional] 
 **status** | **String**| {{{notificacao_s_m_s_request_status_value}}} | [optional] 
 **operadora** | **String**| {{{notificacao_s_m_s_request_operadora_value}}} | [optional] 
 **protocolo** | **String**| {{{notificacao_s_m_s_request_protocolo_value}}} | [optional] 
 **nsu** | **Integer**| {{{notificacao_s_m_s_request_nsu_value}}} | [optional] 

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

{{{notificacao_resource_listar_template_notificacao}}}

{{{notificacao_resource_listar_template_notificacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

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

{{{enum_resource_listar_tipos_layouts}}}

{{{enum_resource_listar_tipos_layouts_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

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

{{{notificacao_resource_notificacao_email}}}

{{{notificacao_resource_notificacao_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

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

<a name="reenviarTokenSMSUsingPOST"></a>
# **reenviarTokenSMSUsingPOST**
> &#39;String&#39; reenviarTokenSMSUsingPOST(persist)

{{{codigo_seguranca_resource_reenviar_token_s_m_s}}}

{{{codigo_seguranca_resource_reenviar_token_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var persist = new Pier.CodigoSegurancaSMSPersist(); // {CodigoSegurancaSMSPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reenviarTokenSMSUsingPOST(persist, callback);
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

<a name="responderSMSGetUsingGET"></a>
# **responderSMSGetUsingGET**
> NotificacaoSMSResponse responderSMSGetUsingGET(opts)

{{{notificacao_resource_responder_s_m_s_get}}}

{{{notificacao_resource_responder_s_m_s_get_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var opts = { 
  'nsu': "nsu_example", // {String} {{{notificacao_resource_responder_s_m_s_get_param_nsu}}}
  'data': "data_example", // {String} {{{notificacao_resource_responder_s_m_s_get_param_data}}}
  'resposta': "resposta_example" // {String} {{{notificacao_resource_responder_s_m_s_get_param_resposta}}}
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
 **nsu** | **String**| {{{notificacao_resource_responder_s_m_s_get_param_nsu}}} | [optional] 
 **data** | **String**| {{{notificacao_resource_responder_s_m_s_get_param_data}}} | [optional] 
 **resposta** | **String**| {{{notificacao_resource_responder_s_m_s_get_param_resposta}}} | [optional] 

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

{{{email_resource_salvar_configuracao}}}

{{{email_resource_salvar_configuracao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

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

{{{notificacao_resource_salvar_push_f_c_m}}}

{{{notificacao_resource_salvar_push_f_c_m_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var pushPersists = [new Pier.PushFCMGCMPersistValue()]; // {[PushFCMGCMPersistValue]} pushPersists


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
 **pushPersists** | [**[PushFCMGCMPersistValue]**](PushFCMGCMPersistValue.md)| pushPersists | 

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

{{{notificacao_resource_salvar_push_g_c_m}}}

{{{notificacao_resource_salvar_push_g_c_m_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var pushPersists = [new Pier.PushFCMGCMPersistValue()]; // {[PushFCMGCMPersistValue]} pushPersists


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
 **pushPersists** | [**[PushFCMGCMPersistValue]**](PushFCMGCMPersistValue.md)| pushPersists | 

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

{{{notificacao_resource_salvar_push}}}

{{{notificacao_resource_salvar_push_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var pushPersists = [new Pier.PushAPNSPersistValue()]; // {[PushAPNSPersistValue]} pushPersists


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
 **pushPersists** | [**[PushAPNSPersistValue]**](PushAPNSPersistValue.md)| pushPersists | 

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

{{{notificacao_resource_salvar_s_m_s}}}

{{{notificacao_resource_salvar_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var listaSMS = [new Pier.SMSPersistValue()]; // {[SMSPersistValue]} listaSMS


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
 **listaSMS** | [**[SMSPersistValue]**](SMSPersistValue.md)| listaSMS | 

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

{{{notificacao_resource_salvar_template_notificacao}}}

{{{notificacao_resource_salvar_template_notificacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

var conteudo = "conteudo_example"; // {String} {{{notificacao_resource_salvar_template_notificacao_param_conteudo}}}

var opts = { 
  'idConfiguracaoEmail': 789, // {Integer} {{{template_notificacao_persist_id_configuracao_email_value}}}
  'tipoLayout': "tipoLayout_example", // {String} {{{template_notificacao_persist_tipo_layout_value}}}
  'tipoNotificacao': "tipoNotificacao_example", // {String} {{{template_notificacao_persist_tipo_notificacao_value}}}
  'remetente': "remetente_example", // {String} {{{template_notificacao_persist_remetente_value}}}
  'assunto': "assunto_example", // {String} {{{template_notificacao_persist_assunto_value}}}
  'templatePadrao': true // {Boolean} {{{template_notificacao_persist_template_padrao_value}}}
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
 **conteudo** | **String**| {{{notificacao_resource_salvar_template_notificacao_param_conteudo}}} | 
 **idConfiguracaoEmail** | **Integer**| {{{template_notificacao_persist_id_configuracao_email_value}}} | [optional] 
 **tipoLayout** | **String**| {{{template_notificacao_persist_tipo_layout_value}}} | [optional] 
 **tipoNotificacao** | **String**| {{{template_notificacao_persist_tipo_notificacao_value}}} | [optional] 
 **remetente** | **String**| {{{template_notificacao_persist_remetente_value}}} | [optional] 
 **assunto** | **String**| {{{template_notificacao_persist_assunto_value}}} | [optional] 
 **templatePadrao** | **Boolean**| {{{template_notificacao_persist_template_padrao_value}}} | [optional] 

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

{{{codigo_seguranca_resource_validar_token_e_m_a_i_l}}}

{{{codigo_seguranca_resource_validar_token_e_m_a_i_l_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

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

{{{codigo_seguranca_resource_validar_token_s_m_s}}}

{{{codigo_seguranca_resource_validar_token_s_m_s_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagnotificacaoApi()

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

