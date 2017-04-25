/* tslint:disable */
import {
  Flight,
  Ticket
} from '../index';

declare var Object: any;
export interface Ticket_flightInterface {
  "fare_condition"?: string;
  "amount"?: number;
  "id"?: number;
  "flightId"?: number;
  "ticketId"?: number;
  flight?: Flight;
  ticket?: Ticket;
}

export class Ticket_flight implements Ticket_flightInterface {
  "fare_condition": string;
  "amount": number;
  "id": number;
  "flightId": number;
  "ticketId": number;
  flight: Flight;
  ticket: Ticket;
  constructor(data?: Ticket_flightInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ticket_flight`.
   */
  public static getModelName() {
    return "Ticket_flight";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ticket_flight for dynamic purposes.
  **/
  public static factory(data: Ticket_flightInterface): Ticket_flight{
    return new Ticket_flight(data);
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
      name: 'Ticket_flight',
      plural: 'Ticket_flights',
      properties: {
        "fare_condition": {
          name: 'fare_condition',
          type: 'string'
        },
        "amount": {
          name: 'amount',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "flightId": {
          name: 'flightId',
          type: 'number'
        },
        "ticketId": {
          name: 'ticketId',
          type: 'number'
        },
      },
      relations: {
        flight: {
          name: 'flight',
          type: 'Flight',
          model: 'Flight'
        },
        ticket: {
          name: 'ticket',
          type: 'Ticket',
          model: 'Ticket'
        },
      }
    }
  }
}
