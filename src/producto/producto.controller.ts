import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('producto')
export class ProductoController {

    constructor(private productoService: ProductoService) {

    }
    @Get()
    getAllPlacas() {
        return this.productoService.getAll();
    }

    @Get(':id')
    async find(@Param('id', ParseUUIDPipe) id: string) {
        return this.productoService.getById(id);
    }

    /*@Post()
    createProducto(productoService) {
        let newProducto: any = productoService;
        return this.productoService.create(newProducto);
    }*/

    @Post()
    createProducto(
        @Body() body:CreateProductoDto,
    ) {
        return body
    }
}
