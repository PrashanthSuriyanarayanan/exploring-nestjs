import { ForbiddenException, Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class OriginMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        const allowedOrigins = ["http://nest-poc.com:3000"]
        const reqOrigin = req.headers.origin;

        if (reqOrigin && !allowedOrigins.includes(reqOrigin)) {
            throw new ForbiddenException('Origin not allowed');
        }

        next();

    }
}