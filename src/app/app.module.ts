import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './_components/header/header.component';
import { PostComponent } from './_components/post/post.component';
import { HomeComponent } from './_components/shared/home/home.component';
import { SidebarComponent } from './_components/shared/sidebar/sidebar.component';
import { SidebarViewComponent } from './_components/shared/sidebar-view/sidebar-view.component';
import { CommentComponent } from './_components/shared/comment/comment.component';
import { VotebuttonComponent } from './_components/shared/votebutton/votebutton.component';
import { GuidelineComponent } from './_components/shared/guideline/guideline.component';
import { CommunityComponent } from './_components/community/community.component';
import { AllCommunityComponent } from './_components/community/all-community/all-community.component';
import { ViewCommunityComponent } from './_components/community/view-community/view-community.component';
import { CreateCommunityComponent } from './_components/community/create-community/create-community.component';
import { UserComponent } from './_components/user/user.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './_helper/errorinterceptor';
import { AuthGuard } from './_helper/auth.guard';
import { CreatePostComponent } from './_components/post/create-post/create-post.component';
import { ViewPostComponent } from './_components/post/view-post/view-post.component';
import { LoginComponent } from './_components/user/login/login.component';
import { RegisterComponent } from './_components/user/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './_helper/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    HomeComponent,
    SidebarComponent,
    SidebarViewComponent,
    CommentComponent,
    VotebuttonComponent,
    GuidelineComponent,
    CommunityComponent,
    AllCommunityComponent,
    ViewCommunityComponent,
    CreateCommunityComponent,
    UserComponent,
    CreatePostComponent,
    ViewPostComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
