// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from '@syftdata/client';

/**
 * Emit this event to identify a Group. Analytics Plugins can make `.set_group` calls when this event is seen!
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
 * gets logged when page is viewed
 * @type {SyftEventType.TRACK}
 */
class PageViewed {
  /**
   * Documentation is not available.
   * Please add it in the model file.
   */
  name: string;

}

/**
 * Logged when an user account is created
 * @type {SyftEventType.TRACK}
 */
class UserCreated {
  /**
   * 
   */
  userid: string;

  /**
   * 
   */
  createdAt: Date;

  /**
   * 
   */
  domain: string;

  /**
   * 
   */
  email: string;

}
