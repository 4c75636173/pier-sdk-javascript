# Pier.GlobaltagcadastrogeralApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarConvenioUsingPUT**](GlobaltagcadastrogeralApi.md#alterarConvenioUsingPUT) | **PUT** /api/convenios/{id} | Altera os dados banc\u00E1rios de um determinado conv\u00EAnio
[**alterarCorteUsingPUT**](GlobaltagcadastrogeralApi.md#alterarCorteUsingPUT) | **PUT** /api/vencimentos/{dataVencimento} | {{{vencimento_resource_alterar}}}
[**alterarUsingPUT1**](GlobaltagcadastrogeralApi.md#alterarUsingPUT1) | **PUT** /api/campanhas/{id} | {{{campanha_resource_alterar}}}
[**alterarUsingPUT2**](GlobaltagcadastrogeralApi.md#alterarUsingPUT2) | **PUT** /api/configuracoes-registro-cobranca/{id} | {{{configuracao_registro_cobranca_resource_alterar}}}
[**alterarUsingPUT3**](GlobaltagcadastrogeralApi.md#alterarUsingPUT3) | **PUT** /api/configuracoes-rotativos/{id} | {{{configuracao_rotativo_resource_alterar}}}
[**cadastrarConvenioUsingPOST**](GlobaltagcadastrogeralApi.md#cadastrarConvenioUsingPOST) | **POST** /api/convenios | Adiciona novo conv\u00EAnio para o emissor
[**cadastrarUsingPOST2**](GlobaltagcadastrogeralApi.md#cadastrarUsingPOST2) | **POST** /api/configuracoes-registro-cobranca | {{{configuracao_registro_cobranca_resource_cadastrar}}}
[**configurarTaxaAntecipacaoUsingPOST**](GlobaltagcadastrogeralApi.md#configurarTaxaAntecipacaoUsingPOST) | **POST** /api/produtos/{id}/configurar-taxa-antecipacao | {{{produto_resource_configurar_taxa_antecipacao}}}
[**consultarCampanhaUsingGET**](GlobaltagcadastrogeralApi.md#consultarCampanhaUsingGET) | **GET** /api/campanhas/{id} | {{{campanha_resource_consultar_campanha}}}
[**consultarConvenioUsingGET**](GlobaltagcadastrogeralApi.md#consultarConvenioUsingGET) | **GET** /api/convenios/{id} | Consultar dados banc\u00E1rios pelo id do conv\u00EAnio
[**consultarTaxaAntecipacaoUsingGET**](GlobaltagcadastrogeralApi.md#consultarTaxaAntecipacaoUsingGET) | **GET** /api/produtos/{id}/consultar-taxa-antecipacao | {{{produto_resource_consultar_taxa_antecipacao}}}
[**consultarUsingGET13**](GlobaltagcadastrogeralApi.md#consultarUsingGET13) | **GET** /api/configuracoes-registro-cobranca/{id} | {{{configuracao_registro_cobranca_resource_consultar}}}
[**consultarUsingGET14**](GlobaltagcadastrogeralApi.md#consultarUsingGET14) | **GET** /api/configuracoes-rotativos/{id} | {{{configuracao_rotativo_resource_consultar}}}
[**consultarUsingGET34**](GlobaltagcadastrogeralApi.md#consultarUsingGET34) | **GET** /api/produtos/{id} | {{{produto_resource_consultar}}}
[**consultarUsingGET43**](GlobaltagcadastrogeralApi.md#consultarUsingGET43) | **GET** /api/tipos-ajustes/{id} | {{{tipo_transacoes_ajuste_resource_consultar}}}
[**consultarUsingGET44**](GlobaltagcadastrogeralApi.md#consultarUsingGET44) | **GET** /api/tipos-boletos | {{{tipo_boleto_resource_consultar}}}
[**consultarUsingGET45**](GlobaltagcadastrogeralApi.md#consultarUsingGET45) | **GET** /api/tipos-enderecos/{id} | {{{tipo_endereco_resource_consultar}}}
[**consultarUsingGET46**](GlobaltagcadastrogeralApi.md#consultarUsingGET46) | **GET** /api/tipos-operacoes | {{{tipo_operacao_resource_consultar}}}
[**consultarUsingGET48**](GlobaltagcadastrogeralApi.md#consultarUsingGET48) | **GET** /api/tipos-telefones/{id} | {{{tipo_telefone_resource_consultar}}}
[**consultarUsingGET7**](GlobaltagcadastrogeralApi.md#consultarUsingGET7) | **GET** /api/atendimento-clientes/{id} | {{{atendimento_cliente_resource_consultar}}}
[**consultarUsingGET9**](GlobaltagcadastrogeralApi.md#consultarUsingGET9) | **GET** /api/bancos/{id} | {{{banco_resource_consultar}}}
[**listarCampanhasUsingGET**](GlobaltagcadastrogeralApi.md#listarCampanhasUsingGET) | **GET** /api/campanhas | {{{campanha_resource_listar_campanhas}}}
[**listarContasPorPessoaUsingGET**](GlobaltagcadastrogeralApi.md#listarContasPorPessoaUsingGET) | **GET** /api/pessoas/listar-contas | {{{pessoa_resource_listar_contas_por_pessoa}}}
[**listarConveniosUsingGET**](GlobaltagcadastrogeralApi.md#listarConveniosUsingGET) | **GET** /api/convenios | Lista os dados banc\u00E1rios dos conv\u00EAnios existentes
[**listarEstadosCivisUsingGET**](GlobaltagcadastrogeralApi.md#listarEstadosCivisUsingGET) | **GET** /api/estados-civis | {{{campo_codificado_resource_listar_estados_civis}}}
[**listarFantasiasBasicasUsingGET**](GlobaltagcadastrogeralApi.md#listarFantasiasBasicasUsingGET) | **GET** /api/fantasias-basicas | {{{fantasia_basica_resource_listar_fantasias_basicas}}}
[**listarHistoricoTelefonesUsingGET**](GlobaltagcadastrogeralApi.md#listarHistoricoTelefonesUsingGET) | **GET** /api/pessoas/{id}/historico-telefones | {{{pessoa_resource_listar_historico_telefones}}}
[**listarNacionalidadesUsingGET**](GlobaltagcadastrogeralApi.md#listarNacionalidadesUsingGET) | **GET** /api/nacionalidades | {{{campo_codificado_resource_listar_nacionalidades}}}
[**listarNaturezasOcupacoesUsingGET**](GlobaltagcadastrogeralApi.md#listarNaturezasOcupacoesUsingGET) | **GET** /api/ocupacoes | {{{campo_codificado_resource_listar_naturezas_ocupacoes}}}
[**listarParentescosUsingGET**](GlobaltagcadastrogeralApi.md#listarParentescosUsingGET) | **GET** /api/parentescos | {{{campo_codificado_resource_listar_parentescos}}}
[**listarProfissoesUsingGET**](GlobaltagcadastrogeralApi.md#listarProfissoesUsingGET) | **GET** /api/profissoes | {{{campo_codificado_resource_listar_profissoes}}}
[**listarTiposCampanhasUsingGET**](GlobaltagcadastrogeralApi.md#listarTiposCampanhasUsingGET) | **GET** /api/tipos-campanhas | {{{tipo_campanha_resource_listar_tipos_campanhas}}}
[**listarUsingGET10**](GlobaltagcadastrogeralApi.md#listarUsingGET10) | **GET** /api/bancos | {{{banco_resource_listar}}}
[**listarUsingGET15**](GlobaltagcadastrogeralApi.md#listarUsingGET15) | **GET** /api/configuracoes-registro-cobranca | {{{configuracao_registro_cobranca_resource_listar}}}
[**listarUsingGET16**](GlobaltagcadastrogeralApi.md#listarUsingGET16) | **GET** /api/configuracoes-rotativos | {{{configuracao_rotativo_resource_listar}}}
[**listarUsingGET43**](GlobaltagcadastrogeralApi.md#listarUsingGET43) | **GET** /api/portadores | {{{portador_resource_listar}}}
[**listarUsingGET44**](GlobaltagcadastrogeralApi.md#listarUsingGET44) | **GET** /api/produtos | {{{produto_resource_listar}}}
[**listarUsingGET45**](GlobaltagcadastrogeralApi.md#listarUsingGET45) | **GET** /api/promotores | {{{promotor_resource_listar}}}
[**listarUsingGET55**](GlobaltagcadastrogeralApi.md#listarUsingGET55) | **GET** /api/tipos-ajustes | {{{tipo_ajuste_resource_consultar}}}
[**listarUsingGET57**](GlobaltagcadastrogeralApi.md#listarUsingGET57) | **GET** /api/tipos-enderecos | {{{tipo_endereco_resource_listar}}}
[**listarUsingGET59**](GlobaltagcadastrogeralApi.md#listarUsingGET59) | **GET** /api/tipos-telefones | {{{tipo_telefone_resource_listar}}}
[**listarUsingGET66**](GlobaltagcadastrogeralApi.md#listarUsingGET66) | **GET** /api/vencimentos | {{{vencimento_resource_listar}}}
[**listarUsingGET8**](GlobaltagcadastrogeralApi.md#listarUsingGET8) | **GET** /api/atendimento-clientes | {{{atendimento_cliente_resource_listar}}}
[**salvarUsingPOST2**](GlobaltagcadastrogeralApi.md#salvarUsingPOST2) | **POST** /api/atendimento-clientes | {{{atendimento_cliente_resource_salvar}}}
[**salvarUsingPOST5**](GlobaltagcadastrogeralApi.md#salvarUsingPOST5) | **POST** /api/campanhas | {{{campanha_resource_salvar}}}
[**salvarUsingPOST7**](GlobaltagcadastrogeralApi.md#salvarUsingPOST7) | **POST** /api/configuracoes-rotativos | {{{configuracao_rotativo_resource_salvar}}}


<a name="alterarConvenioUsingPUT"></a>
# **alterarConvenioUsingPUT**
> ConvenioResponse alterarConvenioUsingPUT(id, convenioPersist)

Altera os dados banc\u00E1rios de um determinado conv\u00EAnio

Altera os dados banc\u00E1rios de um determinado conv\u00EAnio

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} Id

var convenioPersist = new Pier.ConvenioPersist(); // {ConvenioPersist} convenioPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarConvenioUsingPUT(id, convenioPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 
 **convenioPersist** | [**ConvenioPersist**](ConvenioPersist.md)| convenioPersist | 

### Return type

[**ConvenioResponse**](ConvenioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarCorteUsingPUT"></a>
# **alterarCorteUsingPUT**
> ControleVencimentoResponse alterarCorteUsingPUT(dataVencimento, update)

{{{vencimento_resource_alterar}}}

{{{vencimento_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var dataVencimento = "dataVencimento_example"; // {String} {{{fatura_resource_consultar_fatura_param_data_vencimento}}}

var update = new Pier.VencimentoUpdate(); // {VencimentoUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarCorteUsingPUT(dataVencimento, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataVencimento** | **String**| {{{fatura_resource_consultar_fatura_param_data_vencimento}}} | 
 **update** | [**VencimentoUpdate**](VencimentoUpdate.md)| update | 

### Return type

[**ControleVencimentoResponse**](ControleVencimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT1"></a>
# **alterarUsingPUT1**
> CampanhaResponse alterarUsingPUT1(id, update)

{{{campanha_resource_alterar}}}

{{{campanha_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{campanha_resource_alterar_param_id}}}

var update = new Pier.CampanhaUpdateValue(); // {CampanhaUpdateValue} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT1(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{campanha_resource_alterar_param_id}}} | 
 **update** | [**CampanhaUpdateValue**](CampanhaUpdateValue.md)| update | 

### Return type

[**CampanhaResponse**](CampanhaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT2"></a>
# **alterarUsingPUT2**
> ConfiguracaoRegistroCobrancaResponse alterarUsingPUT2(id, configuracaoPersist)

{{{configuracao_registro_cobranca_resource_alterar}}}

{{{configuracao_registro_cobranca_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{configuracao_registro_cobranca_resource_alterar_param_id}}}

var configuracaoPersist = new Pier.ConfiguracaoRegistroCobrancaPersist(); // {ConfiguracaoRegistroCobrancaPersist} configuracaoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT2(id, configuracaoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{configuracao_registro_cobranca_resource_alterar_param_id}}} | 
 **configuracaoPersist** | [**ConfiguracaoRegistroCobrancaPersist**](ConfiguracaoRegistroCobrancaPersist.md)| configuracaoPersist | 

### Return type

[**ConfiguracaoRegistroCobrancaResponse**](ConfiguracaoRegistroCobrancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT3"></a>
# **alterarUsingPUT3**
> ConfiguracaoRotativoDetalheResponse alterarUsingPUT3(id, configuracaoRotativoPersist)

{{{configuracao_rotativo_resource_alterar}}}

{{{configuracao_rotativo_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{configuracao_rotativo_resource_alterar_param_id}}}

var configuracaoRotativoPersist = new Pier.ConfiguracaoRotativoPersist(); // {ConfiguracaoRotativoPersist} configuracaoRotativoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT3(id, configuracaoRotativoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{configuracao_rotativo_resource_alterar_param_id}}} | 
 **configuracaoRotativoPersist** | [**ConfiguracaoRotativoPersist**](ConfiguracaoRotativoPersist.md)| configuracaoRotativoPersist | 

### Return type

[**ConfiguracaoRotativoDetalheResponse**](ConfiguracaoRotativoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarConvenioUsingPOST"></a>
# **cadastrarConvenioUsingPOST**
> ConvenioResponse cadastrarConvenioUsingPOST(convenioPersist)

Adiciona novo conv\u00EAnio para o emissor

Adiciona novo conv\u00EAnio para o emissor

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var convenioPersist = new Pier.ConvenioPersist(); // {ConvenioPersist} convenioPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarConvenioUsingPOST(convenioPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convenioPersist** | [**ConvenioPersist**](ConvenioPersist.md)| convenioPersist | 

### Return type

[**ConvenioResponse**](ConvenioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST2"></a>
# **cadastrarUsingPOST2**
> ConfiguracaoRegistroCobrancaResponse cadastrarUsingPOST2(configuracaoPersist)

{{{configuracao_registro_cobranca_resource_cadastrar}}}

{{{configuracao_registro_cobranca_resource_cadastrar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var configuracaoPersist = new Pier.ConfiguracaoRegistroCobrancaPersist(); // {ConfiguracaoRegistroCobrancaPersist} configuracaoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST2(configuracaoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuracaoPersist** | [**ConfiguracaoRegistroCobrancaPersist**](ConfiguracaoRegistroCobrancaPersist.md)| configuracaoPersist | 

### Return type

[**ConfiguracaoRegistroCobrancaResponse**](ConfiguracaoRegistroCobrancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configurarTaxaAntecipacaoUsingPOST"></a>
# **configurarTaxaAntecipacaoUsingPOST**
> ParametroProdutoResponse configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest)

{{{produto_resource_configurar_taxa_antecipacao}}}

{{{produto_resource_configurar_taxa_antecipacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{produto_resource_configurar_taxa_antecipacao_param_id}}}

var taxaAntecipacaoRequest = new Pier.TaxaAntecipacaoRequest(); // {TaxaAntecipacaoRequest} taxaAntecipacaoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{produto_resource_configurar_taxa_antecipacao_param_id}}} | 
 **taxaAntecipacaoRequest** | [**TaxaAntecipacaoRequest**](TaxaAntecipacaoRequest.md)| taxaAntecipacaoRequest | 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarCampanhaUsingGET"></a>
# **consultarCampanhaUsingGET**
> CampanhaResponse consultarCampanhaUsingGET(id)

{{{campanha_resource_consultar_campanha}}}

{{{campanha_resource_consultar_campanha_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{campanha_resource_consultar_campanha_param_id_campanha}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarCampanhaUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{campanha_resource_consultar_campanha_param_id_campanha}}} | 

### Return type

[**CampanhaResponse**](CampanhaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarConvenioUsingGET"></a>
# **consultarConvenioUsingGET**
> ConvenioResponse consultarConvenioUsingGET(id)

Consultar dados banc\u00E1rios pelo id do conv\u00EAnio

Consultar dados banc\u00E1rios de um determinado conv\u00EAnio

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarConvenioUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 

### Return type

[**ConvenioResponse**](ConvenioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTaxaAntecipacaoUsingGET"></a>
# **consultarTaxaAntecipacaoUsingGET**
> ParametroProdutoResponse consultarTaxaAntecipacaoUsingGET(id, tipoTransacao)

{{{produto_resource_consultar_taxa_antecipacao}}}

{{{produto_resource_consultar_taxa_antecipacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{produto_resource_consultar_taxa_antecipacao_param_id}}}

var tipoTransacao = "tipoTransacao_example"; // {String} {{{produto_resource_consultar_taxa_antecipacao_param_tipo_transacao}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTaxaAntecipacaoUsingGET(id, tipoTransacao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{produto_resource_consultar_taxa_antecipacao_param_id}}} | 
 **tipoTransacao** | **String**| {{{produto_resource_consultar_taxa_antecipacao_param_tipo_transacao}}} | 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET13"></a>
# **consultarUsingGET13**
> ConfiguracaoRegistroCobrancaResponse consultarUsingGET13(id)

{{{configuracao_registro_cobranca_resource_consultar}}}

{{{configuracao_registro_cobranca_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{configuracao_registro_cobranca_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET13(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{configuracao_registro_cobranca_resource_consultar_param_id}}} | 

### Return type

[**ConfiguracaoRegistroCobrancaResponse**](ConfiguracaoRegistroCobrancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET14"></a>
# **consultarUsingGET14**
> ConfiguracaoRotativoDetalheResponse consultarUsingGET14(id)

{{{configuracao_rotativo_resource_consultar}}}

{{{configuracao_rotativo_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{configuracao_rotativo_resource_consultar_param_id}}}


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
 **id** | **Integer**| {{{configuracao_rotativo_resource_consultar_param_id}}} | 

### Return type

[**ConfiguracaoRotativoDetalheResponse**](ConfiguracaoRotativoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET34"></a>
# **consultarUsingGET34**
> ProdutoDetalhesResponse consultarUsingGET34(id)

{{{produto_resource_consultar}}}

{{{produto_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{produto_resource_consultar_param_id}}}


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
 **id** | **Integer**| {{{produto_resource_consultar_param_id}}} | 

### Return type

[**ProdutoDetalhesResponse**](ProdutoDetalhesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET43"></a>
# **consultarUsingGET43**
> TipoAjusteResponse consultarUsingGET43(id)

{{{tipo_transacoes_ajuste_resource_consultar}}}

{{{tipo_transacoes_ajuste_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{tipo_transacoes_ajuste_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET43(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_transacoes_ajuste_resource_consultar_param_id}}} | 

### Return type

[**TipoAjusteResponse**](TipoAjusteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET44"></a>
# **consultarUsingGET44**
> PageTipoBoletoResponse consultarUsingGET44(opts)

{{{tipo_boleto_resource_consultar}}}

{{{tipo_boleto_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{tipo_boleto_request_id_value}}}
  'descricao': "descricao_example", // {String} {{{tipo_boleto_request_descricao_value}}}
  'banco': 789 // {Integer} {{{tipo_boleto_request_banco_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET44(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{tipo_boleto_request_id_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_boleto_request_descricao_value}}} | [optional] 
 **banco** | **Integer**| {{{tipo_boleto_request_banco_value}}} | [optional] 

### Return type

[**PageTipoBoletoResponse**](PageTipoBoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET45"></a>
# **consultarUsingGET45**
> TipoEnderecoResponse consultarUsingGET45(id)

{{{tipo_endereco_resource_consultar}}}

{{{tipo_endereco_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{tipo_endereco_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET45(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_endereco_resource_consultar_param_id}}} | 

### Return type

[**TipoEnderecoResponse**](TipoEnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET46"></a>
# **consultarUsingGET46**
> TipoOperacaoResponse consultarUsingGET46(idCartao, idEstabelecimento, codigoProcessamento)

{{{tipo_operacao_resource_consultar}}}

{{{tipo_operacao_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var idCartao = 789; // {Integer} {{{tipo_operacao_resource_consultar_param_id_cartao}}}

var idEstabelecimento = 789; // {Integer} {{{tipo_operacao_resource_consultar_param_id_estabelecimento}}}

var codigoProcessamento = "codigoProcessamento_example"; // {String} {{{tipo_operacao_resource_consultar_param_codigo_processamento}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET46(idCartao, idEstabelecimento, codigoProcessamento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| {{{tipo_operacao_resource_consultar_param_id_cartao}}} | 
 **idEstabelecimento** | **Integer**| {{{tipo_operacao_resource_consultar_param_id_estabelecimento}}} | 
 **codigoProcessamento** | **String**| {{{tipo_operacao_resource_consultar_param_codigo_processamento}}} | 

### Return type

[**TipoOperacaoResponse**](TipoOperacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET48"></a>
# **consultarUsingGET48**
> TipoTelefoneResponse consultarUsingGET48(id)

{{{tipo_telefone_resource_consultar}}}

{{{tipo_telefone_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{tipo_telefone_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET48(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_telefone_resource_consultar_param_id}}} | 

### Return type

[**TipoTelefoneResponse**](TipoTelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET7"></a>
# **consultarUsingGET7**
> AtendimentoClienteResponse consultarUsingGET7(id)

{{{atendimento_cliente_resource_consultar}}}

{{{atendimento_cliente_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{atendimento_cliente_resource_consultar_param_id_atendimento}}}


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
 **id** | **Integer**| {{{atendimento_cliente_resource_consultar_param_id_atendimento}}} | 

### Return type

[**AtendimentoClienteResponse**](AtendimentoClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET9"></a>
# **consultarUsingGET9**
> BancoResponse consultarUsingGET9(id)

{{{banco_resource_consultar}}}

{{{banco_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{banco_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET9(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{banco_resource_consultar_param_id}}} | 

### Return type

[**BancoResponse**](BancoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarCampanhasUsingGET"></a>
# **listarCampanhasUsingGET**
> PageCampanhaResponse listarCampanhasUsingGET(opts)

{{{campanha_resource_listar_campanhas}}}

{{{campanha_resource_listar_campanhas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTipoCampanha': 789 // {Integer} {{{campanha_request_id_tipo_campanha_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarCampanhasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTipoCampanha** | **Integer**| {{{campanha_request_id_tipo_campanha_value}}} | [optional] 

### Return type

[**PageCampanhaResponse**](PageCampanhaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarContasPorPessoaUsingGET"></a>
# **listarContasPorPessoaUsingGET**
> PageContaDetalheResponse listarContasPorPessoaUsingGET(numeroReceitaFederal, opts)

{{{pessoa_resource_listar_contas_por_pessoa}}}

{{{pessoa_resource_listar_contas_por_pessoa_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var numeroReceitaFederal = "numeroReceitaFederal_example"; // {String} {{{pessoa_resource_listar_contas_por_pessoa_param_numero_receita_federal}}}

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
api.listarContasPorPessoaUsingGET(numeroReceitaFederal, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroReceitaFederal** | **String**| {{{pessoa_resource_listar_contas_por_pessoa_param_numero_receita_federal}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageContaDetalheResponse**](PageContaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarConveniosUsingGET"></a>
# **listarConveniosUsingGET**
> PageConvenioResponse listarConveniosUsingGET(opts)

Lista os dados banc\u00E1rios dos conv\u00EAnios existentes

Lista os dados banc\u00E1rios dos conv\u00EAnios existentes

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'banco': 789, // {Integer} Identifica\u00E7\u00E3o do banco.
  'agencia': 789, // {Integer} N\u00FAmero da ag\u00EAncia.
  'contaCorrente': "contaCorrente_example", // {String} Conta corrente.
  'numeroConvenio': 3.4 // {Number} C\u00F3digo de identifica\u00E7\u00E3o do conv\u00EAnio.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarConveniosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **banco** | **Integer**| Identifica\u00E7\u00E3o do banco. | [optional] 
 **agencia** | **Integer**| N\u00FAmero da ag\u00EAncia. | [optional] 
 **contaCorrente** | **String**| Conta corrente. | [optional] 
 **numeroConvenio** | [**Number**](.md)| C\u00F3digo de identifica\u00E7\u00E3o do conv\u00EAnio. | [optional] 

### Return type

[**PageConvenioResponse**](PageConvenioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarEstadosCivisUsingGET"></a>
# **listarEstadosCivisUsingGET**
> PageCampoCodificadoDescricaoResponse listarEstadosCivisUsingGET(opts)

{{{campo_codificado_resource_listar_estados_civis}}}

{{{campo_codificado_resource_listar_estados_civis_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarEstadosCivisUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFantasiasBasicasUsingGET"></a>
# **listarFantasiasBasicasUsingGET**
> PageFantasiaBasicaResponse listarFantasiasBasicasUsingGET(opts)

{{{fantasia_basica_resource_listar_fantasias_basicas}}}

{{{fantasia_basica_resource_listar_fantasias_basicas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarFantasiasBasicasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageFantasiaBasicaResponse**](PageFantasiaBasicaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoTelefonesUsingGET"></a>
# **listarHistoricoTelefonesUsingGET**
> HistoricoTelefoneResponse listarHistoricoTelefonesUsingGET(id)

{{{pessoa_resource_listar_historico_telefones}}}

{{{pessoa_resource_listar_historico_telefones_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var id = 789; // {Integer} {{{pessoa_resource_listar_historico_telefones_param_id_pessoa}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoTelefonesUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{pessoa_resource_listar_historico_telefones_param_id_pessoa}}} | 

### Return type

[**HistoricoTelefoneResponse**](HistoricoTelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNacionalidadesUsingGET"></a>
# **listarNacionalidadesUsingGET**
> PageCampoCodificadoDescricaoResponse listarNacionalidadesUsingGET(opts)

{{{campo_codificado_resource_listar_nacionalidades}}}

{{{campo_codificado_resource_listar_nacionalidades_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarNacionalidadesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNaturezasOcupacoesUsingGET"></a>
# **listarNaturezasOcupacoesUsingGET**
> PageCampoCodificadoDescricaoResponse listarNaturezasOcupacoesUsingGET(opts)

{{{campo_codificado_resource_listar_naturezas_ocupacoes}}}

{{{campo_codificado_resource_listar_naturezas_ocupacoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarNaturezasOcupacoesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarParentescosUsingGET"></a>
# **listarParentescosUsingGET**
> PageCampoCodificadoDescricaoResponse listarParentescosUsingGET(opts)

{{{campo_codificado_resource_listar_parentescos}}}

{{{campo_codificado_resource_listar_parentescos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarParentescosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarProfissoesUsingGET"></a>
# **listarProfissoesUsingGET**
> PageCampoCodificadoDescricaoResponse listarProfissoesUsingGET(opts)

{{{campo_codificado_resource_listar_profissoes}}}

{{{campo_codificado_resource_listar_profissoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarProfissoesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposCampanhasUsingGET"></a>
# **listarTiposCampanhasUsingGET**
> PageTipoCampanhaResponse listarTiposCampanhasUsingGET(opts)

{{{tipo_campanha_resource_listar_tipos_campanhas}}}

{{{tipo_campanha_resource_listar_tipos_campanhas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarTiposCampanhasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageTipoCampanhaResponse**](PageTipoCampanhaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET10"></a>
# **listarUsingGET10**
> PageBancoResponse listarUsingGET10(opts)

{{{banco_resource_listar}}}

{{{banco_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarUsingGET10(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageBancoResponse**](PageBancoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET15"></a>
# **listarUsingGET15**
> ConfiguracaoRegistroCobrancaResponse listarUsingGET15(opts)

{{{configuracao_registro_cobranca_resource_listar}}}

{{{configuracao_registro_cobranca_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

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
api.listarUsingGET15(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**ConfiguracaoRegistroCobrancaResponse**](ConfiguracaoRegistroCobrancaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET16"></a>
# **listarUsingGET16**
> PageConfiguracaoRotativoResponse listarUsingGET16(opts)

{{{configuracao_rotativo_resource_listar}}}

{{{configuracao_rotativo_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idProduto': 789 // {Integer} {{{configuracao_rotativo_request_id_produto_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET16(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idProduto** | **Integer**| {{{configuracao_rotativo_request_id_produto_value}}} | [optional] 

### Return type

[**PageConfiguracaoRotativoResponse**](PageConfiguracaoRotativoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET43"></a>
# **listarUsingGET43**
> PagePortadorResponse listarUsingGET43(opts)

{{{portador_resource_listar}}}

{{{portador_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idConta': 789, // {Integer} {{{portador_request_id_conta_value}}}
  'idProduto': 789, // {Integer} {{{portador_request_id_produto_value}}}
  'idPessoa': 789, // {Integer} {{{portador_request_id_pessoa_value}}}
  'idParentesco': 789, // {Integer} {{{portador_request_id_parentesco_value}}}
  'tipoPortador': "tipoPortador_example", // {String} {{{portador_request_tipo_portador_value}}}
  'nomeImpresso': "nomeImpresso_example", // {String} {{{portador_request_nome_impresso_value}}}
  'idTipoCartao': 789, // {Integer} {{{portador_request_id_tipo_cartao_value}}}
  'flagAtivo': 56, // {Integer} {{{portador_request_flag_ativo_value}}}
  'dataCadastroPortador': "dataCadastroPortador_example", // {String} {{{portador_request_data_cadastro_portador_value}}}
  'dataCancelamentoPortador': "dataCancelamentoPortador_example" // {String} {{{portador_request_data_cancelamento_portador_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET43(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idConta** | **Integer**| {{{portador_request_id_conta_value}}} | [optional] 
 **idProduto** | **Integer**| {{{portador_request_id_produto_value}}} | [optional] 
 **idPessoa** | **Integer**| {{{portador_request_id_pessoa_value}}} | [optional] 
 **idParentesco** | **Integer**| {{{portador_request_id_parentesco_value}}} | [optional] 
 **tipoPortador** | **String**| {{{portador_request_tipo_portador_value}}} | [optional] 
 **nomeImpresso** | **String**| {{{portador_request_nome_impresso_value}}} | [optional] 
 **idTipoCartao** | **Integer**| {{{portador_request_id_tipo_cartao_value}}} | [optional] 
 **flagAtivo** | **Integer**| {{{portador_request_flag_ativo_value}}} | [optional] 
 **dataCadastroPortador** | **String**| {{{portador_request_data_cadastro_portador_value}}} | [optional] 
 **dataCancelamentoPortador** | **String**| {{{portador_request_data_cancelamento_portador_value}}} | [optional] 

### Return type

[**PagePortadorResponse**](PagePortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET44"></a>
# **listarUsingGET44**
> PageProdutoResponse listarUsingGET44(opts)

{{{produto_resource_listar}}}

{{{produto_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example", // {String} {{{produto_request_nome_value}}}
  'status': 56, // {Integer} {{{produto_request_status_value}}}
  'idFantasiaBasica': 789 // {Integer} {{{produto_request_id_fantasia_basica_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET44(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{produto_request_nome_value}}} | [optional] 
 **status** | **Integer**| {{{produto_request_status_value}}} | [optional] 
 **idFantasiaBasica** | **Integer**| {{{produto_request_id_fantasia_basica_value}}} | [optional] 

### Return type

[**PageProdutoResponse**](PageProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET45"></a>
# **listarUsingGET45**
> PagePromotorResponse listarUsingGET45(opts)

{{{promotor_resource_listar}}}

{{{promotor_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{promotor_request_id_value}}}
  'nome': "nome_example", // {String} {{{promotor_request_nome_value}}}
  'dataCadastro': "dataCadastro_example", // {String} {{{promotor_request_data_cadastro_value}}}
  'idEstabelecimento': 789, // {Integer} {{{promotor_request_id_estabelecimento_value}}}
  'idUsuario': 789 // {Integer} {{{promotor_request_id_usuario_value}}}
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
 **id** | **Integer**| {{{promotor_request_id_value}}} | [optional] 
 **nome** | **String**| {{{promotor_request_nome_value}}} | [optional] 
 **dataCadastro** | **String**| {{{promotor_request_data_cadastro_value}}} | [optional] 
 **idEstabelecimento** | **Integer**| {{{promotor_request_id_estabelecimento_value}}} | [optional] 
 **idUsuario** | **Integer**| {{{promotor_request_id_usuario_value}}} | [optional] 

### Return type

[**PagePromotorResponse**](PagePromotorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET55"></a>
# **listarUsingGET55**
> PageTipoAjusteResponse listarUsingGET55(opts)

{{{tipo_ajuste_resource_consultar}}}

{{{tipo_ajuste_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{tipo_ajuste_request_id_value}}}
  'descricao': "descricao_example" // {String} {{{tipo_ajuste_request_descricao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET55(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{tipo_ajuste_request_id_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_ajuste_request_descricao_value}}} | [optional] 

### Return type

[**PageTipoAjusteResponse**](PageTipoAjusteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET57"></a>
# **listarUsingGET57**
> PageTipoEnderecoResponse listarUsingGET57(opts)

{{{tipo_endereco_resource_listar}}}

{{{tipo_endereco_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{tipo_endereco_request_id_value}}}
  'nome': "nome_example" // {String} {{{tipo_endereco_request_nome_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET57(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{tipo_endereco_request_id_value}}} | [optional] 
 **nome** | **String**| {{{tipo_endereco_request_nome_value}}} | [optional] 

### Return type

[**PageTipoEnderecoResponse**](PageTipoEnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET59"></a>
# **listarUsingGET59**
> PageTipoTelefoneResponse listarUsingGET59(opts)

{{{tipo_telefone_resource_listar}}}

{{{tipo_telefone_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{tipo_telefone_request_id_value}}}
  'nome': "nome_example" // {String} {{{tipo_telefone_request_nome_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET59(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{tipo_telefone_request_id_value}}} | [optional] 
 **nome** | **String**| {{{tipo_telefone_request_nome_value}}} | [optional] 

### Return type

[**PageTipoTelefoneResponse**](PageTipoTelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET66"></a>
# **listarUsingGET66**
> PageControleVencimentoResponse listarUsingGET66(opts)

{{{vencimento_resource_listar}}}

{{{vencimento_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataVencimento': "dataVencimento_example", // {String} {{{controle_vencimento_request_data_vencimento_value}}}
  'dataVencimentoFim': "dataVencimentoFim_example" // {String} {{{calendario_fatura_request_data_fim_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET66(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataVencimento** | **String**| {{{controle_vencimento_request_data_vencimento_value}}} | [optional] 
 **dataVencimentoFim** | **String**| {{{calendario_fatura_request_data_fim_value}}} | [optional] 

### Return type

[**PageControleVencimentoResponse**](PageControleVencimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET8"></a>
# **listarUsingGET8**
> PageAtendimentoClienteResponse listarUsingGET8(opts)

{{{atendimento_cliente_resource_listar}}}

{{{atendimento_cliente_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTipoAtendimento': 789, // {Integer} {{{atendimento_cliente_request_id_tipo_atendimento_value}}}
  'idConta': 789, // {Integer} {{{atendimento_cliente_request_id_conta_value}}}
  'nomeAtendente': "nomeAtendente_example", // {String} {{{atendimento_cliente_request_nome_atendente_value}}}
  'dataAtendimento': "dataAtendimento_example" // {String} {{{atendimento_cliente_request_data_atendimento_value}}}
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
 **idTipoAtendimento** | **Integer**| {{{atendimento_cliente_request_id_tipo_atendimento_value}}} | [optional] 
 **idConta** | **Integer**| {{{atendimento_cliente_request_id_conta_value}}} | [optional] 
 **nomeAtendente** | **String**| {{{atendimento_cliente_request_nome_atendente_value}}} | [optional] 
 **dataAtendimento** | **String**| {{{atendimento_cliente_request_data_atendimento_value}}} | [optional] 

### Return type

[**PageAtendimentoClienteResponse**](PageAtendimentoClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST2"></a>
# **salvarUsingPOST2**
> AtendimentoClienteResponse salvarUsingPOST2(opts)

{{{atendimento_cliente_resource_salvar}}}

{{{atendimento_cliente_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var opts = { 
  'idConta': 789, // {Integer} {{{atendimento_cliente_persist_id_conta_value}}}
  'conteudoAtendimento': "conteudoAtendimento_example", // {String} {{{atendimento_cliente_persist_conteudo_atendimento_value}}}
  'detalhesAtendimento': "detalhesAtendimento_example", // {String} {{{atendimento_cliente_persist_detalhes_atendimento_value}}}
  'nomeAtendente': "nomeAtendente_example", // {String} {{{atendimento_cliente_persist_nome_atendente_value}}}
  'dataAtendimento': "dataAtendimento_example", // {String} {{{atendimento_cliente_persist_data_atendimento_value}}}
  'dataAgendamento': "dataAgendamento_example", // {String} {{{atendimento_cliente_persist_data_agendamento_value}}}
  'dataHoraInicioAtendimento': "dataHoraInicioAtendimento_example", // {String} {{{atendimento_cliente_persist_data_hora_inicio_atendimento_value}}}
  'dataHoraFimAtendimento': "dataHoraFimAtendimento_example", // {String} {{{atendimento_cliente_persist_data_hora_fim_atendimento_value}}}
  'flagFilaFraude': 56 // {Integer} {{{atendimento_cliente_persist_flag_fila_fraude_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{atendimento_cliente_persist_id_conta_value}}} | [optional] 
 **conteudoAtendimento** | **String**| {{{atendimento_cliente_persist_conteudo_atendimento_value}}} | [optional] 
 **detalhesAtendimento** | **String**| {{{atendimento_cliente_persist_detalhes_atendimento_value}}} | [optional] 
 **nomeAtendente** | **String**| {{{atendimento_cliente_persist_nome_atendente_value}}} | [optional] 
 **dataAtendimento** | **String**| {{{atendimento_cliente_persist_data_atendimento_value}}} | [optional] 
 **dataAgendamento** | **String**| {{{atendimento_cliente_persist_data_agendamento_value}}} | [optional] 
 **dataHoraInicioAtendimento** | **String**| {{{atendimento_cliente_persist_data_hora_inicio_atendimento_value}}} | [optional] 
 **dataHoraFimAtendimento** | **String**| {{{atendimento_cliente_persist_data_hora_fim_atendimento_value}}} | [optional] 
 **flagFilaFraude** | **Integer**| {{{atendimento_cliente_persist_flag_fila_fraude_value}}} | [optional] 

### Return type

[**AtendimentoClienteResponse**](AtendimentoClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> CampanhaResponse salvarUsingPOST5(campanhaPersist)

{{{campanha_resource_salvar}}}

{{{campanha_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var campanhaPersist = new Pier.CampanhaPersist(); // {CampanhaPersist} campanhaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST5(campanhaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campanhaPersist** | [**CampanhaPersist**](CampanhaPersist.md)| campanhaPersist | 

### Return type

[**CampanhaResponse**](CampanhaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST7"></a>
# **salvarUsingPOST7**
> ConfiguracaoRotativoDetalheResponse salvarUsingPOST7(configuracaoRotativoPersist)

{{{configuracao_rotativo_resource_salvar}}}

{{{configuracao_rotativo_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastrogeralApi()

var configuracaoRotativoPersist = new Pier.ConfiguracaoRotativoPersist(); // {ConfiguracaoRotativoPersist} configuracaoRotativoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST7(configuracaoRotativoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuracaoRotativoPersist** | [**ConfiguracaoRotativoPersist**](ConfiguracaoRotativoPersist.md)| configuracaoRotativoPersist | 

### Return type

[**ConfiguracaoRotativoDetalheResponse**](ConfiguracaoRotativoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

