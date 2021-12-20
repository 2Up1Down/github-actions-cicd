module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/2Up1Down/github-actions-cicd",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
    ]
}