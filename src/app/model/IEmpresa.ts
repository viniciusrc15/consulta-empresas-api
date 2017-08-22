import { ItipoEmpresa } from './ITipoEmpresa';
export interface IEmpresa{
    id: number;
    enterprise_name: string;
    enterprise_type: ItipoEmpresa;
    city: string;
    country: string;
    description: string;
}