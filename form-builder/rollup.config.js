// Import rollup plugins
import html from '@web/rollup-plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';

export default {
  plugins: [

    html({
      input: './demo/index.html',
    }),
    // Resolve bare module specifiers to relative paths
    resolve(),
    summary(),
  ],
  output: {
    dir: 'build',
  },
  preserveEntrySignatures: 'strict',
};