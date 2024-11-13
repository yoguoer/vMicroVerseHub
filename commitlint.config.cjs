const fs = require("node:fs");
const path = require("node:path");
const scopes = fs
  .readdirSync(path.resolve(__dirname, "packages"), { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name.replace(/s$/, ""));

/** @type {import('czg').UserConfig} */
module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "subject-case": [0, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [0, "never"],
    "type-empty": [2, "never"],
    "scope-enum": [2, "always", [...scopes]],
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新增功能
        "fix", // 修复缺陷
        "docs", // 文档变更
        "style", // 代码格式
        "refactor", // 代码重构
        "perf", // 性能优化
        "test", // 添加测试
        "build", // 构建相关
        "ci", // 持续集成修改
        "revert", // 回滚到上一个版本
        "wip", // 开发中
        "chore" // 构建过程或辅助工具的变动
      ]
    ]
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefix: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?"

      // 中文对照
      // type: "选择你要提交的类型 :",
      // scope: "选择一个提交范围（可选）:",
      // customScope: "请输入自定义的提交范围 :",
      // subject: "填写简短精炼的变更描述 :\n",
      // body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      // breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixSelect: "选择关联issue前缀（可选）:",
      // customFooterPrefix: "输入自定义issue前缀 :",
      // footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      // confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      {
        value: "feat",
        name: "feat:      ✨  A new feature",
        emoji: "✨"
      },
      {
        value: "fix",
        name: "fix:       🐛  A bug fix",
        emoji: "🐛"
      },
      {
        value: "docs",
        name: "docs:      📚  Documentation only changes",
        emoji: "📚"
      },
      {
        value: "style",
        name: "style:     🎨  Changes that do not affect the meaning of the code",
        emoji: "🎨"
      },
      {
        value: "refactor",
        name: "refactor:  🌈  A code change that neither fixes a bug nor adds a feature",
        emoji: "🌈"
      },
      {
        value: "perf",
        name: "perf:      ⚡️  A code change that improves performance",
        emoji: "⚡️"
      },
      {
        value: "test",
        name: "test:      🧪  Adding missing tests or correcting existing tests",
        emoji: "🧪"
      },
      {
        value: "build",
        name: "build:     📦  Changes that affect the build system or external dependencies",
        emoji: "📦"
      },
      {
        value: "ci",
        name: "ci:        🎡  Changes to our CI configuration files and scripts",
        emoji: "🎡"
      },
      {
        value: "revert",
        name: "revert:    ⏪️  Reverts a previous commit",
        emoji: "⏪️"
      },
      {
        value: "wip",
        name: "wip:       🕔  Work in process",
        emoji: "🕔"
      },
      {
        value: "chore",
        name: "chore:     🔨  Other changes that don't modify src or test files",
        emoji: "🔨"
      }

      // 中文对照
      // { value: "feat", name: "特性:   ✨  新增功能", emoji: "✨" },
      // { value: "fix", name: "修复:   🐛  修复缺陷", emoji: "🐛" },
      // { value: "docs", name: "文档:   📚  文档变更", emoji: "📚" },
      // { value: "style", name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
      // { value: "refactor", name: "重构:   🌈  代码重构（不包括 bug 修复、功能新增）", emoji: "🌈" },
      // { value: "perf", name: "性能:    ⚡️  性能优化", emoji: "⚡️" },
      // { value: "test", name: "测试:   🧪  添加疏漏测试或已有测试改动", emoji: "🧪" },
      // { value: "build", name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
      // { value: "ci", name: "集成:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
      // { value: "revert", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
      // { value: "wip", name: "开发:   🕔  正在开发中", emoji: "🕔" },
      // { value: "chore", name: "其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" },
    ],
    useEmoji: true,
    emojiAlign: "center",
    skipQuestions: ["body", "breaking", "footer", "footerPrefix"],
    allowCustomScopes: true
  }
};
