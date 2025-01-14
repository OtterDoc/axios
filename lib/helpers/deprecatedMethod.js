'use strict';

/*eslint no-console:0*/

/**
 * Logs a warning message to the console indicating that a deprecated method is being used.
 *
 * @param {string} method - The name of the deprecated method.
 * @param {string} [instead] - The alternate method to use if applicable.
 * @param {string} [docs] - The documentation URL to get further details.
 *
 * @returns {void}
 */
export default function deprecatedMethod(method, instead, docs) {
  try {
    console.warn(
      'DEPRECATED method `' + method + '`.' +
      (instead ? ' Use `' + instead + '` instead.' : '') +
      ' This method will be removed in a future release.');

    if (docs) {
      console.warn('For more information about usage see ' + docs);
    }
  } catch (e) { /* Ignore */ }
}
