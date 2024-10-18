import { Module } from '@nestjs/common';
import { TypeOrmAlunoPersistenceModule } from './in-database/typeorm-persistence.module';

@Module({})
export class CuidadorInfraestructureModule {
    static use(driver: 'in-file' | 'in-memory' | 'in-database') {
        let persistenceModule;
    
        if (driver === 'in-database') {
          persistenceModule = TypeOrmAlunoPersistenceModule;
        } else if (driver === 'in-file' || driver === 'in-memory') {
          throw new Error('Persistencia ainda nao implementada.')
        } else {
          throw new Error('Driver invalido.')
        }
        
        return {
          module: CuidadorInfraestructureModule,
          imports: [persistenceModule],
          exports: [persistenceModule],
        };
    }
}
