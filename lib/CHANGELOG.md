# esbuild-plugin-react18

## 0.2.6

### Patch Changes

- 96c9c38: Remove peer dependencies as not needed.

## 0.2.5

### Patch Changes

- Do not build snap files.

## 0.2.4

### Patch Changes

- Do not remove ';' when require statement starts with ','.

## 0.2.3

### Patch Changes

- Use negative lookbehind to avoid renaming css variables

## 0.2.2

### Patch Changes

- d08f4cf: Add option to disableJSXRequireDedup.

  In case you face any errors, or you want to speed up build a bit, try disabling deduplication of require("react/jsx-runtime")

## 0.2.2-beta.0

### Patch Changes

- d08f4cf: Add option to disableJSXRequireDedup.

  In case you face any errors, or you want to speed up build a bit, try disabling deduplication of require("react/jsx-runtime")

## 0.2.1

### Patch Changes

- Handle edgecase where jsx import ends with ',' in place of ';'

## 0.2.0

### Minor Changes

- ecb89d5: Remove duplicate require("react/jsx-runtime")

## 0.2.0-beta.0

### Minor Changes

- ecb89d5: Remove duplicate require("react/jsx-runtime")

## 0.1.6

### Patch Changes

- 420d4ad: Add ESM build and minify CJS build

## 0.1.5

### Patch Changes

- Fix: Avoid regexp creating havoc with CSS imports when no empty chunks found.

## 0.1.4

### Patch Changes

- Fix esm build for non minified cases

## 0.1.3

### Patch Changes

- Optimise and touch up

## 0.1.2

### Patch Changes

- Remove empty chunk import instead

## 0.1.1

### Patch Changes

- Fix ESM default chunks

## 0.1.0

### Minor Changes

- Support module level "use server" directive

## 0.0.7

### Patch Changes

- Add provenance

## 0.0.6

### Patch Changes

- Move repo

## 0.0.5

### Patch Changes

- Remove test build files from publish artefects

## 0.0.4

### Patch Changes

- Fix #8 initialise plugin without passing options

## 0.0.3

### Patch Changes

- e5d3a58: remove data-testid as last item in sourceReplacePatterns. This will reduce the onLoad conflicts significantly as this pattern matches all the js, ts, jsx and tsx files.
- Fix buildReplacePatterns to work on all esbuild setups
- e186209: Fix ignorePatterns with contentPatterns

## 0.0.2

### Patch Changes

- Update scritps

## 0.0.1

### Patch Changes

- Update readme
