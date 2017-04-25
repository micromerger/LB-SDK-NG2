/* tslint:disable */

declare var Object: any;
export interface BoardingInterface {
  "id"?: number;
}

export class Boarding implements BoardingInterface {
  "id": number;
  constructor(data?: BoardingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Boarding`.
   */
  public static getModelName() {
    return "Boarding";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Boarding for dynamic purposes.
  **/
  public static factory(data: BoardingInterface): Boarding{
    return new Boarding(data);
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
      name: 'Boarding',
      plural: 'Boardings',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
