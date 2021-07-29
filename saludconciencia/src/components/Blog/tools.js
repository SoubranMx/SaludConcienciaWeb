import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
//import Paragraph from '@editorjs/paragraph'
import Paragraph from 'editorjs-paragraph-with-alignment'
import List from '@editorjs/list'
//import Warning from '@editorjs/warning'
//import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
//import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
//import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
//import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import NestedList from '@editorjs/nested-list'
import DragDrop from 'editorjs-drag-drop';

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  paragraph: Paragraph,
  list: List,
  linkTool: LinkTool,
  image: Image,
  header: Header,
  quote: Quote,
  marker: Marker,
  delimiter: Delimiter,
  simpleImage: SimpleImage,
  nestedList: NestedList,
  dragDrop: DragDrop
}

//Documentacion para cada herramienta
/*
  - Header:     https://github.com/editor-js/header
  - Embed:      https://github.com/editor-js/embed
  - Table:      https://github.com/editor-js/table
  - Paragraph:  https://github.com/editor-js/paragraph
  - List:       https://github.com/editor-js/list
  - NestedList: https://github.com/editor-js/nested-list
  - LinkTool*:  https://github.com/editor-js/link
  - Image*:     https://github.com/editor-js/image 
  - Quote:      https://github.com/editor-js/quote
  - Marker:     https://github.com/editor-js/marker
  - Delimiter:  https://github.com/editor-js/delimiter
  - SimpleImage:  https://github.com/editor-js/simple-image
  - Paragraph:  https://github.com/kaaaaaaaaaaai/paragraph-with-alignment
  - DragDrop:   https://github.com/kommitters/editorjs-drag-drop

  * Requieren conexion con endpoint de servidor NodeJs
  Plantilla install npm: --save editorJs header embed table paragraph list nestedlist linktool imageEndpoint quote marker delimiter simpleImage paragraphWAlignment dragdrop

  npm install --save @editorjs/editorjs @editorjs/header @editorjs/embed @editorjs/table @editorjs/paragraph @editorjs/list @editorjs/nested-list @editorjs/link @editorjs/image @editorjs/quote @editorjs/marker @editorjs/delimiter @editorjs/simple-image editorjs-paragraph-with-alignment@3.x  editorjs-drag-drop
*/