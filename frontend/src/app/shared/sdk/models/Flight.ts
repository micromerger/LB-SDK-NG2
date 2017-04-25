/* tslint:disable */
import {
  Ticket
} from '../index';

declare var Object: any;
export interface FlightInterface {
  "flight_no": string;
  "scheduled_departure": Date;
  "scheduled_arrival": Date;
  "status"?: string;
  "id"?: number;
  "aircraftId"?: number;
  "airportId"?: number;
  tickets?: Ticket[];
}

export class Flight implements FlightInterface {
  "flight_no": string;
  "scheduled_departure": Date;
  "scheduled_arrival": Date;
  "status": string;
  "id": number;
  "aircraftId": number;
  "airportId": number;
  tickets: Ticket[];
  constructor(data?: FlightInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Flight`.
   */
  public static getModelName() {
    return "Flight";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Flight for dynamic purposes.
  **/
  public static factory(data: FlightInterface): Flight{
    return new Flight(data);
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
      name: 'Flight',
      plural: 'Flights',
      properties: {
        "flight_no": {
          name: 'flight_no',
          type: 'string'
        },
        "scheduled_departure": {
          name: 'scheduled_departure',
          type: 'Date'
        },
        "scheduled_arrival": {
          name: 'scheduled_arrival',
          type: 'Date'
        },
        "status": {
          name: 'status',
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
        "airportId": {
          name: 'airportId',
          type: 'number'
        },
      },
      relations: {
        tickets: {
          name: 'tickets',
          type: 'Ticket[]',
          model: 'Ticket'
        },
      }
    }
  }
}
