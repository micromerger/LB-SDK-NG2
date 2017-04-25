/* tslint:disable */
import {
  Seat,
  Flight
} from '../index';

declare var Object: any;
export interface AircraftInterface {
  "model": string;
  "range"?: number;
  "id"?: number;
  seats?: Seat[];
  flights?: Flight[];
}

export class Aircraft implements AircraftInterface {
  "model": string;
  "range": number;
  "id": number;
  seats: Seat[];
  flights: Flight[];
  constructor(data?: AircraftInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Aircraft`.
   */
  public static getModelName() {
    return "Aircraft";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Aircraft for dynamic purposes.
  **/
  public static factory(data: AircraftInterface): Aircraft{
    return new Aircraft(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Aircraft',
      plural: 'Aircrafts',
      properties: {
        "model": {
          name: 'model',
          type: 'string'
        },
        "range": {
          name: 'range',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        seats: {
          name: 'seats',
          type: 'Seat[]',
          model: 'Seat'
        },
        flights: {
          name: 'flights',
          type: 'Flight[]',
          model: 'Flight'
        },
      }
    }
  }
}
