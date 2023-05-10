<?php
define('URL', 'https://konsi.bitrix24.com.br/rest/4/40efushkzq5bwtkj/');
$metodo = array(
    'leadAdd' => 'crm.lead.add.json?',
    'atualizarlead' => 'crm.lead.update.json?'
);



function controler_bot($url = NULL, $metodo = NULL, $parametros){

    if(($metodo != NULL) && is_array($parametros) && ($url != NULL)){
    
        $response = @file_get_contents($url . $metodo . implode($parametros));
        json_decode($response, true);
    
        file_put_contents(__DIR__ . '/imbot.log', "\n" . $response, FILE_APPEND);
        file_put_contents(__DIR__ . '/imbot.log', "\n" . $url . $metodo . implode($parametros), FILE_APPEND);
    }
}


// controler_bot(const URL, $metodos['leadAdd'], array(

//     'TITLE=' . 'TITULO DO LEAD'. '&',
//     'NAME=' . 'NOME' . '&',
//     'CHAT_ID=' . $_REQUEST['data']['PARAMS']['CHAT_ID'] . '&',
//     'LEAVE=Y'  . '&',
//     'TRANSFER_ID=' . $IDUSER

// ));