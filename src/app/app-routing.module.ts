import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { GroupMasterComponent } from './pages/Master/group-master/group-master.component';
import { DistributionListMasterComponent } from './pages/Master/distribution-list-master/distribution-list-master.component';
import { ReportMasterComponent } from './pages/Master/report-master/report-master.component';
import { FamilyClientDetailsComponent } from './pages/Master/family-client-details/family-client-details.component';
import { TradeLevelIdentifierComponent } from './pages/Master/trade-level-identifier/trade-level-identifier.component';
import { ReferenceMasterComponent } from './pages/Master/reference-master/reference-master.component';
import { DynamicColumnMasterComponent } from './pages/Master/dynamic-column-master/dynamic-column-master.component';
import { ClientInputMasterComponent } from './pages/Master/client-input-master/client-input-master.component';
import { GenericReportMasterComponent } from './pages/Master/generic-report-master/generic-report-master.component';
import { CheckCriteriaMasterComponent } from './pages/Master/check-criteria-master/check-criteria-master.component';
import { AlertMasterComponent } from './pages/Master/alert-master/alert-master.component';
import { ExcludeClientsInUploadComponent } from './pages/Master/exclude-clients-in-upload/exclude-clients-in-upload.component';
import { HftBillingComponent } from './pages/Master/hft-billing/hft-billing.component';

const routes: Routes = [

  { path: 'group-master', component: GroupMasterComponent },
  { path: 'distribution-list-master', component: DistributionListMasterComponent },
  { path: 'report-master', component: ReportMasterComponent },
  { path: 'family-client-details', component: FamilyClientDetailsComponent },
  { path: 'trade-level-identifier', component: TradeLevelIdentifierComponent },
  { path: 'reference-master', component: ReferenceMasterComponent },
  { path: 'dynamic-column-master', component: DynamicColumnMasterComponent },
  { path: 'client-input-master', component: ClientInputMasterComponent },
  { path: 'generic-report-master', component: GenericReportMasterComponent },
  { path: 'check-criteria-master', component: CheckCriteriaMasterComponent },
  { path: 'alert-master', component: AlertMasterComponent },
  { path: 'exclude-clients-in-upload', component: ExcludeClientsInUploadComponent },
  { path: 'hft-billing', component: HftBillingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
