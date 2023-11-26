import { Injectable } from '@nestjs/common';
import { Fish } from 'src/fishs/fish.entity';
import { Mollusc } from 'src/molluscs/molluscs.entity';
import { Oceanarium } from 'src/oceanariums/oceanarium.entity';

@Injectable()
export class DatasourceService {
    private oceanariums: Oceanarium[] = [];
    private fishs: Fish[] = [];
    private molluscs: Mollusc[] = [];

    getOceanariums(): Oceanarium[] {
        return this.oceanariums;
    }
    
    getFishs(): Fish[] {
        return this.fishs;
    }

    getMolluscs(): Mollusc[]{
        return this.molluscs;
    }
}
