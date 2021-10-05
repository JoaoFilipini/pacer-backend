import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesStoreModule } from './notes-store/notes-store.module';
import { AppController } from './app.controller';
import { ProjectModule } from './project/project.module';
import { CriteriaModule } from './criteria/criteria.module';
import { CriteriaProjectModule } from './criteria-project/criteria-project.module';
import { SprintModule } from './sprint/sprint.module';
import { TeamModule } from './team/team.module';
import { ProjectUserModule } from './project-user/project-user.module';

@Module({  
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: '',
    database: 'pacer',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false
  }), CriteriaModule, CriteriaProjectModule, ProjectModule, NotesStoreModule, SprintModule, TeamModule, ProjectUserModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
