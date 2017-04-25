/* tslint:disable */

declare var Object: any;
export interface SeatInterface {
  "fare_conditions"?: string;
  "id"?: number;
  "aircraftId"?: number;
}

export class Seat implements SeatInterface {
  "fare_conditions": string;
  "id": number;
  "aircraftId": number;
  constructor(data?: SeatInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Seat`.
   */
  public static getModelName() {
    return "Seat";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Seat for dynamic purposes.
  **/
  public static factory(data: SeatInterface): Seat{
    return new Seat(data);
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
      name: 'Seat',
      plural: 'Seats',
      properties: {
        "fare_conditions": {
          name: 'fare_conditions',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "aircraftId": {
          name: 'aircraftId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
