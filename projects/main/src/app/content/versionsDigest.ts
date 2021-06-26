import versionsDigestRaw from './dist/versions-digest.json';
import { ContentVersion, VersionDigest } from './meta';

// @todo remove any
export const versionsDigest: VersionDigest[] = versionsDigestRaw.versionsDigest as any;
