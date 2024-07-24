import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gayu'
})
export class GayuPipe implements PipeTransform {
  x:any=''
  transform(value: any, ...args: unknown[]): any{
    this.x=value.split('').reverse().join('')
    return this.x;
  }
  
}
