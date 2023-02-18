describe('Example component', () => {
  test('Debe ser mayor a 10',() =>{
    //Arreglar
    let value = 5;
    //Estimulo
    value= value + 6;
    //Observar el resultado
    expect(value).toBeGreaterThan(10);
    // if(value>10){
    //   //TODO:todo bien!
    // }else{
    //   throw `${ value} no es mayor que 10`
    // }
  })
})