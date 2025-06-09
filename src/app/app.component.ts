import { Component } from '@angular/core';
import { EmojisearchComponent } from "./components/emojisearch/emojisearch.component";
import { ThemppickerComponent } from "./components/themppicker/themppicker.component";


@Component({
  selector: 'app-root',
  imports: [EmojisearchComponent, ThemppickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EmojiSearch';
}
