import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createFakeArray'
})
export class CreateFakeArrayPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number[] {
    let fakeArray: number[] = []
    for (let n = 0; n < value; n++) {
      fakeArray.push(n)
    }
    return fakeArray;
  }

}
