/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Pipe, PipeTransform } from '@angular/core';

import { PersianNumberService } from '@shared/services/persian-number.service';

/**
 * Replaces all arabic and english numbers with persian numbers.
 *
 * @example {{englishTextDigit | faNum}}
 */
@Pipe({
  name: 'faNum',
})
export class FaNumPipe implements PipeTransform {
  constructor(private persianNumberService: PersianNumberService) {}

  transform(value: string | number): string {

    const strValue = String(value);
    
    return this.persianNumberService.toPersian(strValue);
  }
}
