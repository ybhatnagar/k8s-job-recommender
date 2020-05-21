// Angular Imports
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";
import { ConfigureComponent } from "../configure/configure.component";
import { SharedModule } from "../shared/shared.modules";
// This Module's Components
import { ClusterListComponent } from "./cluster-list.component";
import { ClusterListService } from "./cluster-list.service";
import { ConnectionChartComponent } from "./connection-chart/connection-chart.component";
import { LatencyChartComponent } from "./latency-chart/latency-chart.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import {MaintenanceComponent } from "./maintenance/maintenance.component";
@NgModule({
  imports: [FormsModule, SharedModule, ClarityModule, CommonModule],
  declarations: [
    ClusterListComponent,
    ConfigureComponent,
    RecommendationsComponent,
    MaintenanceComponent,
    ConnectionChartComponent,
    LatencyChartComponent
  ],
  exports: [
    ClusterListComponent,
    ConfigureComponent,
    MaintenanceComponent,
    RecommendationsComponent,
    ConnectionChartComponent,
    LatencyChartComponent
  ],
  providers: [ClusterListService]
})
export class ClusterListModule {}
