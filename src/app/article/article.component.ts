import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article!: Article;

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
}
