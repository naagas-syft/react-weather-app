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

/**
 * Gets logged when a page is viewed
 * @type {SyftEventType.TRACK}
 */
class PageViewed {
  name: string;

}
