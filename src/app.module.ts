import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TeamModule } from './team/team.module';
import { RoleModule } from './role/role.module';
import { SprintModule } from './sprint/sprint.module';
import { ProjectModule } from './project/project.module';
import { CriteriaModule } from './criteria/criteria.module';
import { UserRoleModule } from './user-role/user-role.module';
import { UserTeamModule } from './user-team/user-team.module';
import { NotesStoreModule } from './notes-store/notes-store.module';
import { ProjectUserModule } from './project-user/project-user.module';
import { CriteriaProjectModule } from './criteria-project/criteria-project.module';
import { RecoveryModule } from './auth/recovery.module';

@Module({  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pacer',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false
    }), 
    AuthModule,
    CriteriaModule, 
    CriteriaProjectModule, 
    ProjectModule, 
    ProjectUserModule,
    NotesStoreModule, 
    SprintModule, 
    TeamModule,
    UserModule,
    RoleModule,
    UserRoleModule,
    UserTeamModule,
    RecoveryModule
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
