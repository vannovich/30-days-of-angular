import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../../services/post';
import { error } from 'console';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, Post],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {
  posts: any[] = [];
  loading = false;
  page = 1;
  limit = 10;
  errorMessage = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private handleError(error: any): void {
    console.log('Error fetching posts:', error);
    this.errorMessage = 'Something went wrong while fetching posts. Please try again later.';
  }

  loadPosts(): void {
    this.loading = true;
    this.postService.getPosts(this.page, this.limit).subscribe({
      next: (newPosts) => {
        if (newPosts && newPosts.length > 0) {
          this.posts = [...this.posts, ...newPosts];
          this.page++;
          this.errorMessage = '';
        }
      },
      error: (error) => {
        this.handleError(error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  @HostListener('window:scroll', [])
  onscroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight && !this.loading) {
      this.loadPosts();
    }
  }
}
