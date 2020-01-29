# codegen-builder-contrib
A repo and tutorial to help build new codegens for Hasura (CLI and console).
Currently, the Hasura CLI and console only do codegen for actions. This is roughly how actions codegen works:
1. `hasura actions codegen <action-name>` or the codegen tab on the console will invoke the codegen
> Insert image
2. This will invoke the codegen that was set in the `config.yaml` for the CLI, or the user selected dropdown in the console
> Insert image
3. The hasura CLI and console invoke the codegen script. 
4. Any actions codegen script takes the following input:
  - action name
  - action SDL
  - derive mutation payload
4. The codegen script should output an array of files:
  - [{name: "<filename-1.ext>", content: "<string>"}, {name: "<filename-2.ext>", content: "<string>"}...]
5. The hasura CLI or console then print the files in the directory or render the files and contents in the console UI respectively

## Setup your environment

1. Clone this repo
2. Run Hasura & Postgres
3. Get the latest version of the Hasura CLI (or get the binaries from this repo)
4. Update your cli-ext plugin to the latest version

## Load the initial schema and metadata to prepare for development

There are a few tables and actions already defined. Load them up:
1. `hasura migrate apply`
2. `hasura metadata apply`

## Run the sample codegen

Let's say our new codegen is called: my-new-codegen (ideally, language-framework-provider is a good naming scheme).

1. Run `hasura actions codegen createUser`
2. You should see a `codegen-output/createUser.md` and a `codegen-output/hasuraCustomTypes.md`

This codegen uses a Javascript script that is present in `my-new-codegen/actions-codegen.js`

## Start playing with the `actions-codegen.js` script

Open up the `actions-codegen.js` file and start building your own codegen!

For reference, check these codegens for [nodejs-zeit]() and [typescript-zeit]() out.

Limitations:
- Because the codegen script is loaded dynamically, it can't load arbitrary dependencies. 
- If you want to load external dependecies, you can require them and bundle them into a `bundle`.
- Codegen scripts support ES6
