import { Gouvernorat } from "./gouvernorat";
import { Region } from "./region";
import { Societe } from "./societe.model";
import { Sous_typedech } from "./sous_typedechets";
import { Activite } from "./typeactivite";
import { Dechet } from "./typedechets";

export class Commande {
    idpoids:number;
    nomSociete: Societe;
    gouvernorat:Gouvernorat;
    region:Region;
    dechet:Dechet;
    sous_typedech:Sous_typedech;
    activite: Activite;
}