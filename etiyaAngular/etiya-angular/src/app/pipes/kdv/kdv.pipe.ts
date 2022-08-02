import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: number, kdvValue:number): number {
    //value pipeı uyguladığımız veri

    //return yeni değiştirdiğimzi veri
    return value = value + (value*kdvValue);
  }

}
