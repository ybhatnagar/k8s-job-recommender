// Angular Imports
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";
import { SharedModule } from "../shared/shared.modules";
// This Module's Components
import { ConfigureComponent } from "./configure.component";

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    ClarityModule,
    CommonModule,
    ConfigureComponent
  ],
  declarations: [ConfigureComponent],
  exports: [ConfigureComponent],
  providers: []
})
export class ClusterListModule {}
