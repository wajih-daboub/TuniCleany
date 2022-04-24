import { Activite } from "./typeactivite";
import { Autorisation } from "./typeautorisation";

export class Societe {
    idnom : string;
    idmf : string;
    idmail: string;
    idmp: string;
    idrmp: string;
    idadr: string;
    idtel: number;
    activite : Activite;
    autorisation: Autorisation;
}