// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { type, SyftEventType } from '@syftdata/client';

/**
 * Emit this event to identify a Group. Analytics Plugins can make `.set_group` calls when this event is seen!
 * @type {SyftEventType.GROUP_IDENTIFY}
 */
class GroupIdentity {
  groupType: string;

  groupId: string;

}

/**
 * gets logged when page is viewed
 * @type {SyftEventType.TRACK}
 */
class PageViewed {
  name: string;

}

/**
 * Logged when an user account is created
 * @type {SyftEventType.TRACK}
 */
class UserCreated {
  userid: string;

  createdAt: Date;

  domain: type.Url;

  email: type.Email;

}
