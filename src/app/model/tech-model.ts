export interface TechModel {
    id: string;
    name: string;
    category: string;
    latestVersion: string;
    documentation: string;
    type: string;
    description: string;
}

export interface TechModelData {
    totalRecords: number[];
    data: TechModel[];
} 