# Pier.CancelamentoTransacaoPorIdCartaoRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nsuOrigem** | **String** | N\u00FAmero Sequencial \u00DAnico que identifica a transa\u00E7\u00E3o no sistema que a originou. | 
**nsuOrigemTransacaoCancelada** | **String** | N\u00FAmero Sequencial \u00DAnico que identifica a transa\u00E7\u00E3o no sistema a ser cancelada. | 
**codigoProcessamento** | **String** | C\u00F3digo de Processamento que identifica o Tipo da Transa\u00E7\u00E3o. | 
**dataHoraTransacaoCancelada** | **String** | Apresenta a data e hora local da transa\u00E7\u00E3o a ser cancelada yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ. Ex: 2000-10-31T01:30:00.000-05:00 | 
**nsuAutorizacaoTransacaoCancelada** | **String** | N\u00FAmero Sequencial \u00DAnico do HOST que identifica a transa\u00E7\u00E3o no sistema que autorizou. | 
**valorTransacao** | **Number** | Valor da transa\u00E7\u00E3o com duas casas decimais para os centavos. | 
**numeroEstabelecimento** | **Integer** | N\u00FAmero do Estabelecimento (N\u00FAmero+DV). | 
**dataHoraTerminal** | **String** | Apresenta a data e hora local da consulta yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ. Ex: 2000-10-31T01:30:00.000-05:00 | 
**terminalRequisitante** | **String** | Apresenta a identifica\u00E7\u00E3o do terminal requisitante | 
**numeroParcelas** | **Integer** | N\u00FAmero de Parcelas. | 


