import { Directive, DoCheck, ElementRef, Input, KeyValueDiffer, KeyValueDiffers, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cssVar]',
})
export class CssVarDirective implements OnChanges, DoCheck {
  private _cssVar: {[key: string]: string};

  private differ !: KeyValueDiffer<string, string | number>;

  constructor(
    private differs: KeyValueDiffers,
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngDoCheck() {
    if (this.differ) {
      const changes = this.differ.diff(this._cssVar);
      if (changes) {
        this.applyChanges();
      }
    }
  }

  @Input() set cssVar(values: {[key: string]: string}) {
    this._cssVar = values;
    if (!this.differ && values) {
      this.differ = this.differs.find(values).create();
    }
  }

  private applyChanges() {
    const currentStyles = this.elRef.nativeElement.style;
    const varStyles = Object.keys(this._cssVar).reduce((s, k) => {
      return `--${k}: ${this._cssVar[k]}; ${s}`;
    }, '');
    const newStyle = `${varStyles} ${currentStyles}`;
    this.renderer.setAttribute(this.elRef.nativeElement, 'style', newStyle);
  }
}
