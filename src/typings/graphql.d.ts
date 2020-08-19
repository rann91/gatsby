export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  STRAPI_DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  STRAPI_JSON: any
  /**
   * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  STRAPI_Date: any
  /** Input type for dynamic zone content of Footer */
  STRAPI_FooterContentDynamicZoneInput: any
  /** Input type for dynamic zone content of Homepage */
  STRAPI_HomepageContentDynamicZoneInput: any
  /** Input type for dynamic zone content of Page */
  STRAPI_PageContentDynamicZoneInput: any
  /** The `Upload` scalar type represents a file upload. */
  STRAPI_Upload: any
  /** The `Long` scalar type represents 52-bit integers */
  STRAPI_Long: any
  /** A time string with format: HH:mm:ss.SSS */
  STRAPI_Time: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type File = Node & {
  __typename?: 'File'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type GraphQlSource = Node & {
  __typename?: 'GraphQLSource'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  typeName?: Maybe<Scalars['String']>
  fieldName?: Maybe<Scalars['String']>
}

export type GraphQlSourceConnection = {
  __typename?: 'GraphQLSourceConnection'
  totalCount: Scalars['Int']
  edges: Array<GraphQlSourceEdge>
  nodes: Array<GraphQlSource>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<GraphQlSourceGroupConnection>
}

export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceEdge = {
  __typename?: 'GraphQLSourceEdge'
  next?: Maybe<GraphQlSource>
  node: GraphQlSource
  previous?: Maybe<GraphQlSource>
}

export enum GraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName'
}

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  typeName?: Maybe<StringQueryOperatorInput>
  fieldName?: Maybe<StringQueryOperatorInput>
}

export type GraphQlSourceGroupConnection = {
  __typename?: 'GraphQLSourceGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<GraphQlSourceEdge>
  nodes: Array<GraphQlSource>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  fixed?: Maybe<ImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>
  fluid?: Maybe<ImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query'
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  graphQlSource?: Maybe<GraphQlSource>
  allGraphQlSource: GraphQlSourceConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  strapi: Strapi
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  typeName?: Maybe<StringQueryOperatorInput>
  fieldName?: Maybe<StringQueryOperatorInput>
}

export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>
  sort?: Maybe<GraphQlSourceSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataTitleTemplate = 'siteMetadata___titleTemplate',
  SiteMetadataDescription = 'siteMetadata___description',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: 'SitePageContext'
  id?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsComponent = 'pluginCreator___pluginOptions___component',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsBaseUrl = 'pluginCreator___pluginOptions___baseUrl',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsComponent = 'pluginOptions___component',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsBaseUrl = 'pluginOptions___baseUrl',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  name?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  cache_busting_mode?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cacheDigest?: Maybe<Scalars['String']>
  component?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  typeName?: Maybe<Scalars['String']>
  fieldName?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  baseUrl?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  typeName?: Maybe<StringQueryOperatorInput>
  fieldName?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  baseUrl?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  title?: Maybe<Scalars['String']>
  titleTemplate?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  titleTemplate?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Strapi = {
  __typename?: 'STRAPI'
  article?: Maybe<Strapi_Article>
  articles?: Maybe<Array<Maybe<Strapi_Article>>>
  articlesConnection?: Maybe<Strapi_ArticleConnection>
  footer?: Maybe<Strapi_Footer>
  homepage?: Maybe<Strapi_Homepage>
  navigation?: Maybe<Strapi_Navigation>
  page?: Maybe<Strapi_Page>
  pages?: Maybe<Array<Maybe<Strapi_Page>>>
  pagesConnection?: Maybe<Strapi_PageConnection>
  person?: Maybe<Strapi_Person>
  people?: Maybe<Array<Maybe<Strapi_Person>>>
  peopleConnection?: Maybe<Strapi_PersonConnection>
  project?: Maybe<Strapi_Project>
  projects?: Maybe<Array<Maybe<Strapi_Project>>>
  projectsConnection?: Maybe<Strapi_ProjectConnection>
  files?: Maybe<Array<Maybe<Strapi_UploadFile>>>
  filesConnection?: Maybe<Strapi_UploadFileConnection>
  role?: Maybe<Strapi_UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<Strapi_UsersPermissionsRole>>>
  rolesConnection?: Maybe<Strapi_UsersPermissionsRoleConnection>
  user?: Maybe<Strapi_UsersPermissionsUser>
  users?: Maybe<Array<Maybe<Strapi_UsersPermissionsUser>>>
  usersConnection?: Maybe<Strapi_UsersPermissionsUserConnection>
  me?: Maybe<Strapi_UsersPermissionsMe>
}

export type StrapiArticleArgs = {
  id: Scalars['ID']
}

export type StrapiArticlesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiArticlesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiPageArgs = {
  id: Scalars['ID']
}

export type StrapiPagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiPersonArgs = {
  id: Scalars['ID']
}

export type StrapiPeopleArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiPeopleConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiProjectArgs = {
  id: Scalars['ID']
}

export type StrapiProjectsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiFilesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiRoleArgs = {
  id: Scalars['ID']
}

export type StrapiRolesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiUserArgs = {
  id: Scalars['ID']
}

export type StrapiUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type StrapiUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type Strapi_Article = {
  __typename?: 'STRAPI_Article'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  image?: Maybe<Strapi_UploadFile>
  content?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  meta?: Maybe<Strapi_ComponentStructureMeta>
  contentFiles?: Maybe<Array<Maybe<File>>>
}

export type Strapi_ArticleAggregator = {
  __typename?: 'STRAPI_ArticleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type Strapi_ArticleConnection = {
  __typename?: 'STRAPI_ArticleConnection'
  values?: Maybe<Array<Maybe<Strapi_Article>>>
  groupBy?: Maybe<Strapi_ArticleGroupBy>
  aggregate?: Maybe<Strapi_ArticleAggregator>
}

export type Strapi_ArticleConnection_Id = {
  __typename?: 'STRAPI_ArticleConnection_id'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionContent = {
  __typename?: 'STRAPI_ArticleConnectionContent'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionCreatedAt = {
  __typename?: 'STRAPI_ArticleConnectionCreatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionId = {
  __typename?: 'STRAPI_ArticleConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionImage = {
  __typename?: 'STRAPI_ArticleConnectionImage'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionMeta = {
  __typename?: 'STRAPI_ArticleConnectionMeta'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionSlug = {
  __typename?: 'STRAPI_ArticleConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionSummary = {
  __typename?: 'STRAPI_ArticleConnectionSummary'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionTitle = {
  __typename?: 'STRAPI_ArticleConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleConnectionUpdatedAt = {
  __typename?: 'STRAPI_ArticleConnectionUpdatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_ArticleConnection>
}

export type Strapi_ArticleGroupBy = {
  __typename?: 'STRAPI_ArticleGroupBy'
  id?: Maybe<Array<Maybe<Strapi_ArticleConnectionId>>>
  _id?: Maybe<Array<Maybe<Strapi_ArticleConnection_Id>>>
  createdAt?: Maybe<Array<Maybe<Strapi_ArticleConnectionCreatedAt>>>
  updatedAt?: Maybe<Array<Maybe<Strapi_ArticleConnectionUpdatedAt>>>
  title?: Maybe<Array<Maybe<Strapi_ArticleConnectionTitle>>>
  image?: Maybe<Array<Maybe<Strapi_ArticleConnectionImage>>>
  content?: Maybe<Array<Maybe<Strapi_ArticleConnectionContent>>>
  summary?: Maybe<Array<Maybe<Strapi_ArticleConnectionSummary>>>
  slug?: Maybe<Array<Maybe<Strapi_ArticleConnectionSlug>>>
  meta?: Maybe<Array<Maybe<Strapi_ArticleConnectionMeta>>>
}

export type Strapi_ArticleInput = {
  title?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  content?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  meta?: Maybe<Strapi_ComponentStructureMetaInput>
}

export enum Strapi_CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Strapi_ComponentContentArticleList = {
  __typename?: 'STRAPI_ComponentContentArticleList'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
}

export type Strapi_ComponentContentArticleListInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
}

export type Strapi_ComponentContentContactForm = {
  __typename?: 'STRAPI_ComponentContentContactForm'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contactDetail?: Maybe<Array<Maybe<Strapi_ComponentSharedContactDetail>>>
}

export type Strapi_ComponentContentContactFormInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contactDetail?: Maybe<Array<Maybe<Strapi_ComponentSharedContactDetailInput>>>
}

export type Strapi_ComponentContentCta = {
  __typename?: 'STRAPI_ComponentContentCta'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  link?: Maybe<Strapi_ComponentSharedLink>
}

export type Strapi_ComponentContentCtaInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  link?: Maybe<Strapi_ComponentSharedLinkInput>
}

export type Strapi_ComponentContentHero = {
  __typename?: 'STRAPI_ComponentContentHero'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Strapi_UploadFile>
  link?: Maybe<Strapi_ComponentSharedLink>
}

export type Strapi_ComponentContentHeroInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  link?: Maybe<Strapi_ComponentSharedLinkInput>
}

export type Strapi_ComponentContentHighlight = {
  __typename?: 'STRAPI_ComponentContentHighlight'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  link?: Maybe<Strapi_ComponentSharedLink>
  image?: Maybe<Strapi_UploadFile>
  reverse?: Maybe<Scalars['Boolean']>
}

export type Strapi_ComponentContentHighlightInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  link?: Maybe<Strapi_ComponentSharedLinkInput>
  image?: Maybe<Scalars['ID']>
  reverse?: Maybe<Scalars['Boolean']>
}

export type Strapi_ComponentContentLatestArticleList = {
  __typename?: 'STRAPI_ComponentContentLatestArticleList'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
}

export type Strapi_ComponentContentLatestArticleListInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
}

export type Strapi_ComponentContentMapInput = {
  embedUrl?: Maybe<Scalars['String']>
}

export type Strapi_ComponentContentMaps = {
  __typename?: 'STRAPI_ComponentContentMaps'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  embedUrl?: Maybe<Scalars['String']>
}

export type Strapi_ComponentContentPersonContactList = {
  __typename?: 'STRAPI_ComponentContentPersonContactList'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  persons?: Maybe<Array<Maybe<Strapi_Person>>>
}

export type Strapi_ComponentContentPersonContactListPersonsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type Strapi_ComponentContentPersonContactListInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  persons?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_ComponentContentPersonList = {
  __typename?: 'STRAPI_ComponentContentPersonList'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  persons?: Maybe<Array<Maybe<Strapi_Person>>>
}

export type Strapi_ComponentContentPersonListPersonsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type Strapi_ComponentContentPersonListInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  persons?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_ComponentContentProjectList = {
  __typename?: 'STRAPI_ComponentContentProjectList'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
}

export type Strapi_ComponentContentProjectListInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
}

export type Strapi_ComponentContentServiceList = {
  __typename?: 'STRAPI_ComponentContentServiceList'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  services?: Maybe<Array<Maybe<Strapi_ComponentSharedService>>>
}

export type Strapi_ComponentContentServiceListInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  services?: Maybe<Array<Maybe<Strapi_ComponentSharedServiceInput>>>
}

export type Strapi_ComponentContentText = {
  __typename?: 'STRAPI_ComponentContentText'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type Strapi_ComponentContentTextInput = {
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type Strapi_ComponentSharedContactDetail = {
  __typename?: 'STRAPI_ComponentSharedContactDetail'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type Strapi_ComponentSharedContactDetailInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type Strapi_ComponentSharedLink = {
  __typename?: 'STRAPI_ComponentSharedLink'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  label: Scalars['String']
  url: Scalars['String']
  newWindow: Scalars['Boolean']
}

export type Strapi_ComponentSharedLinkInput = {
  label: Scalars['String']
  url: Scalars['String']
  newWindow?: Maybe<Scalars['Boolean']>
}

export type Strapi_ComponentSharedService = {
  __typename?: 'STRAPI_ComponentSharedService'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  icon?: Maybe<Strapi_UploadFile>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type Strapi_ComponentSharedServiceInput = {
  icon?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type Strapi_ComponentStructureMeta = {
  __typename?: 'STRAPI_ComponentStructureMeta'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  metaTitle?: Maybe<Scalars['String']>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Strapi_UploadFile>
}

export type Strapi_ComponentStructureMetaInput = {
  metaTitle?: Maybe<Scalars['String']>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Scalars['ID']>
}

export type Strapi_CreateArticleInput = {
  data?: Maybe<Strapi_ArticleInput>
}

export type Strapi_CreateArticlePayload = {
  __typename?: 'STRAPI_createArticlePayload'
  article?: Maybe<Strapi_Article>
}

export type Strapi_CreatePageInput = {
  data?: Maybe<Strapi_PageInput>
}

export type Strapi_CreatePagePayload = {
  __typename?: 'STRAPI_createPagePayload'
  page?: Maybe<Strapi_Page>
}

export type Strapi_CreatePersonInput = {
  data?: Maybe<Strapi_PersonInput>
}

export type Strapi_CreatePersonPayload = {
  __typename?: 'STRAPI_createPersonPayload'
  person?: Maybe<Strapi_Person>
}

export type Strapi_CreateProjectInput = {
  data?: Maybe<Strapi_ProjectInput>
}

export type Strapi_CreateProjectPayload = {
  __typename?: 'STRAPI_createProjectPayload'
  project?: Maybe<Strapi_Project>
}

export type Strapi_CreateRoleInput = {
  data?: Maybe<Strapi_RoleInput>
}

export type Strapi_CreateRolePayload = {
  __typename?: 'STRAPI_createRolePayload'
  role?: Maybe<Strapi_UsersPermissionsRole>
}

export type Strapi_CreateUserInput = {
  data?: Maybe<Strapi_UserInput>
}

export type Strapi_CreateUserPayload = {
  __typename?: 'STRAPI_createUserPayload'
  user?: Maybe<Strapi_UsersPermissionsUser>
}

export type Strapi_DeleteArticleInput = {
  where?: Maybe<Strapi_InputId>
}

export type Strapi_DeleteArticlePayload = {
  __typename?: 'STRAPI_deleteArticlePayload'
  article?: Maybe<Strapi_Article>
}

export type Strapi_DeleteFooterPayload = {
  __typename?: 'STRAPI_deleteFooterPayload'
  footer?: Maybe<Strapi_Footer>
}

export type Strapi_DeleteHomepagePayload = {
  __typename?: 'STRAPI_deleteHomepagePayload'
  homepage?: Maybe<Strapi_Homepage>
}

export type Strapi_DeleteNavigationPayload = {
  __typename?: 'STRAPI_deleteNavigationPayload'
  navigation?: Maybe<Strapi_Navigation>
}

export type Strapi_DeletePageInput = {
  where?: Maybe<Strapi_InputId>
}

export type Strapi_DeletePagePayload = {
  __typename?: 'STRAPI_deletePagePayload'
  page?: Maybe<Strapi_Page>
}

export type Strapi_DeletePersonInput = {
  where?: Maybe<Strapi_InputId>
}

export type Strapi_DeletePersonPayload = {
  __typename?: 'STRAPI_deletePersonPayload'
  person?: Maybe<Strapi_Person>
}

export type Strapi_DeleteProjectInput = {
  where?: Maybe<Strapi_InputId>
}

export type Strapi_DeleteProjectPayload = {
  __typename?: 'STRAPI_deleteProjectPayload'
  project?: Maybe<Strapi_Project>
}

export type Strapi_DeleteRoleInput = {
  where?: Maybe<Strapi_InputId>
}

export type Strapi_DeleteRolePayload = {
  __typename?: 'STRAPI_deleteRolePayload'
  role?: Maybe<Strapi_UsersPermissionsRole>
}

export type Strapi_DeleteUserInput = {
  where?: Maybe<Strapi_InputId>
}

export type Strapi_DeleteUserPayload = {
  __typename?: 'STRAPI_deleteUserPayload'
  user?: Maybe<Strapi_UsersPermissionsUser>
}

export type Strapi_EditArticleInput = {
  title?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  content?: Maybe<Scalars['String']>
  summary?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  meta?: Maybe<Strapi_EditComponentStructureMetaInput>
}

export type Strapi_EditComponentContentArticleListInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
}

export type Strapi_EditComponentContentContactFormInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contactDetail?: Maybe<
    Array<Maybe<Strapi_EditComponentSharedContactDetailInput>>
  >
}

export type Strapi_EditComponentContentCtaInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  link?: Maybe<Strapi_EditComponentSharedLinkInput>
}

export type Strapi_EditComponentContentHeroInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  link?: Maybe<Strapi_EditComponentSharedLinkInput>
}

export type Strapi_EditComponentContentHighlightInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  link?: Maybe<Strapi_EditComponentSharedLinkInput>
  image?: Maybe<Scalars['ID']>
  reverse?: Maybe<Scalars['Boolean']>
}

export type Strapi_EditComponentContentLatestArticleListInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
}

export type Strapi_EditComponentContentMapInput = {
  id?: Maybe<Scalars['ID']>
  embedUrl?: Maybe<Scalars['String']>
}

export type Strapi_EditComponentContentPersonContactListInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  persons?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_EditComponentContentPersonListInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  persons?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_EditComponentContentProjectListInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
}

export type Strapi_EditComponentContentServiceListInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  services?: Maybe<Array<Maybe<Strapi_EditComponentSharedServiceInput>>>
}

export type Strapi_EditComponentContentTextInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type Strapi_EditComponentSharedContactDetailInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
}

export type Strapi_EditComponentSharedLinkInput = {
  id?: Maybe<Scalars['ID']>
  label?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  newWindow?: Maybe<Scalars['Boolean']>
}

export type Strapi_EditComponentSharedServiceInput = {
  id?: Maybe<Scalars['ID']>
  icon?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type Strapi_EditComponentStructureMetaInput = {
  id?: Maybe<Scalars['ID']>
  metaTitle?: Maybe<Scalars['String']>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Scalars['ID']>
}

export type Strapi_EditFileInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['STRAPI_JSON']>
  hash?: Maybe<Scalars['String']>
  ext?: Maybe<Scalars['String']>
  mime?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  previewUrl?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  provider_metadata?: Maybe<Scalars['STRAPI_JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_EditFooterInput = {
  content?: Maybe<Array<Scalars['STRAPI_FooterContentDynamicZoneInput']>>
}

export type Strapi_EditHomepageInput = {
  meta?: Maybe<Strapi_EditComponentStructureMetaInput>
  content?: Maybe<Array<Scalars['STRAPI_HomepageContentDynamicZoneInput']>>
  title?: Maybe<Scalars['String']>
}

export type Strapi_EditNavigationInput = {
  menu?: Maybe<Array<Maybe<Strapi_EditComponentSharedLinkInput>>>
}

export type Strapi_EditPageInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Array<Scalars['STRAPI_PageContentDynamicZoneInput']>>
  slug?: Maybe<Scalars['String']>
  meta?: Maybe<Strapi_EditComponentStructureMetaInput>
}

export type Strapi_EditPersonInput = {
  name?: Maybe<Scalars['String']>
  job?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
}

export type Strapi_EditProjectInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['STRAPI_Date']>
  description?: Maybe<Scalars['String']>
  persons?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  meta?: Maybe<Strapi_EditComponentStructureMetaInput>
}

export type Strapi_EditRoleInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_EditUserInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
}

export type Strapi_FileInput = {
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['STRAPI_JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['STRAPI_JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_Footer = {
  __typename?: 'STRAPI_Footer'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  content?: Maybe<Array<Maybe<Strapi_FooterContentDynamicZone>>>
}

export type Strapi_FooterContentDynamicZone = Strapi_ComponentContentCta

export type Strapi_FooterInput = {
  content?: Maybe<Array<Scalars['STRAPI_FooterContentDynamicZoneInput']>>
}

export type Strapi_Homepage = {
  __typename?: 'STRAPI_Homepage'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  meta?: Maybe<Strapi_ComponentStructureMeta>
  content?: Maybe<Array<Maybe<Strapi_HomepageContentDynamicZone>>>
  title?: Maybe<Scalars['String']>
}

export type Strapi_HomepageContentDynamicZone =
  | Strapi_ComponentContentCta
  | Strapi_ComponentContentHero
  | Strapi_ComponentContentHighlight
  | Strapi_ComponentContentServiceList
  | Strapi_ComponentContentText
  | Strapi_ComponentContentPersonList
  | Strapi_ComponentContentContactForm
  | Strapi_ComponentContentLatestArticleList
  | Strapi_ComponentContentProjectList
  | Strapi_ComponentContentMaps
  | Strapi_ComponentContentPersonContactList
  | Strapi_ComponentContentArticleList

export type Strapi_HomepageInput = {
  meta?: Maybe<Strapi_ComponentStructureMetaInput>
  content?: Maybe<Array<Scalars['STRAPI_HomepageContentDynamicZoneInput']>>
  title?: Maybe<Scalars['String']>
}

export type Strapi_InputId = {
  id: Scalars['ID']
}

export type Strapi_Morph =
  | Strapi_UsersPermissionsMe
  | Strapi_UsersPermissionsMeRole
  | Strapi_UsersPermissionsLoginPayload
  | Strapi_UserPermissionsPasswordPayload
  | Strapi_Article
  | Strapi_ArticleConnection
  | Strapi_ArticleAggregator
  | Strapi_ArticleGroupBy
  | Strapi_ArticleConnectionId
  | Strapi_ArticleConnection_Id
  | Strapi_ArticleConnectionCreatedAt
  | Strapi_ArticleConnectionUpdatedAt
  | Strapi_ArticleConnectionTitle
  | Strapi_ArticleConnectionImage
  | Strapi_ArticleConnectionContent
  | Strapi_ArticleConnectionSummary
  | Strapi_ArticleConnectionSlug
  | Strapi_ArticleConnectionMeta
  | Strapi_CreateArticlePayload
  | Strapi_UpdateArticlePayload
  | Strapi_DeleteArticlePayload
  | Strapi_Footer
  | Strapi_UpdateFooterPayload
  | Strapi_DeleteFooterPayload
  | Strapi_Homepage
  | Strapi_UpdateHomepagePayload
  | Strapi_DeleteHomepagePayload
  | Strapi_Navigation
  | Strapi_UpdateNavigationPayload
  | Strapi_DeleteNavigationPayload
  | Strapi_Page
  | Strapi_PageConnection
  | Strapi_PageAggregator
  | Strapi_PageGroupBy
  | Strapi_PageConnectionId
  | Strapi_PageConnection_Id
  | Strapi_PageConnectionCreatedAt
  | Strapi_PageConnectionUpdatedAt
  | Strapi_PageConnectionTitle
  | Strapi_PageConnectionSlug
  | Strapi_PageConnectionMeta
  | Strapi_CreatePagePayload
  | Strapi_UpdatePagePayload
  | Strapi_DeletePagePayload
  | Strapi_Person
  | Strapi_PersonConnection
  | Strapi_PersonAggregator
  | Strapi_PersonGroupBy
  | Strapi_PersonConnectionId
  | Strapi_PersonConnection_Id
  | Strapi_PersonConnectionCreatedAt
  | Strapi_PersonConnectionUpdatedAt
  | Strapi_PersonConnectionName
  | Strapi_PersonConnectionJob
  | Strapi_PersonConnectionEmail
  | Strapi_PersonConnectionPhone
  | Strapi_PersonConnectionImage
  | Strapi_CreatePersonPayload
  | Strapi_UpdatePersonPayload
  | Strapi_DeletePersonPayload
  | Strapi_Project
  | Strapi_ProjectConnection
  | Strapi_ProjectAggregator
  | Strapi_ProjectGroupBy
  | Strapi_ProjectConnectionId
  | Strapi_ProjectConnection_Id
  | Strapi_ProjectConnectionCreatedAt
  | Strapi_ProjectConnectionUpdatedAt
  | Strapi_ProjectConnectionTitle
  | Strapi_ProjectConnectionContent
  | Strapi_ProjectConnectionDate
  | Strapi_ProjectConnectionDescription
  | Strapi_ProjectConnectionPersons
  | Strapi_ProjectConnectionSlug
  | Strapi_ProjectConnectionCategory
  | Strapi_ProjectConnectionImage
  | Strapi_ProjectConnectionMeta
  | Strapi_CreateProjectPayload
  | Strapi_UpdateProjectPayload
  | Strapi_DeleteProjectPayload
  | Strapi_UploadFile
  | Strapi_UploadFileConnection
  | Strapi_UploadFileAggregator
  | Strapi_UploadFileAggregatorSum
  | Strapi_UploadFileAggregatorAvg
  | Strapi_UploadFileAggregatorMin
  | Strapi_UploadFileAggregatorMax
  | Strapi_UploadFileGroupBy
  | Strapi_UploadFileConnectionId
  | Strapi_UploadFileConnection_Id
  | Strapi_UploadFileConnectionCreatedAt
  | Strapi_UploadFileConnectionUpdatedAt
  | Strapi_UploadFileConnectionName
  | Strapi_UploadFileConnectionAlternativeText
  | Strapi_UploadFileConnectionCaption
  | Strapi_UploadFileConnectionWidth
  | Strapi_UploadFileConnectionHeight
  | Strapi_UploadFileConnectionFormats
  | Strapi_UploadFileConnectionHash
  | Strapi_UploadFileConnectionExt
  | Strapi_UploadFileConnectionMime
  | Strapi_UploadFileConnectionSize
  | Strapi_UploadFileConnectionUrl
  | Strapi_UploadFileConnectionPreviewUrl
  | Strapi_UploadFileConnectionProvider
  | Strapi_UploadFileConnectionProvider_Metadata
  | Strapi_UsersPermissionsPermission
  | Strapi_UsersPermissionsRole
  | Strapi_UsersPermissionsRoleConnection
  | Strapi_UsersPermissionsRoleAggregator
  | Strapi_UsersPermissionsRoleGroupBy
  | Strapi_UsersPermissionsRoleConnectionId
  | Strapi_UsersPermissionsRoleConnection_Id
  | Strapi_UsersPermissionsRoleConnectionCreatedAt
  | Strapi_UsersPermissionsRoleConnectionUpdatedAt
  | Strapi_UsersPermissionsRoleConnectionName
  | Strapi_UsersPermissionsRoleConnectionDescription
  | Strapi_UsersPermissionsRoleConnectionType
  | Strapi_CreateRolePayload
  | Strapi_UpdateRolePayload
  | Strapi_DeleteRolePayload
  | Strapi_UsersPermissionsUser
  | Strapi_UsersPermissionsUserConnection
  | Strapi_UsersPermissionsUserAggregator
  | Strapi_UsersPermissionsUserGroupBy
  | Strapi_UsersPermissionsUserConnectionId
  | Strapi_UsersPermissionsUserConnection_Id
  | Strapi_UsersPermissionsUserConnectionCreatedAt
  | Strapi_UsersPermissionsUserConnectionUpdatedAt
  | Strapi_UsersPermissionsUserConnectionUsername
  | Strapi_UsersPermissionsUserConnectionEmail
  | Strapi_UsersPermissionsUserConnectionProvider
  | Strapi_UsersPermissionsUserConnectionConfirmed
  | Strapi_UsersPermissionsUserConnectionBlocked
  | Strapi_UsersPermissionsUserConnectionRole
  | Strapi_CreateUserPayload
  | Strapi_UpdateUserPayload
  | Strapi_DeleteUserPayload
  | Strapi_ComponentContentArticleList
  | Strapi_ComponentContentContactForm
  | Strapi_ComponentContentCta
  | Strapi_ComponentContentHero
  | Strapi_ComponentContentHighlight
  | Strapi_ComponentContentLatestArticleList
  | Strapi_ComponentContentMaps
  | Strapi_ComponentContentPersonContactList
  | Strapi_ComponentContentPersonList
  | Strapi_ComponentContentProjectList
  | Strapi_ComponentContentServiceList
  | Strapi_ComponentContentText
  | Strapi_ComponentSharedContactDetail
  | Strapi_ComponentSharedLink
  | Strapi_ComponentSharedService
  | Strapi_ComponentStructureMeta

export type Strapi_Navigation = {
  __typename?: 'STRAPI_Navigation'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  menu?: Maybe<Array<Maybe<Strapi_ComponentSharedLink>>>
}

export type Strapi_NavigationInput = {
  menu?: Maybe<Array<Maybe<Strapi_ComponentSharedLinkInput>>>
}

export type Strapi_Page = {
  __typename?: 'STRAPI_Page'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title: Scalars['String']
  content?: Maybe<Array<Maybe<Strapi_PageContentDynamicZone>>>
  slug?: Maybe<Scalars['String']>
  meta?: Maybe<Strapi_ComponentStructureMeta>
}

export type Strapi_PageAggregator = {
  __typename?: 'STRAPI_PageAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type Strapi_PageConnection = {
  __typename?: 'STRAPI_PageConnection'
  values?: Maybe<Array<Maybe<Strapi_Page>>>
  groupBy?: Maybe<Strapi_PageGroupBy>
  aggregate?: Maybe<Strapi_PageAggregator>
}

export type Strapi_PageConnection_Id = {
  __typename?: 'STRAPI_PageConnection_id'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_PageConnection>
}

export type Strapi_PageConnectionCreatedAt = {
  __typename?: 'STRAPI_PageConnectionCreatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_PageConnection>
}

export type Strapi_PageConnectionId = {
  __typename?: 'STRAPI_PageConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_PageConnection>
}

export type Strapi_PageConnectionMeta = {
  __typename?: 'STRAPI_PageConnectionMeta'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_PageConnection>
}

export type Strapi_PageConnectionSlug = {
  __typename?: 'STRAPI_PageConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_PageConnection>
}

export type Strapi_PageConnectionTitle = {
  __typename?: 'STRAPI_PageConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_PageConnection>
}

export type Strapi_PageConnectionUpdatedAt = {
  __typename?: 'STRAPI_PageConnectionUpdatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_PageConnection>
}

export type Strapi_PageContentDynamicZone =
  | Strapi_ComponentContentHero
  | Strapi_ComponentContentText
  | Strapi_ComponentContentHighlight
  | Strapi_ComponentContentServiceList
  | Strapi_ComponentContentPersonList
  | Strapi_ComponentContentContactForm
  | Strapi_ComponentContentLatestArticleList
  | Strapi_ComponentContentProjectList
  | Strapi_ComponentContentMaps
  | Strapi_ComponentContentPersonContactList
  | Strapi_ComponentContentCta
  | Strapi_ComponentContentArticleList

export type Strapi_PageGroupBy = {
  __typename?: 'STRAPI_PageGroupBy'
  id?: Maybe<Array<Maybe<Strapi_PageConnectionId>>>
  _id?: Maybe<Array<Maybe<Strapi_PageConnection_Id>>>
  createdAt?: Maybe<Array<Maybe<Strapi_PageConnectionCreatedAt>>>
  updatedAt?: Maybe<Array<Maybe<Strapi_PageConnectionUpdatedAt>>>
  title?: Maybe<Array<Maybe<Strapi_PageConnectionTitle>>>
  slug?: Maybe<Array<Maybe<Strapi_PageConnectionSlug>>>
  meta?: Maybe<Array<Maybe<Strapi_PageConnectionMeta>>>
}

export type Strapi_PageInput = {
  title: Scalars['String']
  content?: Maybe<Array<Scalars['STRAPI_PageContentDynamicZoneInput']>>
  slug?: Maybe<Scalars['String']>
  meta?: Maybe<Strapi_ComponentStructureMetaInput>
}

export type Strapi_Person = {
  __typename?: 'STRAPI_Person'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  name?: Maybe<Scalars['String']>
  job?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  image?: Maybe<Strapi_UploadFile>
}

export type Strapi_PersonAggregator = {
  __typename?: 'STRAPI_PersonAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type Strapi_PersonConnection = {
  __typename?: 'STRAPI_PersonConnection'
  values?: Maybe<Array<Maybe<Strapi_Person>>>
  groupBy?: Maybe<Strapi_PersonGroupBy>
  aggregate?: Maybe<Strapi_PersonAggregator>
}

export type Strapi_PersonConnection_Id = {
  __typename?: 'STRAPI_PersonConnection_id'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionCreatedAt = {
  __typename?: 'STRAPI_PersonConnectionCreatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionEmail = {
  __typename?: 'STRAPI_PersonConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionId = {
  __typename?: 'STRAPI_PersonConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionImage = {
  __typename?: 'STRAPI_PersonConnectionImage'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionJob = {
  __typename?: 'STRAPI_PersonConnectionJob'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionName = {
  __typename?: 'STRAPI_PersonConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionPhone = {
  __typename?: 'STRAPI_PersonConnectionPhone'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonConnectionUpdatedAt = {
  __typename?: 'STRAPI_PersonConnectionUpdatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_PersonConnection>
}

export type Strapi_PersonGroupBy = {
  __typename?: 'STRAPI_PersonGroupBy'
  id?: Maybe<Array<Maybe<Strapi_PersonConnectionId>>>
  _id?: Maybe<Array<Maybe<Strapi_PersonConnection_Id>>>
  createdAt?: Maybe<Array<Maybe<Strapi_PersonConnectionCreatedAt>>>
  updatedAt?: Maybe<Array<Maybe<Strapi_PersonConnectionUpdatedAt>>>
  name?: Maybe<Array<Maybe<Strapi_PersonConnectionName>>>
  job?: Maybe<Array<Maybe<Strapi_PersonConnectionJob>>>
  email?: Maybe<Array<Maybe<Strapi_PersonConnectionEmail>>>
  phone?: Maybe<Array<Maybe<Strapi_PersonConnectionPhone>>>
  image?: Maybe<Array<Maybe<Strapi_PersonConnectionImage>>>
}

export type Strapi_PersonInput = {
  name?: Maybe<Scalars['String']>
  job?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
}

export type Strapi_Project = {
  __typename?: 'STRAPI_Project'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['STRAPI_Date']>
  description?: Maybe<Scalars['String']>
  persons?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  image?: Maybe<Strapi_UploadFile>
  meta?: Maybe<Strapi_ComponentStructureMeta>
  images?: Maybe<Array<Maybe<Strapi_UploadFile>>>
}

export type Strapi_ProjectImagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type Strapi_ProjectAggregator = {
  __typename?: 'STRAPI_ProjectAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type Strapi_ProjectConnection = {
  __typename?: 'STRAPI_ProjectConnection'
  values?: Maybe<Array<Maybe<Strapi_Project>>>
  groupBy?: Maybe<Strapi_ProjectGroupBy>
  aggregate?: Maybe<Strapi_ProjectAggregator>
}

export type Strapi_ProjectConnection_Id = {
  __typename?: 'STRAPI_ProjectConnection_id'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionCategory = {
  __typename?: 'STRAPI_ProjectConnectionCategory'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionContent = {
  __typename?: 'STRAPI_ProjectConnectionContent'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionCreatedAt = {
  __typename?: 'STRAPI_ProjectConnectionCreatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionDate = {
  __typename?: 'STRAPI_ProjectConnectionDate'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionDescription = {
  __typename?: 'STRAPI_ProjectConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionId = {
  __typename?: 'STRAPI_ProjectConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionImage = {
  __typename?: 'STRAPI_ProjectConnectionImage'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionMeta = {
  __typename?: 'STRAPI_ProjectConnectionMeta'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionPersons = {
  __typename?: 'STRAPI_ProjectConnectionPersons'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionSlug = {
  __typename?: 'STRAPI_ProjectConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionTitle = {
  __typename?: 'STRAPI_ProjectConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectConnectionUpdatedAt = {
  __typename?: 'STRAPI_ProjectConnectionUpdatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_ProjectConnection>
}

export type Strapi_ProjectGroupBy = {
  __typename?: 'STRAPI_ProjectGroupBy'
  id?: Maybe<Array<Maybe<Strapi_ProjectConnectionId>>>
  _id?: Maybe<Array<Maybe<Strapi_ProjectConnection_Id>>>
  createdAt?: Maybe<Array<Maybe<Strapi_ProjectConnectionCreatedAt>>>
  updatedAt?: Maybe<Array<Maybe<Strapi_ProjectConnectionUpdatedAt>>>
  title?: Maybe<Array<Maybe<Strapi_ProjectConnectionTitle>>>
  content?: Maybe<Array<Maybe<Strapi_ProjectConnectionContent>>>
  date?: Maybe<Array<Maybe<Strapi_ProjectConnectionDate>>>
  description?: Maybe<Array<Maybe<Strapi_ProjectConnectionDescription>>>
  persons?: Maybe<Array<Maybe<Strapi_ProjectConnectionPersons>>>
  slug?: Maybe<Array<Maybe<Strapi_ProjectConnectionSlug>>>
  category?: Maybe<Array<Maybe<Strapi_ProjectConnectionCategory>>>
  image?: Maybe<Array<Maybe<Strapi_ProjectConnectionImage>>>
  meta?: Maybe<Array<Maybe<Strapi_ProjectConnectionMeta>>>
}

export type Strapi_ProjectInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['STRAPI_Date']>
  description?: Maybe<Scalars['String']>
  persons?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  meta?: Maybe<Strapi_ComponentStructureMetaInput>
}

export type Strapi_RoleInput = {
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type Strapi_UpdateArticleInput = {
  where?: Maybe<Strapi_InputId>
  data?: Maybe<Strapi_EditArticleInput>
}

export type Strapi_UpdateArticlePayload = {
  __typename?: 'STRAPI_updateArticlePayload'
  article?: Maybe<Strapi_Article>
}

export type Strapi_UpdateFooterInput = {
  data?: Maybe<Strapi_EditFooterInput>
}

export type Strapi_UpdateFooterPayload = {
  __typename?: 'STRAPI_updateFooterPayload'
  footer?: Maybe<Strapi_Footer>
}

export type Strapi_UpdateHomepageInput = {
  data?: Maybe<Strapi_EditHomepageInput>
}

export type Strapi_UpdateHomepagePayload = {
  __typename?: 'STRAPI_updateHomepagePayload'
  homepage?: Maybe<Strapi_Homepage>
}

export type Strapi_UpdateNavigationInput = {
  data?: Maybe<Strapi_EditNavigationInput>
}

export type Strapi_UpdateNavigationPayload = {
  __typename?: 'STRAPI_updateNavigationPayload'
  navigation?: Maybe<Strapi_Navigation>
}

export type Strapi_UpdatePageInput = {
  where?: Maybe<Strapi_InputId>
  data?: Maybe<Strapi_EditPageInput>
}

export type Strapi_UpdatePagePayload = {
  __typename?: 'STRAPI_updatePagePayload'
  page?: Maybe<Strapi_Page>
}

export type Strapi_UpdatePersonInput = {
  where?: Maybe<Strapi_InputId>
  data?: Maybe<Strapi_EditPersonInput>
}

export type Strapi_UpdatePersonPayload = {
  __typename?: 'STRAPI_updatePersonPayload'
  person?: Maybe<Strapi_Person>
}

export type Strapi_UpdateProjectInput = {
  where?: Maybe<Strapi_InputId>
  data?: Maybe<Strapi_EditProjectInput>
}

export type Strapi_UpdateProjectPayload = {
  __typename?: 'STRAPI_updateProjectPayload'
  project?: Maybe<Strapi_Project>
}

export type Strapi_UpdateRoleInput = {
  where?: Maybe<Strapi_InputId>
  data?: Maybe<Strapi_EditRoleInput>
}

export type Strapi_UpdateRolePayload = {
  __typename?: 'STRAPI_updateRolePayload'
  role?: Maybe<Strapi_UsersPermissionsRole>
}

export type Strapi_UpdateUserInput = {
  where?: Maybe<Strapi_InputId>
  data?: Maybe<Strapi_EditUserInput>
}

export type Strapi_UpdateUserPayload = {
  __typename?: 'STRAPI_updateUserPayload'
  user?: Maybe<Strapi_UsersPermissionsUser>
}

export type Strapi_UploadFile = {
  __typename?: 'STRAPI_UploadFile'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['STRAPI_JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['STRAPI_JSON']>
  related?: Maybe<Array<Maybe<Strapi_Morph>>>
  file?: Maybe<File>
}

export type Strapi_UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type Strapi_UploadFileAggregator = {
  __typename?: 'STRAPI_UploadFileAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<Strapi_UploadFileAggregatorSum>
  avg?: Maybe<Strapi_UploadFileAggregatorAvg>
  min?: Maybe<Strapi_UploadFileAggregatorMin>
  max?: Maybe<Strapi_UploadFileAggregatorMax>
}

export type Strapi_UploadFileAggregatorAvg = {
  __typename?: 'STRAPI_UploadFileAggregatorAvg'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type Strapi_UploadFileAggregatorMax = {
  __typename?: 'STRAPI_UploadFileAggregatorMax'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type Strapi_UploadFileAggregatorMin = {
  __typename?: 'STRAPI_UploadFileAggregatorMin'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type Strapi_UploadFileAggregatorSum = {
  __typename?: 'STRAPI_UploadFileAggregatorSum'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type Strapi_UploadFileConnection = {
  __typename?: 'STRAPI_UploadFileConnection'
  values?: Maybe<Array<Maybe<Strapi_UploadFile>>>
  groupBy?: Maybe<Strapi_UploadFileGroupBy>
  aggregate?: Maybe<Strapi_UploadFileAggregator>
}

export type Strapi_UploadFileConnection_Id = {
  __typename?: 'STRAPI_UploadFileConnection_id'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionAlternativeText = {
  __typename?: 'STRAPI_UploadFileConnectionAlternativeText'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionCaption = {
  __typename?: 'STRAPI_UploadFileConnectionCaption'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionCreatedAt = {
  __typename?: 'STRAPI_UploadFileConnectionCreatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionExt = {
  __typename?: 'STRAPI_UploadFileConnectionExt'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionFormats = {
  __typename?: 'STRAPI_UploadFileConnectionFormats'
  key?: Maybe<Scalars['STRAPI_JSON']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionHash = {
  __typename?: 'STRAPI_UploadFileConnectionHash'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionHeight = {
  __typename?: 'STRAPI_UploadFileConnectionHeight'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionId = {
  __typename?: 'STRAPI_UploadFileConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionMime = {
  __typename?: 'STRAPI_UploadFileConnectionMime'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionName = {
  __typename?: 'STRAPI_UploadFileConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionPreviewUrl = {
  __typename?: 'STRAPI_UploadFileConnectionPreviewUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionProvider = {
  __typename?: 'STRAPI_UploadFileConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionProvider_Metadata = {
  __typename?: 'STRAPI_UploadFileConnectionProvider_metadata'
  key?: Maybe<Scalars['STRAPI_JSON']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionSize = {
  __typename?: 'STRAPI_UploadFileConnectionSize'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionUpdatedAt = {
  __typename?: 'STRAPI_UploadFileConnectionUpdatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionUrl = {
  __typename?: 'STRAPI_UploadFileConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileConnectionWidth = {
  __typename?: 'STRAPI_UploadFileConnectionWidth'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<Strapi_UploadFileConnection>
}

export type Strapi_UploadFileGroupBy = {
  __typename?: 'STRAPI_UploadFileGroupBy'
  id?: Maybe<Array<Maybe<Strapi_UploadFileConnectionId>>>
  _id?: Maybe<Array<Maybe<Strapi_UploadFileConnection_Id>>>
  createdAt?: Maybe<Array<Maybe<Strapi_UploadFileConnectionCreatedAt>>>
  updatedAt?: Maybe<Array<Maybe<Strapi_UploadFileConnectionUpdatedAt>>>
  name?: Maybe<Array<Maybe<Strapi_UploadFileConnectionName>>>
  alternativeText?: Maybe<
    Array<Maybe<Strapi_UploadFileConnectionAlternativeText>>
  >
  caption?: Maybe<Array<Maybe<Strapi_UploadFileConnectionCaption>>>
  width?: Maybe<Array<Maybe<Strapi_UploadFileConnectionWidth>>>
  height?: Maybe<Array<Maybe<Strapi_UploadFileConnectionHeight>>>
  formats?: Maybe<Array<Maybe<Strapi_UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<Strapi_UploadFileConnectionHash>>>
  ext?: Maybe<Array<Maybe<Strapi_UploadFileConnectionExt>>>
  mime?: Maybe<Array<Maybe<Strapi_UploadFileConnectionMime>>>
  size?: Maybe<Array<Maybe<Strapi_UploadFileConnectionSize>>>
  url?: Maybe<Array<Maybe<Strapi_UploadFileConnectionUrl>>>
  previewUrl?: Maybe<Array<Maybe<Strapi_UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<Strapi_UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<
    Array<Maybe<Strapi_UploadFileConnectionProvider_Metadata>>
  >
}

export type Strapi_UserInput = {
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
}

export type Strapi_UserPermissionsPasswordPayload = {
  __typename?: 'STRAPI_UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type Strapi_UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Maybe<Scalars['String']>
}

export type Strapi_UsersPermissionsLoginPayload = {
  __typename?: 'STRAPI_UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: Strapi_UsersPermissionsMe
}

export type Strapi_UsersPermissionsMe = {
  __typename?: 'STRAPI_UsersPermissionsMe'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Strapi_UsersPermissionsMeRole>
}

export type Strapi_UsersPermissionsMeRole = {
  __typename?: 'STRAPI_UsersPermissionsMeRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Strapi_UsersPermissionsPermission = {
  __typename?: 'STRAPI_UsersPermissionsPermission'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  type: Scalars['String']
  controller: Scalars['String']
  action: Scalars['String']
  enabled: Scalars['Boolean']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<Strapi_UsersPermissionsRole>
}

export type Strapi_UsersPermissionsRegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type Strapi_UsersPermissionsRole = {
  __typename?: 'STRAPI_UsersPermissionsRole'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Strapi_UsersPermissionsPermission>>>
  users?: Maybe<Array<Maybe<Strapi_UsersPermissionsUser>>>
}

export type Strapi_UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type Strapi_UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['STRAPI_JSON']>
}

export type Strapi_UsersPermissionsRoleAggregator = {
  __typename?: 'STRAPI_UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type Strapi_UsersPermissionsRoleConnection = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnection'
  values?: Maybe<Array<Maybe<Strapi_UsersPermissionsRole>>>
  groupBy?: Maybe<Strapi_UsersPermissionsRoleGroupBy>
  aggregate?: Maybe<Strapi_UsersPermissionsRoleAggregator>
}

export type Strapi_UsersPermissionsRoleConnection_Id = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnection_id'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>
}

export type Strapi_UsersPermissionsRoleConnectionCreatedAt = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnectionCreatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>
}

export type Strapi_UsersPermissionsRoleConnectionDescription = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>
}

export type Strapi_UsersPermissionsRoleConnectionId = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>
}

export type Strapi_UsersPermissionsRoleConnectionName = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>
}

export type Strapi_UsersPermissionsRoleConnectionType = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>
}

export type Strapi_UsersPermissionsRoleConnectionUpdatedAt = {
  __typename?: 'STRAPI_UsersPermissionsRoleConnectionUpdatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>
}

export type Strapi_UsersPermissionsRoleGroupBy = {
  __typename?: 'STRAPI_UsersPermissionsRoleGroupBy'
  id?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnectionId>>>
  _id?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnection_Id>>>
  createdAt?: Maybe<
    Array<Maybe<Strapi_UsersPermissionsRoleConnectionCreatedAt>>
  >
  updatedAt?: Maybe<
    Array<Maybe<Strapi_UsersPermissionsRoleConnectionUpdatedAt>>
  >
  name?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnectionName>>>
  description?: Maybe<
    Array<Maybe<Strapi_UsersPermissionsRoleConnectionDescription>>
  >
  type?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnectionType>>>
}

export type Strapi_UsersPermissionsUser = {
  __typename?: 'STRAPI_UsersPermissionsUser'
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['STRAPI_DateTime']
  updatedAt: Scalars['STRAPI_DateTime']
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Strapi_UsersPermissionsRole>
}

export type Strapi_UsersPermissionsUserAggregator = {
  __typename?: 'STRAPI_UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type Strapi_UsersPermissionsUserConnection = {
  __typename?: 'STRAPI_UsersPermissionsUserConnection'
  values?: Maybe<Array<Maybe<Strapi_UsersPermissionsUser>>>
  groupBy?: Maybe<Strapi_UsersPermissionsUserGroupBy>
  aggregate?: Maybe<Strapi_UsersPermissionsUserAggregator>
}

export type Strapi_UsersPermissionsUserConnection_Id = {
  __typename?: 'STRAPI_UsersPermissionsUserConnection_id'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionBlocked = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionBlocked'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionConfirmed'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionCreatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionEmail = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionId = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionProvider = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionRole = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionRole'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionUpdatedAt'
  key?: Maybe<Scalars['STRAPI_DateTime']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserConnectionUsername = {
  __typename?: 'STRAPI_UsersPermissionsUserConnectionUsername'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>
}

export type Strapi_UsersPermissionsUserGroupBy = {
  __typename?: 'STRAPI_UsersPermissionsUserGroupBy'
  id?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionId>>>
  _id?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnection_Id>>>
  createdAt?: Maybe<
    Array<Maybe<Strapi_UsersPermissionsUserConnectionCreatedAt>>
  >
  updatedAt?: Maybe<
    Array<Maybe<Strapi_UsersPermissionsUserConnectionUpdatedAt>>
  >
  username?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionUsername>>>
  email?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionEmail>>>
  provider?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionProvider>>>
  confirmed?: Maybe<
    Array<Maybe<Strapi_UsersPermissionsUserConnectionConfirmed>>
  >
  blocked?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionBlocked>>>
  role?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionRole>>>
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid'
} & {
  maxHeight: ImageSharpFluid['presentationHeight']
  maxWidth: ImageSharpFluid['presentationWidth']
}

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizesFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>

export type PagesQueryQuery = { __typename?: 'Query' } & {
  allSitePage: { __typename?: 'SitePageConnection' } & {
    nodes: Array<{ __typename?: 'SitePage' } & Pick<SitePage, 'path'>>
  }
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    navigation?: Maybe<
      { __typename?: 'STRAPI_Navigation' } & Pick<Strapi_Navigation, 'id'> & {
          menu?: Maybe<
            Array<
              Maybe<
                { __typename?: 'STRAPI_ComponentSharedLink' } & LinkFragment
              >
            >
          >
        }
    >
  }
}

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_2_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    articles?: Maybe<
      Array<Maybe<{ __typename?: 'STRAPI_Article' } & ArticleTeaserFragment>>
    >
  }
}

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_3_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    footer?: Maybe<
      { __typename?: 'STRAPI_Footer' } & Pick<Strapi_Footer, 'id'> & {
          content?: Maybe<
            Array<
              Maybe<{ __typename?: 'STRAPI_ComponentContentCta' } & CtaFragment>
            >
          >
        }
    >
  }
}

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_4_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    articles?: Maybe<
      Array<Maybe<{ __typename?: 'STRAPI_Article' } & ArticleTeaserFragment>>
    >
  }
}

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_5_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    projects?: Maybe<
      Array<
        Maybe<
          { __typename?: 'STRAPI_Project' } & Pick<
            Strapi_Project,
            'id' | 'title' | 'slug' | 'category'
          > & {
              image?: Maybe<
                { __typename?: 'STRAPI_UploadFile' } & ImageFluidFragment
              >
            }
        >
      >
    >
  }
}

export type Unnamed_6_QueryVariables = Exact<{
  id: Scalars['ID']
}>

export type Unnamed_6_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    article?: Maybe<
      { __typename?: 'STRAPI_Article' } & Pick<
        Strapi_Article,
        'id' | 'title' | 'slug' | 'content' | 'createdAt'
      > & {
          meta?: Maybe<
            { __typename?: 'STRAPI_ComponentStructureMeta' } & MetaFragment
          >
          image?: Maybe<
            { __typename?: 'STRAPI_UploadFile' } & ImageFluidFragment
          >
          contentFiles?: Maybe<
            Array<
              Maybe<
                { __typename?: 'File' } & Pick<File, 'name'> & {
                    childImageSharp?: Maybe<
                      { __typename?: 'ImageSharp' } & {
                        fluid?: Maybe<
                          {
                            __typename?: 'ImageSharpFluid'
                          } & GatsbyImageSharpFluidFragment
                        >
                      }
                    >
                  } & FileFragment
              >
            >
          >
        }
    >
  }
}

export type Unnamed_7_QueryVariables = Exact<{
  id: Scalars['ID']
}>

export type Unnamed_7_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    page?: Maybe<
      { __typename?: 'STRAPI_Page' } & Pick<
        Strapi_Page,
        'id' | 'title' | 'slug'
      > & {
          meta?: Maybe<
            { __typename?: 'STRAPI_ComponentStructureMeta' } & MetaFragment
          >
          content?: Maybe<
            Array<
              Maybe<
                | ({
                    __typename?: 'STRAPI_ComponentContentHero'
                  } & HeroFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentText'
                  } & TextFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentHighlight'
                  } & HighlightFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentServiceList'
                  } & ServiceListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentPersonList'
                  } & PersonListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentContactForm'
                  } & ContactFormFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentLatestArticleList'
                  } & LatestArticleListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentProjectList'
                  } & ProjectListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentMaps'
                  } & MapsFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentPersonContactList'
                  } & PersonContactListFragment)
                | ({ __typename?: 'STRAPI_ComponentContentCta' } & CtaFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentArticleList'
                  } & ArticleListFragment)
              >
            >
          >
        }
    >
  }
}

export type Unnamed_8_QueryVariables = Exact<{
  id: Scalars['ID']
}>

export type Unnamed_8_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    project?: Maybe<
      { __typename?: 'STRAPI_Project' } & Pick<
        Strapi_Project,
        | 'id'
        | 'title'
        | 'slug'
        | 'date'
        | 'description'
        | 'category'
        | 'persons'
        | 'content'
      > & {
          meta?: Maybe<
            { __typename?: 'STRAPI_ComponentStructureMeta' } & MetaFragment
          >
          image?: Maybe<
            { __typename?: 'STRAPI_UploadFile' } & ImageFluidFragment
          >
          images?: Maybe<
            Array<
              Maybe<{ __typename?: 'STRAPI_UploadFile' } & ImageFluidFragment>
            >
          >
        }
    >
  }
}

export type LinkFragment = { __typename?: 'STRAPI_ComponentSharedLink' } & Pick<
  Strapi_ComponentSharedLink,
  'id' | 'label' | 'newWindow' | 'url'
>

export type FileFragment = { __typename?: 'File' } & Pick<
  File,
  'id' | 'publicURL'
>

export type ImageFragment = { __typename?: 'STRAPI_UploadFile' } & Pick<
  Strapi_UploadFile,
  'id' | 'alternativeText' | 'url'
>

export type ImageFluidFragment = { __typename?: 'STRAPI_UploadFile' } & {
  file?: Maybe<
    { __typename?: 'File' } & {
      childImageSharp?: Maybe<
        { __typename?: 'ImageSharp' } & {
          fluid?: Maybe<
            { __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluidFragment
          >
        }
      >
    } & FileFragment
  >
} & ImageFragment

export type MetaFragment = {
  __typename?: 'STRAPI_ComponentStructureMeta'
} & Pick<
  Strapi_ComponentStructureMeta,
  'id' | 'metaDescription' | 'metaTitle'
> & {
    metaImage?: Maybe<
      { __typename?: 'STRAPI_UploadFile' } & {
        file?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                resize?: Maybe<
                  { __typename?: 'ImageSharpResize' } & Pick<
                    ImageSharpResize,
                    'src'
                  >
                >
              }
            >
          } & FileFragment
        >
      } & ImageFragment
    >
  }

export type CtaFragment = { __typename?: 'STRAPI_ComponentContentCta' } & Pick<
  Strapi_ComponentContentCta,
  'id' | 'title' | 'description'
> & {
    link?: Maybe<{ __typename?: 'STRAPI_ComponentSharedLink' } & LinkFragment>
  }

export type HeroFragment = {
  __typename?: 'STRAPI_ComponentContentHero'
} & Pick<Strapi_ComponentContentHero, 'id' | 'title' | 'description'> & {
    link?: Maybe<{ __typename?: 'STRAPI_ComponentSharedLink' } & LinkFragment>
    image?: Maybe<
      { __typename?: 'STRAPI_UploadFile' } & {
        file?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                fluid?: Maybe<
                  {
                    __typename?: 'ImageSharpFluid'
                  } & GatsbyImageSharpFluidFragment
                >
              }
            >
          } & FileFragment
        >
      } & ImageFragment
    >
  }

export type TextFragment = {
  __typename?: 'STRAPI_ComponentContentText'
} & Pick<Strapi_ComponentContentText, 'id' | 'subtitle' | 'text' | 'title'>

export type HighlightFragment = {
  __typename?: 'STRAPI_ComponentContentHighlight'
} & Pick<
  Strapi_ComponentContentHighlight,
  'id' | 'reverse' | 'subtitle' | 'text' | 'title'
> & {
    image?: Maybe<
      { __typename?: 'STRAPI_UploadFile' } & {
        file?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                fluid?: Maybe<
                  {
                    __typename?: 'ImageSharpFluid'
                  } & GatsbyImageSharpFluidFragment
                >
              }
            >
          } & FileFragment
        >
      } & ImageFragment
    >
    link?: Maybe<{ __typename?: 'STRAPI_ComponentSharedLink' } & LinkFragment>
  }

export type ServiceFragment = {
  __typename?: 'STRAPI_ComponentSharedService'
} & Pick<Strapi_ComponentSharedService, 'description' | 'id' | 'title'> & {
    icon?: Maybe<
      { __typename?: 'STRAPI_UploadFile' } & {
        file?: Maybe<{ __typename?: 'File' } & FileFragment>
      } & ImageFragment
    >
  }

export type ServiceListFragment = {
  __typename?: 'STRAPI_ComponentContentServiceList'
} & Pick<Strapi_ComponentContentServiceList, 'id' | 'subtitle' | 'title'> & {
    services?: Maybe<
      Array<
        Maybe<
          { __typename?: 'STRAPI_ComponentSharedService' } & ServiceFragment
        >
      >
    >
  }

export type PersonFragment = { __typename?: 'STRAPI_Person' } & Pick<
  Strapi_Person,
  'email' | 'id' | 'job' | 'name' | 'phone'
> & {
    image?: Maybe<
      { __typename?: 'STRAPI_UploadFile' } & {
        file?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                fluid?: Maybe<
                  {
                    __typename?: 'ImageSharpFluid'
                  } & GatsbyImageSharpFluidFragment
                >
              }
            >
          } & FileFragment
        >
      } & ImageFragment
    >
  }

export type PersonListFragment = {
  __typename?: 'STRAPI_ComponentContentPersonList'
} & Pick<Strapi_ComponentContentPersonList, 'id' | 'subtitle' | 'title'> & {
    persons?: Maybe<
      Array<Maybe<{ __typename?: 'STRAPI_Person' } & PersonFragment>>
    >
  }

export type PersonContactListFragment = {
  __typename?: 'STRAPI_ComponentContentPersonContactList'
} & Pick<
  Strapi_ComponentContentPersonContactList,
  'id' | 'title' | 'subtitle'
> & {
    persons?: Maybe<
      Array<Maybe<{ __typename?: 'STRAPI_Person' } & PersonFragment>>
    >
  }

export type LatestArticleListFragment = {
  __typename?: 'STRAPI_ComponentContentLatestArticleList'
} & Pick<
  Strapi_ComponentContentLatestArticleList,
  'id' | 'title' | 'subtitle' | 'limit'
>

export type ArticleListFragment = {
  __typename?: 'STRAPI_ComponentContentArticleList'
} & Pick<Strapi_ComponentContentArticleList, 'id' | 'title' | 'subtitle'>

export type ArticleTeaserFragment = { __typename?: 'STRAPI_Article' } & Pick<
  Strapi_Article,
  'id' | 'title' | 'slug' | 'createdAt' | 'summary'
> & { image?: Maybe<{ __typename?: 'STRAPI_UploadFile' } & ImageFluidFragment> }

export type MapsFragment = {
  __typename?: 'STRAPI_ComponentContentMaps'
} & Pick<Strapi_ComponentContentMaps, 'id' | 'embedUrl'>

export type ContactFormFragment = {
  __typename?: 'STRAPI_ComponentContentContactForm'
} & Pick<Strapi_ComponentContentContactForm, 'id' | 'description' | 'title'> & {
    contactDetail?: Maybe<
      Array<
        Maybe<
          { __typename?: 'STRAPI_ComponentSharedContactDetail' } & Pick<
            Strapi_ComponentSharedContactDetail,
            'id' | 'content' | 'title'
          >
        >
      >
    >
  }

export type ProjectListFragment = {
  __typename?: 'STRAPI_ComponentContentProjectList'
} & Pick<Strapi_ComponentContentProjectList, 'id' | 'subtitle' | 'title'>

export type Unnamed_9_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_9_Query = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<
          SiteSiteMetadata,
          'title' | 'titleTemplate' | 'description'
        >
      >
    }
  >
}

export type Unnamed_10_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_10_Query = { __typename?: 'Query' } & {
  strapi: { __typename?: 'STRAPI' } & {
    homepage?: Maybe<
      { __typename?: 'STRAPI_Homepage' } & Pick<
        Strapi_Homepage,
        'id' | 'title'
      > & {
          meta?: Maybe<
            { __typename?: 'STRAPI_ComponentStructureMeta' } & MetaFragment
          >
          content?: Maybe<
            Array<
              Maybe<
                | ({ __typename?: 'STRAPI_ComponentContentCta' } & CtaFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentHero'
                  } & HeroFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentHighlight'
                  } & HighlightFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentServiceList'
                  } & ServiceListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentText'
                  } & TextFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentPersonList'
                  } & PersonListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentContactForm'
                  } & ContactFormFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentLatestArticleList'
                  } & LatestArticleListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentProjectList'
                  } & ProjectListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentMaps'
                  } & MapsFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentPersonContactList'
                  } & PersonContactListFragment)
                | ({
                    __typename?: 'STRAPI_ComponentContentArticleList'
                  } & ArticleListFragment)
              >
            >
          >
        }
    >
  }
}
