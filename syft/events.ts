// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from "@syftdata/client";

/**
 * This event tracks page views in the application. Log the event when a page is rendered.
 * @type {SyftEventType.PAGE}
 */
export class PageViewed {
  /**
   * Name of the page.
   */
  name: string;

  /**
   * Path portion of the page’s URL. Equivalent to location.pathname from the DOM API.
   */
  path?: string;

  /**
   * Previous page’s full URL. Equivalent to document.referrer from the DOM API.
   */
  referrer?: string;

  /**
   * Query string portion of the page’s URL. Equivalent to location.search from the DOM API.
   */
  search?: string;

  /**
   * Page’s title. Equivalent to document.title from the DOM API.
   */
  title?: string;

  /**
   * Page’s full URL.
   */
  url?: string;
}

/**
 * Emit this event to identify a User. Analytics Plugins can make `.identify` calls when this event is seen.
 * @type {SyftEventType.IDENTIFY}
 */
export class UserIdentity {
  /**
   * Id of the user.
   */
  userId: string;
}
