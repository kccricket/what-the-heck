# vue-plugin-test

I have a simple Vue plugin in `test-plugin.ts` that adds `$myPlugin` as a property to the `Vue` prototype. The types for `$myPlugin` are defined in `test-plugin.d.ts`.

## The problem

Despite the following erorr on build, the application runs as expected.

```Text
ERROR in /Users/kccricket/Projects/what-the-heck/vue-plugin-test/src/components/HelloWorld.vue
43:21 Property '$myPlugin' does not exist on type 'CombinedVueInstance<Vue, { one: number; }, {}, {}, Readonly<{ msg: string; }>>'.
    41 |   },
    42 |   created(): void {
  > 43 |     this.one = this.$myPlugin.one;
       |                     ^
    44 |   },
    45 | });
    46 | </script>
```

## My question

Why do the build process and intellisense in vscode show this erorr?

## Project setup

```Text
yarn install
```

### Compiles and hot-reloads for development

```Shell
yarn run serve
```

### Compiles and minifies for production

```Shell
yarn run build
```

### Lints and fixes files

```Shell
yarn run lint
```
