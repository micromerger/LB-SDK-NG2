/* tslint:disable */
import {
  Flight
} from '../index';

declare var Object: any;
export interface AirportInterface {
  "name"?: string;
  "city"?: string;
  "id"?: number;
  flights?: Flight[];
}

export class Airport implements AirportInterface {
  "name": string;
  "city": string;
  "id": number;
  flights: Flight[];
  constructor(data?: AirportInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Airport`.
   */
  public static getModelName() {
    return "Airport";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Airport for dynamic purposes.
  **/
  public static factory(data: AirportInterface): Airport{
    return new Airport(data);
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
      name: 'Airport',
      plural: 'Airports',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        flights: {
          name: 'flights',
          type: 'Flight[]',
          model: 'Flight'
        },
      }
    }
  }
}
