# tsconfig

> Shared [Typescript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) of my projects.

## Install
```shell
npm install --save-dev typescript @oxiran/tsconfig
```

## Usage
Join in the `extends` of the `tsconfig.json` file.
```json
{
	"extends": "@oxiran/tsconfig",
	"compilerOptions": {
		"outDir": "dist"
	}
}
```
