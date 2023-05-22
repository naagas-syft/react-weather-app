// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from '@syftdata/client';

/**
 * gets logged on a page view
 * @type {SyftEventType.TRACK}
 */
class PageViewed {
  name: string;

}

/**
 * location searched
 * @type {SyftEventType.TRACK}
 */
class Location Searched {
  loc_city: string;

}
