import { Component, OnInit , OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit , OnDestroy {
  private routeSub: Subscription | undefined;
  posts: ScullyRoute[] = [];
  
  
  constructor(private scullyService: ScullyRoutesService) { }

  
  ngOnInit(): void {
    this.routeSub = this.scullyService.available$.subscribe(posts => {    this.posts = posts.filter(post => post.description);  });
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
