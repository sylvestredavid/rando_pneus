export class FicheModel {
    id: any;
    nom: string;
    prenom: string;
    arrive: string;
    depart: string;
    temps: string;
    positionRoue: string;
    nomClient: string;
    nomAdresse: string;
    dimension: string;
    dimensionLibre: string;
    nvh: string;
    kmCompteur: string;
    demontage: string;
    depose: string;
    reparation: string;
    chaair: string;
    retaillage: string;
    emplatre: any;
    forfait: string;
    observation: string;
    numeroPneu: string;
    pression: string;
    serrage: string;
    fournitures: Array<any>;
    signatureClient: string;
    signatureResponsable: string;
    aEnvoyer: boolean;
    envoye: boolean;
    userId?: any;
    vue?: boolean;
    modifieParBureau?: boolean;
    photos?: {nom: string, data: string}[];
    note?: string;
    archivee?: boolean;
}
