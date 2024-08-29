import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  listItems: any = [
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    },
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    },
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    },
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    },
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    },
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    },
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    },
    {
      "title": "The Perfect Sandwich, A Real NYC Classic",
      "description": "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
      "image": "https://www.w3schools.com/w3images/sandwich.jpg"
    }
  ];
}
