import { NgModule } from '@angular/core';

import { RoomServiceRoutingModule } from './room-service-routing.module';
import { SharedModule } from '@shared/shared.module';
import { RoomListComponent } from './room-list/room-list.component';
import { OtherServiceComponent } from './other-service/other-service.component';


@NgModule({
  declarations: [
    RoomListComponent,
    OtherServiceComponent
  ],
  imports: [
    SharedModule,
    RoomServiceRoutingModule
  ]
})
export class RoomServiceModule { }
