# jquery.json-editor
A json viewer and editor based on [jquery.jquery-viewer](https://github.com/abodelot/jquery.json-viewer).

## 特性:

* Syntax highlighting
* Collapse and expand child nodes on click
* Easily readable and minimal DOM structure
* Editable

Check out the [example](https://dblate.github.io/jquery.json-editor/)

## 使用

```html
<script src="path/to/jquery" type="text/javascript"></script>
<script src="path/to/jquery.json-editor" type="text/javascript"></script>
```

```javascript
/**
 * 初始化一个 JsonEditor
 *
 * @param {DOM|string} container DOM 元素或 jQuery 选择器字符串
 * @param {Object} json JSON 对象
 * @param {Object=} options 其他配置项，可选
 * @param {boolean} options.defaultCollapsed 是否默认是收起状态，默认 false
 * @param {boolean} options.editable 是否可编辑，默认 true
 */
var editor = new JsonEditor(container, json, options);

// 更新 json
editor.load(json);

// 获取 json
editor.get();
```
