import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertMasterComponent } from './pages/Master/alert-master/alert-master.component';
import { CheckCriteriaMasterComponent } from './pages/Master/check-criteria-master/check-criteria-master.component';
import { ClientInputMasterComponent } from './pages/Master/client-input-master/client-input-master.component';
import { DistributionListMasterComponent } from './pages/Master/distribution-list-master/distribution-list-master.component';
import { DynamicColumnMasterComponent } from './pages/Master/dynamic-column-master/dynamic-column-master.component';
import { ExcludeClientsInUploadComponent } from './pages/Master/exclude-clients-in-upload/exclude-clients-in-upload.component';
import { FamilyClientDetailsComponent } from './pages/Master/family-client-details/family-client-details.component';
import { GenericReportMasterComponent } from './pages/Master/generic-report-master/generic-report-master.component';
import { GroupMasterComponent } from './pages/Master/group-master/group-master.component';
import { HftBillingComponent } from './pages/Master/hft-billing/hft-billing.component';
import { ReferenceMasterComponent } from './pages/Master/reference-master/reference-master.component';
import { ReportMasterComponent } from './pages/Master/report-master/report-master.component';
import { TradeLevelIdentifierComponent } from './pages/Master/trade-level-identifier/trade-level-identifier.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    AlertMasterComponent,
    CheckCriteriaMasterComponent,
    ClientInputMasterComponent,
    DistributionListMasterComponent,
    DynamicColumnMasterComponent,
    ExcludeClientsInUploadComponent,
    FamilyClientDetailsComponent,
    GenericReportMasterComponent,
    GroupMasterComponent,
    HftBillingComponent,
    ReferenceMasterComponent,
    ReportMasterComponent,
    TradeLevelIdentifierComponent,
  ],
  imports: [
    BrowserAnimationsModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
