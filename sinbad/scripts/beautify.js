const jsBeautify = require('js-beautify')['js_beautify'];
const fs = require('fs');
const glob = require('glob');

const options = {
  "brace_style": "collapse,preserve-inline",
  "break_chained_methods": false,
  "e4x": false,
  "end_with_newline": false,
  "indent_char": " ",
  "indent_level": 0,
  "indent_size": 2,
  "indent_with_tabs": false,
  "jslint_happy": false,
  "keep_array_indentation": false,
  "keep_function_indentation": false,
  "max_preserve_newlines": 0,
  "preserve_newlines": true,
  "space_after_anon_function": false,
  "space_before_conditional": true,
  "space_in_empty_paren": false,
  "space_in_paren": false,
  "unescape_strings": false,
  "wrap_line_length": 0
};

glob('!(node_modules)/**/*.js', { absolute: true }, (er, files) => {
  console.log("[INFO] Running js-beautify");
  files.forEach(file => {
    const data = fs.readFileSync(file, 'utf8');
    const nextData = jsBeautify(data, options);
    fs.writeFileSync(file, nextData, 'utf8');
  });
  console.log("[INFO] Done js-beautfy");
});