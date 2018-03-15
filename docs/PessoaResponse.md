# Pier.PessoaResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id). | 
**nome** | **String** | Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00E3o Social (Nome Empresarial)&#39;. | 
**tipo** | **String** | C\u00F3digo de identifica\u00E7\u00E3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00EDsica), (\&quot;PJ\&quot;: Pessoa Jur\u00EDdica). | 
**cpf** | **String** | N\u00FAmero do CPF, quando PF. | [optional] 
**cnpj** | **String** | N\u00FAmero do CNPJ, quando PJ. | [optional] 
**dataNascimento** | **String** | Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. | [optional] 
**numeroIdentidade** | **String** | N\u00FAmero da Identidade | [optional] 
**orgaoExpedidorIdentidade** | **String** | Org\u00E3o expedidor do RG. | [optional] 
**sexo** | **String** | C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00E3o Especificado). | [optional] 
**unidadeFederativaIdentidade** | **String** | Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
**dataEmissaoIdentidade** | **String** | Data emiss\u00E3o da identidade no formato aaaa-MM-dd | [optional] 


