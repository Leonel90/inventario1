import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateProductoDto {

    @IsString()
    readonly nombre: string;
    
    @IsString()
    @MinLength(4)
    readonly tipo: string;

    @IsString()
    @IsOptional()
    readonly detalle?: string;
}