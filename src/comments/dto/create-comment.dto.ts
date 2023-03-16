import { ApiProperty } from '@nestjs/swagger';
export class CreateCommentDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  text: string;
}
