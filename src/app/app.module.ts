import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./_components/header/header.component";
import { HomeComponent } from "./_components/shared/home/home.component";
import { SidebarComponent } from "./_components/shared/sidebar/sidebar.component";
import { SidebarViewComponent } from "./_components/shared/sidebar-view/sidebar-view.component";
import { CommentComponent } from "./_components/shared/comment/comment.component";
import { VotebuttonComponent } from "./_components/shared/votebutton/votebutton.component";
import { GuidelineComponent } from "./_components/shared/guideline/guideline.component";
import { CommunityComponent } from "./_components/community/community.component";
import { AllCommunityComponent } from "./_components/community/all-community/all-community.component";
import { ViewCommunityComponent } from "./_components/community/view-community/view-community.component";
import { CreateCommunityComponent } from "./_components/community/create-community/create-community.component";
import { UserComponent } from "./_components/user/user.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorInterceptor } from "./_helper/errorinterceptor";
import { AuthGuard } from "./_helper/auth.guard";
import { CreatePostComponent } from "./_components/posts/create-post/create-post.component";
import { ViewPostComponent } from "./_components/posts/view-post/view-post.component";
import { LoginComponent } from "./_components/user/login/login.component";
import { RegisterComponent } from "./_components/user/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PostComponent } from "./_components/shared/post/post.component";
import { DashboardComponent } from "./_components/Admin/dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { EditorModule } from "@tinymce/tinymce-angular";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    RegisterComponent,
    PostComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    EditorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
