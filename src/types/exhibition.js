/**
 * @typedef {Object} ExhibitionTour
 * @property {string} date
 * @property {string} time
 * @property {string} guide
 */

/**
 * @typedef {Object} ExhibitionEvent
 * @property {string} name
 * @property {string} date
 * @property {string} time
 */

/**
 * @typedef {Object} ExhibitionItem
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} date
 * @property {string} location
 * @property {string} image
 * @property {string} description
 * @property {string} curator
 * @property {string[]} artists
 * @property {string[]} additionalImages
 * @property {string[]} tags
 * @property {string} [category]
 * @property {string} [openingHours]
 * @property {string} [ticketPrice]
 * @property {ExhibitionTour[]} [upcomingTours]
 * @property {ExhibitionEvent[]} [liveEvents]
 * @property {boolean} [featured]
 */

/**
 * @typedef {Object} ExhibitionCategory
 * @property {string} category
 * @property {ExhibitionItem[]} items
 */
