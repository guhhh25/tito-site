export function HandleCalculate(length, width, height, units) {
    // Convertendo as dimensões para polegadas, se as unidades forem em centímetros (cm)
    if (units === "cm") {
        length /= 2.54;
        width /= 2.54;
        height /= 2.54;
      }
  
    // Calculando o volume em polegadas cúbicas
    const volume = length * width * height;
  
    // Calculando o peso dimensional
    if(units === "lb"){
        
        const dimensionalWeight = volume / 139;
        // Arredondando o peso para o próximo inteiro
        const roundedWeight = Math.ceil(dimensionalWeight);
      
        return roundedWeight.toString();
    }else{
        const dimensionalWeight = volume / 5000;
        // Arredondando o peso para o próximo inteiro
        const roundedWeight = Math.ceil(dimensionalWeight);
      
        return roundedWeight.toString();
    }
  
  }