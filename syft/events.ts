// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from '@syftdata/client';

/**
 * This event tracks page views in the application. Log the event when a page is rendered.
 * @type {SyftEventType.PAGE}
 */
class PageViewed {
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
  url1?: string;

}

/**
 * Emit this event to identify a Group. Analytics Plugins can make `.set_group` calls when this event is seen.
 * @type {SyftEventType.GROUP_IDENTIFY}
 */
class GroupIdentity {
  /**
   * Type of the group. e.g: age-bucket, organization.
   */
  groupType: string;

  /**
   * Id of the group. e.g. "18-24", "syft-org"
   */
  groupId: string;

}

/**
 * This event tracks page views in the application. Log the event when a page is rendered and open for more than 100ms.
 * @type {SyftEventType.PAGE}
 */
class PageViewed {
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
  url1?: string;

}
