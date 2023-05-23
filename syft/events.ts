// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from '@syftdata/client';

/**
 * test
 * @type {SyftEventType.TRACK}
 */
class UserCreated {
  /**
   * this is the user id
   */
  userid: string;

}

/**
 * When a user sets location city for weather
 * @type {SyftEventType.TRACK}
 */
class LocationAdded {
  location_city: string;

  location_country: string;

}
