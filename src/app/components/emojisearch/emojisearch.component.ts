import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../../services/emojiservices/emoji.service';
import { Emoji } from '../../models/emoji.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emojisearch',
  imports: [CommonModule ,FormsModule],
  templateUrl: './emojisearch.component.html',
  styleUrl: './emojisearch.component.scss'
})
export class EmojisearchComponent implements OnInit {

  searchTerm: string = '';
  selectedCategory: string = '';
  emojis: Emoji[] = [];
  filteredEmojis: Emoji[] = [];
  categories: string[] = [];
  clipboardNotification: string | null = null;

  constructor(private emojiService: EmojiService) {}

  ngOnInit(): void {
    this.emojiService.getEmoji().subscribe((emojis: Emoji[]) => {
      this.emojis = emojis;
      this.filteredEmojis = [...this.emojis];
      this.categories = this.emojiService.getCategories(emojis);
    });
  }

  filterEmojis(): void {
    this.filteredEmojis = [];

    for (let emoji of this.emojis) {
      const isSearchMatch = emoji.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      let isCategoryMatch = true;
      if (this.selectedCategory) {
        if (emoji.category !== this.selectedCategory) {
          isCategoryMatch = false;
        }
      }

      if (isSearchMatch && isCategoryMatch) {
        this.filteredEmojis.push(emoji);
      }
    }
  }

  onCategoryChange(): void {
    this.filterEmojis();
  }

  copyToClipboard(symbol: string): void {
    navigator.clipboard.writeText(symbol);
    this.clipboardNotification = `Copied "${symbol}" to clipboard`;
    setTimeout(() => {
      this.clipboardNotification = null;
    }, 3000);
  }

}
