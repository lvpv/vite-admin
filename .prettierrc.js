module.exports = {
  printWidth: 100, // 一行最多 100 字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 不使用 tab 缩进，而使用空格
  semi: false, // 行尾不需要有分号
  singleQuote: true, // 使用单引号代替双引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  jsxSingleQuote: false, // jsx不使用单引号，而使用双引号
  trailingComma: 'none', // 末尾不使用逗号
  bracketSpacing: true, // 大括号内的首尾需要空格 { foo: bar }
  arrowParens: 'avoid', // 箭头函数，只有一个参数的时候，不需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容,从文件头开始
  rangeEnd: Infinity, //到文件末尾结束
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @format
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  vueIndentScriptAndStyle: true, // vue script和style标签缩进,
  endOfLine: 'lf', // 换行符使用 lf
  embeddedLanguageFormatting: 'off' // 不格式化文件中嵌入的引用代码。
}
