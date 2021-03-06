/**
 * Creates a `prompt` action.  `yield` a `prompt` action read input form a user from the command line.
 * @param {string} question prompt for the user
 * @returns {Object} an action of type `prompt`.
 * @example //  Test It
 * const { testIt } = require('effects-as-data/test')
 * const { actions } = require('effects-as-data/node')
 *
 * const testExample = testIt(example)
 *
 * describe('example()', () => {
 *   it('should prompt the user', testExample(() => {
 *     return [
 *       [null, actions.prompt("What's your favorite color?")],
 *       ['green', success('green')]
 *     ]
 *   }))
 * })
 *
 * @example //  Write It
 * const { actions } = require('effects-as-data/node')
 *
 * function * example () {
 *   const result = yield actions.prompt("What's your favorite color?")
 *   return result
 * }
 *
 * @example //  Run It
 * const { handlers, run } = require('effects-as-data/node')
 *
 * run(handlers, example).then((result) => {
 *   result.payload === 'green' //  true, if the user typed "green" on the command line.
 * })
 */
function prompt(question) {
  return {
    type: 'prompt',
    question,
  }
}

module.exports = {
  prompt,
}
