/* tslint:disable */
import {
  Ticket
} from '../index';

declare var Object: any;
export interface BookingInterface {
  "book_date"?: Date;
  "total_amount"?: number;
  "id"?: number;
  tickets?: Ticket[];
}

export class Booking implements BookingInterface {
  "book_date": Date;
  "total_amount": number;
  "id": number;
  tickets: Ticket[];
  constructor(data?: BookingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Booking`.
   */
  public static getModelName() {
    return "Booking";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Booking for dynamic purposes.
  **/
  public static factory(data: BookingInterface): Booking{
    return new Booking(data);
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
      name: 'Booking',
      plural: 'Bookings',
      properties: {
        "book_date": {
          name: 'book_date',
          type: 'Date'
        },
        "total_amount": {
          name: 'total_amount',
          type: 'number'
        },
        "id": {
          name: 'id',
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
