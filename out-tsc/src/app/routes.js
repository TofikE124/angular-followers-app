import { NotFoundComponent } from './not-found/not-found.component';
import { FollowersComponent } from './followers-component/followers.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
const routeConfig = [
    { path: '', component: HomeComponent },
    { path: 'followers/:id/:username', component: ProfileComponent },
    { path: 'followers', component: FollowersComponent },
    { path: 'posts', component: PostsComponent },
    {
        path: '**',
        component: NotFoundComponent,
    },
    // { path: '', component: ArchivesComponent },
    // { path: 'archives/:year/:month', component: ArchiveComponent },
    // { path: '**', component: NotFoundComponent },
];
export default routeConfig;
//# sourceMappingURL=routes.js.map