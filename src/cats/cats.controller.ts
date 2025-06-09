import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

// app.example.com/cats -> static subdomain
// :account.example.com -> dynamic subdomain

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Post()
  // @HttpCode(204) // custom status code
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  // Endpoint: /cats/breeds
  @Get('breeds') // subpath
  findAllBreeds(): string {
    return 'This action returns all cat breeds';
  }

  @Get('request-example')
  findAllWithRequest(@Req() request: Request /* request object */) {
    console.log(request);
    return 'Check server console for request object';
  }

  @Get('abcd/*') // wildcard route
  findAllWithWildcard() {
    return 'This route uses a wildcard';
  }

  @Get('response-header')
  @Header('Cache-Control', 'no-store') // response header
  createWithResponseHeader() {
    return 'This action adds a new cat with response header';
  }

  @Get('query-params')
  async findAllWithQueryParam(
    @Query('age') age: number, // ?age=5
    @Query('breed') breed: string, // ?breed=persian
  ) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Get('redirect')
  @Redirect('https://docs.nestjs.com', 302) // redirects
  getDocs() {
    return 'Redirecting to NestJS documentation...';
  }

  @Get('redirect-custom')
  @Redirect('https://docs.nestjs.com', 302) // redirects
  getV5Docs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5', statusCode: 303 }; // custom redirect URL
    }
    return 'Redirecting to NestJS documentation...';
  }

  @Get('async')
  async findAllAsync(): Promise<any[]> {
    // Simulating an asynchronous operation, e.g., fetching from a database
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    return [];
  }

  @Get('rxjs-observable')
  findAllObservable(): Observable<any[]> {
    return of([]);
  }

  @Post()
  createCatWithDto(@Body() createCatDto: CreateCatDto) {
    console.log('create-data', createCatDto);
    return 'This action adds a new cat ' + createCatDto.name;
  }

  // @Get(':id') // /cats/1
  // findOne(@Param() params: { id: number } /* parameter */) {
  //   return `This action returns an id: ${params.id} cat`;
  // }

  @Get(':id') // /cats/1
  findOne(@Param('id') id: number /* parameter */) {
    return `This action returns an id: ${id} cat`;
  }
}
