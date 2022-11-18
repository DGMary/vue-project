module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(emittery)/)'
  ],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
}