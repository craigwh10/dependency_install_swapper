import { checkReadmeContainsCommand } from '@chrome/src/content/readme/checkReadmeContainsCommand'

describe('stringContainsTheseWords', () => {
  it.each([
    {
      string: 'yarn add -D eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    },
    {
      string: 'yarn add --dev eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    },
    {
      string: 'yarn add --save-dev eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    }
  ])('[checking dev dep] $string contains $word', ({ string, word }) => {
    expect(
      checkReadmeContainsCommand(string, word, true)
    ).toEqual(true)
  })

  it.each([
    {
      string: 'yarn add eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    }
  ])('[checking dev dep] $string contains $word but no dev dep flag', ({ string, word }) => {
    expect(
      checkReadmeContainsCommand(string, word, true)
    ).toEqual(false)
  })

  it.each([
    {
      string: 'yarn add eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    }
  ])('[not checking dev dep] $string contains $word but no dev dep flag', ({ string, word }) => {
    expect(
      checkReadmeContainsCommand(string, word, false)
    ).toEqual(true)
  })

  it.each([
    {
      string: 'yarn add -D eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    },
    {
      string: 'yarn add --save-dev eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    },
    {
      string: 'yarn add --dev eslint-plugin-jest',
      word: 'eslint-plugin-jest'
    }
  ])('[not checking dev dep] checking for $word $string returns false', ({ string, word }) => {
    expect(
      checkReadmeContainsCommand(string, word, false)
    ).toEqual(false)
  })
})
