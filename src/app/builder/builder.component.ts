import { Component, OnInit } from '@angular/core';
declare var grapesjs: any; // Important!

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  public editor: any;
  public blockManager: any;
  constructor() { }

  ngOnInit() {
    this.editor = grapesjs.init({
      container : '#gjs',
      storageManager:{autoload: 0},
      styleManager: {},
      // fromElement: true,
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',


      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {  }
      }
    });

    this.blockManager = this.editor.BlockManager;
    this.blockManager.add('my-first-block', {
      label: 'Simple block',
      content: '<div class="my-block">This is a simple block</div>',
    });

    // this.blockManager.get('my-first-block').set({
    //   content: {
    //     type: 'link',
    //     content:'Text for the link',
    //     attributes: { href: '...' }
    //   }
    // })


    this.blockManager.add('h1-block', {
      label: 'Heading',
      content: '<h1>Put your title here</h1>',
      category: 'New',
      attributes: {
        title: 'Insert h1 block'
      }
    });
  }

  public getCodeHTMLNow() {
    console.log(this.editor.getHtml());
  }
  public getCodeCSSNow() {
    console.log(this.editor.getCss());
  }

}
