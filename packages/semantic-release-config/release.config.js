const releaseRules = [
  {
    type: 'build',
    release: 'patch',
  },
  {
    type: 'chore',
    release: 'patch',
  },
  {
    type: 'ci',
    release: 'patch',
  },
  {
    type: 'docs',
    release: 'patch',
  },
  {
    type: 'refactor',
    release: 'patch',
  },
  {
    type: 'style',
    release: 'patch',
  },
  {
    type: 'test',
    release: 'patch',
  },
];

module.exports = {
  branches: 'master',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules,
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        addReleases: 'bottom',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
      },
    ],
  ],
};
