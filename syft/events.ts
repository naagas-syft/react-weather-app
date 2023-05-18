// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from '@syftdata/client';

/**
 * gets logged
 * @type {SyftEventType.TRACK}
 */
class UserCreated {
  userid: string;

}

/**
 * 
 * @type {SyftEventType.TRACK}
 */
class LocationAdded {
  location_city: string;

}
