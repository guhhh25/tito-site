export  function FormatData(usdValue){
    const dataString = usdValue?.USDBRL.create_date.substring(0, 10);
    const [ano, mes, dia] = dataString != null ? dataString.split("-") : "";
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
}