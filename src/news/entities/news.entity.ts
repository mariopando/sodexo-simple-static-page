import { ApiProperty } from '@nestjs/swagger';

export class News {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  text: string;
}
