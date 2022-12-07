import {
    SetMetadata,
    createParamDecorator,
    ExecutionContext,
  } from '@nestjs/common';
  
  export const NoAuth = () => SetMetadata('no-auth', true);
  
  export const ReqUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      return request.user;
    },
  );
  