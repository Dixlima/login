// let url = 'https://konsi.bitrix24.com.br/rest/4/40efushkzq5bwtkj/'
let url = 'https://uctdemo.bitrix24.com/rest/12/8zleq4sfc2tm138l/'
let metodo = array(
    'leadAdd' = 'crm.lead.add.json?',
    'leadUpdate' = 'crm.lead.update.json?'
)


function controler_bot( url = NULL, metodo = NULL, parametros){

    if((metodo != NULL) && is_array(parametros) && (url != NULL)){
    
        const response = await
        fetch(url . metodo . imploe(parametros).join(''))
        return response.json()
        // $response = @file_get_contents($url . $metodo . implode($parametros));
        // json_decode($response, true);
    
    }
}






// function controler_bot($url = NULL, $metodo = NULL, $parametros){

//     if(($metodo != NULL) && is_array($parametros) && ($url != NULL)){
    
//         $response = @file_get_contents($url . $metodo . implode($parametros));
//         json_decode($response, true);
    
//         file_put_contents(__DIR__ . '/imbot.log', "\n" . $response, FILE_APPEND);
//         file_put_contents(__DIR__ . '/imbot.log', "\n" . $url . $metodo . implode($parametros), FILE_APPEND);
//     }
// }
