import { Pipe } from '@angular/core';
/**
 * pipe to convert the \r\n into <br />
 */
@Pipe({ name: 'br' })
export class BreakLine {
  transform(value: string): string {
    return value == undefined ? value :
        value
            .replace('<', '&laquo;')
            .replace('>', '&raquo;')
            .replace(new RegExp('\r\n', 'g'), '<br/>')
            .replace(new RegExp('\n\r', 'g'), '<br/>')
            .replace(new RegExp('\n', 'g'), '<br/>');
  }
}