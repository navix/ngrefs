import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ContentMessage } from '../../../../../main/src/app/content/meta';

@Component({
  selector: 'editor-message-translation',
  templateUrl: './message-translation.component.html',
  styleUrls: ['./message-translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageTranslationComponent implements OnInit, OnChanges {
  @Input() messages: ContentMessage[];

  @Input() message: ContentMessage;

  @Input() toLang: string;

  readonly source = 'en';

  suggestion: string;

  displayModal = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  pickLocale(message: ContentMessage, lang: string) {
    let locale = message.locales.find(l => l.lang === lang);
    if (!locale) {
      locale = {lang, text: ''};
      this.message.locales.push(locale);
    }
    return locale;
  }

  showModal() {
    this.displayModal = true;
    this.suggestion = this.findSuggestion();
  }

  /**
   * Check all messages, there is a possibility to exist repeated and already translated sources.
   */
  findSuggestion() {
    const sourceLocale = this.pickLocale(this.message, this.source);
    if (sourceLocale) {
      const search = sourceLocale.text.trim();
      console.log('SRCH', search);
      for (const message of this.messages) {
        if (message.id !== this.message.id) {
          const mSourceLocale = this.pickLocale(message, this.source);
          if (mSourceLocale) {
            if (search === mSourceLocale.text.trim()) {
              console.log('SEARCH OK!!', search, mSourceLocale.text.trim());
              const toLocale = this.pickLocale(message, this.toLang);
              if (toLocale && toLocale.text) {
                return toLocale.text;
              }
            }
          }
        }
      }
    }
  }

  useSuggestion() {
    const toLocale = this.pickLocale(this.message, this.toLang);
    toLocale.text = this.suggestion;
  }
}
