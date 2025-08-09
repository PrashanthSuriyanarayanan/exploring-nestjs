import { ArgumentMetadata, PipeTransform } from "@nestjs/common";


export class TrimTrailingWhitespacesPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (typeof value === "string") {
            return value.trim();
        }
        return value;
    }
}