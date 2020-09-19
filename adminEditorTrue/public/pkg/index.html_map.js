require.resourceMap({
  "res": {
    "node_modules/monaco-editor/esm/vs/nls": {
      "url": "/node_modules/monaco-editor/esm/vs/nls.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/arrays": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/arrays.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/types": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/types.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/objects": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/objects.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/platform": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/platform.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/errors": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/errors.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/functional": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/functional.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/lifecycle": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/iterator": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/iterator.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/linkedList": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/linkedList.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/iterator"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/event": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/event.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/functional",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/linkedList"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/cancellation": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/cancellation.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/keyCodes": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/uri": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/uri.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/position": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/position.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/range": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/range.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/position"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/selection": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/token": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/token.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/standalone/promise-polyfill/polyfill",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/core/token",
        "node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/browser": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/browser.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/event": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/event.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/iframe": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/iframe.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/iframe",
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/async": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/async.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/dom": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/dom.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/event",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/arrays"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/marshalling": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/marshalling.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/uri"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/network": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/network.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/strings": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/strings.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/process": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/process.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/path": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/path.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/process"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/extpath": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/extpath.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/path"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/resources": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/resources.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/extpath",
        "node_modules/monaco-editor/esm/vs/base/common/path",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/commands/common/commands": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/linkedList"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/services/openerService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/services/openerService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/marshalling",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/linkedList"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/assert": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/assert.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffNavigator": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffNavigator.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/assert",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/config/fontInfo": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/config/fontInfo.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/editorCommon": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/editorCommon.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/map": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/map.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/glob": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/glob.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/extpath",
        "node_modules/monaco-editor/esm/vs/base/common/path",
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/languageSelector": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/languageSelector.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/glob"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/modelService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/modelService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/languageFeatureRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/languageFeatureRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageSelector",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/tokenizationRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/tokenizationRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/map"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageFeatureRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/tokenizationRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/token",
        "node_modules/monaco-editor/esm/vs/editor/common/modes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/resolverService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/worker/defaultWorkerFactory": {
      "url": "/node_modules/monaco-editor/esm/vs/base/worker/defaultWorkerFactory.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/characterPair": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports/characterPair.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/richEditBrackets": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports/richEditBrackets.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/electricCharacter": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports/electricCharacter.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/richEditBrackets"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/indentRules": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports/indentRules.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/onEnter": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports/onEnter.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/characterPair",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/electricCharacter",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/indentRules",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/onEnter",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/richEditBrackets"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/diff/diffChange": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/diff/diff": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/diff/diff.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/diff/diffChange"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/diff/diff",
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/uint": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/uint.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/uint"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/uint"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/uint"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/diff/diff",
        "node_modules/monaco-editor/esm/vs/base/common/iterator",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer",
        "node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel",
        "node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport",
        "node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/resourceConfiguration": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/resourceConfiguration.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/log/common/log": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/log/common/log.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/stopwatch": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerServiceImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerServiceImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker",
        "node_modules/monaco-editor/esm/vs/base/worker/defaultWorkerFactory",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resourceConfiguration",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/platform/log/common/log",
        "node_modules/monaco-editor/esm/vs/base/common/stopwatch"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/webWorker": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/webWorker.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerServiceImpl"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/lineTokens": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/lineTokens.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/modes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchCommon": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchCommon.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchLexer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchLexer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/token",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchCommon"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/colorizer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/colorizer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/lineTokens",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchLexer"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/severity": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/severity.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/editorBrowser": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/editorBrowser.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/editorCommon"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/registry/common/platform": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/assert"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/jsonschemas/common/jsonContributionRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/jsonschemas/common/jsonContributionRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/platform/jsonschemas/common/jsonContributionRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/config/commonEditorConfig": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/config/commonEditorConfig.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom",
        "node_modules/monaco-editor/esm/vs/editor/common/config/fontInfo",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationModels": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationModels.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/keybinding/common/abstractKeybindingService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/keybinding/common/abstractKeybindingService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingResolver": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingResolver.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/keybindingLabels": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/keybindingLabels.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/keybinding/common/baseResolvedKeybinding": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/keybinding/common/baseResolvedKeybinding.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/keybindingLabels",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/keybinding/common/usLayoutResolvedKeybinding": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/keybinding/common/usLayoutResolvedKeybinding.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/baseResolvedKeybinding"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/notification/common/notification": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/severity",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/workspace/common/workspace": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/workspace/common/workspace.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/base/common/map"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/simpleServices": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/simpleServices.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/severity",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorBrowser",
        "node_modules/monaco-editor/esm/vs/editor/common/config/commonEditorConfig",
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationModels",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/abstractKeybindingService",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingResolver",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/usLayoutResolvedKeybinding",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/workspace/common/workspace",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/browser/dom"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/config/charWidthReader": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/config/charWidthReader.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/config/elementSizeObserver": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/config/elementSizeObserver.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/config/configuration.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/charWidthReader",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/elementSizeObserver",
        "node_modules/monaco-editor/esm/vs/editor/common/config/commonEditorConfig",
        "node_modules/monaco-editor/esm/vs/editor/common/config/fontInfo"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/actions": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/actions.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/actions/common/actions": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resolverService",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/decorators": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/decorators.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/browser/touch": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/touch.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/decorators"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/iframe",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/editorDom": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/editorDom.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewEventHandler": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewEventHandler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewEventHandler"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/renderingContext": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/renderingContext.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/rangeUtil": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/rangeUtil.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/view/renderingContext"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/viewLine": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/viewLine.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/rangeUtil",
        "node_modules/monaco-editor/esm/vs/editor/common/view/renderingContext",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseTarget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseTarget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorDom",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/viewLine",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseHandler": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseHandler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseTarget",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorDom",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewEventHandler"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/controller/pointerHandler": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/controller/pointerHandler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/touch",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseHandler",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorDom"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaState": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaState.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaInput": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaInput.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaState",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewEventHandler"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/color": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/color.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/jsonschemas/common/jsonContributionRegistry",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lineNumbers/lineNumbers": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lineNumbers/lineNumbers.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/margin/margin": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/margin/margin.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/wordCharacterClassifier": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/wordCharacterClassifier.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaHandler": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaHandler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaInput",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaState",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lineNumbers/lineNumbers",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/margin/margin",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/wordCharacterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/editStack": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/editStack.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/indentationGuesser": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/indentationGuesser.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/intervalTree": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/intervalTree.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/rbTreeBase": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/rbTreeBase.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/wordCharacterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/rbTreeBase",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBuffer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBuffer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase",
        "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBuffer"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/textModelEvents": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/textModelEvents.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/textModelTokens": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/textModelTokens.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/common/core/lineTokens",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/model/textModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/stopwatch",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/model/editStack",
        "node_modules/monaco-editor/esm/vs/editor/common/model/indentationGuesser",
        "node_modules/monaco-editor/esm/vs/editor/common/model/intervalTree",
        "node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModelEvents",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModelTokens",
        "node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/richEditBrackets",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorColumnSelection": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorColumnSelection.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorDeleteOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorDeleteOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorWordOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorWordOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/wordCharacterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveCommands": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveCommands.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorWordOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/commands/shiftCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/commands/shiftCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/commands/surroundSelectionCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/commands/surroundSelectionCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorTypeOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorTypeOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/shiftCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/surroundSelectionCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/wordCharacterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/controller/coreCommands": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/controller/coreCommands.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorColumnSelection",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorDeleteOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveCommands",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorTypeOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/view/viewController": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/view/viewController.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/coreCommands",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/view/viewLayer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/view/viewLayer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/view/viewOverlays": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/view/viewOverlays.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewLayer",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/contentWidgets/contentWidgets": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/contentWidgets/contentWidgets.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/currentLineHighlight/currentLineHighlight": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/currentLineHighlight/currentLineHighlight.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/currentLineMarginHighlight/currentLineMarginHighlight": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/currentLineMarginHighlight/currentLineMarginHighlight.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/decorations/decorations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/decorations/decorations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/view/renderingContext"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/widget": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarVisibilityController": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarVisibilityController.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarVisibilityController",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/horizontalScrollbar": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/horizontalScrollbar.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/verticalScrollbar": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/verticalScrollbar.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/scrollable": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/scrollable.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/horizontalScrollbar",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/verticalScrollbar",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/scrollable"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/editorScrollbar/editorScrollbar": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/editorScrollbar/editorScrollbar.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/glyphMargin/glyphMargin": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/glyphMargin/glyphMargin.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/indentGuides/indentGuides": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/indentGuides/indentGuides.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/viewLines": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/viewLines.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewLayer",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/viewLine",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/view/renderingContext"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/linesDecorations/linesDecorations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/linesDecorations/linesDecorations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/glyphMargin/glyphMargin"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/marginDecorations/marginDecorations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/marginDecorations/marginDecorations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/glyphMargin/glyphMargin"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/core/rgba": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/core/rgba.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/minimapCharRenderer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/minimapCharRenderer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/common/core/rgba",
        "node_modules/monaco-editor/esm/vs/editor/common/modes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/runtimeMinimapCharRenderer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/runtimeMinimapCharRenderer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/view/minimapCharRenderer"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/minimap/minimap": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/minimap/minimap.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewLayer",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/view/minimapCharRenderer",
        "node_modules/monaco-editor/esm/vs/editor/common/view/runtimeMinimapCharRenderer",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overlayWidgets/overlayWidgets": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overlayWidgets/overlayWidgets.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overviewRuler/decorationsOverviewRuler": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overviewRuler/decorationsOverviewRuler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/overviewZoneManager": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/overviewZoneManager.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overviewRuler/overviewRuler": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overviewRuler/overviewRuler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/common/view/overviewZoneManager",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewEventHandler"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/rulers/rulers": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/rulers/rulers.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/scrollDecoration/scrollDecoration": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/scrollDecoration/scrollDecoration.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/selections/selections": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/selections/selections.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursor": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursor.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursors": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursors.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursor",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewZones/viewZones": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewZones/viewZones.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/viewContext": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/viewContext.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/view/viewEventDispatcher": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/view/viewEventDispatcher.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLinesViewportData": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLinesViewportData.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/view/viewImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/view/viewImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/pointerHandler",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaHandler",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewController",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewOverlays",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/contentWidgets/contentWidgets",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/currentLineHighlight/currentLineHighlight",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/currentLineMarginHighlight/currentLineMarginHighlight",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/decorations/decorations",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/editorScrollbar/editorScrollbar",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/glyphMargin/glyphMargin",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/indentGuides/indentGuides",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lineNumbers/lineNumbers",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lines/viewLines",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/linesDecorations/linesDecorations",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/margin/margin",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/marginDecorations/marginDecorations",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/minimap/minimap",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overlayWidgets/overlayWidgets",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overviewRuler/decorationsOverviewRuler",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/overviewRuler/overviewRuler",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/rulers/rulers",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/scrollDecoration/scrollDecoration",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/selections/selections",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursors",
        "node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewZones/viewZones",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/view/renderingContext",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewContext",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewEventDispatcher",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLinesViewportData",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewEventHandler",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/view/viewOutgoingEvents": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/view/viewOutgoingEvents.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseTarget"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/oneCursor": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/oneCursor.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCollection": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCollection.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/oneCursor",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/controller/cursor": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/controller/cursor.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCollection",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorDeleteOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorTypeOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/editorAction": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/editorAction.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/textToHtmlTokenizer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/textToHtmlTokenizer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/lineTokens",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/whitespaceComputer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/whitespaceComputer.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/linesLayout": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/linesLayout.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/whitespaceComputer"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLayout": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLayout.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/scrollable",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/linesLayout",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewModel/splitLinesCollection": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewModel/splitLinesCollection.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewModel/characterHardWrappingLineMapper": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewModel/characterHardWrappingLineMapper.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/uint",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/splitLinesCollection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelDecorations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelDecorations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/textToHtmlTokenizer",
        "node_modules/monaco-editor/esm/vs/editor/common/view/minimapCharRenderer",
        "node_modules/monaco-editor/esm/vs/editor/common/view/viewEvents",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLayout",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/characterHardWrappingLineMapper",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/splitLinesCollection",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelDecorations",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewImpl",
        "node_modules/monaco-editor/esm/vs/editor/browser/view/viewOutgoingEvents",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursor",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorAction",
        "node_modules/monaco-editor/esm/vs/editor/common/editorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelImpl",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/browser/touch",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/core/editorState.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/browser/touch",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/arrays"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffReview": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffReview.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/core/lineTokens",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffReview",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder",
        "node_modules/monaco-editor/esm/vs/editor/common/editorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/editor/common/view/overviewZoneManager",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations",
        "node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer",
        "node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModel",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/common/editorAction",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/simpleServices",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/modeService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/modeService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/abstractMode": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/abstractMode.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/mime": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/mime.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/path",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/glob"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/modesRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/modesRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/languagesRegistry": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/languagesRegistry.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/mime",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/modesRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/modeServiceImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/modeServiceImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/abstractMode",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode",
        "node_modules/monaco-editor/esm/vs/editor/common/services/languagesRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/modelServiceImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/modelServiceImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/modesRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resourceConfiguration",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/services/abstractCodeEditorService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/services/abstractCodeEditorService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorServiceImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorServiceImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/abstractCodeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/editorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeServiceImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeServiceImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorServiceImpl"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/tokenization": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/modes/supports/tokenization.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/color"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/common/themes": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/common/themes.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneThemeServiceImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneThemeServiceImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/supports/tokenization",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/themes",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/contextkey/browser/contextKeyService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/contextkey/browser/contextKeyService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingResolver"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/menu/menu": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/menu/menu.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/theme/common/styler": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/theme/common/styler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/base/common/objects"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuHandler": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuHandler.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/menu/menu",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/styler",
        "node_modules/monaco-editor/esm/vs/base/browser/event",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuHandler",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/range": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/range.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/contextview/contextview": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/contextview/contextview.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextViewService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextViewService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/contextview/contextview",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/dialogs/common/dialogs": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/dialogs/common/dialogs.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/collections": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/collections.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/platform/instantiation/common/graph": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/instantiation/common/graph.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/collections"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/instantiation/common/descriptors": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/instantiation/common/descriptors.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiationService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiationService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/graph",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/descriptors",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/label/common/label": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/label/common/label.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/list/list": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/list/list.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/list/rangeMap": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rangeMap.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/list/rowCache": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rowCache.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/dnd": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/dnd.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/touch",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/browser/event",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/rangeMap",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/rowCache",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/decorators",
        "node_modules/monaco-editor/esm/vs/base/common/range",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/browser/dnd",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/list/splice": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/list/splice.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/numbers": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/numbers.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/filters": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/filters.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/decorators",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/browser/touch",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/browser/event",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/list",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/splice",
        "node_modules/monaco-editor/esm/vs/base/common/numbers",
        "node_modules/monaco-editor/esm/vs/base/common/filters"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/indexTreeModel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/indexTreeModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/iterator"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/browser/dnd",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView",
        "node_modules/monaco-editor/esm/vs/base/browser/event",
        "node_modules/monaco-editor/esm/vs/base/common/filters",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/indexTreeModel",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/base/common/numbers"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTreeModel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTreeModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/iterator",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/indexTreeModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTree": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTree.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTreeModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/asyncDataTree": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/asyncDataTree.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTree",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/iterator",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/map"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/dataTree": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/dataTree.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTreeModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/list/browser/listService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/list/browser/listService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/registry/common/platform",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/styler",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTree",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/asyncDataTree",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/tree/dataTree",
        "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/markers/common/markers": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/markers/common/markers.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/severity"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/markers/common/markerService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/markers/common/markerService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markers"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/progress/common/progress": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/storage/common/storage": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/actions/common/menuService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/actions/common/menuService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/markersDecorationService": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/markersDecorationService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorationsServiceImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorationsServiceImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markers",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/descriptors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestMemory": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestMemory.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/platform/storage/common/storage",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibilityService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibilityService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codeLensCache": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codeLensCache.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions",
        "node_modules/monaco-editor/esm/vs/base/common/map",
        "node_modules/monaco-editor/esm/vs/platform/storage/common/storage",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneServices": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneServices.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerServiceImpl",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeServiceImpl",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelServiceImpl",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resourceConfiguration",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/simpleServices",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeServiceImpl",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneThemeServiceImpl",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/browser/contextKeyService",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuService",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextViewService",
        "node_modules/monaco-editor/esm/vs/platform/dialogs/common/dialogs",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiationService",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/label/common/label",
        "node_modules/monaco-editor/esm/vs/platform/list/browser/listService",
        "node_modules/monaco-editor/esm/vs/platform/log/common/log",
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markerService",
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markers",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/progress/common/progress",
        "node_modules/monaco-editor/esm/vs/platform/storage/common/storage",
        "node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/workspace/common/workspace",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/menuService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/markersDecorationService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorationsServiceImpl",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestMemory",
        "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility",
        "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibilityService",
        "node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codeLensCache"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/opener/common/opener": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneEditor": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneEditor.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/openerService",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffNavigator",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/config/fontInfo",
        "node_modules/monaco-editor/esm/vs/editor/common/editorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resolverService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/webWorker",
        "node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/colorizer",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/simpleServices",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneServices",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility",
        "node_modules/monaco-editor/esm/vs/editor/browser/config/configuration"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchCompile": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchCompile.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchCommon"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneLanguages": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneLanguages.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/token",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/modesRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneServices",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchCompile",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/monarch/monarchLexer"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/editor.api": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/editor.api.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions",
        "node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneEditor",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneLanguages"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/typescript/workerManager": {
      "url": "/node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures": {
      "url": "/node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/typescript/tsMode": {
      "url": "/node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/typescript/workerManager",
        "node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/editor.api",
        "node_modules/monaco-editor/esm/vs/language/typescript/tsMode"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/css/workerManager": {
      "url": "/node_modules/monaco-editor/esm/vs/language/css/workerManager.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main": {
      "url": "/node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/css/languageFeatures": {
      "url": "/node_modules/monaco-editor/esm/vs/language/css/languageFeatures.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/css/cssMode": {
      "url": "/node_modules/monaco-editor/esm/vs/language/css/cssMode.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/css/workerManager",
        "node_modules/monaco-editor/esm/vs/language/css/languageFeatures"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/css/monaco.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/editor.api",
        "node_modules/monaco-editor/esm/vs/language/css/cssMode"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/workerManager": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/workerManager.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-languageserver-types/main": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-languageserver-types/main.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/json/languageFeatures": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/languageFeatures.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-languageserver-types/main"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/edit": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/edit.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format",
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/main": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/main.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/format",
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/edit",
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/scanner",
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/impl/parser"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/tokenization": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/tokenization.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/json/_deps/jsonc-parser/main"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/jsonMode": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/jsonMode.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/json/workerManager",
        "node_modules/monaco-editor/esm/vs/language/json/languageFeatures",
        "node_modules/monaco-editor/esm/vs/language/json/tokenization"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/json/monaco.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/editor.api",
        "node_modules/monaco-editor/esm/vs/language/json/jsonMode"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/html/workerManager": {
      "url": "/node_modules/monaco-editor/esm/vs/language/html/workerManager.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main": {
      "url": "/node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/language/html/languageFeatures": {
      "url": "/node_modules/monaco-editor/esm/vs/language/html/languageFeatures.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/html/htmlMode": {
      "url": "/node_modules/monaco-editor/esm/vs/language/html/htmlMode.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/html/workerManager",
        "node_modules/monaco-editor/esm/vs/language/html/languageFeatures"
      ]
    },
    "node_modules/monaco-editor/esm/vs/language/html/monaco.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/editor.api",
        "node_modules/monaco-editor/esm/vs/language/html/htmlMode"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/_.contribution.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/bat/bat": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/bat/bat"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/csp/csp": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/csp/csp"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/css/css": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/css/css.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/css/css"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/go/go": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/go/go.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/go/go"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/html/html": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/html/html.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/html/html"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/ini/ini": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/ini/ini"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/java/java": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/java/java.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/java/java"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/less/less": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/less/less.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/less/less"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/lua/lua": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/lua/lua"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/php/php": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/php/php.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/php/php"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/pug/pug": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/pug/pug"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/python/python": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/python/python.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/python/python"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/r/r": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/r/r.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/r/r"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/razor/razor": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/razor/razor"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/redis/redis": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/redis/redis"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/rust/rust": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/rust/rust"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/sb/sb": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/sb/sb"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/scss/scss": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/scss/scss"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/sql/sql": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/sql/sql"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/st/st": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/st/st.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/st/st"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/swift/swift": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/swift/swift"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/vb/vb": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/vb/vb"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/xml/xml": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/xml/xml"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/shell/shell": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/shell/shell"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/perl/perl": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/perl/perl"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/apex/apex": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/apex/apex"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/basic-languages/_.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql"
      ]
    },
    "node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution": {
      "url": "/node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/editor.api",
        "node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/moveCaretCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/moveCaretCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/moveCaretCommand"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/transpose": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/transpose.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/clipboard": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/clipboard.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaInput",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/message/messageController": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/message/messageController.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionTrigger": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionTrigger.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeAction": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeAction.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionTrigger",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeAction"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/lightBulbWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/lightBulbWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionCommands": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionCommands.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/message/messageController",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markers",
        "node_modules/monaco-editor/esm/vs/platform/progress/common/progress",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionModel",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionTrigger",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/lightBulbWidget",
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionContributions": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionContributions.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionCommands"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelens": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelens.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelensWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelensWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelensController": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelensController.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelens",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelensWidget",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codeLensCache"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/hash": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/hash.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/color": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/color.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorDetector": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorDetector.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/hash",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/color",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/comment/blockCommentCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/comment/blockCommentCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/comment/lineCommentCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/comment/lineCommentCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/editor/contrib/comment/blockCommentCommand"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/comment/comment": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/comment/comment.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/comment/blockCommentCommand",
        "node_modules/monaco-editor/esm/vs/editor/contrib/comment/lineCommentCommand"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/cursorUndo": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/cursorUndo.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/dnd/dragAndDropCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/dnd/dragAndDropCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/dnd/dnd": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/dnd/dnd.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/contrib/dnd/dragAndDropCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/findDecorations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/findDecorations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/replaceAllCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/replaceAllCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/replacePattern": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/replacePattern.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/findModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/findModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findDecorations",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/replaceAllCommand",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/replacePattern",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/checkbox/checkbox": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/checkbox/checkbox.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/objects"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInputCheckboxes": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInputCheckboxes.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/checkbox/checkbox",
        "node_modules/monaco-editor/esm/vs/nls"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/findOptionsWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/findOptionsWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInputCheckboxes",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findModel",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/findState": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/findState.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/idGenerator": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/idGenerator.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/common/htmlContent": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/marked/marked": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/marked/marked.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/browser/htmlContentRenderer": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/htmlContentRenderer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/idGenerator",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/htmlContent",
        "node_modules/monaco-editor/esm/vs/base/common/marked/marked",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/base/common/marshalling",
        "node_modules/monaco-editor/esm/vs/base/common/objects"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/history": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/history.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/iterator"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/htmlContentRenderer",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/common/history"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInput": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInput.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInputCheckboxes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/browser/contextScopedHistoryWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/browser/contextScopedHistoryWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInput",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/findWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/findWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findModel",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/browser/contextScopedHistoryWidget"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/find/findController": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/find/findController.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findModel",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findOptionsWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findState",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findWidget",
        "node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/storage/common/storage",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingRanges": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingRanges.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingRanges"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingDecorations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingDecorations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/hiddenRangeModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/hiddenRangeModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/base/common/arrays"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/indentRangeProvider": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/indentRangeProvider.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingRanges",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/syntaxRangeProvider": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/syntaxRangeProvider.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingRanges"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/intializingRangeProvider": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/intializingRangeProvider.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/syntaxRangeProvider"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/folding/folding": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/folding/folding.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingModel",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/foldingDecorations",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/hiddenRangeModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/indentRangeProvider",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/syntaxRangeProvider",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/intializingRangeProvider",
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/fontZoom": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/fontZoom.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/format/formattingEdit": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/format/formattingEdit.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/extensions/common/extensions": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/extensions/common/extensions.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/format/format": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/format/format.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorBrowser",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/format/formattingEdit",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/extensions/common/extensions",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/base/common/linkedList"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/format/formatActions": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/format/formatActions.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/format/format",
        "node_modules/monaco-editor/esm/vs/editor/contrib/format/formattingEdit",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/zoneWidget/zoneWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/zoneWidget/zoneWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/idGenerator",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/peekViewWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/peekViewWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/zoneWidget/zoneWidget",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/idGenerator",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/octiconLabel/octiconLabel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/octiconLabel/octiconLabel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/highlightedlabel/highlightedLabel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/highlightedlabel/highlightedLabel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/octiconLabel/octiconLabel",
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/highlightedlabel/highlightedLabel",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/countBadge/countBadge": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/countBadge/countBadge.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/objects"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/common/labels": {
      "url": "/node_modules/monaco-editor/esm/vs/base/common/labels.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/base/common/path",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/resources"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesTree": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesTree.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesModel",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resolverService",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/countBadge/countBadge",
        "node_modules/monaco-editor/esm/vs/platform/label/common/label",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/styler",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/labels",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/base/common/filters"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/numbers",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/browser/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resolverService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesTree",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/label/common/label",
        "node_modules/monaco-editor/esm/vs/platform/list/browser/listService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/peekViewWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesModel",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesController": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesController.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/storage/common/storage",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesWidget",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinition": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinition.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinitionCommands": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinitionCommands.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/message/messageController",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/peekViewWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesController",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesModel",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/progress/common/progress",
        "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinition",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/clickLinkGesture": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/clickLinkGesture.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/platform"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinitionMouse": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinitionMouse.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/htmlContent",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeService",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinition",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resolverService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState",
        "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinitionCommands",
        "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/clickLinkGesture",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/gotoErrorWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/gotoErrorWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markers",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/base/common/labels",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/peekViewWidget",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesWidget"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/gotoError": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/gotoError.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markers",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/gotoErrorWidget",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/platform/actions/common/actions",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorPickerModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorPickerModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorPickerWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorPickerWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/globalMouseMoveMonitor",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/hover/getHover": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/hover/getHover.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverOperation": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverOperation.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverWidgets": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverWidgets.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/markdown/markdownRenderer": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/markdown/markdownRenderer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/htmlContentRenderer",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeService",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/textToHtmlTokenizer",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/modes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/hover/modesContentHover": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/hover/modesContentHover.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/htmlContent",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/color",
        "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorDetector",
        "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorPickerModel",
        "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorPickerWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/getHover",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverOperation",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverWidgets",
        "node_modules/monaco-editor/esm/vs/editor/contrib/markdown/markdownRenderer",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/platform/markers/common/markers",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/gotoError",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeAction",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionCommands",
        "node_modules/monaco-editor/esm/vs/base/common/actions",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionTrigger",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/hover/modesGlyphHover": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/hover/modesGlyphHover.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/htmlContent",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverOperation",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hoverWidgets",
        "node_modules/monaco-editor/esm/vs/editor/contrib/markdown/markdownRenderer",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/base/common/arrays"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hover": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/hover/hover.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/modesContentHover",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/modesGlyphHover",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/common/services/markersDecorationService",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplaceCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplaceCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/common/view/editorColorRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/common/commands/trimTrailingWhitespaceCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/commands/trimTrailingWhitespaceCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/copyLinesCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/copyLinesCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/indentation/indentUtils": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/indentation/indentUtils.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/moveLinesCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/moveLinesCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/shiftCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfiguration",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/editor/contrib/indentation/indentUtils"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/sortLinesCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/sortLinesCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/coreCommands",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/trimTrailingWhitespaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorTypeOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/copyLinesCommand",
        "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/moveLinesCommand",
        "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/sortLinesCommand"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/links/getLinks": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/links/getLinks.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/arrays"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/links/links": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/links/links.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/htmlContent",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/clickLinkGesture",
        "node_modules/monaco-editor/esm/vs/editor/contrib/links/getLinks",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/multicursor": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorMoveCommands",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findController",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/provideSignatureHelp": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/provideSignatureHelp.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHintsModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHintsModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/provideSignatureHelp"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHintsWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHintsWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/event",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/markdown/markdownRenderer",
        "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/provideSignatureHelp",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHintsModel"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHints": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHints.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHintsWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/provideSignatureHelp",
        "node_modules/monaco-editor/esm/vs/editor/common/modes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referenceSearch": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referenceSearch.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/peekViewWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesController",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesModel",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorBrowser",
        "node_modules/monaco-editor/esm/vs/platform/list/browser/listService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesWidget",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/rename/renameInputField": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/rename/renameInputField.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/rename/rename": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/rename/rename.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/progress/common/progress",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/rename/renameInputField",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/contrib/message/messageController",
        "node_modules/monaco-editor/esm/vs/editor/browser/core/editorState",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/wordSelections": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/wordSelections.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/base/common/strings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/bracketSelections": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/bracketSelections.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/base/common/linkedList"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/wordSelections",
        "node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/bracketSelections",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/base/common/errors"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggest": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggest.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/base/common/filters"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetParser": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetParser.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/platform/workspaces/common/workspaces": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/workspaces/common/workspaces.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/uri"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetVariables": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetVariables.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/path",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetParser",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/languageConfigurationRegistry",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/platform/workspaces/common/workspaces"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetSession": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetSession.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService",
        "node_modules/monaco-editor/esm/vs/platform/workspace/common/workspace",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetParser",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetVariables",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetController2": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetController2.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggest",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/log/common/log",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetSession"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestAlternatives": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestAlternatives.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/completionModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/completionModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/filters",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/wordDistance": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/wordDistance.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/bracketSelections"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestModel": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/completionModel",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggest",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetController2",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/wordDistance"
      ]
    },
    "node_modules/monaco-editor/esm/vs/platform/files/common/files": {
      "url": "/node_modules/monaco-editor/esm/vs/platform/files/common/files.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/network",
        "node_modules/monaco-editor/esm/vs/base/common/resources",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/modesRegistry",
        "node_modules/monaco-editor/esm/vs/platform/files/common/files"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/filters",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggest",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/styler",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/storage/common/storage",
        "node_modules/monaco-editor/esm/vs/editor/contrib/markdown/markdownRenderer",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeService",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel",
        "node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/files/common/files"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/wordContextKey": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/wordContextKey.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestController": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestController.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/editOperation",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetController2",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetParser",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestMemory",
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggest",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestAlternatives",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestModel",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestWidget",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/wordContextKey",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerService",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier",
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/tokenization": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/tokenization.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/base/common/stopwatch"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/config/commonEditorConfig"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/arrays",
        "node_modules/monaco-editor/esm/vs/base/common/async",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/model",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorCommon",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorWordOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/wordCharacterClassifier",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/core/selection",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/wordPartOperations": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/wordPartOperations.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/controller/cursorWordOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations",
        "node_modules/monaco-editor/esm/vs/platform/commands/common/commands"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/editor.all": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/editor.all.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/controller/coreCommands",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget",
        "node_modules/monaco-editor/esm/vs/editor/browser/widget/diffNavigator",
        "node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching",
        "node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations",
        "node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/transpose",
        "node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/clipboard",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/codeActionContributions",
        "node_modules/monaco-editor/esm/vs/editor/contrib/codelens/codelensController",
        "node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/colorDetector",
        "node_modules/monaco-editor/esm/vs/editor/contrib/comment/comment",
        "node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu",
        "node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/cursorUndo",
        "node_modules/monaco-editor/esm/vs/editor/contrib/dnd/dnd",
        "node_modules/monaco-editor/esm/vs/editor/contrib/find/findController",
        "node_modules/monaco-editor/esm/vs/editor/contrib/folding/folding",
        "node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/fontZoom",
        "node_modules/monaco-editor/esm/vs/editor/contrib/format/formatActions",
        "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinitionCommands",
        "node_modules/monaco-editor/esm/vs/editor/contrib/goToDefinition/goToDefinitionMouse",
        "node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/gotoError",
        "node_modules/monaco-editor/esm/vs/editor/contrib/hover/hover",
        "node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace",
        "node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations",
        "node_modules/monaco-editor/esm/vs/editor/contrib/links/links",
        "node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/multicursor",
        "node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHints",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referenceSearch",
        "node_modules/monaco-editor/esm/vs/editor/contrib/rename/rename",
        "node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect",
        "node_modules/monaco-editor/esm/vs/editor/contrib/snippet/snippetController2",
        "node_modules/monaco-editor/esm/vs/editor/contrib/suggest/suggestController",
        "node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/tokenization",
        "node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode",
        "node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter",
        "node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations",
        "node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/wordPartOperations",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/fastDomNode",
        "node_modules/monaco-editor/esm/vs/base/browser/htmlContentRenderer",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/widget",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/platform/opener/common/opener",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/modes/nullMode",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modeService",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/common/keybindingLabels",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/nls"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenModel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/highlightedlabel/highlightedLabel",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/arrays"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenViewer": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenViewer.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/types"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDefaults": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDefaults.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/keyCodes"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeModel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/assert",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/event"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDnd": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDnd.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeViewModel": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeViewModel.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/iterator"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/tree": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/tree/browser/tree.js",
      "type": "js"
    },
    "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeView": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeView.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/diff/diff",
        "node_modules/monaco-editor/esm/vs/base/browser/touch",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDnd",
        "node_modules/monaco-editor/esm/vs/base/common/iterator",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeViewModel",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/tree",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/browser/dnd",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDefaults",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeImpl": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeImpl.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDefaults",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeModel",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeView",
        "node_modules/monaco-editor/esm/vs/base/common/event",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/objects"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar": {
      "url": "/node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/async"
      ]
    },
    "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/nls",
        "node_modules/monaco-editor/esm/vs/base/common/platform",
        "node_modules/monaco-editor/esm/vs/base/common/types",
        "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenViewer",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeImpl",
        "node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar",
        "node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent",
        "node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDefaults",
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/common/lifecycle",
        "node_modules/monaco-editor/esm/vs/base/common/color",
        "node_modules/monaco-editor/esm/vs/base/common/objects",
        "node_modules/monaco-editor/esm/vs/base/browser/mouseEvent"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOpenEditorWidget": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOpenEditorWidget.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/browser/dom",
        "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenWidget",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/styler"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/editorQuickOpen": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/editorQuickOpen.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/model/textModel",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOpenEditorWidget",
        "node_modules/monaco-editor/esm/vs/platform/theme/common/themeService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/gotoLine": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/gotoLine.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenModel",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorBrowser",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/position",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/editorQuickOpen",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickCommand": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickCommand.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/browser/browser",
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/filters",
        "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenModel",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/editorQuickOpen",
        "node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/contrib/quickOpen/quickOpen": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/contrib/quickOpen/quickOpen.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/errors",
        "node_modules/monaco-editor/esm/vs/base/common/uri",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/common/services/modelService",
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/editor/common/services/resolverService"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOutline": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOutline.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/base/common/cancellation",
        "node_modules/monaco-editor/esm/vs/base/common/filters",
        "node_modules/monaco-editor/esm/vs/base/common/strings",
        "node_modules/monaco-editor/esm/vs/base/parts/quickopen/browser/quickOpenModel",
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/common/core/range",
        "node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys",
        "node_modules/monaco-editor/esm/vs/editor/common/modes",
        "node_modules/monaco-editor/esm/vs/editor/contrib/quickOpen/quickOpen",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/editorQuickOpen",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService",
        "node_modules/monaco-editor/esm/vs/editor/contrib/referenceSearch/referencesController",
        "node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration",
        "node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey",
        "node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation",
        "node_modules/monaco-editor/esm/vs/platform/notification/common/notification",
        "node_modules/monaco-editor/esm/vs/platform/storage/common/storage"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions",
        "node_modules/monaco-editor/esm/vs/editor/standalone/common/standaloneThemeService",
        "node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/edcore.main": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/edcore.main.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/editor/editor.all",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/gotoLine",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickCommand",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOutline",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch",
        "node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast",
        "node_modules/monaco-editor/esm/vs/editor/editor.api"
      ]
    },
    "node_modules/monaco-editor/esm/vs/editor/editor.main": {
      "url": "/node_modules/monaco-editor/esm/vs/editor/editor.main.js",
      "type": "js",
      "deps": [
        "node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution",
        "node_modules/monaco-editor/esm/vs/language/css/monaco.contribution",
        "node_modules/monaco-editor/esm/vs/language/json/monaco.contribution",
        "node_modules/monaco-editor/esm/vs/language/html/monaco.contribution",
        "node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution",
        "node_modules/monaco-editor/esm/vs/editor/edcore.main"
      ]
    },
    "route/NotFound.tsx": {
      "url": "/route/NotFound.js",
      "type": "js"
    },
    "component/AMISRenderer.tsx": {
      "url": "/component/AMISRenderer.js",
      "type": "js"
    },
    "component/AddPageModal.tsx": {
      "url": "/component/AddPageModal.js",
      "type": "js",
      "deps": [
        "component/AMISRenderer.tsx"
      ]
    },
    "component/EditAMISRenderer.tsx": {
      "url": "/component/EditAMISRenderer.js",
      "type": "js"
    },
    "component/EditPageModal.tsx": {
      "url": "/component/EditPageModal.js",
      "type": "js",
      "deps": [
        "component/EditAMISRenderer.tsx"
      ]
    },
    "route/Preview.tsx": {
      "url": "/route/Preview.js",
      "type": "js",
      "deps": [
        "route/NotFound.tsx",
        "component/AMISRenderer.tsx",
        "component/AddPageModal.tsx",
        "component/EditPageModal.tsx"
      ]
    },
    "renderer/MyRenderer.tsx": {
      "url": "/renderer/MyRenderer.js",
      "type": "js"
    },
    "editor/MyRenderer.tsx": {
      "url": "/editor/MyRenderer.js",
      "type": "js"
    },
    "route/Editor.tsx": {
      "url": "/route/Editor.js",
      "type": "js",
      "deps": [
        "renderer/MyRenderer.tsx",
        "editor/MyRenderer.tsx"
      ]
    }
  },
  "pkg": {}
});