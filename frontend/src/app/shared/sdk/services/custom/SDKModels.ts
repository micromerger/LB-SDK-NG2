/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Task } from '../../models/Task';
import { Aircraft } from '../../models/Aircraft';
import { Seat } from '../../models/Seat';
import { Airport } from '../../models/Airport';
import { Flight } from '../../models/Flight';
import { Ticket_flight } from '../../models/Ticket_flight';
import { Booking } from '../../models/Booking';
import { Boarding } from '../../models/Boarding';
import { Ticket } from '../../models/Ticket';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Task: Task,
    Aircraft: Aircraft,
    Seat: Seat,
    Airport: Airport,
    Flight: Flight,
    Ticket_flight: Ticket_flight,
    Booking: Booking,
    Boarding: Boarding,
    Ticket: Ticket,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
