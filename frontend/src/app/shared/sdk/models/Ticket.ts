/* tslint:disable */

declare var Object: any;
export interface TicketInterface {
  "passenger_name"?: string;
  "contact_data"?: string;
  "id"?: number;
  "bookingId"?: number;
}

export class Ticket implements TicketInterface {
  "passenger_name": string;
  "contact_data": string;
  "id": number;
  "bookingId": number;
  constructor(data?: TicketInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ticket`.
   */
  public static getModelName() {
    return "Ticket";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ticket for dynamic purposes.
  **/
  public static factory(data: TicketInterface): Ticket{
    return new Ticket(data);
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
      name: 'Ticket',
      plural: 'Tickets',
      properties: {
        "passenger_name": {
          name: 'passenger_name',
          type: 'string'
        },
        "contact_data": {
          name: 'contact_data',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "bookingId": {
          name: 'bookingId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
