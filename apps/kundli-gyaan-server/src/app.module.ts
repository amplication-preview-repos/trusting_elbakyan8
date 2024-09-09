import { Module } from "@nestjs/common";
import { ConsultationModule } from "./consultation/consultation.module";
import { AstrologerModule } from "./astrologer/astrologer.module";
import { ReportModule } from "./report/report.module";
import { UserModule } from "./user/user.module";
import { CallRecordModule } from "./callRecord/callRecord.module";
import { VisitModule } from "./visit/visit.module";
import { KundliModule } from "./kundli/kundli.module";
import { PredictionModule } from "./prediction/prediction.module";
import { AuthModuleModule } from "./authmodule/authmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    ConsultationModule,
    AstrologerModule,
    ReportModule,
    UserModule,
    CallRecordModule,
    VisitModule,
    KundliModule,
    PredictionModule,
    AuthModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
