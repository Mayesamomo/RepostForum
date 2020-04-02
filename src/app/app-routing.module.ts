import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/shared/home/home.component';
import { UserComponent } from './_components/user/user.component';
import { AllCommunityComponent } from './_components/community/all-community/all-community.component';
import { ViewCommunityComponent } from './_components/community/view-community/view-community.component';
import { CreateCommunityComponent } from './_components/community/create-community/create-community.component';
import { CreatePostComponent } from './_components/posts/create-post/create-post.component';
import { ViewPostComponent } from './_components/posts/view-post/view-post.component';
import { LoginComponent } from './_components/user/login/login.component';
import { RegisterComponent } from './_components/user/register/register.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ListPostsComponent } from './Admin/list-posts/list-posts.component';
import { ListUsersComponent } from './Admin/list-users/list-users.component';
import { ListCommentsComponent } from './Admin/list-comments/list-comments.component';
import { ListCommunityComponent } from './Admin/list-community/list-community.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'communities', component: AllCommunityComponent },
  { path: 'view-community', component: ViewCommunityComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-community', component: CreateCommunityComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'view-community/:id', component: ViewCommunityComponent },
  { path: 'user/:name', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list-posts', component: ListPostsComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'list-comments', component: ListCommentsComponent },
  { path: 'list-community', component: ListCommunityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
