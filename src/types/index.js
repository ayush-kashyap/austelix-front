// =============================================================================
// Domain shapes as JSDoc typedefs. There are no runtime types in JS, but these
// give editor intellisense and document the contract the services/hooks share.
// Import with: /** @typedef {import('@/types').Article} Article */
// =============================================================================

/** @typedef {'draft'|'published'|'scheduled'} ArticleStatus */
/** @typedef {'pending'|'approved'|'spam'} CommentStatus */
/** @typedef {'admin'|'editor'|'writer'|'viewer'} UserRole */
/** @typedef {'active'|'invited'|'suspended'} UserStatus */
/** @typedef {'image'|'pdf'|'other'} MediaType */

/**
 * @typedef {Object} SeoMeta
 * @property {string} metaTitle
 * @property {string} metaDescription
 * @property {string} [canonicalUrl]
 * @property {string} [ogImage]
 * @property {string[]} keywords
 */

/**
 * @typedef {Object} AuthorRef
 * @property {string} id
 * @property {string} name
 * @property {string} [avatar]
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [description]
 * @property {string|null} parentId
 * @property {number} articleCount
 */

/**
 * @typedef {Object} Tag
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {number} articleCount
 */

/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} slug
 * @property {string} excerpt
 * @property {string} [featuredImage]
 * @property {Category} category
 * @property {Tag[]} tags
 * @property {AuthorRef} author
 * @property {Array<Object>} content   // structured ContentBlock[]
 * @property {ArticleStatus} status
 * @property {number} views
 * @property {SeoMeta} seo
 * @property {string|null} publishedAt
 * @property {string|null} scheduledFor
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} MediaFile
 * @property {string} id
 * @property {string} name
 * @property {string} url
 * @property {MediaType} type
 * @property {string} mimeType
 * @property {number} size
 * @property {string} uploadedAt
 */

/**
 * @typedef {Object} Comment
 * @property {string} id
 * @property {{name:string,email:string,avatar?:string}} author
 * @property {string} articleId
 * @property {string} articleTitle
 * @property {string} body
 * @property {CommentStatus} status
 * @property {string} createdAt
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} [avatar]
 * @property {UserRole} role
 * @property {UserStatus} status
 * @property {string} createdAt
 */

/**
 * @typedef {Object} ArticleQuery
 * @property {string} [search]
 * @property {ArticleStatus|'all'} [status]
 * @property {string|'all'} [categoryId]
 * @property {string|'all'} [authorId]
 * @property {'newest'|'oldest'|'most-viewed'|'title'} [sort]
 * @property {number} [page]
 * @property {number} [pageSize]
 */

/**
 * @template T
 * @typedef {Object} PaginatedResponse
 * @property {T[]} data
 * @property {number} page
 * @property {number} pageSize
 * @property {number} total
 * @property {number} totalPages
 */

export {};
