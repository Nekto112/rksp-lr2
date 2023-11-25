import { Injectable } from '@nestjs/common';
import { Oceanarium } from 'src/oceanariums/oceanatrium.entity';

@Injectable()
export class DatasourceService {
    private oceanariums: Oceanarium[] = [];

    getOceanariums(): Oceanarium[] {
        return this.oceanariums;
    }
}
