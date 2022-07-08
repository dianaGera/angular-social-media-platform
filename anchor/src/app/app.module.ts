import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/top-header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { MessangerComponent } from './components/messanger/messanger.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { OurTopPostsComponent } from './components/right-side/main/our-top-posts/our-top-posts.component';
import { ContactComponent } from './components/right-side/main/contact/contact.component';
import { RecomendationTopicComponent } from './components/right-side/main/recomendation-topic/recomendation-topic.component';
import { FollowComponent } from './components/right-side/main/follow/follow.component';
import { SavedComponent } from './components/right-side/main/saved/saved.component';
import { PublisherComponent } from './components/right-side/post/publisher/publisher.component';
import { OurMoreComponent } from './components/right-side/post/our-more/our-more.component';
import { FollowingComponent } from './components/right-side/main/following/following.component';
import { PublisherListsComponent } from './components/right-side/post/publisher-lists/publisher-lists.component';
import { TagInfoComponent } from './components/right-side/tag/tag-info/tag-info.component';
import { RelatedTopicsComponent } from './components/right-side/tag/related-topics/related-topics.component';
import { TopWritersComponent } from './components/right-side/tag/top-writers/top-writers.component';
import { SearchComponent } from './components/right-side/main/search/search.component';
import { MainRightSideComponent } from './components/main-right-side/main-right-side.component';
import { PostComponent } from './pages/post/post.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { PostRightSideComponent } from './components/post-right-side/post-right-side.component';
import { PostHeaderComponent } from './components/header/post-header/post-header.component';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { UserRightSideComponent } from './components/user-right-side/user-right-side.component';
import { UserHeaderComponent } from './components/header/user-header/user-header.component';

const appRoutes: Routes = [
  {path: "post", component: PostComponent},
  {path: "home", component: MainComponent},
  {path: "user", component: UserpageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    MainComponent,
    MainHeaderComponent,
    MessangerComponent,
    SuggestionsComponent,
    OurTopPostsComponent,
    ContactComponent,
    RecomendationTopicComponent,
    FollowComponent,
    SavedComponent,
    PublisherComponent,
    OurMoreComponent,
    FollowingComponent,
    PublisherListsComponent,
    TagInfoComponent,
    RelatedTopicsComponent,
    TopWritersComponent,
    SearchComponent,
    MainRightSideComponent,
    PostComponent,
    MainContentComponent,
    PostRightSideComponent,
    PostHeaderComponent,
    UserpageComponent,
    UserRightSideComponent,
    UserHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
