// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from '@syftdata/client';

/**
 * Gets logged when a location is searched for
 * @type {SyftEventType.TRACK}
 */
class LocationSearched {
  search_string: string;

  location_city: string;

  location_country: string;

}
