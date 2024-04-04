import { defineConfig } from '@kubb/core';
import { definePlugin as createSwagger } from '@kubb/swagger';
import { definePlugin as createSwaggerTanstackQuery } from '@kubb/swagger-tanstack-query';
import { definePlugin as createSwaggerTS } from '@kubb/swagger-ts';
import { definePlugin as createSwaggerZod } from '@kubb/swagger-zod';

export default defineConfig({
  root: '.',
  input: {
    path: 'https://dro.psypra.com/api/profiles-json',
  },
  output: {
    path: './src/shared/api/generated',
    clean: true,
  },
  hooks: {
    done: ['prettier --write "**/*.{ts,tsx}"'],
  },
  plugins: [
    createSwagger({ output: false, validate: true }),
    createSwaggerTS({
      output: {
        path: './models',
      },
      group: {
        type: 'tag',
      },
      enumType: 'asPascalConst',
      dateType: 'date',
    }),
    createSwaggerTanstackQuery({
      output: {
        path: './hooks',
      },
      group: { type: 'tag' },
      client: { importPath: '../../../client' },
      framework: 'react',
      suspense: true,
    }),
    createSwaggerZod({
      output: {
        path: './zod',
      },
      group: { type: 'tag' },
    }),
  ],
});
