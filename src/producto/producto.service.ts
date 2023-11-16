import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Producto } from './producto/producto.interface';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductoService {
    private datoP: Producto[] = [
        { id: uuid(), nombre: 'CPU', tipo: 'Gamer', detalle: 'Generación 12' },
        { id: uuid(), nombre: 'Mouse', tipo: 'Inalambrico', detalle: 'Resistente a caidas' },
        { id: uuid(), nombre: 'CPU', tipo: 'Gamer', detalle: 'Generación 12' },
        { id: uuid(), nombre: 'Mouse', tipo: 'Normal', detalle: 'Resistente al agua' },
        { id: uuid(), nombre: 'CPU', tipo: 'Intel', detalle: 'Generación 13' },
    ];

    getAll() {
        return this.datoP;
    }

    getById(id: string) {
        let datosProducto = this.datoP.find(datosPro => datosPro.id === id);
        if (!datosProducto)
            throw new NotFoundException("NO existe registro solicitado")
        return datosProducto;
    }

    /*create(createProductoDto: CreateProductoDto) {
        let matriz  = {
            id: uuid(),
            nombre: createProductoDto.nombre,
            tipo: createProductoDto.tipo,
            detalle: createProductoDto.detalle
        }
        this.datoP.push(matriz)
    }*/

    insert(createProductoDto: CreateProductoDto) {
        this.datoP = [
            ...this.datoP,
            {
                id: uuid(),
                nombre: createProductoDto.nombre,
                tipo: createProductoDto.tipo,
                detalle: createProductoDto.detalle
            }
        ];
    }
}
