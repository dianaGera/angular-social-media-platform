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
import { MediumMainComponent } from './pages/medium-main/medium-main.component';
import { MediumMainHeaderComponent } from './components/header/medium-main-header/medium-main-header.component';
import { MediumMainFooterComponent } from './components/footer/medium-main-footer/medium-main-footer.component';
import { MediumCardComponent } from './components/meduim-main/medium-card/medium-card.component';
import { MainTrendingComponent } from './components/meduim-main/main-trending/main-trending.component';
import { MainTagsComponent } from './components/meduim-main/main-tags/main-tags.component';

const appRoutes: Routes = [
  {path: "post", component: PostComponent},
  {path: "", component: MainComponent},
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
    MediumMainComponent,
    MediumMainHeaderComponent,
    MediumMainFooterComponent,
    MediumCardComponent,
    MainTrendingComponent,
    MainTagsComponent,
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
