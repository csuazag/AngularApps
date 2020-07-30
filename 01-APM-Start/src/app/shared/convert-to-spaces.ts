import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpaces implements PipeTransform {

    transform(source: string, target: string): string {
        return source.replace(target, ' ');
    }
}
