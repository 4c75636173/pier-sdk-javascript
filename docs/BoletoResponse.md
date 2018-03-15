# Pier.BoletoResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numeroDoDocumento** | **String** | N\u00FAmero do documento \u00E9 o c\u00F3digo informado pelo banco para identifica\u00E7\u00E3o do cliente | [optional] 
**dataProcessamento** | **String** | Data do processamento (emiss\u00E3o ou faturamento) do boleto | [optional] 
**dataDocumento** | **String** | Data do documento (impress\u00E3o) | [optional] 
**dataVencimento** | **String** | Data do vencimento | [optional] 
**dataFechamento** | **String** | Data do fechamento | [optional] 
**valorBoleto** | **Number** | Valor do Boleto. | [optional] 
**nomeBeneficiario** | **String** | Benefici\u00E1rio \u00E9 a pessoa/empresa que gera o boleto | [optional] 
**documentoBeneficiario** | **String** | Documento do Beneficiario. | [optional] 
**agencia** | **String** | Ag\u00EAncia. | [optional] 
**codigoBeneficiario** | **String** | C\u00F3digo do benefici\u00E1rio | [optional] 
**numeroConvenio** | **String** | N\u00FAmero do conv\u00EAnio fornecido pelo banco \u00E9 o c\u00F3digo que identifica um emissor junto ao seu banco para associar seus boletos. | [optional] 
**digitoCodigoBeneficiario** | **String** | D\u00EDgito do c\u00F3digo do benefici\u00E1rio | [optional] 
**carteira** | **String** | Carteira \u00E9 o c\u00F3digo informado pelo banco pra identifica\u00E7\u00E3o do tipo do boleto | [optional] 
**nossoNumero** | **String** | Nosso n\u00FAmero \u00E9 o c\u00F3digo que o benefici\u00E1rio escolhe para manter controle sobre seus boletos. Esse valor serve para o cedente identificar quais boletos foram pagos ou n\u00E3o. Recomenda-se o uso de n\u00FAmeros sequ\u00EAnciais, na gera\u00E7\u00E3o de diversos boletos, para facilitar a identifica\u00E7\u00E3o dos boletos pagos | [optional] 
**digitoNossoNumero** | **String** | D\u00EDgito do nosso n\u00FAmero | [optional] 
**banco** | **String** | Banco | [optional] 
**aceite** | **Boolean** | Aceite informa ao banco se deve aceitar o boleto ap\u00F3s a data de vencimento (padr\u00E3o: \&quot;N\&quot;) | [optional] 
**especieDoDocumento** | **String** | Esp\u00E9cie do documento \u00E9 o identificador do tipo de boleto (padr\u00E3o: \&quot;DV\&quot;) | [optional] 
**especie** | **String** | Esp\u00E9cie \u00E9 o identificador da moeda do boleto (padr\u00E3o: \&quot;R$\&quot;) | [optional] 
**instrucoes** | **[String]** | Instru\u00E7\u00F5es para o benefici\u00E1rio | [optional] 
**locaisDePagamento** | **[String]** | Locais de pagamento | [optional] 
**nomePagador** | **String** | Pagador \u00E9 a pessoa/empresa que deve pagar o boleto | [optional] 
**documentoPagador** | **String** | Documento do pagador (CPF ou CNPJ) | [optional] 
**logradouroPagador** | **String** | Logradouro do pagador | [optional] 
**bairroPagador** | **String** | Bairro do pagador | [optional] 
**cepPagador** | **String** | CEP do pagador | [optional] 
**cidadePagador** | **String** | Cidade do pagador | [optional] 
**ufPagador** | **String** | Unidade federativa do pagador | [optional] 
**codigoDeBarras** | **String** | Valor num\u00E9rico do c\u00F3digo de barras | [optional] 
**linhaDigitavel** | **String** | Linha digit\u00E1vel formatada | [optional] 


