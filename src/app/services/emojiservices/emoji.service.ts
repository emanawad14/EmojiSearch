import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emoji } from '../../models/emoji.models';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private emojiUrl='emoji.json';
 
  constructor() { }

  private readonly http=inject(HttpClient);

  getEmoji():Observable<Emoji[]>
  {
    return this.http.get<Emoji[]>(this.emojiUrl);
  }

  getCategories(emoji:Emoji[]):string[]
  {
    return [...new Set(emoji.map((emoji)=>emoji.category))]
  }
}
