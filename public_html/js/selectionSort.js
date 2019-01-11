/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// usare sleep(valore in millisecondi)


function print_don() {
    // quando il metodo mi deve ritornare qualcosa per prima cosa inizializzo la variabile e in fondo
    // metto il "return nomevariabile;"
    let text = "";

    //let miosaldo = 0;

    //let maxver = 0;


    for (i = 0; i < ar_nomi.length; i++) {
        // In questo modo tutte le linee vengono generate con uno span con un id univoco, quindi possono essere gestiti anche singolarmenti
        text += "<span id'don" + i + "'><b>#" + (i + 1) + "</b> --> " + ar_nomi[i] + " ha donato " + ar_valori[i] + " €<br/></span>";

    }


    return text;
}
