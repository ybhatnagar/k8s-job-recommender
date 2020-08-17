import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClusterListComponent } from "./modules/cluster-list/cluster-list.component";
import { RecommendationsComponent } from "./modules/cluster-list/recommendations/recommendations.component";
import { MaintenanceComponent } from "./modules/cluster-list/maintenance/maintenance.component";

import { ConfigureComponent } from "./modules/configure/configure.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "/clusters",
        pathMatch: "full"
      },
      {
        path: "clusters",
        component: ClusterListComponent
      },
      {
        path: "configure",
        component: ConfigureComponent
      },
      {
        path: "recommendations",
        component: RecommendationsComponent
      },
      {
        path: "maintenance",
        component: MaintenanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
