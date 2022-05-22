import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default class JwtConfig {
  static getJwtConfig(configService: ConfigService): JwtModuleOptions {
    return {
      signOptions: { expiresIn: '60s' },
      secret: configService.get('jwtSecret'),
    };
  }
}
